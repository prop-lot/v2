import Router from "next/router";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import { useAccount } from "wagmi";
import { useMutation, useLazyQuery, useQuery } from "@apollo/client";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { SUBMIT_IDEA_MUTATION } from "@/graphql/queries/propLotMutations";
import { DELEGATED_VOTES_BY_OWNER_SUB } from "@/graphql/subgraph";
import {
  IdeaExpiryOption,
  TagType,
} from "@/graphql/types/__generated__/apiTypes";
import { submitIdea } from "@/graphql/types/__generated__/submitIdea";
import { useApiError } from "@/hooks/useApiError";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { GetServerSidePropsContext } from "next";
import prisma from "@/lib/prisma";
import { Community } from "@prisma/client";
import { SUPPORTED_SUBDOMAINS } from "@/utils/supportedTokenUtils";
import getCommunityByDomain from "@/utils/communityByDomain";
import { GET_TAGS } from "@/graphql/queries/tagsQuery";

enum FORM_VALIDATION {
  TITLE_MAX = 50,
  TITLE_MIN = 5,
  TLDR_MAX = 240,
  TLDR_MIN = 5,
  DESCRIPTION_MAX = 1080,
  DESCRIPTION_MIN = 5,
}

const EXPIRY_OPTIONS = [
  {
    value: IdeaExpiryOption.SEVEN_DAYS,
    label: "7 days",
    description: "Fast turnaround for straightforward projects",
  },
  {
    value: IdeaExpiryOption.FOURTEEN_DAYS,
    label: "14 days",
    description: "Workshop and craft the perfect execution",
  },
  {
    value: IdeaExpiryOption.TWENTY_EIGHT_DAYS,
    label: "28 days",
    description: "Coordinate around large, ambitious goals",
  },
];

const MarkdownModalExample = ({
  showMarkdownModal,
  handleCloseMarkdownModal,
}: {
  showMarkdownModal: boolean;
  handleCloseMarkdownModal: () => void;
}) => (
  <Modal show={showMarkdownModal} onHide={handleCloseMarkdownModal} size="xl">
    <Modal.Header closeButton>
      <Modal.Title>Markdown Syntax</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col col-span-1">
          <div className="flex flex-row justify-between">
            <span># Header</span>
            <span>heading 1</span>
          </div>
          <div className="flex flex-row justify-between">
            <span>## Header</span>
            <span>heading 2</span>
          </div>
          <div className="flex flex-row justify-between">
            <span>### Header</span>
            <span>heading 3</span>
          </div>
        </div>
        <div className="flex flex-col col-span-1">
          <div className="flex flex-row justify-between">
            <span className="font-bold">*</span>
            <span>bullet point</span>
          </div>
          <div className="flex flex-row justify-between">
            <span>-</span>
            <span>bullet point</span>
          </div>
          <div className="flex flex-row justify-between">
            <span>1.</span>
            <span>list items</span>
          </div>
          <div className="flex flex-row justify-between">
            <span>Image</span>
            <span>![alt-text](image.jpg)</span>
          </div>
          <div className="flex flex-row justify-between">
            <span>Link</span>
            <span>[title](https://www.example.com)</span>
          </div>
        </div>
        <div className="flex flex-col col-span-1">
          <div className="flex flex-row justify-between">
            <span className="font-bold">**bold**</span>
            <span>bold text</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="italic">_italic_</span>
            <span>italic text</span>
          </div>
        </div>
      </div>
    </Modal.Body>
  </Modal>
);

const CreateIdeaPage = ({ community }: { community: Community }) => {
  const { address } = useAccount();
  const { setError, error: errorModalVisible } = useApiError();
  const { isLoggedIn, triggerSignIn } = useAuth();

  const { data: tagsResponse } = useQuery(GET_TAGS, {
    context: {
      clientName: "PropLot",
    },
  });

  const [getDelegatedVotes, { data: getDelegatedVotesData }] = useLazyQuery(
    DELEGATED_VOTES_BY_OWNER_SUB,
    {
      context: {
        clientName: community?.uname as SUPPORTED_SUBDOMAINS,
      },
    }
  );

  useEffect(() => {
    if (address) {
      getDelegatedVotes({
        variables: {
          id: address.toLowerCase(),
        },
      });
    }
  }, [address, getDelegatedVotes]);

  const [submitIdeaMutation, { error, loading, data }] =
    useMutation<submitIdea>(SUBMIT_IDEA_MUTATION, {
      context: {
        clientName: "PropLot",
      },
    });

  useEffect(() => {
    if (error && !errorModalVisible) {
      setError({
        message: error?.message || "Failed to create idea",
        status: 500,
      });
    }
  }, [error, errorModalVisible, setError]);

  useEffect(() => {
    if (data?.submitIdea?.id) {
      Router.push(`/ideas/${data.submitIdea.id}`);
    }
  }, [data]);

  const [title, setTitle] = useState<string>("");
  const [tldr, setTldr] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [showMarkdownModal, setShowMarkdownModal] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState([] as string[]);
  const [selectedExpiryOption, setSelectedExpiryOption] = useState(
    EXPIRY_OPTIONS[0].value
  );
  const [image, setImage] = useState<File | null>(null);

  const [descriptionTab, setDescriptionTab] = useState<"WRITE" | "PREVIEW">(
    "WRITE"
  );

  const titleValid =
    title.length <= FORM_VALIDATION.TITLE_MAX &&
    title.length >= FORM_VALIDATION.TITLE_MIN;
  const tldrValid =
    tldr.length <= FORM_VALIDATION.TLDR_MAX &&
    tldr.length >= FORM_VALIDATION.TLDR_MIN;
  const descriptionValid =
    description.length <= FORM_VALIDATION.DESCRIPTION_MAX &&
    description.length >= FORM_VALIDATION.DESCRIPTION_MIN;
  const formValid = titleValid && tldrValid && descriptionValid;

  const handleCloseMarkdownModal = () => setShowMarkdownModal(false);
  const handleShowMarkdownModal = () => setShowMarkdownModal(true);

  const handleSelect = (e: any) => {
    setDescriptionTab(e);
  };

  const handleTagChange = (tagName: string) => {
    if (selectedTags.includes(tagName)) {
      setSelectedTags(selectedTags.filter((t) => t !== tagName));
    } else {
      setSelectedTags([...selectedTags, tagName]);
    }
  };

  const handleExpiryOptionChange = (selected: IdeaExpiryOption) => {
    setSelectedExpiryOption(selected);
  };

  return (
    <Container fluid={"lg"} className="mt-xl mb-xl">
      <Row className="align-items-center">
        <Col lg={10} className="mx-auto">
          <section>
            <MarkdownModalExample
              showMarkdownModal={showMarkdownModal}
              handleCloseMarkdownModal={handleCloseMarkdownModal}
            />

            <Row className="gap-md mb-lg">
              <div className="justify-start items-center gap-sm inline-flex">
                <Link
                  className="cursor-pointer text-slate flex flex-row items-center"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[24px] h-[24px] mr-sm cursor-pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="text-slate text-base">Back</span>
                </Link>
              </div>
              <h1 className="self-stretch text-black text-xl font-bold">
                New idea
              </h1>
              <p className="self-stretch text-black text-base font-semibold">
                Have an idea for Nouns that you’d like to see built? Great! Fill
                in the form below and start receiving proposals from builders.
              </p>
            </Row>

            <form
              id="submit-form"
              onSubmit={async (event) => {
                event.preventDefault();
                // Generate the pre-signed URL
                type PresignedPostData = {
                  url: string;
                  fields: {
                    [key: string]: string;
                  };
                };

                let presignedPostData: PresignedPostData;
                const target = event.target as HTMLFormElement;
                const tags = selectedTags as TagType[];

                if (!formValid || loading) {
                  return;
                }

                if (image) {
                  const fileName = image.name.trim().replace(/\s+/g, '-');
                  const fileType = image.type;

                  // Attempt to get the presigned URL
                  try {
                    const response = await fetch(
                      "/api/idea-image-upload",
                      {
                        method: "POST",
                        body: JSON.stringify({
                          fileName,
                          fileType,
                        }),
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }
                    );

                    presignedPostData = await response.json();
                  } catch (err) {
                    console.log("Error while getting presigned URL:", err);
                    return;
                  }

                  // Upload the file to S3 using the presigned URL
                  const formData = new FormData();
                  Object.entries(presignedPostData.fields).forEach(
                    ([key, value]) => {
                      formData.append(key, value);
                    }
                  );
                  formData.append("file", image);

                  try {
                    await fetch(presignedPostData.url, {
                      method: "POST",
                      body: formData,
                    });
                  } catch (err) {
                    console.log("Error while uploading to S3:", err);
                    return;
                  }
                }

                const getIdeaVariables = () => ({
                  variables: {
                    options: {
                      title,
                      tldr,
                      description,
                      tags,
                      expiryOption: selectedExpiryOption,
                      ...(image ? {headerImage: presignedPostData.fields.key} : {}),
                    },
                  },
                });

                if (!isLoggedIn) {
                  try {
                    const { success } = await triggerSignIn();
                    if (success) {
                      submitIdeaMutation(getIdeaVariables());
                    } else {
                      setError({ message: "Failed to sign in", status: 401 });
                    }
                  } catch (e) {
                    console.log(e);
                    setError({ message: "Failed to sign in", status: 401 });
                  }
                } else {
                  submitIdeaMutation(getIdeaVariables());
                }
              }}
            >
              <Row className="gap-lg">
                <h2 className="self-stretch text-black text-lg font-bold">
                  Idea details
                </h2>

                <div className="flex flex-col gap-md">
                  <div className="flex flex-col justify-between w-full items-start">
                    <p className="font-bold text-md mb-sm">
                      Header image (optional)
                    </p>
                  </div>
                  <ImageUploader setImage={setImage} selectedImage={image} />
                </div>

                <div className="flex flex-col gap-md">
                  <div className="flex flex-col justify-between w-full items-start">
                    <p className="font-bold text-md mb-sm">Tags</p>
                    <span className="text-xs">
                      Apply the tags that relate to your idea. Click to apply.
                    </span>
                  </div>

                  <div className="flex flex-row flex-wrap gap-md">
                    {tagsResponse?.tags?.map((tag: any) => {
                      return (
                        <div
                          className="flex flex-col items-center"
                          key={tag.label}
                        >
                          <button
                            type="button"
                            onClick={() => handleTagChange(tag.type)}
                            className={`cursor-pointer flex px-md py-sm justify-center items-center space-x-sm !rounded-md ${
                              !selectedTags.includes(tag.type)
                                ? "border-black bg-grey hover:bg-light-green hover:text-white actve:bg-light-green"
                                : "border-light-green bg-light-green text-white hover:bg-light-green actve:bg-light-green"
                            }`}
                          >
                            {tag.label}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between w-full items-center">
                    <label className="font-bold text-md mb-sm">Title</label>
                    <span
                      className={`${
                        !titleValid ? "text-[#E40535]" : "text-dark-grey"
                      }`}
                    >
                      {title.length}/{FORM_VALIDATION.TITLE_MAX}
                    </span>
                  </div>
                  <input
                    maxLength={FORM_VALIDATION.TITLE_MAX}
                    minLength={FORM_VALIDATION.TITLE_MIN}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    name="title"
                    className="border rounded-lg p-sm"
                    placeholder="Give your idea a name..."
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between w-full items-center">
                    <label className="font-bold text-md mb-sm">tl;dr</label>
                    <span
                      className={`${
                        !tldrValid ? "text-[#E40535]" : "text-dark-grey"
                      }`}
                    >
                      {tldr.length}/{FORM_VALIDATION.TLDR_MAX}
                    </span>
                  </div>
                  <textarea
                    maxLength={FORM_VALIDATION.TLDR_MAX}
                    minLength={FORM_VALIDATION.TLDR_MIN}
                    value={tldr}
                    onChange={(e) => setTldr(e.target.value)}
                    name="tldr"
                    className="border rounded-lg p-sm min-h-[120px]"
                    placeholder="In the simplest language possible, describe your idea in a few sentences..."
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between w-full items-center">
                    <div className="space-x-sm">
                      <label className="font-bold text-md mb-sm">
                        Description
                      </label>
                      <span
                        className="text-sm text-slate cursor-pointer"
                        onClick={handleShowMarkdownModal}
                      >
                        Markdown supported
                      </span>
                    </div>
                    <span
                      className={`${
                        !descriptionValid ? "text-[#E40535]" : "text-dark-grey"
                      }`}
                    >
                      {description.length}/{FORM_VALIDATION.DESCRIPTION_MAX}
                    </span>
                  </div>
                  <Nav
                    variant="tabs"
                    defaultActiveKey="WRITE"
                    className="mb-sm"
                    onSelect={handleSelect}
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="WRITE">Write</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="PREVIEW">Preview</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  {descriptionTab === "WRITE" ? (
                    <textarea
                      maxLength={FORM_VALIDATION.DESCRIPTION_MAX}
                      minLength={FORM_VALIDATION.DESCRIPTION_MIN}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      name="description"
                      className="border rounded-lg p-sm min-h-[240px]"
                      placeholder="Describe your idea in full..."
                    />
                  ) : (
                    <div
                      className="border rounded-lg p-sm min-h-[240px] prose-base"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(marked.parse(description), {
                          ADD_ATTR: ["target"],
                        }),
                      }}
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between w-full items-center">
                    <label className="font-bold text-md mb-sm">
                      Active Period
                    </label>
                  </div>

                  <div className="flex flex-col gap-md sm:flex-row">
                    {EXPIRY_OPTIONS.map((option) => (
                      <div
                        key={option.value}
                        onClick={() => handleExpiryOptionChange(option.value)}
                        className={`flex-col flex-1 cursor-pointer justify-start items-start inline-flex rounded-xl border-2 ${
                          selectedExpiryOption === option.value
                            ? "border-blue-600 bg-white"
                            : "border-grey"
                        } px-lg py-md`}
                      >
                        <div className="flex-col justify-start items-start w-full gap-sm inline-flex">
                          <div className="self-stretch justify-between items-center gap-xs inline-flex">
                            <div className="text-black text-base font-semibold">
                              {option.label}
                            </div>
                            {selectedExpiryOption === option.value ? (
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="Radio">
                                  <rect
                                    width="18"
                                    height="18"
                                    rx="9"
                                    fill="#2173DF"
                                  />
                                  <path
                                    id="Check"
                                    d="M5.2998 10.1001L8.2998 12.1001L12.7998 6.1001"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                              </svg>
                            ) : (
                              <svg
                                width="19"
                                height="24"
                                viewBox="0 0 19 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="1.16699"
                                  y="3.5"
                                  width="17"
                                  height="17"
                                  rx="8.5"
                                  fill="white"
                                />
                                <rect
                                  x="1.16699"
                                  y="3.5"
                                  width="17"
                                  height="17"
                                  rx="8.5"
                                  stroke="#8496AE"
                                />
                              </svg>
                            )}
                          </div>
                          <div className="self-stretch text-slate text-sm font-normal">
                            {option.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className={`${
                      formValid
                        ? "!bg-[#2B83F6] !text-white"
                        : "!bg-[#F4F4F8] !text-[#E2E3E8]"
                    } !border-none !text-base flex-1 sm:flex-none !rounded-[10px] !font-inter !font-bold !pt-sm !pb-sm !pl-md !pr-md`}
                  >
                    Submit
                  </button>
                </div>
              </Row>
            </form>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

function ImageUploader({
  setImage,
  selectedImage,
}: {
  setImage: (image: File | null) => void;
  selectedImage: File | null;
}) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const triggerFileInput = () => {
    if (fileInputRef?.current) {
      fileInputRef.current.click();
    }
  };

  const processFile = (file: File) => {
    if (file) {
      setImage(file);
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    processFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    processFile(file);
  };

  const removeImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  return (
    <div
      className="flex flex-col max-w-full h-[200px] justify-center items-center px-md rounded-md !border-dashed border border-grey bg-white"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {selectedImage ? (
        <div className="relative w-full h-full">
          <img
            src={previewUrl}
            alt="Selected"
            className="object-cover w-full h-full rounded-md"
          />
          <button
            type="button"
            className="absolute top-0 right-0 p-1 bg-grey bg-opacity-50 rounded-full"
            onClick={removeImage}
          >
            <Image
              src="/bin-icon.svg"
              alt="Remove image"
              width="16"
              height="16"
            />
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="text-slate text-base text-center">
            Drag and drop here or
          </div>
          <div className="flex flex-col justify-start items-start mt-md">
            <div className="flex flex-row justify-center items-center">
              <div className="flex flex-col-reverse sm:flex-row justify-between items-end sm:items-center">
                <label className="cursor-pointer" onClick={triggerFileInput}>
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <button
                    type="button"
                    className={`!bg-white !text-light-green !border-grey border-[1px] !text-sm !rounded-md !font-inter !font-semibold !pt-sm !pb-sm !pl-lg !pr-lg self-center flex gap-sm`}
                  >
                    <Image
                      src="/upload.svg"
                      alt="upload icon."
                      width="16"
                      height="16"
                    />{" "}
                    Choose file
                  </button>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { communityDomain } = getCommunityByDomain(context.req);

  if (!communityDomain) {
    return {
      notFound: true,
    };
  }

  const community = await prisma.community.findFirst({
    where: {
      uname: communityDomain,
    },
  });

  if (!community) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      community: JSON.parse(JSON.stringify(community)),
    },
  };
}

export default CreateIdeaPage;

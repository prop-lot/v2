import { withIronSessionApiRoute } from "iron-session/next";
import { S3Client } from "@aws-sdk/client-s3";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { NextApiRequest, NextApiResponse } from "next";
import { ironOptions } from "@/lib/config";

const s3Client = new S3Client();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const fileName = req.body.fileName;
    const fileType = req.body.fileType;

    if (!fileName || !fileType) {
      return res
        .status(400)
        .json({ error: "fileName and fileType are required" });
    }

    const params = {
      Bucket: process.env.S3_BUCKET_NAME!,
      Key: `ideas/${Date.now()}_${fileName}`,
      Conditions: [{ "Content-Type": fileType }],
      Fields: {
        "Content-Type": fileType,
      },
      Expires: 60, // Expires in 60 seconds
    };

    try {
      const { url, fields } = await createPresignedPost(s3Client, params);
      res.status(200).json({ url, fields });
    } catch (error) {
      console.error("Error creating presigned post: ", error);
      res.status(500).json({ error: "Failed to create a pre-signed URL" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};

export default withIronSessionApiRoute(handler, ironOptions);

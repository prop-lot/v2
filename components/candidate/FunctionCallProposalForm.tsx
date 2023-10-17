import { useState } from "react";
import ErrorLabel from "@/components/ErrorLabel";

enum ProposalType {
  STREAM_FUNDS = "Stream funds",
  TRANSFER_FUNDS = "Transfer funds",
  FUNCTION_CALL = "Function call",
}

const FunctionCallProposalForm = ({
  register,
  setValue,
  errors,
}: {
  register: any;
  setValue: any;
  errors: any;
}) => {
  const [functions, setFunctions] = useState<any[]>([]);
  const [selectedFunction, setSelectedFunction] = useState<any>(null);
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result;
      const json = JSON.parse(text as string);

      setValue("abi", JSON.stringify(json));
      parseABI(json);
    };
    reader.readAsText(file);
  };

  const parseABI = (abi: any) => {
    const functions = abi.filter((item: any) => item.type === "function");
    setFunctions(functions);
  };

  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Function Call</h2>
      <div className="flex flex-col my-4">
        <div className="flex justify-between w-full items-center">
          <label className="font-bold mb-2">Contract Address</label>
        </div>
        <input
          key="function-call-contract-address"
          {...register("contractAddress", { required: true })}
          type="text"
          className="border rounded-lg p-2"
        />
        {errors.contractAddresss && (
          <ErrorLabel message="Contract address is required." />
        )}
      </div>
      <div className="flex flex-col my-4">
        <div className="flex justify-between w-full items-center">
          <label className="font-bold mb-2">Included ETH</label>
        </div>
        <input
          {...register("amount", { required: true })}
          type="number"
          className="border rounded-lg p-2"
        />
        {errors.amount && (
          <ErrorLabel message="Amount is required. (Can be 0)" />
        )}
      </div>
      <div className="flex flex-col my-4">
        <label className="font-bold mb-2">Select contract function</label>
        <select
          {...register("function", { required: true })}
          className="w-full border rounded p-2"
          onChange={(e) => {
            const func = functions.find((func) => func.name === e.target.value);
            setSelectedFunction(func);
          }}
        >
          {functions.map((func) => (
            <option key={func.name} value={func.name}>
              {func.name}
            </option>
          ))}
        </select>
        {errors.function && <ErrorLabel message="Function is required." />}
      </div>
      {selectedFunction && (
        <div className="flex flex-col my-4">
          <label className="font-bold mb-2">Function arguments</label>
          {selectedFunction?.inputs.map((input: any, index: number) => (
            <span key={`args-${index}`} className="flex flex-col">
              <label>{input.name}</label>
              <input
                key={input.name}
                {...register(`args.${index}`)}
                type="text"
                className="border rounded-lg p-2 my-2"
              />
            </span>
          ))}
          {selectedFunction?.inputs.length === 0 && (
            <div>No arguments for this function</div>
          )}
        </div>
      )}
      <div>
        <label className="font-bold mb-2">Import ABI</label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 py-2 px-2"
          id="file_input"
          type="file"
          onChange={handleFileChange}
        />
      </div>
      <input
        type="hidden"
        {...register("type")}
        value={ProposalType.FUNCTION_CALL}
      />
    </div>
  );
};

export default FunctionCallProposalForm;

import { SupportedCurrency, ProposalType } from "../../lib/types";

const StreamFundsProposalForm = ({ register }: { register: any }) => {
  return (
    <div>
      <div>
        <h2 className="font-bold text-xl mb-4">Stream Funds</h2>
        <div className="flex justify-between w-full items-center">
          <label className="font-bold mb-2">Currency</label>
        </div>
        <select {...register("currency")} className="w-full border rounded p-2">
          <option value={SupportedCurrency.WETH}>WETH</option>
          <option value={SupportedCurrency.USDC}>USDC</option>
        </select>
        <div className="flex flex-col my-4">
          <div className="flex justify-between w-full items-center">
            <label className="font-bold mb-2">Recipient</label>
          </div>
          <input
            key="stream-funds-recipient"
            {...register("recipient")}
            type="text"
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col my-4">
          <div className="flex justify-between w-full items-center">
            <label className="font-bold mb-2">Amount</label>
          </div>
          <input
            {...register("amount")}
            type="text"
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col my-4">
          <div className="flex justify-between w-full items-center">
            <label className="font-bold mb-2">Start</label>
          </div>
          <input
            {...register("start")}
            type="date"
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col my-4">
          <div className="flex justify-between w-full items-center">
            <label className="font-bold mb-2">End</label>
          </div>
          <input
            {...register("end")}
            type="date"
            className="border rounded-lg p-2"
          />
        </div>

        <input
          type="hidden"
          {...register("type")}
          value={ProposalType.STREAM_FUNDS}
        />
      </div>
    </div>
  );
};

export default StreamFundsProposalForm;

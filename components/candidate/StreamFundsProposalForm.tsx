import { SupportedCurrency, ProposalType } from "../../lib/types";
import ErrorLabel from "@/components/ErrorLabel";

const StreamFundsProposalForm = ({
  register,
  errors,
}: {
  register: any;
  errors: any;
}) => {
  return (
    <div>
      <div>
        <h2 className="font-bold text-xl mb-4">Stream Funds</h2>
        <div className="flex justify-between w-full items-center">
          <label className="font-bold mb-2">Currency</label>
        </div>
        <select
          {...register("currency", { required: true })}
          className="w-full border rounded p-2"
        >
          <option value={SupportedCurrency.WETH}>WETH</option>
          <option value={SupportedCurrency.USDC}>USDC</option>
        </select>
        <div className="flex flex-col my-4">
          <div className="flex justify-between w-full items-center">
            <label className="font-bold mb-2">Recipient</label>
          </div>
          <input
            key="stream-funds-recipient"
            {...register("recipient", { required: true })}
            type="text"
            className="border rounded-lg p-2"
          />
          {errors.recipient && <ErrorLabel message="Recipient is required." />}
        </div>
        <div className="flex flex-col my-4">
          <div className="flex justify-between w-full items-center">
            <label className="font-bold mb-2">Amount</label>
          </div>
          <input
            {...register("amount", { required: true })}
            type="text"
            className="border rounded-lg p-2"
          />
          {errors.amount && <ErrorLabel message="Amount is required." />}
        </div>
        <div className="flex flex-col my-4">
          <div className="flex justify-between w-full items-center">
            <label className="font-bold mb-2">Start</label>
          </div>
          <input
            {...register("start", { required: true })}
            type="date"
            className="border rounded-lg p-2"
          />
          {errors.start && <ErrorLabel message="Start date is required." />}
        </div>
        <div className="flex flex-col my-4">
          <div className="flex justify-between w-full items-center">
            <label className="font-bold mb-2">End</label>
          </div>
          <input
            {...register("end", { required: true })}
            type="date"
            className="border rounded-lg p-2"
          />
          {errors.end && <ErrorLabel message="End date is required." />}
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

enum ProposalType {
  STREAM_FUNDS = "Stream funds",
  TRANSFER_FUNDS = "Transfer funds",
  FUNCTION_CALL = "Function call",
}

const TransferFundsProposalForm = ({ register }: { register: any }) => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Transfer Funds</h2>
      <div className="flex flex-col my-4">
        <div className="flex justify-between w-full items-center">
          <label className="font-bold mb-2">Currency</label>
        </div>
        {/* might be better if select option values are the contract address */}
        <select {...register("currency")} className="w-full border rounded p-2">
          <option value="USDC">USDC</option>
          <option value="ETH">ETH</option>
          <option value="STETH">Lido Staked ETH</option>
        </select>
      </div>
      <div className="flex flex-col my-4">
        <div className="flex justify-between w-full items-center">
          <label className="font-bold mb-2">Recipient</label>
        </div>
        <input
          key="transfer-funds-recipient"
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
      <input
        type="hidden"
        {...register("type")}
        value={ProposalType.TRANSFER_FUNDS}
      />
    </div>
  );
};

export default TransferFundsProposalForm;

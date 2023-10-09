import { SupportedCurrency } from "../lib/types";
import { utils } from "ethers";

export function formatTokenAmount(
  amount?: string,
  currency?: SupportedCurrency
) {
  const amt = amount ?? "0";
  switch (currency) {
    case SupportedCurrency.USDC:
      return Math.round(parseFloat(amt) * 1_000_000).toString();
    case SupportedCurrency.WETH:
    case SupportedCurrency.STETH:
      return utils.parseEther(amt).toString();
    default:
      return amt;
  }
}

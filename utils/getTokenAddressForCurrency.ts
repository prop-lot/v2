import config from "../lib/config";
import { SupportedCurrency } from "../lib/types";

export function getTokenAddressForCurrency(currency?: SupportedCurrency) {
  switch (currency) {
    case SupportedCurrency.USDC:
      return config.addresses.usdcToken;
    case SupportedCurrency.WETH:
      return config.addresses.weth;
    case SupportedCurrency.STETH:
      return config.addresses.steth;
    default:
      return "";
  }
}

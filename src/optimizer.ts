import { scanMarkets } from "./scanner";
// Auto-switch between Morpho markets for best yield
export async function optimizePosition(wallet: string, asset: string, amount: bigint) {
  const markets = await scanMarkets([]);
  const best = markets[0];
  if (!best) return;
  console.log(`Best market for ${asset}: ${best.id} @ ${best.supplyAPY.toFixed(2)}% APY`);
  return best;
}
import { ethers } from "ethers";

const MORPHO_BLUE = "0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb";
const MORPHO_ABI = [
  "function market(bytes32 id) view returns (uint128 totalSupplyAssets, uint128 totalSupplyShares, uint128 totalBorrowAssets, uint128 totalBorrowShares, uint128 lastUpdate, uint128 fee)",
  "function idToMarketParams(bytes32 id) view returns (address loanToken, address collateralToken, address oracle, address irm, uint256 lltv)"
];

interface MarketData {
  id: string;
  loanToken: string;
  collateralToken: string;
  supplyAPY: number;
  borrowAPY: number;
  utilization: number;
}

async function scanMarkets(marketIds: string[]): Promise<MarketData[]> {
  const provider = new ethers.JsonRpcProvider(process.env.BASE_RPC_URL || "https://mainnet.base.org");
  const morpho = new ethers.Contract(MORPHO_BLUE, MORPHO_ABI, provider);
  const results: MarketData[] = [];

  for (const id of marketIds) {
    const [market, params] = await Promise.all([
      morpho.market(id),
      morpho.idToMarketParams(id)
    ]);
    const utilization = Number(market.totalBorrowAssets) / Number(market.totalSupplyAssets);
    results.push({
      id,
      loanToken: params.loanToken,
      collateralToken: params.collateralToken,
      supplyAPY: utilization * 0.8 * 100, // simplified
      borrowAPY: utilization * 100,
      utilization: utilization * 100
    });
  }
  return results.sort((a, b) => b.supplyAPY - a.supplyAPY);
}

export { scanMarkets };

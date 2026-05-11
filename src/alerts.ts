import https from "https";
export async function sendTelegramAlert(token: string, chatId: string, msg: string) {
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(msg)}`;
  return new Promise((res, rej) => https.get(url, r => res(r)).on("error", rej));
}
export function formatRateAlert(market: string, oldApy: number, newApy: number) {
  const diff = newApy - oldApy;
  return `📊 Morpho rate change on Base\nMarket: ${market}\nOld APY: ${oldApy.toFixed(2)}%\nNew APY: ${newApy.toFixed(2)}%\nDelta: ${diff > 0 ? "+" : ""}${diff.toFixed(2)}%`;
}
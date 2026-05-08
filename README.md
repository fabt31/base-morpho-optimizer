# base-morpho-optimizer

> Morpho Blue lending optimizer for Base L2

Automatically find and switch to the best Morpho Blue lending markets on Base to maximize your yield. Supports USDC, WETH, cbETH, and more collateral assets.

## Features

- 🔍 Market scanner across all Morpho Blue vaults on Base
- 💰 APY comparison dashboard (supply vs borrow rates)
- 🤖 Auto-rebalance between markets when rate differential > threshold
- 📊 Historical rate charts per market
- ⚡ Gas-optimized batch operations
- 🔔 Rate alert notifications via Telegram/Discord webhook

## Installation

```bash
git clone https://github.com/fabt31/base-morpho-optimizer
cd base-morpho-optimizer
npm install
cp .env.example .env
```

## Usage

```bash
# Scan all markets and show best rates
npm run scan

# Auto-optimize your position
npm run optimize -- --wallet 0xYourAddress --asset USDC

# Monitor rates (continuous)
npm run monitor
```

## Supported Markets (Base)

| Market | Collateral | Loan | LLTV |
|--------|-----------|------|------|
| WETH/USDC | WETH | USDC | 86% |
| cbETH/USDC | cbETH | USDC | 86% |
| wstETH/USDC | wstETH | USDC | 86% |
| USDC/WETH | USDC | WETH | 91.5% |

## Morpho Blue on Base

- **Morpho Blue**: `0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb`
- **MetaMorpho Factory**: `0xA9c3D3a366466Fa809d1Ae982Fb2c46E5fC41101`

## License

MIT

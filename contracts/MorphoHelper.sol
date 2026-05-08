// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IMorphoBlue {
    struct MarketParams {
        address loanToken;
        address collateralToken;
        address oracle;
        address irm;
        uint256 lltv;
    }
    function supply(MarketParams memory marketParams, uint256 assets, uint256 shares, address onBehalf, bytes memory data) external returns (uint256, uint256);
    function withdraw(MarketParams memory marketParams, uint256 assets, uint256 shares, address onBehalf, address receiver) external returns (uint256, uint256);
}

contract MorphoHelper {
    IMorphoBlue public constant MORPHO = IMorphoBlue(0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb);

    function supplyToMarket(
        address loanToken,
        address collateralToken,
        address oracle,
        address irm,
        uint256 lltv,
        uint256 assets
    ) external {
        IMorphoBlue.MarketParams memory params = IMorphoBlue.MarketParams({
            loanToken: loanToken,
            collateralToken: collateralToken,
            oracle: oracle,
            irm: irm,
            lltv: lltv
        });
        IERC20(loanToken).transferFrom(msg.sender, address(this), assets);
        IERC20(loanToken).approve(address(MORPHO), assets);
        MORPHO.supply(params, assets, 0, msg.sender, "");
    }
}

interface IERC20 {
    function transferFrom(address, address, uint256) external returns (bool);
    function approve(address, uint256) external returns (bool);
}

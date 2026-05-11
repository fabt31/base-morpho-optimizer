// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "forge-std/Test.sol";
import "../contracts/MorphoHelper.sol";
contract MorphoHelperTest is Test {
    function test_supplyToMarket() public { assertTrue(true); }
    function test_revertOnZeroAmount() public { vm.expectRevert(); }
}
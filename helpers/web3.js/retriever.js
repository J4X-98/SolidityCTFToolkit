// Description:
// A short script that lets you retrieve the bytecode for a contract at a specific address

// Fill in these values before running the script
const RPC_URL = '<RPC_URL>'; // Replace with the RPC URL of the network you're using
const CONTRACT_ADDRESS = '<CONTRACT_ADDRESS>'; // Replace with the address of the contract you're targeting

const Web3 = require('web3');
const web3 = new Web3(RPC_URL);

web3.eth.getCode(CONTRACT_ADDRESS, (error, bytecode) => {
  if (error) {
    console.error('Error retrieving contract bytecode:', error);
  } else {
    console.log('Contract bytecode:', bytecode);
  }
});

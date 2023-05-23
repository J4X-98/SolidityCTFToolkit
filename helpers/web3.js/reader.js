// Description:
// A short script that lets you read out the storage of a smart contract

// Fill in these values before running the script
const RPC_URL = '<RPC_URL>'; // Replace with the RPC URL of the network you're using
const CONTRACT_ADDRESS = '<CONTRACT_ADDRESS>'; // Replace with the address of the contract you're targeting
const STORAGE_SLOT = '<STORAGE_SLOT>'; // Replace with the storage slot you want to read out

// Import the web3.js library
const Web3 = require('web3');

// Set up the web3 provider using the RPC URL and chain ID of the custom blockchain
const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));

// Get the storage value at a specific address and position
async function getStorageAt(address, position) {
  try {
    const storageValue = await web3.eth.getStorageAt(address, position);
    console.log(`Storage value at address ${address} and position ${position}: ${storageValue}`);
  } catch (error) {
    console.error(error);
  }
}

// Call the getStorageAt function with the specified contract address and storage slot
getStorageAt(CONTRACT_ADDRESS, STORAGE_SLOT);

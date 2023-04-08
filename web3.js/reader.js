
// Description:
// A short script that lets you read out the storage of a smart contract

// How to use:
// 1. Change the RPC URL to the one of the network you're using
// 2. Replace the first parameter of getStorageAt with the address of the contract you're targeting
// 3. Change the second parameter to the storage slot you want to read out.


// Import the web3.js library
const Web3 = require('web3');

// Set up the web3 provider using the RPC URL and chain ID of the custom blockchain
const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.blockpi.network/v1/rpc/public'));

// Get the storage value at a specific address and position
async function getStorageAt(address, position) {
  try {
    const storageValue = await web3.eth.getStorageAt(address, position);
    console.log(`Storage value at address ${address} and position ${position}: ${storageValue}`);
  } catch (error) {
    console.error(error);
  }
}

// Call the getStorageAt function with a specific address and position
getStorageAt('0xe43029d90B47Dd47611BAd91f24F87Bc9a03AEC2', 3);
// Description:
// A short script that lets you scan for transactions involving the smart contract you're targeting

// Fill in these values before running the script
const RPC_URL = '<RPC_URL>'; // Replace with the RPC URL of the network you're using
const CONTRACT_ADDRESS = '<CONTRACT_ADDRESS>'; // Replace with the address of the contract you're targeting

const Web3 = require('web3');
const web3 = new Web3(RPC_URL);

async function getTransactionHistory() {
  try {
    const latestBlock = await web3.eth.getBlockNumber();
    for (let i = latestBlock; i >= 0; i--) {
      const block = await web3.eth.getBlock(i, true);
      if (block && block.transactions) {
        const transactions = block.transactions.filter(
          (tx) => (tx.from && tx.from.toLowerCase() === CONTRACT_ADDRESS.toLowerCase()) || (tx.to && tx.to.toLowerCase() === CONTRACT_ADDRESS.toLowerCase())
        );
        transactions.forEach((tx) => {
          console.log(`Block Number: ${block.number}`);
          console.log(`Transaction Hash: ${tx.hash}`);
          console.log(`From: ${tx.from}`);
          console.log(`To: ${tx.to}`);
          console.log(`Value: ${tx.value}`);
          console.log(`Gas Price: ${tx.gasPrice}`);
          console.log(`Gas Used: ${tx.gas}`);
          console.log(`Timestamp: ${block.timestamp}`);
          console.log(`----------------------------------`);
        });
      }
      if (i % 100 == 0)
      {
        console.log(i);
        }
    }
  } catch (error) {
    console.error(error);
  }
}

web3.eth.net.getId((err, netId) => {
  if (err) {
    console.error('Error getting network ID:', err);
    return;
  }
  console.log(`Connected to network ID ${netId}`);
  getTransactionHistory();
});
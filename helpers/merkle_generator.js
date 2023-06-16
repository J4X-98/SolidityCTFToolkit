// Description:
// A short script that lets you generate a merkle tree as well as proof for a list of addresses

const PROOF_INDEX = '<PROOF__INDEX>'; // Replace with the index of the address that you need the proof for

const {MerkleTree} = require("merkletreejs")
const keccak256 = require("keccak256")

//Enter your addresses here
// Example: let addresses = ["0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf", "0x2B5AD5c4795c026514f8317c7a215E218DcCD6cF"]
let addresses = []

let leaves = addresses.map(addr => keccak256(addr))

//generates the merkle tree
let merkleTree = new MerkleTree(leaves, keccak256, {sortPairs: true})

//prints the merkle tree root hash
let rootHash = merkleTree.getRoot().toString('hex')
console.log("Root hash:", rootHash)

//prints the merkle tree proof for the first address (This can be changed to any address in the list)
let proof = merkleTree.getHexProof(keccak256(addresses[PROOF_INDEX]))
console.log("Proof:", proof)
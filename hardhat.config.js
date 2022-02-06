require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
//const fs = require('fs');
//const privateKey = fs.readFileSync(".secret").toString().trim();

// Possible network values
const TEST_NETWORK = "TEST_NETWORK"
const LOCAL_NETWORK = "LOCAL_NETWORK"
const private_key = PRIVATE
// By default network is set to local, change it to TEST_NETWORK to make a switch
const NETWORK = LOCAL_NETWORK

let networks = {
    hardhat: {
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [`0x${private_key}`]
    }
  };

module.exports = {
  solidity: "0.8.0",
  networks: networks
};
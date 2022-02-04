require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
//const fs = require('fs');
//const privateKey = fs.readFileSync(".secret").toString().trim();

// Possible network values
const TEST_NETWORK = "TEST_NETWORK"
const LOCAL_NETWORK = "LOCAL_NETWORK"
const mumbai_api_key = 'https://polygon-mumbai.g.alchemy.com/v2/gICZZK8gmpMq3g9-v4xe5oxUIRZdBtTY'
const private_key = 'f21db0103bee18fd46b6c85a5b073a0b8e814983a1c0de6b0f87450634905f20'
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
require("@nomiclabs/hardhat-ethers");
//const fs = require('fs');
//const privateKey = fs.readFileSync(".secret").toString().trim();
module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["0xFE4d30a079a4fbE3A186Be5f4F7AB5e22C518977"]
    }
  },
  solidity: {
    version: "0.7.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}








///**
// * @type import('hardhat/config').HardhatUserConfig
// */
// require("@nomiclabs/hardhat-waffle");
// require("dotenv").config();
// 
// // Possible network values
// const TEST_NETWORK = "TEST_NETWORK"
// const LOCAL_NETWORK = "LOCAL_NETWORK"
// 
// // By default network is set to local, change it to TEST_NETWORK to make a switch
// const NETWORK = LOCAL_NETWORK
// 
// const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
// const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
// 
// let networks = {};
// if (NETWORK == TEST_NETWORK) {
//    networks = {
//     test_network: {
//       url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
//       accounts: [`0x${WALLET_PRIVATE_KEY}`]
//     }
//   }
// }
// 
// module.exports = {
//   solidity: "0.8.0",
//   networks: networks
// };
// 
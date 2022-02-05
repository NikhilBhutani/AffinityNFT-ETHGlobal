const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", () => {
    it("Should return the new greeting once it's changed", async function () {
      const CreatorNFT = await ethers.getContractFactory("CreatorNFT");
      const creator = await CreatorNFT.deploy();
      await creator.deployed();

      await creator.mintToken("https://ipfs.moralis.io:2053/ipfs/QmS9Uq2GCfRA7uj5SjX6KvShYhr93nibn3JWADhtz3T8Rm");
      const uri = await creator.tokenURI(1)

       console.log("Uri in test", uri);

    });
  });
const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    const CreatorNfT = await hre.ethers.getContractFactory("CreatorNFT");
    const creatorNFTContract = await CreatorNfT.deploy();

    await creatorNFTContract.deployed();
    console.log("Creator NFT contract address:", creatorNFTContract.address);

    saveFrontendFiles(creatorNFTContract);
}

function saveFrontendFiles(contract) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../client/src/abi";

    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    fs.writeFileSync(
        contractsDir + "/contract-address.json",
        JSON.stringify({ CreatorNFT: contract.address }, undefined, 2)
    );

    const CreatorNFTArtifact = artifacts.readArtifactSync("CreatorNFT");

    fs.writeFileSync(
        contractsDir + "/CreatorNFT.json",
        JSON.stringify(CreatorNFTArtifact, null, 2)
    );
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
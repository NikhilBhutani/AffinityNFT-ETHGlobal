const hre = require("hardhat");

async function main() {
    await deployCreatorNFT();
    await deployRewardNFT();
}

async function deployCreatorNFT(){
    const CreatorNfT = await hre.ethers.getContractFactory("CreatorNFT");
    const creatorNFTContract = await CreatorNfT.deploy();

    await creatorNFTContract.deployed();
    console.log("Creator NFT contract address:", creatorNFTContract.address);

    saveCreatorFEFiles(creatorNFTContract);
}

function saveCreatorFEFiles(contract) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../client/src/abi";

    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    fs.writeFileSync(
        contractsDir + "/creator-contract-address.json",
        JSON.stringify({ CreatorNFT: contract.address }, undefined, 2)
    );

    const CreatorNFTArtifact = artifacts.readArtifactSync("CreatorNFT");

    fs.writeFileSync(
        contractsDir + "/CreatorNFT.json",
        JSON.stringify(CreatorNFTArtifact, null, 2)
    );
}

async function deployRewardNFT(){
    const RewardNFT = await hre.ethers.getContractFactory("RewardNFT");
    const rewardNFTContract = await RewardNFT.deploy();

    await rewardNFTContract.deployed();
    console.log("Reward NFT contract address:", rewardNFTContract.address);

    saveRewardFEFiles(rewardNFTContract);
}

function saveRewardFEFiles(contract) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../client/src/abi";

    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    fs.writeFileSync(
        contractsDir + "/reward-contract-address.json",
        JSON.stringify({ RewardNFT: contract.address }, undefined, 2)
    );

    const RewardNFTArtifact = artifacts.readArtifactSync("RewardNFT");

    fs.writeFileSync(
        contractsDir + "/RewardNFT.json",
        JSON.stringify(RewardNFTArtifact, null, 2)
    );
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    const Token = await hre.ethers.getContractFactory("AffinityToken");
    const token = await Token.deploy();

    await token.deployed();
    console.log("Affinity Token Contract address:", token.address);

    // saveFrontendFiles(token);

    const Exchange = await hre.ethers.getContractFactory("Exchange");
    const exchange = await Exchange.deploy(token.address);

    await exchange.deployed();
    console.log("Exchange Contract address:", exchange.address);

    // saveFrontendFiles(exchange);

}

// function saveFrontendFiles(contract) {
//     const fs = require("fs");
//     const contractsDir = __dirname + "/../src/abis";

//     if (!fs.existsSync(contractsDir)) {
//         fs.mkdirSync(contractsDir);
//     }

//     fs.writeFileSync(
//         contractsDir + "/contract-address.json",
//         JSON.stringify({ SampleContract: contract.address }, undefined, 2)
//     );

//     const SampleContractArtifact = artifacts.readArtifactSync("SampleContract");

//     fs.writeFileSync(
//         contractsDir + "/SampleContract.json",
//         JSON.stringify(SampleContractArtifact, null, 2)
//     );
// }

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
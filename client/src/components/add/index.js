import { useState } from "react";
import {SpinningCircleLoader} from "react-loaders-kit";
import  { Moralis } from 'moralis';

const ethers = require('ethers');
const contractJson = require('../../../src/abi/CreatorNFT.json');
const contractAddressJson = require('../../../src/abi/creator-contract-address.json');
const contractAbi = contractJson.abi
const contractAddress = contractAddressJson.CreatorNFT 

const API_URL = 'https://s3nlldgkmodi.usemoralis.com:2053/server';
const API_KEY = 'cOep3uCa15236HwUfmeHmvLtTiNBy3t2ePpveLsk';


function CreateChannel() {
  const [submitStatus, setSubmitStatus] = useState(false);
  const [desc, setDesc] = useState("");
  const[file,setFile] = useState();
  const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner();
  const contract = new ethers.Contract(contractAddress, contractAbi, signer);

  async function handleSubmit(){
    setSubmitStatus(true);
    await Moralis.start({ serverUrl: API_URL, appId: API_KEY });
    await Moralis.authenticate();
    const address = await signer.getAddress()
    console.log("Signer "+address);
    const uri = await contract.getTokenURI(address);
    console.log(uri)
    const res = await fetch(uri)
    const json = await res.json()
    console.log(json);

    const image = new Moralis.File(file.name, file);
    console.log("Uploading file... ")
    await image.saveIPFS();
    console.log(image.ipfs(), image.hash())

    const imageURI = image.ipfs();

    const contentObj = {
      "description": desc,
      "image": imageURI
    }
    json['content'].push(contentObj);
    const metadata = json;
    console.log(metadata);
    const metadataFile = new Moralis.File("metadata.json", {base64 : btoa(JSON.stringify(metadata))});
    await metadataFile.saveIPFS();
    const metadataURI = metadataFile.ipfs();
    console.log(metadataURI);

    await updateTokenURI(metadataURI);

    setTimeout(() => {
      console.log("congraulations on uploading your content!");
      window.location.href = "/channel";
    }, 20000);
    // The logic to submit the info. Set 'setSubmitStatus' to true if a positive feedback is received.
  };

  async function updateTokenURI(_uri){
    console.log("Metadata URI "+_uri)
    const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);
    const txt = await contract.updateTokenURI(_uri);
    
    console.log("Udated Token URI"+Object.keys(txt));
    return;
  }

  return (
    <div className="create bg-purple-100">
      <div className="relative font-medium md:h-screen flex items-center content-center">
        <div className="mr-auto ml-auto w-full">
          <div className="w-full max-w-md mr-auto ml-auto mt-4 mb-1 text-center">
            <h1 className="text-gray-800 block text-3xl font-extrabold font-2xl">
              Upload Content
            </h1>
          </div>
          <div className="w-full max-w-md mr-auto ml-auto mt-4">
            <div className="bg-white shadow-lg rounded-md px-8 py-8 mb-4 ml-auto mr-auto">
              {/* <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="username"
                >
                  {" "}
                  Content Title{" "}
                </label>
                <input
                  className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-purple-500"
                  id="contentTitle"
                  type="text"
                  placeholder="My Content"
                />
              </div> */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="description"
                >
                  {" "}
                  Description{" "}
                </label>
                <input
                  className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-purple-500"
                  id="description"
                  type="text"
                  placeholder="My Content Description"
                  onChange={e => setDesc(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="contentImage"
                >
                  {" "}
                  Image{" "}
                </label>
                <input
                  className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-purple-500"
                  id="contentImage"
                  type="file"
                  name="contentImage"
                  alt="Content Image"
                  placeholder="Content Image"
                  onChange={e => setFile(e.target.files[0])}
                />
              </div>

              <div className="mb-6">
                <button
                  type="button"
                  className="bg-purple-500 hover:bg-purple-600 shadow-lg text-white font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all"
                  onClick={() => handleSubmit()}
                >
                  {submitStatus ? (
                    <>
                      <SpinningCircleLoader /> Submitting
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateChannel;

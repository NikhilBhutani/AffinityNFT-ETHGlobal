import logo from "../cards/Affinity.png";
import card1 from "../cards/card1.png";
import card2 from "../cards/card2.png";
import { useState } from "react";

const ethers = require('ethers');
const contractJson = require('../../../src/abi/CreatorNFT.json');
const contractAddressJson = require('../../../src/abi/creator-contract-address.json');
const contractAbi = contractJson.abi
const contractAddress = contractAddressJson.CreatorNFT 

function Channel() {
  const [channelName, setChannelName] = useState("Loading ..");
  const [channelDesc, setChannelDesc] = useState("Loading ..");
  const [channelNFT, setChannelNFT] = useState({card1});
  const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner();
  const contract = new ethers.Contract(contractAddress, contractAbi, signer);

  init()
  async function init(){
    const address = await signer.getAddress()
    console.log("Signer "+address);
     const uri = await contract.getTokenURI(address);
     console.log(uri)
     const res = await fetch(uri)
     const json = await res.json()
     console.log(json['channel_name'])
     setChannelName(json['channel_name'])
     setChannelDesc(json['description'])
     setChannelNFT(json['image'])
  
    
  }
 

  return (
    <div className="bg-white font-sans">
      <nav className="py-2 shadow">
        <div className="container mx-auto flex items-center">
          <div className="w-1/5">
            <a href="/" className="mr-6">
              <i className="fa fa-bars fa-lg" aria-hidden="true"></i>
            </a>
            <a href="/" className="text-red-light tracking-tight flex flex-row">
              <img src={logo} alt="Affinity Logo" className="w-10 mr-5" />
              <span className="text-black font-bold tracking-tight">
                AffinityDAO
              </span>
            </a>
          </div>
          <div className="w-3/5">
            
          </div>
          <div className="w-1/5">
            <div className="flex items-center justify-end">
              <button className="flex mx-auto m-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded md:text-md font-semibold text-md">
                Create Content
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="-mt-1 bg-grey-lighter">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4 px-16">
            <div className="flex items-center">
              <img
                className="w-36 h-40 block"
                src={channelNFT}
                alt="channel_logo"
              />
              <div className="ml-6">
                <div className="text-2xl font-normal flex items-center">
                  <span className="mr-2">{channelName}</span>
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">
                    &#10003;
                  </span>
                </div>
                <p className="mt-2 font-hairline text-sm">
                {channelDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex">
        <div className="w-full mx-16 py-6">
          <div className="border-b pb-8">
            <div className="flex">
              <div className="w-3/4 flex">
          
              </div>
            </div>
          </div>
          <div className="border-b">
            <h3 className="py-6 text-base font-medium">
              My Uploads
            </h3>
            <div className="flex mb-4 relative">
              <div className="flex-1 mr-1">
                <div>
                  <img src={card1} alt="" />
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-medium">Video One</h4>
                  <p className="mt-2 font-hairline text-sm text-grey-darker">
                    Affinity Tech
                    <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">
                      &#10003;
                    </span>
                  </p>
                  <p className="mt-1 font-hairline text-xs text-grey-darker">
                    336K views &middot; 2 years ago
                  </p>
                  <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                    CC
                  </p>
                </div>
              </div>
              <div className="flex-1 mr-1">
                <div>
                  <img src={card1} alt="" />
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-medium">Video 2</h4>
                  <p className="mt-2 font-hairline text-sm text-grey-darker">
                    Affinity Tech
                    <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">
                      &#10003;
                    </span>
                  </p>
                  <p className="mt-1 font-hairline text-xs text-grey-darker">
                    336K views &middot; 2 years ago
                  </p>
                  <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                    CC
                  </p>
                </div>
              </div>
              <div className="flex-1 mr-1">
                <div>
                  <img src={card1} alt="" />
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-medium">Video 3</h4>
                  <p className="mt-2 font-hairline text-sm text-grey-darker">
                    Affinity Tech
                    <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">
                      &#10003;
                    </span>
                  </p>
                  <p className="mt-1 font-hairline text-xs text-grey-darker">
                    336K views &middot; 2 years ago
                  </p>
                  <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                    CC
                  </p>
                </div>
              </div>
              <div className="flex-1 mr-1">
                <div>
                  <img src={card1} alt="" />
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-medium">Video 4</h4>
                  <p className="mt-2 font-hairline text-sm text-grey-darker">
                    Affinity Tech
                    <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">
                      &#10003;
                    </span>
                  </p>
                  <p className="mt-1 font-hairline text-xs text-grey-darker">
                    336K views &middot; 2 years ago
                  </p>
                  <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                    CC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Channel;

import logo from "../cards/Affinity.png";
import card1 from "../cards/card1.png";
import { useState } from "react";
import { Moralis } from "moralis";
const contractAddressJson = require("../../../src/abi/creator-contract-address.json");

function User() {
  var channel = "Name placeholder"
  const [holder1, setHolder1] = useState(card1);
  const [holder2, setHolder2] = useState(card1);
  const [holder3, setHolder3] = useState(card1);
  const [holder4, setHolder4] = useState(card1);
  const [holder5, setHolder5] = useState(card1);
  const [holder6, setHolder6] = useState(card1);
  const [name1, setname1] = useState(channel);
  const [name2, setname2] = useState(channel);
  const [name3, setname3] = useState(channel);
  const [name4, setname4] = useState(channel);
  const [name5, setname5] = useState(channel);
  const [name6, setname6] = useState(channel);
 
  async function redirectToCreateChannelPage() {
    console.log("Go to create channel");
    window.location.href = "/create";
  }

  getContentCreatorNFTs();
  async function getContentCreatorNFTs() {
    const options = {
      address: contractAddressJson.CreatorNFT,
      chain: "mumbai",
    };
    const NFTs = await Moralis.Web3API.token.getAllTokenIds(options);
    
   
     NFTs.result.forEach((item, index)=>{
      const obj = JSON.parse(item.metadata)
      console.log(obj['channel_name']+" "+index)
        switch(index){
          case 0:
             setHolder1(obj['image'])
             setname1(obj['channel_name']) 
             break;
          case 1: setHolder2(obj['image'])
          setname2(obj['channel_name']) 
           break;
          case 2:  setHolder3(obj['image'])
          setname3(obj['channel_name']) 
          break;
          case 3:  setHolder4(obj['image'])
          setname4(obj['channel_name']) 
          break;
          case 4:  setHolder5(obj['image'])
          setname5(obj['channel_name']) 
          break;
          case 5:  setHolder6(obj['image'])
          setname6(obj['channel_name']) 
          break;
        }

    })
    
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
              AffinityNFT
            </span>
          </a>
        </div>
        <div className="w-3/5"></div>
        <div className="w-1/5">
          <div className="flex items-center justify-end">
            <button onClick={redirectToCreateChannelPage} className="flex mx-auto m-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded md:text-md font-semibold text-md">
              Become a creator
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div className="container mx-auto flex">
      <div className="w-full mx-16 py-6">
        <div className="border-b">
          <h3 className="py-6 text-base font-medium">Channels</h3>
          <div className="flex mb-4 relative">
            <div className="flex-1 mr-1">
              <div>
                <img src={holder1} alt="" />
              </div>
              <div className="mb-4">
            
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                  {name1}
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">
                    &#10003;
                  </span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  336K views &middot; 2 years ago
                </p>
               
              </div>
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src={holder2} alt="" />
              </div>
              <div className="mb-4">
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                {name2}
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">
                    &#10003;
                  </span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  336K views &middot; 2 years ago
                </p>
                
              </div>
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src={holder3} alt="" />
              </div>
              <div className="mb-4">
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                {name3}
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">
                    &#10003;
                  </span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  336K views &middot; 2 years ago
                </p>
                
              </div>
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src={holder4} alt="" />
              </div>
              <div className="mb-4">
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                {name4}
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">
                    &#10003;
                  </span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  336K views &middot; 2 years ago
                </p>
            
              </div>
            </div>
          </div>
          <div className="flex mb-4 relative">
            <div className="flex-1 mr-1">
              <div>
                <img src={holder5} alt="" />
              </div>
              <div className="mb-4">
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                {name5}
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">
                    &#10003;
                  </span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  36K views 
                </p>
                
              </div>
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src={holder6} alt="" />
              </div>
              <div className="mb-4">
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                {name6}
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">
                    &#10003;
                  </span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  33K views
                </p>
              
              </div>
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src={card1} alt="" />
              </div>
              <div className="mb-4">
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                  Channel Name Placeholder
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">
                    &#10003;
                  </span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  3K views 
                </p>
          
              </div>
            </div>
            <div className="flex-1 mr-1">
              <div>
                <img src={card1} alt="" />
              </div>
              <div className="mb-4">
                <p className="mt-2 font-hairline text-sm text-grey-darker">
                Channel Name Placeholder
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">
                    &#10003;
                  </span>
                </p>
                <p className="mt-1 font-hairline text-xs text-grey-darker">
                  3K views
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

export default User;

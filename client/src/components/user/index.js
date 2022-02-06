import logo from "../cards/Affinity.png";
import card1 from "../cards/card1.png";
import card2 from "../cards/card2.png";
import  { Moralis } from 'moralis';
const contractAddressJson = require('../../../src/abi/creator-contract-address.json');
function User() {

 async function redirectToCreateChannelPage(){
   console.log("Go to create channel")
    window.location.href = "/create";
 }
getContentCreatorNFTs()
async function getContentCreatorNFTs(){
  const options = { address: contractAddressJson.CreatorNFT, chain: "mumbai" };
  const NFTs = await Moralis.Web3API.token.getAllTokenIds(options);
  console.log(NFTs);
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
          <div className="w-3/5"></div>
          <div className="w-1/5">
            <div className="flex items-center justify-end">
              <button onClick = {redirectToCreateChannelPage} className="flex mx-auto m-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded md:text-md font-semibold text-md">
                Become a creator
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto flex">
        <div className="w-full mx-16 py-6">
          <div className="border-b">
            <h3 className="py-6 text-base font-medium">Videoos</h3>
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

           {/* <div className="flex mb-4 relative">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;

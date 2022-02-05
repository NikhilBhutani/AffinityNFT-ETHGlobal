import { useState } from 'react';
import { Moralis } from "moralis";
import card1 from "../cards/card1.png";
import card2 from "../cards/card6.png";
import card3 from "../cards/card3.png";
import card4 from "../cards/card7.png";
let buttonText = ""
function Auth() {
   var globalUser; 
  var globalUser;
   var globalUser; 

  const currentUser = Moralis.User.current();
  if(currentUser){
   let address = currentUser.get("ethAddress")
   console.log("Here ")
    buttonText = address.substring(0,4)+"...."+address.substring(address.length-4, address.length)
  }else {
    buttonText = "Connect Wallet"
  }
 
  async function startMoralisAndLogin() {
    if (currentUser) {
      globalUser = currentUser;
      window.location.href = "/homepage";
     // Moralis.User.logOut();
    } else {
      Moralis.authenticate().then((user) => {
        console.log(user.get("ethAddress"));
        globalUser = user;
        window.location.href = "/homepage";
        
      });
    }
  }

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [user, setUser] = useState;

  return (
    <div className="auth bg-purple-100">
      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="text-5xl md:text-8xl sm:text-4xl font-bold title-font mb-2 text-gray-700">
              Welcome to Affinity
            </h1>
          </div>
          <button
            onClick={startMoralisAndLogin}
            className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded md:text-2xl font-semibold text-2xl"
          >
            {buttonText}
          </button>

          <div className="cards mt-24 py-24">
            <div className="flex flex-wrap -m-4 justify-evenly align-center">
              <div className="p-4 md:w-1/4 sm:w-2/4 w-2/4">
                <img src={card1} alt="Affinity Cards" />
              </div>

              <div className="p-4 md:w-1/4 sm:w-2/4 w-2/4">
                <img src={card2} alt="Affinity Cards" />
              </div>

              <div className="p-4 md:w-1/4 sm:w-2/4 w-2/4">
                <img src={card3} alt="Affinity Cards" />
              </div>

              <div className="p-4 md:w-1/4  sm:w-2/4 w-2/4">
                <img src={card4} alt="Affinity Cards" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Auth;

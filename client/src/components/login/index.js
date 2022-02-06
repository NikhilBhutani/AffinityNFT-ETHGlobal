import { Moralis } from "moralis";

function Login() {
  const API_URL = "https://s3nlldgkmodi.usemoralis.com:2053/server";
  const API_KEY = "cOep3uCa15236HwUfmeHmvLtTiNBy3t2ePpveLsk";
  var globalUser;

  async function startMoralisAndLogin() {
    await Moralis.start({ serverUrl: API_URL, appId: API_KEY });

    const currentUser = Moralis.User.current();
    if (currentUser) {
      console.log("User alredy logged in");
      console.log(currentUser.get("ethAddress"));
      globalUser = currentUser;
      window.location.href = "/create";
    } else {
      Moralis.authenticate().then((user) => {
        console.log(user.get("ethAddress"));
        globalUser = user;
      });
    }
  }

  return (
    <div className="login w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="flex">
        <div className="buttons mx-auto my-auto self-center flex justify-evenly align-middle">
          <button
            onClick={startMoralisAndLogin}
            className="rounded-lg py-8 px-12 mx-10 my-10 bg-purple-700 text-white text-2xl"
          >
            Creator Login
          </button>
          <button onClick={startMoralisAndLogin} className="rounded-lg py-8 px-12 mx-10 my-10 bg-purple-700 text-white text-2xl">
            Viewer Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

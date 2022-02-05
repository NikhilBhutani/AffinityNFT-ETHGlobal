import Header from "../header";
import Footer from "../footer";

function Channel() {
  return (
    <div className="channel">
      <Header />
      <div className="chaninfo w-full flex justify-evenly border-b">
        <div className="img">
          <div className="ig mt-5">
            <img
              src="https://dummyimage.com/600x600/edf2f7/a5afbd"
              alt="Channel Logo"
              className="w-40 h-40"
            />
          </div>
          <div className="add">
            <p>Channel Address</p>
          </div>
        </div>

        <div className="ri">
          <div className="text-2xl font-bold text-black mb-10 mt-5">Channel Name</div>
          <div className="sub">
            <button className="py-4 px-2 bg-purple-500 rounded-lg">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 flex justify-center">
        <button className="py-2 px-4 bg-purple-500 text-white font-lg font-semibold rounded-lg mx-2 my-4">
          Videos
        </button>
        <button className="py-2 px-4 bg-purple-500 text-white font-semibold font-lg rounded-lg mx-2 my-4">
          Posts
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Channel;

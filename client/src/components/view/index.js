import logo from "../cards/Affinity.png";
import card1 from "../cards/card1.png";
import card2 from "../cards/card2.png";

function Channel() {
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
            <div className="relative">
              <input
                type="text"
                className="h-8 p-4 text-sm w-full border"
                placeholder="Search"
              />
              <span className="flex items-center bg-grey-lightest hover:bg-grey-lighter absolute pin-r pin-y border px-8">
                <i className="fa fa-search text-grey-dark"></i>
              </span>
            </div>
          </div>
          <div className="w-1/5">
            <div className="flex items-center justify-end">
              <a href="/" className="mr-6">
                <i className="fa fa-upload fa-lg" aria-hidden="true"></i>
              </a>
              <a href="/" className="mr-6">
                <i className="fa fa-th fa-lg" aria-hidden="true"></i>
              </a>
              <a href="/" className="mr-6">
                <i className="fa fa-bell fa-lg" aria-hidden="true"></i>
              </a>
              <a href="/">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://yt3.ggpht.com/-d4QhdOi4N6c/AAAAAAAAAAI/AAAAAAAAAAA/vpG4T-iVv7w/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
                  alt="avatar"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="-mt-1 bg-grey-lighter">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4 px-16">
            <div className="flex items-center">
              <img
                className="w-24 h-24 rounded-full"
                src={card1}
                alt="channel_logo"
              />
              <div className="ml-6">
                <div className="text-2xl font-normal flex items-center">
                  <span className="mr-2">Channel Name</span>
                  <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">
                    &#10003;
                  </span>
                </div>
                <p className="mt-2 font-hairline text-sm">
                  Channel Description
                </p>
              </div>
            </div>
            <div className="text-grey-dark">
              <button className="rounded-lg appearance-none px-3 py-2 bg-purple-400 uppercase text-white text-sm mr-4">
                Subscribe
              </button>
              <span>
                <i className="fa fa-bell fa-lg" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <div className="px-16">
            <ul className="list-reset flex">
              <li className="text-center py-3 px-8">
                <a
                  href="/"
                  className="hover:text-black text-center py-3 px-8 border-b-2 border-solid border-gray-300"
                >
                  Videos
                </a>
              </li>
              <li className="text-center py-3 px-8">
                <a href="/" className="hover:text-black">
                  About
                </a>
              </li>
              <li className="text-center py-3 px-8">
                <i className="fa fa-search fa-lg text-grey-dark"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex">
        <div className="w-full mx-16 py-6">
          <div className="border-b pb-8">
            <div className="flex">
              <div className="w-3/4 flex">
                <div>
                  <img className="block w-full" src={card1} alt="" />
                </div>
                <div className="pl-4">
                  <p className="w-64 h-6 truncate text-sm font-medium mb-1">
                    New Video
                  </p>
                  <p className="text-grey-darker text-xs">
                    <span>Affinity Tech</span>
                    <span>&middot;</span>
                    <span>7.5 views</span>
                    <span>&middot;</span>
                    <span>2 days ago</span>
                  </p>
                </div>
              </div>
              <div className="w-1/4">
                <div>
                  <img className="block w-100" src={card2} alt="" />
                </div>
                <div>
                  <p className="text-sm font-medium my-2">New Video</p>
                  <p className="text-grey-darker text-xs mb-1">Affinity Tech</p>
                  <p className="text-grey-darker text-xs">
                    <span>186 views</span>
                    <span>&middot;</span>
                    <span>3 hours ago</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b">
            <h3 className="py-6 text-base font-medium">
              My Uploads
              <span className="uppercase ml-3 text-grey-dark">Play all</span>
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

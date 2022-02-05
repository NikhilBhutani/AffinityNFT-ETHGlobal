import "./index.css";
import logo from "../cards/Affinity.png";

function header() {
  return (
    <div className="header">
      <header className="text-gray-700 body-font border-b border-gray-200 flex justify-between">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="/"
            target="_blank"
          >
            <img src={logo} alt="Affinity Logo" className="w-10" />
            AffinityDAO
          </a>
        </div>

        <div>
          <div className="md:ml-auto flex flex-row items-center text-base justify-center mt-4">
            <a href="/tokenomics" className="mr-5 hover:text-gray-900">
              Tokenomics
            </a>
            <a href="/whitepaper" className="mr-5 hover:text-gray-900">
              Whitepaper
            </a>
          </div>
        </div>

        <div className="my-3 mx-4">
          <a href="/auth">
            <button className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 hover:text-indigo-500 rounded text-base mt-4 md:mt-0">
              Launch
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </a>
        </div>
      </header>
    </div>
  );
}

export default header;

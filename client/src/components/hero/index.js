import logo from '../cards/Affinity.png'
function hero() {
  return (
    <div className="hero">
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Affinity DAO
            </h1>
            <p className="mb-8 leading-relaxed">
              Affinity DAO (Decentralized Autonomous Organization) is curated
              for incentivizing the content creator community. Imagine the Web2
              content creator applications such as YouTube, Facebook, Instagram,
              etc., being decentralized, that is exactly what Affinity is.
              Affinity is the Web3 version of the Web2 social media applications
              and we, the core team are head-on heels in bringing the Affinity
              DAO to reality.
            </p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Launch
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Whitepaper
              </button>
            </div> */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img src={logo} alt="Affinity Logo" className="object-cover object-center rounded" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default hero;

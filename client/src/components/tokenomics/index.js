import tokenomic from "../cards/token-distrib.png";

function tokenomics() {
  return (
    <div className="tokenomics">
      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Tokenomics <a id="tokenomics"></a>
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-base">
              Our token distribution
            </p>
          </div>
          <div className="w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={tokenomic}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default tokenomics;

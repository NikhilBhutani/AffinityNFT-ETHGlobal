function timeline() {
  return (
    <div className="timeline">
      <div className="container px-5 py-12 mx-auto border-t">
        <div className="flex flex-wrap w-full mb-1 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            The Affinity Token
          </h1>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
          <div className="flex flex-row-reverse md:contents">
            <div className="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-300">
              <h3 className="font-semibold text-xl mb-1 text-gray-900">
                Phase 1
              </h3>
              <p className="text-gray-600">
                Some text about the first phase of the project.
              </p>
            </div>

            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-0.5 bg-gray-100 pointer-events-none"></div>
              </div>

              <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-indigo-500 rounded-full bg-gray-100 shadow"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-0.5 bg-gray-100 pointer-events-none"></div>
              </div>

              <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-indigo-500 rounded-full bg-gray-100 shadow"></div>
            </div>

            <div className="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-300 rounded-xl">
              <h3 className="font-semibold text-xl mb-1 text-gray-900">
                Phase 2
              </h3>
              <p className="text-gray-600">
                Some text about the second phase of the project.
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse md:contents">
            <div className="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-300">
              <h3 className="font-semibold text-xl mb-1 text-gray-900">
                Phase 3
              </h3>
              <p className="text-gray-600">
                Some text about the third phase of the project
              </p>
            </div>

            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-0.5 bg-gray-100 pointer-events-none"></div>
              </div>

              <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-indigo-500 rounded-full bg-gray-100 shadow"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-0.5 bg-gray-100 pointer-events-none"></div>
              </div>

              <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-indigo-500 rounded-full bg-gray-100 shadow"></div>
            </div>

            <div className="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-300 rounded-xl">
              <h3 className="font-semibold text-xl mb-1 text-gray-900">
                Phase 4
              </h3>
              <p className="text-gray-600">
                Some text about the fourth phase of the project
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default timeline;

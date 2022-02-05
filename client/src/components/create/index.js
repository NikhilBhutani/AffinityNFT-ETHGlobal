import { useState } from "react";
import {SpinningCircleLoader} from "react-loaders-kit";

function CreateChannel() {
  const [submitStatus, setSubmitStatus] = useState(false);

  const handleSubmit = () => {
    setSubmitStatus(true);
    // The logic to submit the info. Set 'setSubmitStatus' to true if a positive feedback is received.
  };

  return (
    <div className="create bg-purple-100">
      <div className="relative font-medium md:h-screen flex items-center content-center">
        <div className="mr-auto ml-auto w-full">
          <div className="w-full max-w-md mr-auto ml-auto mt-4 mb-1 text-center">
            <h1 className="text-gray-800 block text-3xl font-extrabold font-2xl">
              Create Channel
            </h1>
          </div>
          <div className="w-full max-w-md mr-auto ml-auto mt-4">
            <div className="bg-white shadow-lg rounded-md px-8 py-8 mb-4 ml-auto mr-auto">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="username"
                >
                  {" "}
                  Channel Name{" "}
                </label>
                <input
                  className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-purple-500"
                  id="channelName"
                  type="text"
                  placeholder="My Channel Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="username"
                >
                  {" "}
                  Channel Description{" "}
                </label>
                <input
                  className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-purple-500"
                  id="channelDescription"
                  type="text"
                  placeholder="My Channel Description"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="channelImage"
                >
                  {" "}
                  Channel Image{" "}
                </label>
                <input
                  className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-purple-500"
                  id="channelLogo"
                  type="file"
                  name="channelLogo"
                  alt="Channel Image"
                  placeholder="Channel Image"
                />
              </div>

              <div className="mb-6">
                <button
                  type="button"
                  className="bg-purple-500 hover:bg-purple-600 shadow-lg text-white font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all"
                  onClick={() => handleSubmit()}
                >
                  {submitStatus ? (
                    <>
                      <SpinningCircleLoader /> Submitting
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateChannel;

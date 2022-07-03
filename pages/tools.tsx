import React from "react";
import Layout from "../components/Layout";

function tools() {
  return (
    <Layout>
      <div className="bg-slate-500 justify-center rounded-lg mt-400 py-5 grid grid-cols-1 sm:grid-col-1  md:grid-cols-2 lg:grid-cols-3 md:gap-5 md:p-10">
        <div className="bg-gray-200 max-w-sm rounded-2xl mx-5 overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="/chaintools-logo-clear.svg"
            alt="React ts"
          />
          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-lg m-4 title-font font-medium text-black mb-5">
              {" "}
              Explorer{" "}
            </span>

            <p className="text-gray-700 flex text-lg font-medium leading-snug p-5">
              Mainnet explorer for ChainTools. Connect your Keplr wallet here
              and control your stake from one place
            </p>
          </div>
          <div className="px-6 pt-1 pb-2">
            <a href="https://explorer.chaintools.tech/">
              <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
                Take me there
              </span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default tools;

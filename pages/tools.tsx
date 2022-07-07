import React from "react";
import Layout from "../components/Layout";

function tools() {
  return (
    <Layout>
      <div className="justify-center rounded-lg mt-400 py-5 grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 md:p-10">
        {/* block explorer  */}
        <div className="bg-gray-200 max-w-sm rounded-2xl mx-5 overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="/chaintools-logo-clear.svg"
            alt="React ts"
          />
          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-lg m-2 title-font font-medium text-black mb-1">
              {" "}
              Explorer{" "}
            </span>

            <p className="text-gray-700 flex text-sm font-medium leading-snug p-5">
              Monitor all our networks in one place. Connect your Keplr wallet
              and manage your stake in one place.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a href="https://explorer.chaintools.tech/">
              <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 cursor-pointer tracking-widest rounded-full hover:bg-slate-300">
                Take me there.
              </span>
            </a>
          </div>
        </div>

        {/* reward tool ardor  */}
        <div className="bg-gray-200 max-w-sm rounded-2xl mx-5 overflow-hidden shadow-lg">
          <img className="w-full" src="/ardorreward.png" alt="React ts" />
          <div className="px-6 py-4 lg:h-52">
            <a href="https://rewards.ardor.chaintools.tech/">
              <span className="inline-block bg-gray-400 text-black px-6 py-2 tracking-widest text-sm mr-2 title-semibold mb-1 rounded-full cursor-pointer hover:bg-slate-300">
                {" "}
                Test it out{" "}
              </span>
            </a>

            <p className="text-gray-700 flex text-lg font-medium leading-snug p-5">
              We have developed a Ardor node reward calulator for Ardor Network.
              This is something we will be developing further on all chains.
              Come test out our Beta version on Ardor.
            </p>
          </div>
        </div>

        {/* Junotools  */}
        <div className="bg-gray-200 max-w-sm rounded-2xl mx-5 overflow-hidden shadow-lg">
          <img className="w-full" src="/junotools.png" alt="React ts" />
          <div className="px-6 py-4 lg:h-52">
            <a href="https://juno.tools/">
              <span className="inline-block bg-gray-400 text-black px-6 py-2 tracking-widest text-sm mr-2 title-semibold mb-1 rounded-full cursor-pointer hover:bg-slate-300">
                
                JunoTools
              </span>
            </a>

            <p className="text-gray-700 flex text-lg font-medium leading-snug p-5">
              JunoTools is a Swiss Army knife that helps you build on Juno by
              providing smart contract front ends. We call these front-end apps
              Smart Contact Dashboards.
            </p>
          </div>
        </div>

        {/* stakesync  */}
        {/* <div className="bg-gray-200 max-w-sm rounded-2xl mx-5 overflow-hidden shadow-lg">
          <img className="w-full" src="/statesync.png" alt="React ts" />
          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-lg title-font font-medium text-black mb-1">
              {" "}
              Statesync Snapshots{" "}
            </span>

            <p className="text-gray-700 flex text-sm font-medium leading-snug p-5">
              State-sync is a module built into the Cosmos SDK to allow
              validators to rapidly join the network by syncing your node with a
              snapshot enabled RPC from a trusted block height.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-cyan-400">
              Statesync...
            </span>
          </div>
        </div> */}
      </div>
    </Layout>
  );
}

export default tools;

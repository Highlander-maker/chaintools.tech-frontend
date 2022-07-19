import React from "react";
import Layout from "../components/Layout";

function stateSync() {
  return (
    <Layout>
      <div>
        <h1 className="text-center justify-center font-medium leading-tight text-5xl mt-0 mb-2 text-black shadow-black">Our State-Sync Server Setup</h1>
      </div>
      <div className="justify-center rounded-lg p-3 grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-200 max-w-sm rounded-lg mx-5 overflow-hidden shadow-lg">
          <div className=" py-4 sm:h-40 md:h-40 lg:h-40">
            <img className="object-contain h-36 w-96" src="/juno.svg" alt="" />
          </div>
        </div>

        <div className="bg-gray-200 max-w-sm rounded-lg mx-5 overflow-hidden shadow-lg">
          <div className=" py-4 sm:h-40 md:h-40 lg:h-40">
            <img
              className="object-contain h-24 w-96 mt-6"
              src="/kava.png"
              alt=""
            />
          </div>
        </div>

        <div className="bg-gray-200 max-w-sm rounded-lg mx-5 overflow-hidden shadow-lg">
          <div className=" py-4 sm:h-40 md:h-40 lg:h-40">
            <img
              className="object-contain h-24 w-96 mt-6"
              src="/comdex.jpeg"
              alt=""
            />
          </div>
        </div>

        <div className="bg-gray-200 max-w-sm rounded-lg mx-5 overflow-hidden shadow-lg">
          <div className=" py-4 sm:h-40 md:h-40 lg:h-40">
            <img
              className="object-contain h-24 w-96 mt-6"
              src="/evmos-2.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default stateSync;

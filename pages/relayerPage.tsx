import React from "react";
import Layout from "../components/Layout";

function relayersPage() {
  return (
    <Layout>
      <div className="w-full min-h-screen bg-slate-400 p-6">
        <h1 className="font-bold text-xl text-center md:text-3xl md:mt-12 mb-4">
          Checkout the networks we are running{" "}
          <span className="text-red-700"> Relayers </span> on
        </h1>
        {/* Card container start  */}

        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col bg-white rounded -lg  shadow-md w-full m-6 overflow-hidden sm:w-64">
            <img className="h-20 m-6 " src="/juno.svg" alt="" />
            <h2 className="text-center bg-gray-300 hover:bg-red-300 transition-all duration-500 px-2 font-extrabold pb-5 ">
              Juno - Kujira
            </h2>
          </div>

          <div className="flex flex-col bg-white rounded -lg  shadow-md w-full m-6 overflow-hidden sm:w-64">
            <img className="h-20 m-6 " src="/juno.svg" alt="" />
            <h2 className="text-center bg-gray-300 hover:bg-red-300 transition-all duration-500 px-2 font-extrabold pb-5 ">
            Omniflix - Kichain
            </h2>
          </div>

          <div className="flex flex-col bg-white rounded -lg  shadow-md w-full m-6 overflow-hidden sm:w-64">
            <img className="h-20 m-6 " src="/juno.svg" alt="" />
            <h2 className="text-center bg-gray-300 hover:bg-red-300 transition-all duration-500 px-2 font-extrabold pb-5 ">
              Juno - Bitsong
            </h2>
          </div>

          <div className="flex flex-col bg-white rounded -lg  shadow-md w-full m-6 overflow-hidden sm:w-64">
            <img className="h-20 m-6 " src="/juno.svg" alt="" />
            <h2 className="text-center bg-gray-300 hover:bg-red-300 transition-all duration-500 px-2 font-extrabold pb-5 ">
              Sentinel - Decentr
            </h2>
          </div>


        </div>
      </div>
    </Layout>
  );
}

export default relayersPage;

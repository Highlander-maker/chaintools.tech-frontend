import React from "react";
import Layout from "../components/Layout";

function services() {
  return (
    <Layout>
      {/* main div */}
      <div className="bg-slate-500 justify-center rounded-lg mt-400 py-5 grid grid-cols-1 sm:grid-col-2 lg:grid-cols-2 gap-3 md:gap-4 p-5 md:p-6">
        <p className="bg-gray-200 border rounded-2xl shadow flex justify-center font-medium leading-loose p-5 text-lg m-10">
          {" "}
          Chaintools are an independent and experienced operation running
          sophisticated blockchain infrastructure to make cryptoassets work. We
          deploy our own closely-monitored, enterprise-grade hardware in multiple
          high-availability datacentres and carefully design our systems to
          provide multiple-layers of redundancy.{" "}
        </p>

        {/* Experience */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-full" src="/experience.jpeg" alt="React ts" />
          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-lg title-font font-medium text-black mb-1">
              {" "}
              Experience{" "}
            </span>
            

            <p className="text-gray-700 flex text-base font-medium leading-snug p-5">
             We have participated in Cosmos's networks for multiple years. Contributed to many of the projects we validate and still continue to do so
            </p>
          </div>

         
        </div>
      </div>
    </Layout>
  );
}

export default services;

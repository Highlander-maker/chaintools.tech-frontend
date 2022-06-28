import React from "react";
import Layout from "../components/Layout";

function networks() {
  return (
    <Layout>
      {/* main div */}
      <div className="bg-slate-500 justify-center rounded-lg mt-400 py-5 grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-3 md:gap-4 p-5 md:p-6">
        {/* Juno network */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-full" src="/juno-symbol.svg" alt="React ts" />
          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black mb-1">
              {" "}
              Juno{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                href="https://explorer.chaintools.tech/juno/staking"
                className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-base">
              Juno originates & evolves from a community driven initiative,
              prompted by dozens of developers, validators & delegators in the
              Cosmos ecosystem
            </p>
          </div>

          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-cyan-400">
              Read More
            </span>
          </div>
        </div>

        {/* Evmos */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-full" src="/evmos.svg" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              Evmos{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a href="https://app.evmos.org/staking" className="text-gray-900">
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-base">
              Evmos is bringing the world of Ethereum-based applications and
              assets to the interoperable networks of the Cosmos ecosystem
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-cyan-400">
              Read More
            </span>
          </div>
        </div>

        {/* Kujira */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/kujira-logo.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              Kujira{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a href="https://blue.kujira.app/stake/kujiravaloper1rgt2ejrjzyaw36h6f5jdzdkrt422kf2n3g0daw" className="text-gray-900">
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-base">
              Grown-Up DeFi. The Cosmos Layer 1 platform for community selected
              projects creating true value.
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-cyan-400">
              Read More
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default networks;

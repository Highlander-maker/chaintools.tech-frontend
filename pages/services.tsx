import React from "react";
import Layout from "../components/Layout";

function services() {
  return (
    <Layout>
      {/* main div */}
      <div className="bg-slate-500 justify-center rounded-lg mt-400 py-5 grid grid-cols-1 sm:grid-col-1  md:grid-cols-2 lg:grid-cols-3 md:gap-5 md:p-10">
        <p className="flex justify-center font-medium leading-loose p-5 text-lg m-10 text-gray-200">
          {" "}
          Chaintools are an independent and experienced operation running
          sophisticated blockchain infrastructure to make cryptoassets work. We
          deploy our own closely-monitored, enterprise-grade hardware in
          multiple high-availability datacentres and carefully design our
          systems to provide multiple-layers of redundancy.{" "}
        </p>

        {/* Experience */}
        <div className="bg-gray-200 max-w-sm rounded-2xl mx-5 overflow-hidden shadow-lg">
          <img className="w-full" src="/experience.jpeg" alt="React ts" />
          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-lg title-font font-medium text-black mb-1">
              {" "}
              Experience{" "}
            </span>

            <p className="text-gray-700 flex text-base font-medium leading-snug p-5">
              We have participated in Cosmos's networks for multiple years.
              Contributed to many of the projects we validate and still continue
              to do so
            </p>
          </div>
        </div>

        {/* Supporting network development */}
        <div className="bg-gray-200 max-w-sm rounded-2xl mx-5 overflow-hidden shadow-lg">
          <img className="w-full" src="/supportnetwork.png" alt="React ts" />
          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-lg title-font font-medium text-black mb-1">
              {" "}
              Supporting Network Development{" "}
            </span>

            <p className="text-gray-700 flex text-sm font-medium leading-snug p-5">
              We run two testnet nodes, identical in specification to our
              mainnet nodes. Not only does this support the network in its
              long-term development but crucially it also enables us to verify
              any modifications to our operational procedures before their use
              on mainnet.
            </p>
          </div>
        </div>
      </div>

      {/* services  */}
      <div className="justify-center rounded-lg mt-400 py-5 grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 md:p-10">
        {/* relayers  */}
        <div className="bg-gray-200 max-w-sm rounded-2xl mx-5 overflow-hidden shadow-lg">
          <img className="w-full" src="/relayer.png" alt="React ts" />
          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-lg m-2 title-font font-medium text-black mb-1">
              {" "}
              Relayers{" "}
            </span>

            <p className="text-gray-700 flex text-sm font-medium leading-snug p-5">
              Relayer operators are a crucial part of the IBC infrastructure,
              yet sometimes their presence is taken for granted. IBC provides
              blockchains a protocol to enable reliable, secure and
              permissionless transfer of packets of data.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 cursor-pointer tracking-widest rounded-full hover:bg-cyan-400">
              Read more...
            </span>
          </div>
        </div>

        {/* snapshots  */}
        <div className="bg-gray-200 max-w-sm rounded-2xl mx-5 overflow-hidden shadow-lg">
          <img className="w-full" src="/snapshot.png" alt="React ts" />
          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-lg title-font font-medium text-black mb-1">
              {" "}
              Snapshots{" "}
            </span>

            <p className="text-gray-700 flex text-sm font-medium leading-snug p-5">
              Sync a node from a snapshot stored in our database and get your
              node up and running in quick time !!!
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-cyan-400">
              Grab a snapshot...
            </span>
          </div>
        </div>

        {/* stakesync  */}
        <div className="bg-gray-200 max-w-sm rounded-2xl mx-5 overflow-hidden shadow-lg">
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
        </div>

        {/* live peers  */}
        <div className="bg-gray-200 max-w-sm rounded-2xl mx-5 overflow-hidden shadow-lg mt-10">
          <img className="w-full" src="/livepeers.jpeg" alt="React ts" />
          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-lg title-font font-medium text-black mb-1">
              {" "}
              Network Seeds & Peers{" "}
            </span>

            <p className="text-gray-700 flex text-sm font-medium leading-snug p-5">
              All p2p connections use TCP. Upon establishing a successful TCP
              connection with a peer, two handshakes are performed. We provide
              an up to date peer list for all the networks we validate so you
              can have a node up and running asap.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-cyan-400">
              Grab some peers !!!...
            </span>
          </div>
        </div>

        {/* Validator reward querier  */}
        <div className="bg-gray-200 max-w-sm rounded-2xl mx-5 overflow-hidden shadow-lg mt-10">
          <img className="w-full" src="/validatorquery.png" alt="React ts" />
          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-lg title-font font-medium text-black mb-1">
              {" "}
              Validator reward calculator{" "}
            </span>

            <p className="text-gray-700 flex text-sm font-medium leading-snug p-5">
              A tool for querying on chain data being developed by Chaintools & Junotools
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-cyan-400">
              Coming soon !!!
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default services;

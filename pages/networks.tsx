import React from "react";
import Header from "../components/Header";

function networks() {
  return (
    <div>
      <Header />
      <div className="flex justify-between items-center bg-cyan-500 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-20">
          <h1 className="text-6xl max-w-xl font-semibold">
           Supported Networks
          </h1>
          <h2 className="font-semibold">
           Choose a network you wish to stake to
          </h2>
        </div>

       
      </div>
    </div>
  );
}

export default networks;

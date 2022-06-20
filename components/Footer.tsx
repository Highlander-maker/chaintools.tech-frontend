import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-gray-200 h-1 w-full flex md:flex-row justify-start items-baseline p-20">
      <div className="p-5">
        <ul>
          <p className="text-gray-800 font-bold text-5xl pb-6">
            Chain<span className="text-slate-500">tools</span>
          </p>

          <div className="flex gap-6 pb-5">
            <BsTwitter className="text-2xl cursor-pointer hover:text-black" />
            <BsDiscord className="text-2xl cursor-pointer hover:text-black" />
            <BsTelegram className="text-2xl cursor-pointer hover:text-black" />
            <BsGithub className="text-2xl cursor-pointer hover:text-black" />
          </div>
        </ul>
        <div className="flex  justify-start items-center text-center p-5 bg-gray-50">
          <h1 className="text-gray-800 font-semibold"> @ 2021-2022 All rights reserved |</h1>

        </div>
      </div>
    </div>

    

  );
}

export default Footer;

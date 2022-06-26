import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-gray-100 h-40 w-full md:flex-col justify-start p-20 ">
        <ul>
          <p className="text-gray-800 font-bold text-4xl p-6">
            Chain<span className="text-slate-500">tools</span>
          </p>

          <div className=" flex p-6 gap-16 justify-start">
            <BsTwitter className="text-2xl cursor-pointer hover:text-black" />
            <BsDiscord className="text-2xl cursor-pointer hover:text-black" />
            <BsTelegram className="text-2xl cursor-pointer hover:text-black" />
            <BsGithub className="text-2xl cursor-pointer hover:text-black" />
          </div>
        </ul>

        </div>

    

  );
}

export default Footer;

import React from "react";
import { Router, useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (

    <div className=" h-10 w-full md:flex-col justify-start px-6 pt-10 pb-6 p-10 ">
        <ul>
          <p className="text-black font-bold text-4xl p-6">
            Chain<span className="text-slate-300">Tools</span>
          </p>

          <div className=" flex p-6 gap-16 justify-start">
            <BsTwitter onClick={() => window.location.href = 'https://twitter.com/ChaintoolsT'} className="text-3xl cursor-pointer sm:text-1xl hover:text-slate-500" />
            <BsDiscord onClick={() => window.location.href = 'https://discord.gg/ebd3nYeS'} className="text-3xl cursor-pointer hover:text-slate-500" />
            <BsTelegram onClick={() => window.location.href = 'https://t.me/chaintoolsT'} className="text-3xl cursor-pointer hover:text-slate-500" />
            <BsGithub onClick={() => window.location.href = 'https://github.com/Highlander-maker/chaintools.tech-frontend'} className="text-3xl cursor-pointer hover:text-slate-500" />
          </div>
        </ul>

        </div>

    

  );
}

export default Footer;

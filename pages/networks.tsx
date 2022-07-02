import React from "react";
import Layout from "../components/Layout";

function networks() {
  return (
    <Layout>
      {/* main div */}
      <div className="bg-slate-500 justify-center rounded-lg mt-400 py-5 grid grid-cols-1 sm:grid-col-2 lg:grid-cols-4 gap-3 md:gap-4 p-5 md:p-6">

        {/* Juno network */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-full" src="/juno.svg" alt="React ts" />
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
          <a href="https://www.junonetwork.io/">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
              </a>
          </div>
        </div>

        {/* Evmos */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-full p-10" src="/evmos-2.svg" alt="React ts" />

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
            <a href="https://evmos.org/">
              <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
                Read More
              </span>
            </a>
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
              <a
                href="https://blue.kujira.app/stake/kujiravaloper1rgt2ejrjzyaw36h6f5jdzdkrt422kf2n3g0daw"
                className="text-gray-900"
              >
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
            <a href="https://kujira.app/">
              <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
                Read More
              </span>
            </a>
          </div>
        </div>

        {/* Omniflix */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/omniflix.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              Omniflix{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                href="https://flix.omniflix.co/stake"
                className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-base">
              Decentralized media and network layer for Creators & Sovereign
              Communities powered by NFTs and related distribution protocols
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://www.omniflix.network/">
              <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
                Read More
              </span>
            </a>
          </div>
        </div>

        {/* Sentinel */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/sentinel.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              Sentinel{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                href="https://explorer.chaintools.tech/sentinel"
                className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-base">
              The Sentinel ecosystem is a global network of autonomous dVPN
              applications that enable private and censorship resistant internet
              access
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://sentinel.co/">
              <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300" >
                Read More
              </span>
            </a>
          </div>
        </div>

        {/* Comdex */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/comdex.jpeg" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              Comdex{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                href="https://explorer.chaintools.tech/comdex/staking/comdexvaloper1z6a9p43svtkzf5efmy78tae7qqz8p8cctyj6yg"
                className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-base">
              Decentralised Synthetic Assets Protocol
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
          </div>
        </div>

        {/* Sifchain */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/sifchain.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              Sifchain{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                href="https://wallet.keplr.app/#/sifchain/stake?modal=stake&validator=sifvaloper16752cplqs7yu5xgdchew52f23dtnu4ncm0pa4j&all-list=true"
                className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-base">
              Sifchain is the decentralized exchange where Cosmos meets
              Ethereum, and soon much more
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://sifchain.network/">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
            </a>
          </div>
        </div>

        {/* Kava */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/kava.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              Kava{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                href="https://explorer.chaintools.tech/kava/staking"
                className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-sm">
              Kava’s unique co-chain architecture enables connections to all of
              the world’s most used blockchains, allowing for the free flow of
              users, assets, and projects into the Kava Ecosystem.
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://www.kava.io/">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
            </a>
          </div>
        </div>

        {/* Bitsong */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/bitsong.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              Bitsong{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                href="https://explorer.chaintools.tech/bitsong/staking"
                className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-sm">
              Bitsong is a multifunctional blockchain-based ecosystem built to
              empower the music industry.
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
            </a>
          </div>
        </div>

        {/* Fetch.ai */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/fetchai.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              Fetch.ai{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                href="https://explorer.chaintools.tech/fetchhub/staking"
                className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-sm">
              Planning your life doesn't need to be complicated. Fetch.ai saves
              you time and money, so you can do more of what matters to you.
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://fetch.ai/">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
            </a>
          </div>
        </div>

        {/* Chihuahua chain */}

        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/chihuahua.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              Chihuahua{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                href="https://explorer.chaintools.tech/chihuahua/staking"
                className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-sm">
              Chihuahua is the first interoperable meme coin with a POS
              blockchain, making it one of the most utilized chains in the
              Cosmos ecosystem
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://www.chihuahua.wtf/">
              <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
                Read More
              </span>
            </a>
          </div>
        </div>

        {/* Decentr */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/decentr.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              Decentr{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                  href="https://explorer.chaintools.tech/decentr/staking/"
                  className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-sm">
              Creating a bridge between internet users and applications developed with distributed ledger technology,
              an open source platform, which enables you to manage and pay with your Personal Data Value.
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://decentr.net/">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
            </a>
          </div>
        </div>

        {/* Desmos */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/desmos.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              Desmos{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                  href="https://explorer.chaintools.tech/desmos/staking/"
                  className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-sm">
              Democratizing social media.
              A blockchain which serves as the backbone to empower the development of user-centric social networks.
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://desmos.network/">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
            </a>
          </div>
        </div>

        {/* e-Money */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/emoney.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              e-Money{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                  href="https://explorer.chaintools.tech/e-money/staking/"
                  className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-sm">
              Empowering people in the digital economy
              Welcome to the Next Generation Stablecoins for the Internet of Money.
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://e-money.com/">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
            </a>
          </div>
        </div>

        {/* FirmaChain */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/firmachain.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              FirmaChain{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                  href="https://explorer.chaintools.tech/firmachain/staking/"
                  className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-sm">
              Unlocking new limits of electronic contracts with blockchain technology,
              FirmaChain seeks to replace all written contracts governing social and legal issues
              through the use of electronic contract platform based on FirmaChain’s data blockchain.
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://firmachain.org/">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
            </a>
          </div>
        </div>

        {/* Galaxy */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/galaxy.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              Galaxy{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                  href="https://explorer.chaintools.tech/galaxy/staking/"
                  className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-sm">
              Create novel stories and bring vitality to the all Cosmos ecosystem.
              Own the stories and characters you created as NFT.
              Participate in Galaxy Metaverse with NFT.
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://galaxychain.zone/">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
            </a>
          </div>
        </div>

        {/* KiChain */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/kichain.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              KiChain{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                  href="https://explorer.chaintools.tech/kichain/staking/"
                  className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-sm">
              Bridging CeFi with DeFi Block by Block.
              Building products that people love, bringing value to the Ki ecosystem.
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://foundation.ki/">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
            </a>
          </div>
        </div>

        {/* Konstellation */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/konstellation.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              Konstellation{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                  href="https://explorer.chaintools.tech/konstellation/staking/"
                  className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-sm">
              Infrastructure for the DeFi Capital Markets
              Konstellation Network is a blockchain protocol, built on Cosmos SDK,
              creating a global infrastructure for the future of the decentralized capital markets.
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://konstellation.tech/">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
            </a>
          </div>
        </div>

        {/* Lum Network */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/lum.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              Lum Network{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                  href="https://explorer.chaintools.tech/lum-network/staking/"
                  className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-sm">
              Business Trust Engine
              Lum Network introduces the first decentralized protocol
              for businesses to build authentic trust with their customers.
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://lum.network/">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
            </a>
          </div>
        </div>

        {/* Medibloc */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/medibloc.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              Medibloc{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                  href="https://explorer.chaintools.tech/medibloc/staking/"
                  className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-sm">
              Own your health data. It's rightfully yours.
              MediBloc is creating a patient-centered health data ecosystem that
              can protect individual privacy and maximize the reliability of health data by developing
              ‘Panacea’, a high-performance blockchain optimized for health data exchange.
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://medibloc.com/en/">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
            </a>
          </div>
        </div>

        {/* MEME */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/meme.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              MeMe{" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                  href="https://explorer.chaintools.tech/meme/staking/"
                  className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-sm">
              Meme Network is a meme-friendly ecosystem embracing the advantages of Web 3.0 on transparency,
              irreversible data and collective consensus.
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://meme.sx/">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
            </a>
          </div>
        </div>

        {/* Rizon */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/rizon.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              Rizon {" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                  href="https://explorer.chaintools.tech/rizon/staking/"
                  className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-sm">
              RIZON Blockchain
              Digital Currency & Asset Hub.
              RIZON utilizes Tendermint engine and Cosmos Inter-Blockchain Communication Protocol to enable
              optimal business scalability and usability.
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://rizon.world/">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
            </a>
          </div>
        </div>

        {/* Vidulum */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/vidulum.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              Vidulum {" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                  href="https://explorer.chaintools.tech/vidulum/staking/"
                  className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-sm">
              Vidulum App is your one stop, multi-currency crypto web wallet.
              Hold, earn, and own your crypto assets in non-custodial fashion from any device, anytime.
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://vidulum.app/">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
            </a>
          </div>
        </div>

        {/* Bluzelle */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/bluzelle.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              Bluzelle {" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                  href="https://explorer.chaintools.tech/bluzelle/staking/"
                  className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-sm">
              The Blockchain for GameFi
              As new gamers enter crypto,
              Bluzelle provides an experience that meets their needs for quality games, storage and finance.
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://bluzelle.com/">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
            </a>
          </div>
        </div>

        {/* BeeZee */}
        <div className="bg-gray-200 max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-90 p-10" src="/beezee.png" alt="React ts" />

          <div className="px-6 py-4 lg:h-52">
            <span className="tracking-widest text-sm title-font font-medium text-black">
              {" "}
              BeeZee {" "}
            </span>
            <div className="border title-font text-lg font-medium mb-2 underline">
              <a
                  href="https://explorer.chaintools.tech/beezee/staking/"
                  className="text-gray-900"
              >
                STAKE
              </a>
            </div>

            <p className="text-gray-700 text-sm">
              Join BeeZee extended ecosystem
              BZEdge is upgrading and changing its name to BeeZee.
              Instant transactions & cutting edge technology providing unlimited utilities
            </p>
          </div>
          {/* button style */}
          <div className="px-6 pt-4 pb-2">
            <a href="https://getbze.com/">
            <span className="inline-block bg-gray-400 text-black px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-gray-300">
              Read More
            </span>
            </a>
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default networks;

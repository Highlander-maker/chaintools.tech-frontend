import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";



export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Chaintools.tech</title>
        <link rel="icon" href="chaintools-logo-clear.svg" />
      </Head>

      <Header />


      <div className="flex justify-between items-center border-black py-10 lg:py-20">
        <div className="px-10 space-y-40">
          <h1 className="text-5xl max-w-xl font-semibold">
          <p className="text-gray-800 font-bold text-6xl">
            Chain<span className="text-slate-500 text-6xl">tools</span>
          </p>
            Learn, stake, support the world of decentralised blockchains
          </h1>
          <h2 className="font-serif text-2xl">
            Production grade validators securing multiple chains across the
            cosmos eco-system. We validate, teach, offer services. Support us
            with your stake and earn high APY rewards paid out daily
          </h2>
        </div>
        

        <img
          className="hidden md:inline-flex object-none: h-68 w-96"
          src="chaintools-logo-black.svg"
          alt=""
        />
      </div>

      {/* Posts */}
     
      <Footer />
    </div>
  );
}

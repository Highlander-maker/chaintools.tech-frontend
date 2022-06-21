import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";



export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Chaintools.tech</title>
        <link rel="icon" href="chaintools-logo-clear.svg" />
      </Head>

      <Header />
      <div className="flex justify-between items-center bg-cyan-500  border-black py-10 lg:py-0">
        <div className="px-10 space-y-20">
          <h1 className="text-6xl max-w-xl font-semibold">
          <p className="text-gray-800 font-bold text-6xl pb-6">
            Chain<span className="text-slate-500 text-6xl">tools</span>
          </p>
            Learn, stake, support the world of decentralised blockchains
          </h1>
          <h2 className="font-serif">
            Production grade validators securing multiple chains accros the
            cosmos eco-system. We validate, teach, offer services. Support us
            with your stake and earn high APY rewards paid out daily
          </h2>
        </div>

        <img
          className="hidden md:inline-flex h-45 lg:-full mx-auto"
          src="chaintools-logo-black.svg"
          alt=""
        />
      </div>

      {/* Posts */}
     
      <Footer />
    </div>
  );
}

import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>ChainTools.tech</title>
        <link rel="icon" href="chaintools-logo-clear.svg" />
      </Head>

      <Header />

      <div className="flex-auto justify-between items-center border-black py-10 lg:py-20">
        <img className="object-fill fixed mix-blend-overlay md:object-fill" src="/background.svg" alt="" />
        <div className="px-10 space-y-40">
          <h1 className="text-slate-300 text-5xl max-w-xl font-semibold">
            <p className="text-black font-bold text-6xl">
              Chain<span className="text-slate-300 text-6xl">Tools</span>
            </p>
            Learn, stake, support the world of decentralised blockchains
          </h1>
          <h2 className="text-slate-100 font-serif text-2xl justify-start">
            Production grade validators securing multiple chains across the
            cosmos eco-system. We validate, teach, offer services. Support us
            with your stake and earn high APY rewards paid out daily
          </h2>
        </div>
      </div>

      {/* Posts */}

      <Footer />
    </div>
  );
}

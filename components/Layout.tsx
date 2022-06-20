import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }:any) {
  return (
    <div>
      <Head>
        <title>Chaintools.tech</title>
        <link rel="icon" href="chaintools-logo-clear.svg" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

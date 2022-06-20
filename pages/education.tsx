import React from "react";
import { RefreshIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import Header from "../components/Header";

function education() {
  return (
    <div>
      <Header />

      <div>
        <h1>Home</h1>
        <RefreshIcon className="h-8 w-8" />
      </div>
      <Footer />
    </div>
  );
}

export default education;

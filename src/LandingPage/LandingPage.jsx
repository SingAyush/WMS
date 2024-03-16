"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Team from "./Team";
import Footer from "./Footer";
import Image from "next/image";
import Static from "./Static";

const LandingPage = ({ setUserData,setWareid }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData("Welcome to gfg!");
      setIsLoading(false);
    }, 100);
  }, []);

  if (isLoading) {
    return (
      <div className="flex mt-64 items-center justify-center backdrop-blur-sm">
        <div className="flex flex-col justify-center items-center space-x-1 text-sm text-gray-400 ">
          <Image
            src="https://res.cloudinary.com/dqbcbqcbr/image/upload/v1710512140/wms-high-resolution-logo-black_kphgfg.svg"
            alt="My SVG"
            width={200}
            height={200}
          />

          <div class="flex mt-10 space-x-2 justify-center items-center  h-screent">
            <div class="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div class="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div class="h-8 w-8 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navbar setUserData={setUserData} setWareid= {setWareid}/>
      <HeroSection />
      <Static />
      <Team />
      <Footer />
    </div>
  );
};

export default LandingPage;

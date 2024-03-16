"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="text-white body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="https://res.cloudinary.com/dqbcbqcbr/image/upload/v1710512140/wms-high-resolution-logo-black_kphgfg.svg"
            width={400}
            height={300}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            WareHouse Management System
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            quaerat fugiat dolor totam non ea minima nostrum voluptates sunt
            consequatur nesciunt eum voluptatibus, vel inventore hic, dolores
            illo eveniet modi!
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Login
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

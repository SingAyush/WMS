"use client";
import React from "react";
import Link from "next/link";

const SideNav = () => {
  return (
    <div className="flex h-[100vh] text-md xl:text- w-[8rem] xl:w-[15rem]">
      <div className="w-16 bg-gray-800 flex  hover:bg-gray-800 transition duration-500 "></div>
      <div className="bg-gray-800 text-white w-48 flex md:flex-col pr-12 pt-6">
        <ul className="space-y-4 text-sm xl:text-xl">
          <li>
            <a
              href="/warehouse/search"
              className="block p-4 hover:bg-gray-700 transition duration-300"
            >
              Search
            </a>
          </li>
          <li>
            <a
              href="/warehouse/dashboard"
              className="block p-4 hover:bg-gray-700 transition duration-300"
            >
              DashBoard
            </a>
          </li>
          <li>
            <a
              href="/warehouse/workeradmin"
              className="block p-4 hover:bg-gray-700 transition duration-300"
            >
              Worker Management
            </a>
          </li>

          <li>
            <a
              href="/warehouse/delivery"
              className="block p-4 hover:bg-gray-700 transition duration-300"
            >
              Delivery Management
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;

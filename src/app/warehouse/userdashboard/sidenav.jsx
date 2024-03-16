"use client";
import React from "react";
import Link from "next/link";

const SideNav = () => {
  return (
    <div className="flex h-[52rem]">
      <div className="w-16 bg-gray-800 flex  hover:bg-gray-800 transition duration-500 "></div>
      <div className="bg-gray-800 text-white w-48 flex flex-col pr-12 pt-6">
        <ul className="space-y-4 lg:text-xl">
          <li>
            <a
              href="/warehouse/userdashboard/search"
              className="block p-4 hover:bg-gray-700 transition duration-300"
            >
              Search
            </a>
          </li>
          <li>
            <a
              href="/warehouse/userdashboard"
              className="block p-4 hover:bg-gray-700 transition duration-300"
            >
              DashBoard
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;

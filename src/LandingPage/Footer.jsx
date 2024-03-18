"use client";

import { GitHub, Twitter, Facebook, Instagram } from "@mui/icons-material";
import Image from "next/image";
import LanguageIcon from "@mui/icons-material/Language";

export default function Footer() {
  return (
    <footer className="bg-slate dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dqbcbqcbr/image/upload/v1710512140/wms-high-resolution-logo-black_kphgfg.svg"
                className="h-8 me-3"
                alt="WMS"
                height={40}
                width={40}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                WMS
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    WMS
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline"></a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Registration
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/login" className="hover:underline ">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/register" className="hover:underline">
                    Register
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline">
              WMS
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-1 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <GitHub />
            </a>
            <a
              href="/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <LanguageIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

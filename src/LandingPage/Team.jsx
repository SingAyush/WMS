"use client";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import Link from "next/link";

export default function Team() {
  return (
    <section class="text-white body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-2xl font-medium title-font mb-4 text-white">
            OUR TEAM
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            omnis sequi enim, nam fuga magni eos sunt eum veritatis? Hic optio
            voluptas at ullam atque enim accusamus mollitia dignissimos nulla!
          </p>
        </div>
        <div class="flex flex-wrap justify-center">
          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <Image
                alt="team"
                class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src=""
                height={40}
                width={40}
              />
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-white">
                  Ayush Singh
                </h2>
                <h3 class="text-gray-500 mb-3">Web Developer</h3>
                <p class="mb-4">Sophomore</p>
                <span class="inline-flex">
                  <Link class="text-gray-500" href="/">
                    <InstagramIcon />
                  </Link>
                  <Link class="ml-2 text-gray-500" href="/">
                    <FacebookIcon />
                  </Link>
                  <Link class="ml-2 text-gray-500" href="/">
                    <XIcon />
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <Image
                alt="team"
                class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src=""
                height={40}
                width={40}
              />
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-white">
                  Swadhin Kumar Nayak
                </h2>
                <h3 class="text-gray-500 mb-3">Web Developer</h3>
                <p class="mb-4">Sophomore</p>
                <span class="inline-flex">
                  <Link class="text-gray-500" href="/">
                    <InstagramIcon />
                  </Link>
                  <Link class="ml-2 text-gray-500" href="/">
                    <FacebookIcon />
                  </Link>
                  <Link class="ml-2 text-gray-500" href="/">
                    <XIcon />
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <Image
                alt="team"
                class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src=""
                height={40}
                width={40}
              />
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-white">
                  Anmol Mangrajan
                </h2>
                <h3 class="text-gray-500 mb-3">Web Developer</h3>
                <p class="mb-4">Sophomore</p>
                <span class="inline-flex">
                  <Link class="text-gray-500" href="/">
                    <InstagramIcon />
                  </Link>
                  <Link class="ml-2 text-gray-500" href="/">
                    <FacebookIcon />
                  </Link>
                  <Link class="ml-2 text-gray-500" href="/">
                    <XIcon />
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <Image
                alt="team"
                class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src=""
                height={200}
                width={200}
              />
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-white">Amlan</h2>
                <h3 class="text-gray-500 mb-3">Web Developer</h3>
                <p class="mb-4">Sophomore</p>
                <span class="inline-flex">
                  <Link class="text-gray-500" href="/">
                    <InstagramIcon />
                  </Link>
                  <Link class="ml-2 text-gray-500" href="/">
                    <FacebookIcon />
                  </Link>
                  <Link class="ml-2 text-gray-500" href="/">
                    <XIcon />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

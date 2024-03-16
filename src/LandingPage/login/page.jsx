"use client";
import { useState } from "react";
// import { Tab } from "./tabs";
import axios from "axios";
import Navbar from "@/LandingPage/Navbar";

export default function Login() {
  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:8080/worker/login", {
          emailid,
          password,
        })
        .then((res) => {
          console.log(res.data);
          sessionStorage.setItem("userData", res.data.userid);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  // const handleSignUp = async (e) => {
  //   e.preventDefault();
  //   try {
  //     axios
  //       .post("http://localhost:8080/workersignup", {
  //         emailid,
  //         password,
  //         name,
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //         sessionStorage.setItem("userData", res.data.userid);
  //         console.log(sessionStorage.getItem("userData"));
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <Navbar />
      <div className="w-[40rem] md:w-[50rem] mx-auto bg-sky-200 mt-5 border-4 rounded-xl">
        {/* <Tab label="Log In"> */}
        <div className="flex ">
          <div className="w-full px-24 md:px-48 bg-gradient-to-l from-slate-600 to-gray-700 flex items-center justify-center h-[40rem]">
            <div className="w-full mt-[-5rem]">
              <h1 className="text-3xl font-semibold mb-6 text-black text-center">
                Log In
              </h1>
              <div className="mt-4 flex flex-col lg:flex-row items-center justify-between"></div>

              <form action="#" method="POST" className="space-y-4">
                <div>
                  <label
                    for="email id"
                    className="block text-xl font-medium text-gray-200"
                  >
                    Email Id
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 "
                  ></input>
                </div>

                <div>
                  <label
                    for="password"
                    className="block text-xl font-medium text-gray-200"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  ></input>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white text-lg p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* </Tab> */}
      </div>
    </>
  );
}

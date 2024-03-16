"use client";
import { useState } from "react";
import { Tabs, Tab } from "./tabs";
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
        .post("http://localhost:8080/admin/login", {
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

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:8080/admin/signup", {
          emailid,
          password,
          name,
        })
        .then((res) => {
          console.log(res.data);
          sessionStorage.setItem("userData", res.data.userid);
          console.log(sessionStorage.getItem("userData"));
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <Tabs className="flex justify-center bg-slate-300 mx-5">
          <Tab label="Log In">
            <div className="flex ">
              <div className="w-full px-24 md:px-48 bg-gradient-to-r from-indigo-400 to-cyan-400 flex items-center justify-center h-[40rem]">
                <div className="w-full mt-[-5rem]">
                  <h1 className="text-3xl font-semibold mb-6 text-black text-center">
                    Log In
                  </h1>
                  <form
                    onSubmit={handleLogin}
                    method="POST"
                    className="space-y-4"
                  >
                    <div>
                      <label
                        for="email id"
                        className="block text-xl font-medium text-gray-700"
                      >
                        Email Id
                      </label>
                      <input
                        type="text"
                        id="emailid"
                        name="emailid"
                        value={emailid}
                        onChange={(e) => setEmailid(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded-md text-gray-700 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 "
                      ></input>
                    </div>

                    <div>
                      <label
                        for="empId"
                        className="block text-xl font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded-md text-gray-700 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                      ></input>
                    </div>
                    <div>
                      <button
                        onClick={handleLogin}
                        type="submit"
                        className="w-full bg-black text-white text-lg p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                      >
                        Log In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Tab>
          <Tab label="Sign Up">
            <div className="flex">
              <div className="w-full bg-gradient-to-r from-indigo-400 to-cyan-400 flex items-center justify-center h-[40rem]">
                <div className="max-w-md w-full p-6 mt-[1rem]">
                  <h1 className="text-3xl font-semibold mb-6 text-black text-center">
                    Sign Up
                  </h1>
                  <form
                    onSubmit={handleSignUp}
                    method="POST"
                    className="space-y-4"
                  >
                    <div>
                      <label
                        for="username"
                        className="block text-xl font-medium text-gray-700"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-gray-700"
                      ></input>
                    </div>
                    <div>
                      <label
                        for="email"
                        className="block text-xl font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        id="emailid"
                        name="emailid"
                        value={emailid}
                        onChange={(e) => setEmailid(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-gray-700"
                      ></input>
                    </div>
                    <div>
                      <label
                        for="password"
                        className="block text-xl font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-gray-700"
                      ></input>
                    </div>
                    <div>
                      <button
                        onClick={handleSignUp}
                        type="submit"
                        className="w-full bg-black text-white text-lg p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                  <div class="mt-10 mb-2 text-md text-gray-600 text-center pb-5">
                    <p>
                      Already have an account?{" "}
                      <a href="#" className="text-black hover:underline">
                        Login here
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

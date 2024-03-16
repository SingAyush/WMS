"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import { Tabs, Tab } from "./adminlogin/tabs";
import axios from "axios";
import React from "react";
import Modal from "react-modal";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Feedback", href: "/feedback", current: false },
  // { name: "Login", href: "/login", current: false },
  // { name: "AdminLogin", href: "/adminlogin", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ setUserData,setWareid }) {
  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [isOpenl, setIsOpenl] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    content: {
      height: "80%",
      borderRadius: "10px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

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
          setUserData(sessionStorage.getItem("userData"));
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err.response.data);
    }
  };
  const handleLoginWorker = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:8080/worker/login", {
          name:employeeName,
          empId:employeeId,
        })
        .then((res) => {
          console.log(res.data);
          sessionStorage.setItem("workerid", res.data.workerid);
          setWareid(sessionStorage.getItem("workerid"));
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
          setUserData(sessionStorage.getItem("userData"));
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const [employeeName, setEmployeeName] = useState()
  const [employeeId, setEmployeeId] = useState()

  return (
    <Disclosure as="nav" className="bg-gray-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    height={20}
                    width={20}
                    className="h-8 w-auto rounded-full"
                    src="https://res.cloudinary.com/dqbcbqcbr/image/upload/v1710512140/wms-high-resolution-logo-black_kphgfg.svg"
                    alt="WMS"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white text-lg"
                            : "text-gray-300 text-lg hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-lg font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}

                    <button
                      className="text-white  text-lg hover:bg-gray-700 px-4 rounded-lg"
                      onClick={() => setIsOpenl(true)}
                    >
                      Login
                    </button>
                    <Modal
                      isOpen={isOpenl}
                      onRequestClose={() => setIsOpenl(false)}
                      style={customStyles}
                    >
                      <button
                        onClick={() => setIsOpenl(false)}
                        className="float-right text-black"
                      >
                        X
                      </button>
                      <div className="w-[40rem] md:w-[50rem] mx-auto bg-sky-200 mt-5 border-4 rounded-xl">
                        {/* <Tab label="Log In"> */}
                        <div className="flex ">
                          <div className="w-full px-24 md:px-48 bg-gradient-to-l from-slate-600 to-gray-700 flex items-center justify-center h-[40rem]">
                            <div className="w-full mt-[-5rem]">
                              <h1 className="text-3xl font-semibold mb-6 text-black text-center">
                                Log In
                              </h1>
                              <div className="mt-4 flex flex-col lg:flex-row items-center justify-between"></div>

                              <form
                                action="#"
                                method="POST"
                                className="space-y-4 text-black"
                              >
                                <div>
                                  <label
                                    for="email id"
                                    className="block text-xl font-medium text-gray-200"
                                  >
                                    Employee Name
                                  </label>
                                  <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={employeeName}
                                    onChange={(e) => setEmployeeName(e.target.value)}
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 "
                                  ></input>
                                </div>

                                <div>
                                  <label
                                    for="password"
                                    className="block text-xl font-medium text-gray-200"
                                  >
                                    Employee Id
                                  </label>
                                  <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={employeeId}
                                    onChange={(e) => setEmployeeId(e.target.value)}
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                  ></input>
                                </div>
                                <div>
                                  <button
                                    onClick={handleLoginWorker}
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
                    </Modal>

                    <button
                      className="text-white  text-lg hover:bg-gray-700 px-4 rounded-lg"
                      onClick={() => setIsOpen(true)}
                    >
                      Admin Signup
                    </button>
                    <Modal
                      isOpen={isOpen}
                      onRequestClose={() => setIsOpen(false)}
                      style={customStyles}
                    >
                      <button
                        onClick={() => setIsOpen(false)}
                        className="float-right text-black"
                      >
                        X
                      </button>
                      <Tabs className="flex justify-center bg-slate-300 mx-5">
                        <Tab label="Log In">
                          <div className="flex ">
                            <div className="w-full px-24 md:px-48 bg-gradient-to-r from-slate-600 to-gray-700 flex items-center justify-center h-[40rem]">
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
                                      onChange={(e) =>
                                        setEmailid(e.target.value)
                                      }
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
                                      onChange={(e) =>
                                        setPassword(e.target.value)
                                      }
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
                            <div className="w-full bg-gradient-to-r from-slate-600 to-gray-700 flex items-center justify-center h-[40rem]">
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
                                      onChange={(e) =>
                                        setEmailid(e.target.value)
                                      }
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
                                      onChange={(e) =>
                                        setPassword(e.target.value)
                                      }
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
                                    <a
                                      href="#"
                                      className="text-black hover:underline"
                                    >
                                      Login here
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>
                      </Tabs>
                    </Modal>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <Image
                        height={12}
                        width={12}
                        className="h-8 w-8 rounded-full"
                        src="https://res.cloudinary.com/dqbcbqcbr/image/upload/v1709155519/undraw_pic_profile_re_7g2h_wdq66z.svg"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
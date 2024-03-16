"use client";
import axios from "axios";
import React, { useState } from "react";

const AddWorkerForm = () => {
  const [workerName, setworkerName] = useState("");
  const [workerAddress, setworkerAddress] = useState("");
  const [empid, setempid] = useState("");
  const [empsalary, setempsalary] = useState("");
  const userid = sessionStorage.getItem("userData");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8080/worker",
        {
          name: workerName,
          address: workerAddress,
          empId: empid,
          salary: empsalary,
        },
        {
          headers: { userid: userid },
        }
      )
      .then((res) => {
        alert("Worker Created Successfully");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // You can handle form submission here
    console.log("Form submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-black max-w-md m-auto bg-slate-400 p-6 shadow-slate-700 shadow-xl rounded-xl px-12 pt-10 pb-10 mb-4 mt-10 text-lg border-2 border-slate-800"
    >
      <h1 className="text-2xl text-center underline mb-5">
        Fill worker details
      </h1>
      <div className="mb-4">
        <label
          htmlFor="workerName"
          className="block text-gray-700 text-lg font-bold mb-2"
        >
          Worker Name:
        </label>
        <input
          type="text"
          id="workerName"
          value={workerName}
          onChange={(e) => setworkerName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter worker name"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="workerAddress"
          className="block text-gray-700 text-lg font-bold mb-2"
        >
          Worker Address:
        </label>
        <input
          type="text"
          id="workerAddress"
          value={workerAddress}
          onChange={(e) => setworkerAddress(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter Worker Address"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="empid"
          className="block text-gray-700 text-lg font-bold mb-2"
        >
          Worker Id:
        </label>
        <input
          type="text"
          id="empid"
          value={empid}
          onChange={(e) => setempid(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter Worker Id"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="empsalary"
          className="block text-gray-700 text-lg  font-bold mb-2"
        >
          Worker Salary:
        </label>
        <input
          type="number"
          id="empsalary"
          value={empsalary}
          onChange={(e) => setempsalary(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter Worker Salary"
        />
      </div>

      <button
        type="submit"
        className="bg-stone-800 hover:bg-slate-600 shadow-md shadow-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default AddWorkerForm;
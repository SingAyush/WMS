"use client";
import axios from "axios";
import React, { useState } from "react";

const WarehouseForm = () => {
  const [totalSpace, setTotalSpace] = useState("");
  const [goldzoneSize, setGoldzoneSize] = useState("");
  const [name, setName] = useState("");
  const userid = sessionStorage.getItem("userData");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8080/admin/warehouse",
        { name: name, size: totalSpace, sizeOfGoldZone: goldzoneSize },
        {
          headers: { userid: userid },
        }
      )
      .then((res) => {
        sessionStorage.setItem("wareid", res.data.wareid);
        sessionStorage.setItem("goldid", res.data.goldid);
        alert("WareHouse Created Successfully");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Form submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md m-auto text-black bg-slate-400 p-6 shadow-slate-700 shadow-xl rounded px-12 pt-10 pb-10 mb-4 mt-10 text-lg border-2 border-slate-800"
    >
      <div className="mb-4">
        <label
          htmlFor="totalSpace"
          className="block text-gray-700 text-lg font-bold mb-2"
        >
          Total Space of Inventory:
        </label>
        <input
          type="number"
          id="totalSpace"
          value={totalSpace}
          onChange={(e) => setTotalSpace(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter total space..."
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="goldzoneSize"
          className="block text-gray-700 text-lg  font-bold mb-2"
        >
          Size Allotted to Goldzone Area:
        </label>
        <input
          type="number"
          id="goldzoneSize"
          value={goldzoneSize}
          onChange={(e) => setGoldzoneSize(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter goldzone size..."
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="nameofinventory"
          className="block text-gray-700 text-lg  font-bold mb-2"
        >
          Name Of the Inventory:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter Inventory Name..."
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 shadow-md shadow-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default WarehouseForm;

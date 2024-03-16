"use client";
import React, { useState } from "react";
import axios from "axios";

const WarehouseForm = () => {
  const [inventory, setInventory] = useState({
    name: "",
    sizeOfGlodZone: "",
    size: "",
  });

  const handleChange = (event) => {
    const { name, size, sizeOfGlodZone } = event.target;
    setInventory((prevInventory) => ({
      ...prevInventory,
      [name]: value,
      [size]: value,
      [sizeOfGlodZone]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/admin/warehouse",
        {
          ...warehouse,
        },
        {
          method: "POST",
          headers: {
            userid: "",
          },
          body: {
            name: warehouseData.name,
            size: warehouseData.size,
            sizeOfGlodZone: warehouseData.goldzoneSize,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      console.log(resData);
      setInventory({ name: "", size: "", sizeOfGlodZone: "" });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10"
    >
      <div className="mb-4">
        <label
          htmlFor="totalSpace"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Total Space of Inventory:
        </label>
        <input
          type="number"
          id="size"
          value={inventory.size}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter total space..."
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="goldzoneSize"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Size Allotted to Goldzone Area:
        </label>
        <input
          type="number"
          id="sizeOfGlodZone"
          value={inventory.sizeOfGlodZone}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter goldzone size..."
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Inventory Name:
        </label>
        <input
          type="number"
          id="name"
          value={inventory.name}
          required
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter Name..."
        />
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default WarehouseForm;

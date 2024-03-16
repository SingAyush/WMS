"use client";
import React, { useState } from "react";
import axios from "axios";

const Product = () => {
  const [newProduct, setNewProduct] = useState({
    productName: "",
    productId: "",
    size: "",
    area: "",
  });
  const [userInfo, setUserInfo] = useState({
    userid: "",
    wareid: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/admin/product",
        {
          ...newProduct,
        },
        {
          headers: {
            userid: "65f31c2d5fff7604e1bfef3f",
            wareid: "65f4856d66ba597ad4570071",
          },
        }
      );
      console.log("Response from backend:", response.data);
      setNewProduct({ productName: "", productId: "", size: "", area: "" });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="flex-1 bg-gray-900 p-10 h-screen">
      <div className="">
        <div className="">
          <div className="flex items-center mb-4">
            <label
              htmlFor="productName"
              className="w-24 font-medium text-gray-300"
            >
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              value={newProduct.productName}
              onChange={handleInputChange}
              className="flex-1 ml-2 bg-gray-800 text-gray-300 border-gray-700 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center mb-4">
            <label
              htmlFor="productId"
              className="w-24 font-medium text-gray-300"
            >
              Product ID
            </label>
            <input
              type="text"
              name="productId"
              placeholder="Product ID"
              value={newProduct.productId}
              onChange={handleInputChange}
              className="flex-1 ml-2 bg-gray-800 text-gray-300 border-gray-700 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="size" className="w-24 font-medium text-gray-300">
              Size
            </label>
            <select
              name="size"
              value={newProduct.size}
              onChange={handleInputChange}
              className="flex-1 ml-2 bg-gray-800 text-gray-300 border-gray-700 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="area" className="w-24 font-medium text-gray-300">
              Area
            </label>
            <input
              type="text"
              name="area"
              placeholder="Area"
              value={newProduct.area}
              onChange={handleInputChange}
              className="flex-1 ml-2 bg-gray-800 text-gray-300 border-gray-700 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={handleAddProduct}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

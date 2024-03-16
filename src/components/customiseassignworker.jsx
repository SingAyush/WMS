"use client";
import React, { useState, useEffect } from "react";
import WorkerCard from "./WorkerCard";
import Image from "next/image";
import axios from "axios";
// import "./search.css";

const AssignWorkerForm = () => {
  //   const [totalSpace, setTotalSpace] = useState("");
  //   const [goldzoneSize, setGoldzoneSize] = useState("");
  //   const [smallSortableSize, setSmallSortableSize] = useState("");
  //   const [largeSortableSize, setLargeSortableSize] = useState("");
  //   const [largeNonSortableSize, setLargeNonSortableSize] = useState("");
  //   const [numberOfSubsections, setNumberOfSubsections] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // You can handle form submission here
  //     console.log("Form submitted!");
  //   };
  const wareid = sessionStorage.getItem("wareid");
  const userid = sessionStorage.getItem("userData");
  const [workers, setWorkers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/workers", {
        headers: { userid: userid },
      })
      .then((res) => {
        setWorkers(res.data.workers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userid]);

  useEffect(() => {
    console.log(workers);
  }, [workers]);
  console.log(workers);
  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/product", {
        headers: { wareid: wareid },
      })
      .then((res) => {
        setProducts(res.data.products);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [wareid]);

  useEffect(() => {
    console.log(products);
  }, [products]);
  console.log(products);

  // function handleKeyDown(event) {
  //   if (event.keyCode === 13) {
  //     () => searchMovies(searchTerm)
  //   }
  // }
  let workid = "";
  const handleWorker = (worker) => {
    workid = worker._id;
  };
  const handleProduct = (product) => {
    axios.post(
      "http://localhost:8080/admin/assignwork/${workid}/${product._id}",
      {},
      { headers: {} }
    );
  };

  return (
    <div className="w-[80vw] h-[120vh] overflow-scroll m-auto bg-slate-400 p-6 shadow-slate-700 shadow-xl rounded px-12 pt-10 pb-10 mb-4 mt-10 text-lg border-2 border-slate-800">
      <h1 className="text-2xl text-center underline mb-5">Select Workers</h1>
      <div>
        <div className="flex">
          <div className="m-auto">
            {/* Ternary Operator */}
            {workers?.length > 0 ? (
              <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  m-auto w-[80%] ">
                {workers?.map((worker) => (
                  <button
                    className=" movie p-4 m-10 w-[10rem] bg-slate-600 shadow-md shadow-black hover:bg-slate-700 border-2 border-slate-800 text-white"
                    key={worker._id}
                    onClick={() => handleWorker(worker)}
                  >
                    <p className="text-center">{worker.name}</p>
                    <p className="text-center">{worker.empId}</p>
                    <h3 className="text-center">{worker.address}</h3>
                    <h3 className="text-center">{worker.salary}</h3>
                  </button>
                ))}
              </div>
            ) : (
              <div className="empty">
                <h2>No products found</h2>
              </div>
            )}
          </div>
        </div>
      </div>
      <h1 className="text-2xl text-center underline mb-5">Select Products</h1>
      <div>
        <div className="flex">
          <div className="m-auto">
            {/* Ternary Operator */}
            {products?.length > 0 ? (
              <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  m-auto w-[80%] ">
                {products?.map((product) => (
                  <button
                    className=" movie p-4 m-10 w-[10rem] bg-slate-600 shadow-md shadow-black hover:bg-slate-700 border-2 border-slate-800 text-white"
                    key={product._id}
                    onClick={() => handle}
                  >
                    <p className="text-center">{product.productId}</p>
                    <p className="text-center">{product.productName}</p>
                    <h3 className="text-center">{product.size}</h3>
                    <h3 className="text-center">{product.area}</h3>
                  </button>
                ))}
              </div>
            ) : (
              <div className="empty">
                <h2>No products found</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignWorkerForm;

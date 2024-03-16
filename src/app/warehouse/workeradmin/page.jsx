"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SideNav from "@/components/sidenav";
import Navbar from "@/components/navbar";

import Modal from "react-modal";
import AddWorkerForm from "@/components/customiseaddworker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function WorkerForm() {
  // const [name, setName] = useState("");
  // const [empId, setEmpId] = useState("");
  // const [address, setAddress] = useState("");
  // const [salary, setSalary] = useState("");

  // const handleCreateWorker = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:8080/worker", {
  //       name,
  //       empId,
  //       address,
  //       salary,
  //     },{
  //       headers: {
  //         userId: "65f31c2d5fff7604e1bfef3f"
  //       },
  //     });
  //     if (response && response.data) {
  //       console.log(response.data);
  //     } else {
  //       console.error("Empty response received.");
  //     }
  //   } catch (error) {
  //     console.error("Error creating worker:", error.response.data.message);
  //   }
  // };

  const [createWorkerIsOpen, setCreateWorkerIsOpen] = useState(false);
  const [assignWorkerIsOpen, setAssignWorkerIsOpen] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    content: {
      width: "90vw",
      height: "100vh",
      borderRadius: "10px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const wareid = sessionStorage.getItem("wareid");
  const userid = sessionStorage.getItem("userData");
  const goldid = sessionStorage.getItem("goldid");
  const [workers, setWorkers] = useState([]);
  const [products, setProducts] = useState([]);
  const [time, setTime] = useState();
  const [date, setDate] = useState();

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

  // function handleKeyDown(event) {
  //   if (event.keyCode === 13) {
  //     () => searchMovies(searchTerm)
  //   }
  // }
  let workid = "";
  const handleWorker = (worker) => {
    workid = worker._id;
    console.log(workid);
  };
  let productid = "";
  const handleProduct = (product) => {
    productid = product._id;
    console.log(productid);
  };
  const handleWork = () => {
    axios
      .post(
        "http://localhost:8080/admin/assignwork/${workid}/${productid}",
        { time: time, date: date },
        { headers: { goldid: goldid, wareid: wareid } }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-left gap-20 items-start bg-slate-300">
        <SideNav />
        <div className="buttons grid grid-cols-1 md:grid-cols-2">
          <div className=" bg-zinc-600 text-white text-xl hover:bg-slate-700 shadow-lg rounded-lg p-6 mr-10 mt-5 text-center">
            <button
              className="text-white  text-lg"
              onClick={() => setCreateWorkerIsOpen(true)}
            >
              Create Worker
            </button>
            <Modal
              isOpen={createWorkerIsOpen}
              onRequestClose={() => setCreateWorkerIsOpen(false)}
              style={customStyles}
            >
              <button
                onClick={() => setCreateWorkerIsOpen(false)}
                className="float-right"
              >
                X
              </button>
              <AddWorkerForm />
            </Modal>
          </div>

          <div className=" bg-zinc-600 text-white text-xl hover:bg-slate-700 shadow-lg rounded-lg p-6 mr-10 mt-5 text-center">
            <button className="text-white  text-lg">Assign Work</button>
          </div>
          <h1 className=" p-7 text-black font-semibold text-3xl text-center">
            Select Worker
          </h1>
          {workers?.map((worker) => (
            <button
              className=" movie p-4 m-10 bg-slate-600 shadow-md shadow-black hover:bg-slate-700 border-2 border-slate-800 text-white"
              key={worker._id}
              onClick={() => handleWorker(worker)}
            >
              <p className="text-center">{worker.name}</p>
              <p className="text-center">{worker.empId}</p>
              <h3 className="text-center">{worker.address}</h3>
              <h3 className="text-center">{worker.salary}</h3>
            </button>
          ))}
          <h1 className=" p-7 text-black font-semibold text-3xl text-center">
            Select Product
          </h1>
          <div>
            {products?.map((product) => (
              <button
                className=" movie p-4 m-10 w-[10rem] bg-slate-600 shadow-md shadow-black hover:bg-slate-700 border-2 border-slate-800 text-white"
                key={product._id}
                onClick={() => handleProduct(product)}
              >
                <p className="text-center">{product.productId}</p>
                <p className="text-center">{product.productName}</p>
                <h3 className="text-center">{product.size}</h3>
                <h3 className="text-center">{product.area}</h3>
              </button>
            ))}
          </div>
          <form className="flex justify-around mx-10">
            <input
              type="date"
              name="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border-solid border-2 border-black bg-slate-300 cursor-pointer px-3 py-1 rounded-2xl mx-10"
            />
            <input
              type="time"
              name="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="border-solid border-2 border-black bg-slate-300 cursor-pointer px-3 py-1 rounded-2xl"
            />
            <button
              type="submit"
              onClick={handleWork}
              className="border-solid border-2 border-black bg-sky-300 cursor-pointer px-3 py-1 rounded-2xl hover:bg-sky-500"
            >
              Assign Task
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default WorkerForm;

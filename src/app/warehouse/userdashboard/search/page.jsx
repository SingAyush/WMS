"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SearchIcon from "./search.svg";
import ProductCard from "./productcard";
import "./search.css";
import SideNav from "@/components/sidenav";
import Navbar from "@/components/navbar";
import axios from "axios";

export default function search() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/product", {
        headers: {
          wareid: "65f4af54ee5bcdbc5f56f105",
        },
      })
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex">
        <SideNav />
        <div className="m-auto">
          <div className="search m-auto">
            <input
              value=" "
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for Products"
            />
            <Image src={SearchIcon} alt="search" height={12} width={12} />
          </div>

          <div>
            {products?.map((product) => (
              <>
                <p className="text-center">{product.productName}</p>
                <p className="text-center">{product.size}</p>
                <h3 className="text-center">{product.area}</h3>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

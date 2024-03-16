"use client";
import LandingPage from "@/LandingPage/LandingPage";
import WareHouse from "@/WareHouse/WareHouse";
import { useState } from "react";
import Dashboard from "./warehouse/userdashboard/dashboard"

export default function Home() {
  const [userData, setUserData] = useState(sessionStorage.getItem("userData"));
  const [workerid, setWareid] = useState(sessionStorage.getItem("workerid"))

  return (
    
    <>
    {workerid?<Dashboard/>:userData ? <WareHouse /> :  <LandingPage setUserData={setUserData} setWareid={setWareid}/>}
    </>
  );
}
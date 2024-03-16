"use client";
import Dashboard from "./dashboard";
import Navbar from "./navbar";
import SideNav from "./sidenav";

export default function warehouse() {
  return (
    <>
     <Navbar />
    <div className="flex">
     <SideNav />
      <Dashboard />
    </div>
    </>
  );
}
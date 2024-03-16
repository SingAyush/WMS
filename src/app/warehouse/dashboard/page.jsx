"use client";
import Dashboard from "@/components/dashboard";
import Navbar from "@/components/navbar";
import SideNav from "@/components/sidenav";

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

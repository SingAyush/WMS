"use client";
import Navbar from "@/components/navbar";
import SideNav from "@/components/sidenav";
import { useState } from "react";

const deliveryMen = [
  {
    id: 1,
    arrivalTime: "9:00 AM",
    name: "Dhiraj",
    organization: "Delivery Company A",
    averageRating: 4.5,
    review: "Great service!",
    status: "Delivered",
    deliveryLocation: "Ambagan Rourkela",
  },
  {
    id: 2,
    arrivalTime: "10:30 AM",
    name: "Aman",
    organization: "Delivery Company B",
    averageRating: 4.2,
    review: "Fast and reliable",
    status: "In Transit",
    deliveryLocation: "Sector-2 Rourkela",
  },
  {
    id: 3,
    arrivalTime: "12:00 PM",
    name: "Kishan",
    organization: "Delivery Company C",
    averageRating: 4.7,
    review: "Excellent communication",
    status: "Scheduled",
    deliveryLocation: "Forum Mall Rourkela",
  },
  {
    id: 4,
    arrivalTime: "1:30 PM",
    name: "Aditya",
    organization: "Delivery Company D",
    averageRating: 3.8,
    review: "Always on time",
    status: "Delivered",
    deliveryLocation: "Sector-2 Rourkela",
  },
  {
    id: 5,
    arrivalTime: "3:00 PM",
    name: "Tejash",
    organization: "Delivery Company E",
    averageRating: 4.6,
    review: "Very courteous",
    status: "In Transit",
    deliveryLocation: "Ambagan Rourkela",
  },
  {
    id: 6,
    arrivalTime: "4:30 PM",
    name: "ACP",
    organization: "Delivery Company F",
    averageRating: 4.8,
    review: "Exceptional service",
    status: "Scheduled",
    deliveryLocation: "Forum Mall Rourkela",
  },
  {
    id: 7,
    arrivalTime: "6:00 PM",
    name: "Aniket",
    organization: "Delivery Company G",
    averageRating: 3.2,
    review: "Friendly and efficient",
    status: "In Transit",
    deliveryLocation: "Koelnagar Rourkela",
  },
  {
    id: 8,
    arrivalTime: "7:30 PM",
    name: "Srikant",
    organization: "Delivery Company H",
    averageRating: 4.9,
    review: "Always goes the extra mile",
    status: "Scheduled",
    deliveryLocation: "Ambagan Rourkela",
  },
  {
    id: 9,
    arrivalTime: "9:00 PM",
    name: "Raj",
    organization: "Delivery Company I",
    averageRating: 4.1,
    review: "Polite and professional",
    status: "Delivered",
    deliveryLocation: "Sector-2 Rourkela",
  },
  {
    id: 10,
    arrivalTime: "10:30 PM",
    name: "Kiran",
    organization: "Delivery Company J",
    averageRating: 3,
    review: "Prompt and reliable",
    status: "In Transit",
    deliveryLocation: "Koelnagar Rourkela",
  },
];

const DeliveryMan = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideNav />
        <div className="flex-1 bg-gray-400 p-10 h-screen">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Arrival Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Organization
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Average Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Review
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-900 divide-y divide-gray-700">
              {deliveryMen.map((deliveryMan) => (
                <tr key={deliveryMan.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {deliveryMan.arrivalTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {deliveryMan.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {deliveryMan.organization}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {deliveryMan.averageRating}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {deliveryMan.review}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DeliveryMan;

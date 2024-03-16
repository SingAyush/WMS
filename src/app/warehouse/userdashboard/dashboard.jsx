"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const WorkDashboard = () => {
  const [workers, setWorkers] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const userIdFromHeader = "65f32a44d5eeac61b2e1e406";
    setUserId(userIdFromHeader);

    axios.get("http://localhost:8080/works", {
      headers: { "workid": userIdFromHeader }
    })
      .then((response) => {
        setWorkers(response.data.tasks);
        console.log(response.data.tasks);
      })
      .catch((error) => {
        console.error("Error fetching worker data:", error);
      });
  }, []);

  return (
    <div className="flex-1 bg-gray-900 p-10 h-screen">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Product ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Time
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              IsComplete
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700">
          {workers.map((worker, index) => (
            <tr key={worker.id + index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {worker._id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {worker.time}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {worker.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {worker.isComplete ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkDashboard;

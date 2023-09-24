import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Jobs = () => {
  const manyjobs = useLoaderData();
  const [expandedJobId, setExpandedJobId] = useState(null);

  const handleApplyClick = () => {
    // Display a toast message when the "Apply" button is clicked
    toast.success("You applied for the job!");
  };

  return (
    <div>
      <ToastContainer />
      {manyjobs.map((job) => (
        <div
          key={job.id}
          className="bg-white shadow-md rounded-lg p-4 mb-4"
        >
          <div className="flex items-center mb-2">
            <img
              src={job.logo}
              alt={`${job.company_name} Logo`}
              className="w-16 h-16 rounded-full"
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">{job.job_title}</h2>
              <p className="text-gray-600">{job.company_name}</p>
              <p className="text-gray-600">{job.remote_or_onsite}</p>
            </div>
          </div>
          <div className="mb-2">
            <p className="text-gray-700">
              <span className="font-semibold">Location:</span> {job.location}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Job Type:</span> {job.job_type}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Salary:</span> {job.salary}
            </p>
          </div>
          {expandedJobId === job.id && (
            <>
              <div className="mb-2">
                <h3 className="text-lg font-semibold">Job Description</h3>
                <p className="text-gray-700">{job.job_description}</p>
              </div>
              <div className="mb-2">
                <h3 className="text-lg font-semibold">Job Responsibility</h3>
                <p className="text-gray-700">{job.job_responsibility}</p>
              </div>
              <div className="mb-2">
                <h3 className="text-lg font-semibold">Educational Requirements</h3>
                <p className="text-gray-700">{job.educational_requirements}</p>
              </div>
              <div className="mb-2">
                <h3 className="text-lg font-semibold">Experience</h3>
                <p className="text-gray-700">{job.experiences}</p>
              </div>
            </>
          )}
          <div className="flex justify-between items-center">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-full"
              onClick={() => {
                if (expandedJobId === job.id) {
                  setExpandedJobId(null); // Hide job if it's currently expanded
                } else {
                  setExpandedJobId(job.id); // Show job if it's not expanded
                }
              }}
            >
              {expandedJobId === job.id ? "Hide Job" : "See Job"}
            </button>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-full"
              onClick={handleApplyClick}
            >
              Apply
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;

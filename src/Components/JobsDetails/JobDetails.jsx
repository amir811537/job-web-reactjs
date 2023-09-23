import { useLoaderData, useParams } from "react-router-dom";

import { BsCalendarWeek } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../uitility/Localstorage";

const JobDetails = () => {
  // const {logo,id,job_title,remote_or_onsite,company_name,location,experiences,job_type,salary,job_description}=jobs;
  const jobs = useLoaderData();
  const { id } = useParams();
  const idint = parseInt(id);
  const job = jobs.find((job) => job.id === idint);
  console.log(job);

  const handelApplyjob = () => {
saveJobApplication(idint);
    toast("you apply this job");
  };

  return (
    <div>
      <p className="text-5xl font-extrabold text-center py-4">Job Details</p>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3 p-6">
          <img className="mx-auto w-[300px] py-4" src={job.logo} alt="" />
          <h2 className="text-2xl font-extrabold">
            Job Title: {job.job_title}
          </h2>
          <p className="py-6 font-bold">
            Job Description: {job.job_description}
          </p>
          <p className="py-4 font-bold">
            Job Responsibility: {job.job_responsibility}
          </p>
          <p className="py-4 font-bold">
            Educational Requirements: Bachelor in any Discipline
          </p>
          <p className="py-4 font-bold">Experiences: {job.experiences}</p>
        </div>
        <div className="border bg-gray-200 p-5">
          <p className="text-center text-2xl font-bold">Job Details</p>

          <div className="mb-4">
            <hr className="border-t border-gray-400" />
          </div>

          <div className="mb-4">
            <h2 className="flex py-2 items-center">
              <AiOutlineDollarCircle className="mr-2 text-[#7E90FE] text-xl" />
              Salary: {job.salary}
            </h2>
            <h2 className="flex items-center">
              <BsCalendarWeek className="mr-2 text-[#7E90FE] text-xl" />
              Job Type: {job.job_type}
            </h2>
          </div>

          <div className="mb-4">
            <hr className="border-t border-gray-400" />
          </div>

          <h2 className="text-2xl">Contact Information:</h2>

          <div className="mb-4">
            <hr className="border-t border-gray-400" />
          </div>

          <p className="flex items-center py-2">
            <BsTelephone className="mr-2 text-xl text-[#7E90FE]" />
            <span className="font-bold">Phone:</span>{" "}
            {job.contact_information.phone}
          </p>
          <p className="flex items-center py-2">
            <AiOutlineMail className="mr-2 text-xl text-[#7E90FE]" />
            <span className="font-bold">Email:</span>{" "}
            {job.contact_information.email}
          </p>
          <p className="flex">
            <GoLocation className="mr-2 text-3xl text-[#7E90FE]" />
            <span className="font-bold">Address:</span>{" "}
            {job.contact_information.address}
          </p>

          <div className="py-6">
            <hr className="border-t border-gray-400" />
          </div>

          <div className="py-4">
            <button onClick={handelApplyjob} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] w-full">
              Apply Now
            </button>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

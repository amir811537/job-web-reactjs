import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../uitility/Localstorage";
import { IoIosArrowDropdown } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";

const Appled = () => {
  const jobs = useLoaderData();
  const [appledjob, setAppleidjobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appledjob);
    } else if (filter === "remote") {
      const remoteJobs = appledjob.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appledjob.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplications();
    if (jobs.length > 0) {
      //   const jobAplied = jobs.filter((job) => storedJobIds.includes(job.id));
      const jobApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobApplied.push(job);
        }
      }
      setAppleidjobs(jobApplied);
      setDisplayJobs(jobApplied);
      console.log(jobApplied);
    }
  }, [jobs]);
  return (
    <div className="container mx-auto">
      <div className="flex justify-end">
        <details className="dropdown">
          <summary className="m-1 btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            Filter By{" "}
            <IoIosArrowDropdown className="text-xl"></IoIosArrowDropdown>{" "}
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a onClick={() => handleJobsFilter("all")}>All</a>
            </li>
            <li>
              <a onClick={() => handleJobsFilter("remote")}>Remote</a>
            </li>
            <li>
              <a onClick={() => handleJobsFilter("onsite")}>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <h1 className="text-3xl text-center py-3 font-bold">
        Applied Job {appledjob.length}
      </h1>

      {displayJobs.map((job) => (
        <div
          className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          key={job.id}
        >
          <div>
            <img className="w-1/2 md:w-1/5" src={job.logo} alt="" />
          </div>
          <div className="p-4">
            <p>{job.job_title}</p>
            <p>{job.company_name}</p>
            <p>{job.remote_or_onsite}</p>
            <div className="flex flex-col md:flex-row items-center">
              <p className="flex items-center mb-2 md:mb-0 mr-4">
                <CiLocationOn></CiLocationOn> {job.location}
              </p>
              <p className="flex items-center">
                <AiOutlineDollarCircle></AiOutlineDollarCircle>
                {job.salary}
              </p>
            </div>
          </div>
          <div>
            <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
              View Details
            </button>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Appled;

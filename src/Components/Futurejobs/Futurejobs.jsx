import { useEffect, useState } from "react";
import Job from "./Job/Job";


const Futurejobs = () => {

    const [jobs,setjobs]=useState([]);
const [dataLength,setDataLength]=useState(4)


    useEffect(()=>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data =>setjobs(data));

    },[])


    return (
        <div>
        <div className="text-center">
          <h3 className="text-3xl md:text-5xl">Future Jobs: {jobs.length}</h3>
          <p>Explore thousands of job opportunities with all the information you need. It's your future</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.slice(0, dataLength).map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
        <div className="text-center py-6">
  <div className={dataLength === jobs.length ? 'hidden' : ''}>
    <button onClick={() => setDataLength(jobs.length)} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
      See ALL
    </button>
  </div>
</div>

        </div>
      
      
    );
};

export default Futurejobs;
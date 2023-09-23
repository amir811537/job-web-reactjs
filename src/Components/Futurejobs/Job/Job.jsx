
import { CiLocationOn, } from "react-icons/ci";
import { AiOutlineDollarCircle, } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({job}) => {




    const {logo,id,job_title,remote_or_onsite,company_name,location,experiences,job_type,salary,job_description}=job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <img className="w-1/3 pl-10 pt-7" src={logo} />
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="">
            <button className=" mr-4 text-[#7E90Fe] px-10 py-2 font-extrabold border  border-[#7E90FE]">{remote_or_onsite}</button>
           
            <button className=" mr-4 text-[#7E90Fe] px-10 py-2 font-extrabold border  border-[#7E90FE]">{job_type}</button>
       
          </div>
          <div className=" flex items-start">
     <h2 className="flex mr-2">  <CiLocationOn className="text-2xl"></CiLocationOn>{location}</h2>
     <h2 className="flex mr-2"><AiOutlineDollarCircle  className="text-2xl"></AiOutlineDollarCircle>{salary}</h2>
          </div>

          <div className="card-actions justify-start">
            <Link to={ `/job/${id}`}>
                   <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">view details</button>
                   </Link>
                   
          </div>
        </div>
      </div>
    );
};

export default Job;
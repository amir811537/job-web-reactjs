const Banner = () => {
  return (
    <div>
      <div className=" py-8 px-4 md:px-16 lg:px-24 flex flex-col md:flex-row items-center">
        {/* Left Side */}
        <div className="md:w-1/2  text-center md:text-left">
          <h1 className="text-5xl text-[#757575] font-extrabold mb-4">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-[#9873FF]">Dream Job</span>
          </h1>
          <p className="text-lg text-[#757575] mb-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white hover:bg-blue-200 text-lg py-2 px-4 rounded-full">
            Get Started
          </button>
        </div>

        {/* Right Side (Image) */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="/assets/user.png"
            alt="Banner Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

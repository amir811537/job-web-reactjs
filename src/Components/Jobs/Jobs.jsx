

const Jobs = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center mb-4">
        <img src={logo} alt={`${company_name} Logo`} className="w-16 h-16 rounded-full" />
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{job_title}</h2>
          <p className="text-gray-600">{company_name}</p>
          <p className="text-gray-600">{remote_or_onsite}</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-gray-700">
          <span className="font-semibold">Location:</span> {location}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Job Type:</span> {job_type}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Salary:</span> {salary}
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Job Description</h3>
        <p className="text-gray-700">{job_description}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Job Responsibility</h3>
        <p className="text-gray-700">{job_responsibility}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Educational Requirements</h3>
        <p className="text-gray-700">{educational_requirements}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Experience</h3>
        <p className="text-gray-700">{experiences}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Contact Information</h3>
        <p className="text-gray-700">
          <span className="font-semibold">Phone:</span> {contact_information.phone}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span> {contact_information.email}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Address:</span> {contact_information.address}
        </p>
      </div>
    </div>
    );
};

export default Jobs;
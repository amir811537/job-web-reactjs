
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Statistics = () => {
  const jobData = [
    {
      "id": 1,
      "job_title": "Technical Database Engineer",
      "company_name": "Google LLC",
      "min_salary": 100000,
      "max_salary": 150000
    },
    {
      "id": 2,
      "job_title": "Senior Product Designer",
      "company_name": "Netflix",
      "min_salary": 200000,
      "max_salary": 300000
    },
    // ... (other job data entries)
  ];

  return (
    <div className='text-center'>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-full md:w-3/4 lg:w-1/2'>
          <BarChart
            width={window.innerWidth <= 768 ? window.innerWidth - 20 : 600} // Adjust width for mobile screens
            height={window.innerWidth <= 768 ? 300 : 400} // Adjust height for mobile screens
            data={jobData}
          >
            <XAxis dataKey="company_name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="min_salary" fill="#8884d8" />
            <Bar dataKey="max_salary" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

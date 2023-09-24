import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-red-600 mb-4">
            Oops, an error occurred!
          </h1>

         <div className=" grid grid-cols-2">
         <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
          >
            Refresh Page
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300">
            <Link to="/">go home</Link>
          </button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

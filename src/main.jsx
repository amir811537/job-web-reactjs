import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Root/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Jobs from './Components/Jobs/Jobs';
import Appled from './Components/Appled/Appled';
import Statistics from './Components/Statistics/Statistics';
import Blogs from './Components/Blogs/Blogs';
import JobDetails from './Components/JobsDetails/JobDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
  
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/jobs',
        element: <Jobs></Jobs>
      },
      {
        path:'/appled',
        element:<Appled></Appled>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader: ()=>fetch('jobs.json')
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

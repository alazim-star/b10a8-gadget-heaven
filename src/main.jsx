import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import DashBoard from './Components/DashBoard/DashBoard';
import About from './Components/about/About';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      
      
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      
    
    ]
  },
  
]);








createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)

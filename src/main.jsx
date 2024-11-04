import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import DashBoard from './Components/DashBoard/DashBoard';
import About from './Components/about/About';
import ViewDetails from './Components/ViewDetails/ViewDetails.jsx';
import CardProducts from './Components/CardProducts/CardProducts';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../categories.json'), 
        children: [
          {
            path: "/",
            element: <CardProducts></CardProducts>,
            loader: () => fetch('../product.json') 
          },
          {
            path: "/category/:category",
            element: <CardProducts></CardProducts>,
            loader: () => fetch('../product.json') 
          },
        
        ]
      },
      {
        path: "/statistics",
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
      {
        path: "products/:productId",
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch('/product.json') ,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

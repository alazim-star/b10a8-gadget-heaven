// index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import DashBoard from './Components/DashBoard/DashBoard';
import About from './Components/about/About';
import ViewDetails from './Components/ViewDetails/ViewDetails';
import CardProducts from './Components/CardProducts/CardProducts';
import ErrorPage from './Components/ErrorPage/ErrorPage';



// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/categories.json'), 
        children: [
          {
            path: "/",
            element: <CardProducts />,
            loader: () => fetch('/product.json') 
          },
          {
            path: "/category/:category",
            element: <CardProducts />,
            loader: () => fetch('/product.json') 
          },
        ]
      },
      {
        path: "/statistics",
        element: <Statistics />
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
        loader: () => fetch('/product.json')
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "products/:productId",
        element: <ViewDetails />,
        loader: () => fetch('/product.json')
      },
    ]
  },
]);

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
        <RouterProvider router={router} />
    
  </StrictMode>
);

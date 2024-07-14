import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import Productsdetails from './Components/Productsdetails';
import Card from './Components/Card';
import Products from './pages/Products';
import AllProducts from './Components/Allproducts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const allroutes = createBrowserRouter([
  {
    path:'/',
    element: <App></App>
  },
  {
    path:'/about',
    element:<About></About>
  },
  {
    path:'/contact',
    element:<Contact></Contact>
  },
  {
    path:'/faqs',
    element:<Faqs></Faqs>
  },
  {
    path:'/allproducts/:id',
    element:<Productsdetails></Productsdetails>
  },
  {
    path:'/allproducts',
    element:<AllProducts></AllProducts>
  },
  {
    path:'/products/:catagory',
    element:<Products></Products>
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={allroutes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

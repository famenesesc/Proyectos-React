import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import BreakingBad from './components/BreakingBad/BreakingBad';
import Budget from './components/Budget/Budget';
import Dictionary from './components/Dictionary/Dictionary';
import Quoter from './components/Quoter/Quoter';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path:"/breaking-bad", element: <BreakingBad /> },
      { path:"/budget", element: <Budget /> },
      { path:"/dictionary", element: <Dictionary /> },
      { path:"/quoter", element: <Quoter /> }
    ]
  }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
 
     <RouterProvider router={router} />
  
)

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
-----
//Ejemplo para paginas con id
{ path:"/shop/:id", element: <SingleProduct /> }
*/
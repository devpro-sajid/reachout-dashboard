import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import DashboardLayout from './Dashboard/Layout/DashboardLayout';
import Dashboard from './Dashboard/Pages/DashboardPage/Dashboard';
import ToggleState from './Providers/ToggleState';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout/>,
    errorElement:<Navigate to="/" replace></Navigate>,
    children: [
      {
        path: '/',
        element: <Dashboard/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToggleState>
    <RouterProvider router={router} />
    </ToggleState>
  </React.StrictMode>,
)

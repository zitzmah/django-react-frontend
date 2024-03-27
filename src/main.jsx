import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'milligram'
//import and setup our Router
import {RouterProvider } from 'react-router-dom'
import router from "./router.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Replace with the RouterProvider */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'  
localStorage.clear()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter/>
       <AuthProvider>
        <App />
       </AuthProvider>
      
  </React.StrictMode>
)

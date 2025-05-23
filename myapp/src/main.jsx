import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Add from './components/Add.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar></Navbar>
    <Home></Home>
    <Add></Add>
  </StrictMode>,
)

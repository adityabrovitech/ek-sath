import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"

// import About from '../components/About';
// import Contact from '../components/Contact';
// import NotFound from '../components/NotFound';
const CommonRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} /> 
        {/* <Route path="/contact" component={Contact} /> */}
        {/* <Route component={NotFound} /> */}
      </Routes>
    </Router>
  )
}

export default CommonRoutes

// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Header from './components/Header'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Annual from './pages/Annual'
import SignUp from './pages/Signup'
import ListPatientContainer from './pages/patient/ListPatients'

function App() {
  return (

    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/annual" element={<Annual />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/listpatients" element={<ListPatientContainer />} />

      </Routes>
    </BrowserRouter>

    {/* <div className='main'>
       <h2 className="main-header">Vaccine Clinic</h2>
    </div> */}
    </>
  );
}

export default App;

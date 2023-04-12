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
import CreatePatientForm from './pages/patient/CreatePatients'
import ListVaccineContainer from './pages/vaccine/ListVaccines'
import CreateVaccineForm from './pages/vaccine/CreateVaccines'
import ViewPatient from './pages/patient/ViewPatient'

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
        <Route path="/createpatient" element={<CreatePatientForm />} />
        <Route path="/listvaccines" element={<ListVaccineContainer />} />
        <Route path="/createvaccine" element={<CreateVaccineForm />} />
        <Route path="/viewpatient/:id" element={<ViewPatient />} />

      </Routes>
    </BrowserRouter>

    {/* <div className='main'>
       <h2 className="main-header">Vaccine Clinic</h2>
    </div> */}
    </>
  );
}

export default App;

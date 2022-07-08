import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import Patient from './pages/Patient';
import Medicine from './pages/Medicine';
import Login from './pages/Login';



function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/medicine" element={<Medicine />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Lost from './pages/Lost';
import Notice from './pages/Notice';
import Faq from './pages/Faq';
import CampusInfo from './pages/CampusInfo';
import ContactInfo from './pages/ContactInfo';
import News from './pages/News';
import Schedule from './pages/Schedule';
import './App.css';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/lost" element={<Lost/>}/>
          <Route path="/notice" element={<Notice/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/campusInfo" element={<CampusInfo/>}/>
          <Route path="/contactInfo" element={<ContactInfo/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;

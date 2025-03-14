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


function App() {
  return (
    <BrowserRouter>
        <Routes>"
          <Route path="/" elemet={<Home/>}/>
          <Route path="/lost" elemet={<Lost/>}/>
          <Route path="/notice" elemet={<Notice/>}/>
          <Route path="/faq" elemet={<Faq/>}/>
          <Route path="/campusInfo" elemet={<CampusInfo/>}/>
          <Route path="/contactInfo" elemet={<ContactInfo/>}/>
          <Route path="/news" elemet={<News/>}/>
          <Route path="/schedule" elemet={<Schedule/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

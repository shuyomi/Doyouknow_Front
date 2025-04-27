import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from './pages/SplashScreen';
import Home from "./pages/Home";
import Lost from "./pages/Lost";
import Notice from "./pages/Notice";
import NoticeDetail from "./pages/NoticeDetail";
import Faq from "./pages/Faq";
import CampusInfo from "./pages/CampusInfo";
import ContactInfo from "./pages/ContactInfo";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Schedule from "./pages/Schedule";


import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
    const [isSplashVisible, setIsSplashVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsSplashVisible(false);
      }, 3000); 
  
      return () => clearTimeout(timer);
    }, []);
  
    if (isSplashVisible) {
        return <SplashScreen onFinish={() => setIsSplashVisible(false)} />; 
    }
  
    return (

        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/lost" element={<Lost />} />
                    <Route path="/notice" element={<Notice />} />
                    <Route path="/notice/detail/:id" element={<NoticeDetail />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/campusInfo" element={<CampusInfo />} />
                    <Route path="/contactInfo" element={<ContactInfo />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/news/:id" element={<NewsDetail />} />
                    <Route path="/schedule" element={<Schedule />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

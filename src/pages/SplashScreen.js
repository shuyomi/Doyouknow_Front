import React, { useEffect } from 'react';
import "../styles/SplashScreen/SplashScreen.css";


const SplashScreen = ({ onFinish }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        onFinish();
      }, 2000);
  
      return () => clearTimeout(timer);
    }, [onFinish]);
  
    return (
      <div className="splash-container">
         <img src="/images/Screen3.png" alt="Logo" className="splash-logo2" />
        <h1 className="logo">안양대 학생들을 위한 </h1>
        <h2 className="logo-se">학교 공지 알림 앱</h2>
        <p className="loading-text">Loading...</p>

      </div>
    );
  };
  
  export default SplashScreen;

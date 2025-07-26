import React from "react";
import "../styles/CampusInfo/CampusInfo.css";
import Header from "../components/CampusInfo/CampusInfoHeader"; 
import Contents from "../components/CampusInfo/CampusInfoContents"; 
import Footer from "../components/CampusInfo/Footer"; 


const CampusInfo = () => {
    return (
        <div className="Info">
       <Header />
       <Contents  />
       <Footer />
       </div>
    )
}

export default CampusInfo;

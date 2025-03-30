import React from "react";
import '../styles/CampusInfo/CampusInfo.css';
import Header from "../components/CampusInfo/CampusInfoHeader"; 
import Contents from "../components/CampusInfo/CampusInfoContents"; 

const CampusInfo = () => {
    return (
        <div className="Info">
       <Header />
       <Contents  />
       </div>
    )
}

export default CampusInfo;

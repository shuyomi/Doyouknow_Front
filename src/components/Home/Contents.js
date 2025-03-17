import React from "react";
import './Styles/Contents.css';
import Searchbar from "./Searchbar"; 
import Menu from "./Menu"; 


const Contents = () => {
    return(
        <div className="contents">
     
          <Searchbar />
          <Menu/>


        </div>
    )
};

export default Contents;
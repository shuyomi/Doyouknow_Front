import React from "react";
//import Searchbar from "./Searchbar";
import Menu from "./Menu";
import Footer from "./Footer";
import "../../styles/Home/Contents.css";

const Contents = () => {
    return (
        <div className="contents">
           {/* <Searchbar />*/}
            <Menu />
            <Footer />
        </div>
    );
};

export default Contents;

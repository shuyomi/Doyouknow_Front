import React from "react";
import Searchbar from "./Searchbar";
import Menu from "./Menu";
import "../../styles/Home/Contents.css";

const Contents = () => {
    return (
        <div className="contents">
            <Searchbar />
            <Menu />
        </div>
    );
};

export default Contents;

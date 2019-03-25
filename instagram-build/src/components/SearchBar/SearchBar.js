import React from "react";
import "./Search.css"

const SearchBar = (event) => {
    return (
        <div className="search">
            <i className="fab fa-instagram"></i>
            <div className="brand">Instagram</div>
            <input placeholder="Search" />
            <div className="right-side">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    );
};

export default SearchBar;
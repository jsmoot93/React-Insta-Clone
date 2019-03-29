import React from "react";
import "./Search.css";

const SearchBar = props => {
    return (
        <div className="search">
            <div className="left">
                <i className="fab fa-instagram"></i>
                <div className="brand">Instagram</div>
            </div>
            <input className="searchbar" placeholder="Search" onChange={props.searchPosts}/>
            <div className="right-side">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    );
};

export default SearchBar;
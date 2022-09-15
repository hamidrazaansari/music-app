import React from "react";
import './Sidebar.css';
function Sidebar() {

        return (
                <>
                        <div className="container">

                                <ul className="sidebar">
                                        <li><span><i className="fa-solid fa-house"></i></span><span>Home</span></li>
                                        <li><span><i className="fa-solid fa-magnifying-glass"></i></span><span>Search</span></li>
                                        <li><span><i className="fa-solid fa-heart"></i></span><span>Favourites</span></li>
                                        <li><span><i className="fa-solid fa-circle-play"></i></span><span>Playlist</span></li>
                                        <li><span><i className="fa-solid fa-circle-info"></i></span><span>More</span></li>
                                </ul>

                                <div className="content">

                                </div>
                        </div>
                </>

        );

}
export default Sidebar
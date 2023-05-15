import React from "react";
import "./navbar.css"

function Navbar (){
    return(
        <header>
            <img src="https://startbootstrap.com/assets/img/sb-logo.svg"></img>
            <h2 className="logo">Start Bootstrap</h2>
        <nav class="navigation">
            <a href="#">Themes</a>
            <a href="#">Templates</a>
            <a href="#">Bumdles</a>
            <a href="#">Forms</a>
            <a href="#">Resources</a>
            <div className="btns">
                <button className="loginbtn-popup">Blog</button>
                <button className="loginbtn2-popup">Log In</button>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;
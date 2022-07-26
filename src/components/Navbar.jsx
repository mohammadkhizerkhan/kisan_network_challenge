import React from "react";
import "../style/navbar.css";
function Navbar() {
  return (
    <div class="nav">
      <div className="container">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">OYODO</div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div class="nav-links">
          <a href="//github.io/jo_geek">HOME</a>
          <a href="http://stackoverflow.com/users/4084003/">DAPIBUS</a>
          <a href="https://in.linkedin.com/in/jonesvinothjoseph">ULTRICIES</a>
          <a href="https://codepen.io/jo_Geek/">BIBENDUM</a>
          <a href="https://jsfiddle.net/user/jo_Geek/">MAGNA</a>
        </div>
      </div>
    </div>
  );
}

export { Navbar };

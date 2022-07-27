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
          <a href="">HOME</a>
          <a href="">DAPIBUS</a>
          <a href="">ULTRICIES</a>
          <a href="">BIBENDUM</a>
          <a href="">MAGNA</a>
        </div>
      </div>
    </div>
  );
}

export { Navbar };

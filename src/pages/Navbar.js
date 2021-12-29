import React from "react";
import "./Navbar.css";
import Avatar from "@material-ui/core/Avatar";
import navimg from "../my photos/navbar.JPG";

function Navbar() {
  return (
    <>
      <nav class=" container p-0 shadow fixed-top navbar navbar-light bg-white">
        <div class=" container-fluid">
          <div class="navbar-brand d-flex" style={{ alignItems: "center" }}>
            <div class="avatar">
              <a href="#abt">
                <Avatar alt="Jack Sparrow" src={navimg} />
              </a>
            </div>
            <a href="#abt" class="nav-link link-secondary">
              <span className="" style={{ color: "black" }}>
                Sriram Pothumani
              </span>
            </a>
          </div>
          <ul class="nav justify-content-end  d-flex justify-content-between">
            <li class="nav-item">
              <a
                class="nav-link link-secondary"
                aria-current="page"
                href="#abt"
              >
                About
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link link-secondary" href="#sw">
                Softwares
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-secondary" href="#pf">
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-secondary" href="#exp">
                Experience
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-secondary" href="#con">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

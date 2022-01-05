import React from "react";
import "./Navbar.css";
import Avatar from "@material-ui/core/Avatar";
import navimg from "../my photos/navbar.JPG";

function Navbar() {
  return (
    <>
      <nav class=" container p-2 shadow fixed-top navbar navbar-light bg-white">
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
            <li class="nav-item">
              <a
                class="nav-link link-secondary"
                target="_blank"
                href="https://drive.google.com/file/d/1qF_v4QACBH0j3hjpjoQs3GYXWajo7L8D/view?usp=sharing"
                download
                style={{
                  border: "1px solid grey",
                  borderRadius: "10px",
                  color: "green",
                }}
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import React from "react";
import Carousel from "../components/Carousel";
import image3 from "../projects images/msg3.png";
import image4 from "../projects images/msg4.png";
import image1 from "../projects images/msg1.png";
import image2 from "../projects images/msg2.png";
import image5 from "../projects images/msg5.png";

function Projects() {
  return (
    <div className="container card py-3  lead" id="pf">
      <div class="align-self-center">
        <div class="card-body">
          <h5
            class="card-title text-center fs-2  myname lead p-3"
            style={{ color: "blueviolet" }}
          >
            Portfolio
          </h5>
          {/* carousel */}
          <div
            class="container p-3"
            style={{
              maxWidth: "750px",
              maxHeight: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            id="exp"
          >
            <Carousel
              url1={image1}
              url2={image2}
              url3={image3}
              url4={image4}
              url5={image5}
            />
            <div>
              <p>
                Tried to create a minimal messaging app, and some features also.
                - Can Register Users, connect people globally using this app, do
                private chat - Can Switch B/w the users seamlessly - send
                messages to any friends using this app, it used Pusher for the
                databases to show you the live message from our friends.
              </p>
              <span style={{ display: "flex", justifyContent: "space-evenly" }}>
                <a
                  type="button"
                  target="_blank"
                  class="btn btn-secondary but"
                  href="https://github.com/SRIRAM-POTHUMANI/msg-29-12-2021"
                >
                  Source Code
                </a>
                <a
                  type="button"
                  target="_blank"
                  class="btn btn-secondary but"
                  href="https://msg-app-by-sriram.netlify.app/"
                >
                  Live Demo
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

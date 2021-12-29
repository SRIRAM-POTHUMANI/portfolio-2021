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
            class="card-title text-center fs-2 lead p-3"
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
                Tried to replicate WhatsApp UI, and some features also. - Can
                Create Groups - Can Switch B/w the groups - send messages to any
                groups Used Firebase for the databases
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

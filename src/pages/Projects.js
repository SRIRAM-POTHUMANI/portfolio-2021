import React from "react";
import Carousel from "../components/Carousel";
import msg1 from "../projects images/msg3.png";
import msg2 from "../projects images/msg4.png";
import msg3 from "../projects images/msg1.png";
import msg4 from "../projects images/msg2.png";
import msg5 from "../projects images/msg5.png";
import amazon1 from "../projects images/amazon1.png";
import amazon2 from "../projects images/amazon2.png";
import amazon3 from "../projects images/amazon3.png";
import amazon4 from "../projects images/amazon4.png";
import amazon5 from "../projects images/amazon5.png";
// import amazon6 from "../projects images/amazon6.png";
// import amazon7 from "../projects images/amazon7.png";
import netflix1 from "../projects images/netflix1.png";
import netflix2 from "../projects images/netflix2.png";
import netflix3 from "../projects images/netflix3.png";

function Projects() {
  return (
    <div className="container card py-3 lead" id="pf">
      <div class="align-self-center">
        <div class="card-body ">
          <h5
            class="card-title text-center fs-2  myname lead p-3"
            style={{ color: "blueviolet" }}
          >
            Portfolio
          </h5>
          {/* carousel */}
          <div
            class="card container p-3 m-3"
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
            <div className="card-header m-2">Amazon Clone</div>
            <Carousel
              url1={amazon1}
              url2={amazon2}
              url3={amazon3}
              url4={amazon4}
              url5={amazon5}
            />
            <div>
              <p>
                It made as a responsive web app, mobile view app, and also I
                have tried apk build also with the help of capacitor. That tries
                to imitate the desktop web version of amazon site, you can add
                items to the basket, delete them, and have your user data, here
                I have used Firbase authentication and also stores your order
                informations
              </p>
              <span style={{ display: "flex", justifyContent: "space-evenly" }}>
                <a
                  type="button"
                  target="_blank"
                  rel="noreferrer"
                  class="btn btn-secondary but"
                  href="https://github.com/SRIRAM-POTHUMANI/amazon-clone-react-firebase"
                >
                  Source Code
                </a>
                <a
                  type="button"
                  target="_blank"
                  rel="noreferrer"
                  class="btn btn-secondary but"
                  href="https://sriram-amazon-clone.netlify.app/"
                >
                  Live Demo
                </a>
              </span>
            </div>
          </div>
          <div
            class="card container p-3 m-3"
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
            {" "}
            <div className="card-header m-2">Netflix Clone</div>
            <Carousel
              url1={netflix1}
              url2={netflix2}
              url3={netflix3}
              url4={netflix1}
              url5={netflix2}
            />
            <div>
              <p>
                This is a Movie trailer app to view few movies' trailers with
                YouTube library and used themoviedb api to fetch movie dat
              </p>
              <span style={{ display: "flex", justifyContent: "space-evenly" }}>
                <a
                  type="button"
                  target="_blank"
                  rel="noreferrer"
                  class="btn btn-secondary but"
                  href="https://github.com/SRIRAM-POTHUMANI/netflix-clone"
                >
                  Source Code
                </a>
                <a
                  type="button"
                  target="_blank"
                  rel="noreferrer"
                  class="btn btn-secondary but"
                  href="https://sriram-netflix-clone.netlify.app/"
                >
                  Live Demo
                </a>
              </span>
            </div>
          </div>
          <div
            class="card container p-3 m-3"
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
            <div className="card-header m-2">Messenger App</div>
            <Carousel
              url1={msg1}
              url2={msg2}
              url3={msg3}
              url4={msg4}
              url5={msg5}
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
                  rel="noreferrer"
                  class="btn btn-secondary but"
                  href="https://github.com/SRIRAM-POTHUMANI/msg-29-12-2021"
                >
                  Source Code
                </a>
                <a
                  type="button"
                  target="_blank"
                  rel="noreferrer"
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

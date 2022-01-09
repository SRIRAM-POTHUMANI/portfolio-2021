import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Mailer from "../components/mailer";

function Contact() {
  return (
    <div className="container card py-3 justify-content-center lead bg-secondary text-white">
      <div class="align-self-center">
        <div class="card-body">
          <h5
            class="card-title text-dark text-center fs-1 fw-5  p-3"
            style={{ color: "white" }}
          >
            Contact
          </h5>
          <div class="container p-3" style={{ width: "100%" }}>
            <div class="container-fluid">
              <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                  <div class="h-100" style={{ maxWidth: "350px" }}>
                    <div class="card-body">
                      <h5 class="card-title text-warning">Get in Touch</h5>
                      <p class="card-text">
                        For any information regarding my work kindly, contact me
                        through the following phone number or email address.
                      </p>
                      <h5>
                        <span class="text-warning">PhoneNo:</span>
                        <span class="text-secondary">+91</span>8838250084
                      </h5>
                      <h5>
                        <span class="text-warning">Email:</span>{" "}
                        rpsram98@gmail.com
                      </h5>
                    </div>
                    <div class=" d-flex px-3 gap-3">
                      <a
                        class="btn btn-secondary"
                        target="_blank"
                        href="https://www.linkedin.com/in/sriram-pothumani/"
                      >
                        <LinkedInIcon />
                      </a>
                      <a
                        class="btn btn-secondary"
                        target="_blank"
                        href="https://github.com/SRIRAM-POTHUMANI"
                      >
                        <GitHubIcon />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="h-100" style={{ maxWidth: "350px" }}>
                    <div class="card-body">
                      <h5 class="card-title text-warning">Address</h5>
                      <p class="card-text">
                        211/1, Thiruvalluvar Main Street, <br />
                        Nehru Nagar, ByPass Road, <br />
                        Madurai, Tamil Nadu, India 🇮🇳 <br />
                        Postal Code - 625016.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <h3 class="text-warning text-center">Send a Review</h3>
          <Mailer />
        </div>
        <div>
          <hr />
          <div class="fs-6 text-center text-dark">
            © Copyright 2021{" "}
            <span class="text-warning">
              {" "}
              <span class="vr mx-1 text-white"></span> Designed by Sriram
              Pothumani
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

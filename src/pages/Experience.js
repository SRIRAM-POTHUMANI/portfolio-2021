import React from "react";
import img1 from "./ss.jpg";
import img2 from "./bnp.jpg";
import Cardgroup from "../components/Cardgroup";
function Experience() {
  return (
    <div className="container card py-3 justify-content-center lead">
      <div class="align-self-center">
        <div class="card-body">
          <h5
            class="card-title text-center fs-2 lead p-3"
            style={{ color: "blueviolet" }}
          >
            Experience
          </h5>
          {/* card group */}
          <div class="container p-3" style={{ width: "100%" }}>
            <Cardgroup image1={img1} image2={img2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

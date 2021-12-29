import React from "react";
import "./Carousel.css";
function Carousel({ url1, url2, url3, url4, url5 }) {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
      style={{ maxWidth: "620px" }}
    >
      <div class="carousel-indicators">
        <button
          type="button "
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active bg-primary"
          style={{ border: "1px solid black" }}
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          class="bg-primary shadow"
          style={{ border: "1px solid black" }}
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          class="bg-primary shadow"
          style={{ border: "1px solid black" }}
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          class="bg-primary shadow"
          style={{ border: "1px solid black" }}
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          class="bg-primary shadow"
          style={{ border: "1px solid black" }}
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div class=" border carousel-inner">
        <div class="carousel-item active ">
          <img src={url1} class=" d-block w-100 " alt="..." />
          {/* <div class="carousel-caption">
            <span>Messaging App</span>
            <p>This is my best one.</p>
          </div> */}
        </div>
        <div class="carousel-item ">
          <img src={url2} class=" d-block w-100" alt="..." />
          {/* <div class="carousel-caption ">
            <span>Second slide label</span>
            <p>Some representative placeholder content for the second slide.</p>
          </div> */}
        </div>
        <div class="carousel-item ">
          <img src={url3} class=" d-block w-100" alt="..." />
          {/* <div class="carousel-caption ">
            <span>Second slide label</span>
            <p>Some representative placeholder content for the second slide.</p>
          </div> */}
        </div>
        <div class="carousel-item ">
          <img src={url4} class=" d-block w-100" alt="..." />
          {/* <div class="carousel-caption ">
            <span>Second slide label</span>
            <p>Some representative placeholder content for the second slide.</p>
          </div> */}
        </div>
        <div class="carousel-item ">
          <img src={url5} class=" d-block w-100" alt="..." />
          {/* <div class="carousel-caption ">
            <span>Second slide label</span>
            <p>Some representative placeholder content for the second slide.</p>
          </div> */}
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button bg-dark"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="false"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;

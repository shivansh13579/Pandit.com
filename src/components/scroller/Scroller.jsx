import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import UseMediaQuary from "../../hooks/UseMediaQuary";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./customCarousel.css";
import { scrollerPictures } from "@/data/products";

function Scroller() {
  const isAboveMediaScreen = UseMediaQuary("(min-width: 768px)");
  const [pictures, setPictures] = useState(scrollerPictures);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevBtn = () => {
    setActiveIndex((prevBtn) =>
      prevBtn === 0 ? pictures.length - 1 : prevBtn - 1
    );
  };
  const handleNextBtn = () => {
    setActiveIndex((nextBtn) =>
      nextBtn === pictures.length - 1 ? 0 : nextBtn + 1
    );
  };

  return (
    <>
      {isAboveMediaScreen ? (
        <>
          <div className="carousel w-full h-full bg-black">
            {pictures.map((item, index) => (
              <div
                key={item.id}
                id={`slide${item.id}`}
                className={`carousel-item relative w-full ${
                  index === activeIndex ? "block" : "hidden"
                }`}
              >
                <div>
                  <img src={item.src} className="w-full h-fit" />
                </div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <button onClick={handlePrevBtn} className="btn btn-circle">
                    ❮
                  </button>
                  <button onClick={handleNextBtn} className="btn btn-circle">
                    ❯
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <Carousel
          autoPlay={true}
          interval={3000}
          indecators={true}
          indicatorContainerProps={{
            style: {
              position: "absolute",
              bottom: "8px",
              right: 0,
              left: 0,
              display: "flex",
              justifyContent: "center",
              zIndex: 10,
              gap: 6,
            },
          }}
        >
          {pictures.map((item, i) => (
            <img
              className="w-full h-[110px]"
              key={i}
              src={item.src}
              alt={item.alt}
            />
          ))}
        </Carousel>
      )}
    </>
  );
}

export default Scroller;

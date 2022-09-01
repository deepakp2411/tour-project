import React from "react";
import { banner } from "../constants/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <>
      <div>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          arrows={false}
        //   showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          slidesToSlide={1}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {banner.map((data) => (
            <div  key={data.id}>
              <img
               src={data.img}
                alt="banner"
                style={{ width: "100%", height: "200px" }}
              />
              <h2 className="text-center mt-3">{data.title}</h2>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Banner;

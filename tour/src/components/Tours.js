import React from "react";
import Carousel from "react-multi-carousel";
import { tour } from "../constants/data";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import bg from "../assets/images/section_bg1.jpg";

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

const Tours = () => {
  return (
    <>
      <div className="shadow-[0_30px_20px_-15px_rgba(0,0,0,0.3)] m-2">
        <div className="mt-5 mb-5">
          <h1 className=" text-center font-bold text-4xl text-black dark:text-white">
            Upcoming Events
          </h1>
        </div>
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
          {tour.map((data) => (
            <div key={data.id}>
              <img
                src={data.img}
                style={{ width: "100%", height: "400px", padding: "1rem" }}
                alt={data.title}
              />
              <div className="flex justify-around items-center">
                <h3 className="cursor-pointer font-bold text-black dark:text-white">{data.title}</h3>
                <h3 className="cursor-pointer font-bold text-black dark:text-white">{data.price}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="mt-[20vh]">
        <div className="flex justify-between items-center ">
          <img
            style={{ width: "100%", maxWidth: "400px", height: "auto" }}
            src="https://preview.colorlib.com/theme/tralive/assets/img/gallery/xabout.png.pagespeed.ic.ZsrvwBYE3S.webp"
            alt="herp"
          />
          <div className="self-baseline mt-3 pr-[15vw] md:justify-center">
            <h1 className="text-center font-bold text-3xl mt-1 text-black dark:text-white">
              Get ready for real time adventure
            </h1>
            <p className="italic mt-2 indent-1 text-black dark:text-white ">
              Lets start your journey with us, your dream will come true. Lorem
              ipsum dolor sit amet,
              <br /> consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad
              minim veniam quis nostrud exercitation.
            </p>
            <div className="flex justify-center items-center ml-[10vw] mt-10 rounded bg-blue-600 w-[10vw] h-[5vh] hover:bg-sky-700 text-black dark:text-white">
              <Link to="/contact" className="text-center font-bold text-lg  ">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tours;

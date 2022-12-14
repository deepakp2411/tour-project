import React from "react";
import Carousel from "react-multi-carousel";
import { homeData } from "../constants/data";
import "react-multi-carousel/lib/styles.css";
import Banner from "./Banner";
import SearchIcon from '@mui/icons-material/Search';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-2 mb-3">
        <label htmlFor="search" className="cursor-pointer"><SearchIcon></SearchIcon></label>
        <input type="search" className="p-5 m-2 w-[30vw] h-3 rounded border-none bg-slate-100 text-left" name="search" placeholder="Search your place..." />
      </div>
      <div className="mt-5 p-1 rounded bg-gray-200 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          arrows={false}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          slidesToSlide={1}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {homeData.map((data) => (
            <img
              key={data.id}
              src={data.url}
              alt="tours"
              style={{ width: "100%", height: "300px" }}
            />
          ))}
        </Carousel>
        ;
      </div>
      <div className="mt-[10vh] mb-12 p-5 bg-[azure]">
      <h2 className="text-center font-bold text-4xl italic text-black dark:text-white">Lifelong memories just a <br /> few seconds away</h2>
        <Banner />
      </div>
    </>
  );
};

export default Home;

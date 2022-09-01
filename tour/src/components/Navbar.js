import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="min-h-full bg-gray-600 static text-black ">
        <div className="flex justify-around items-center mb-2 p-5 ">
          <NavLink to="/" className="text-bold font-semibold">
            <span className="font-bold text-lg">Tour India</span>
          </NavLink>
          <div className="flex justify-between items-center">
            <ul className="flex">
              <li className="px-5 italic font-bold underline hover:underline-offset-4 text-red-700">
                <NavLink to="/" className="no-underline font-bold">Home</NavLink>
              </li>
              <li className="px-5 italic font-bold underline hover:underline-offset-4">
                <NavLink to="tour" className="no-underline">Tours</NavLink>
              </li>
              <li className="px-5 italic font-bold underline hover:underline-offset-4">
                <NavLink to="contact" className="no-underline">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

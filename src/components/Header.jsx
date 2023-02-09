import React, { useState } from "react";

const Header = function () {
  const [responsif, setResponsif] = useState("false");
  const handleResponsif = function () {
    setResponsif(function (prevResponsif) {
      return !prevResponsif;
    });
  };

  const navStyle =
    "flex-col md:flex-row top-[4rem] left-0 right-0 absolute md:static z-10 xl:ml-[2.25rem] h-screen md:h-auto w-full md:justify-between md:items-center md:bg-none bg-gradient-to-b from-[#27637d] to-[#353998]";

  return (
    <header>
      <div className="container relative md:static mx-auto px-4 sm:px-0 flex justify-between py-6 items-center [&>.hamburger]:md:hidden [&>nav]:md:flex">
        <h1 className="text-[1.25rem] cursor-default lg:text-[1.35rem] font-semibold font-acsent text-white">
          digidaw
        </h1>
        <button
          onClick={handleResponsif}
          className="hamburger absolute right-[1rem] z-20 flex flex-col [&>span]:my-[.2rem] [&>span]:w-6 [&>span]:h-[.1rem] [&>span]:bg-white"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={responsif ? `hidden ${navStyle}` : `flex ${navStyle}`}>
          <ul className="grid md:grid-cols-4 gap-4 text-center [&>li]:md:w-[9rem] [&>li]:md:text-white/60 [&>li>a:hover]:font-semibold [&>li>a:hover]:text-white mt-[5rem] md:mt-0">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Discover Element</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <button className="px-[.5rem] rounded-lg lg:rounded-[7rem] lg:px-[1.85rem] lg:py-[.95rem] py-[.5rem] bg-white hover:bg-white/90 font-medium font-acsent mt-[2rem] md:mt-0 mx-auto md:mx-0">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

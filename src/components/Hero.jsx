import React from "react";
import buttonImg from "../assets/img/arrowButton.png";

const Hero = function () {
  return (
    <section
      className={`py-[9rem] lg:flex lg:justify-between xl:bg-hero xl:bg-no-repeat xl:bg-right`}
    >
      <div className="container mx-auto px-4 sm:px-0">
        <h1 className="text-[2rem] sm:text-[3.5rem] sm:max-w-[38rem] font-light text-white max-w-[34rem] font-primary mb-[.75rem]">
          Experience the power of
          <span className="font-semibold"> professional UI kits</span>
        </h1>
        <p className="text-white/80 max-w-[23rem] sm:max-w-[30rem] sm:text-[1.25rem] font-primary leading-[2rem] mb-[2rem]">
          Choose from a wide range of styles and themes to find the perfect fit
          for your project
        </p>
        <button className="flex justify-between py-[.75rem] px-[1.25rem] bg-primary hover:bg-primary/80 rounded-3xl w-[9rem]">
          Discover <img src={buttonImg} alt="button" />
        </button>
        <ul className="text-white font-primary mt-[5rem] feature">
          <li>
            <h3 className="text-[1.15rem] font-medium">Unlimited Blocks</h3>
            <p className="text-white/60 text-sm mt-[1rem] leading-[2rem] max-w-[22.6rem]">
              Having access to unlimited blocks means that users can create a
              wide range of designs without running out of elements to work
              with.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;

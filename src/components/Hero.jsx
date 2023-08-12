import React from "react";
import Button from "./Button";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] text-lg md:text-2xl font-bold p-1">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div>
          <p className="text-xl sm:text-2xl md:text-3xl">
            Fast, flexible financing for
            <TypeAnimation
              sequence={["B2B", 2000, "Saas", 2000, "B2C", 2000, "D2C", 2000]}
              wrapper="span"
              cursor
              repeat={Infinity}
              style={{
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                display: "inline-block",
                marginLeft: "10px",
                fontWeight: "bold",
              }}
            />
          </p>
        </div>
        <p className="text-xl md:text-2xl px-4 mt-6 text-gray-400">Monitor your data analytics to increase revenue for B2B, B2C, D2C & SaaS platforms.</p>
        <Button text="Get Started" className="mx-auto"/>
      </div>
    </div>
  );
};

export default Hero;

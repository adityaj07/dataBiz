import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="text-white">
      <div className=" max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-1">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div>
          <p className="text-xl sm:text-2xl md:text-3xl">
            Fast, flexible financing for
            <TypeAnimation
              sequence={["B2B", 2000, "B2C", 2000, "SaaS",2000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                display: "inline-block",
                marginLeft: "10px",
                fontWeight:"bold"
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

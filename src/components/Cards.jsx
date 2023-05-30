import React from "react";
import Card from "./Card";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  const singleUser = {
    service1: "500 GB Storage",
    service2: "1 Granted User",
    service3: "Send up to 2 GB"
  };

  const doubleUser = {
    service1: "1100 GB Storage",
    service2: "2 Granted Users",
    service3: "Send up to 6 GB"
  };

  const tripleUser = {
    service1: "1800 GB Storage",
    service2: "3 Granted Users",
    service3: "Send up to 12 GB"
  };

  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-16">
        <Card
          user="Single User"
          price="$149"
          offeredServices={singleUser}
          image={Single}
        />
        <Card
          user="Double User"
          price="$299"
          offeredServices={doubleUser}
          image={Double}
          btnClassName="bg-white hover:text-white"
          
        />
        <Card
          user="Triple User"
          price="$499"
          offeredServices={tripleUser}
          image={Triple}
        />
      </div>
    </div>
  );
};

export default Cards;

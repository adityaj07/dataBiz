// Card.js
import React from "react";
import Button from "../components/Button";

const Card = ({ user, price, offeredServices, image,btnClassName }) => {
  const isDoubleUser = user === "Double User"; // Check if the card is for Double User

  return (
    <div
      className={`shadow-xl rounded-lg flex flex-col p-4 my-16 mx-12 md:mx-0 hover:scale-105 duration-300 ${
        isDoubleUser ? "scale-110 hover:scale-125 bg-gradient-to-r from-[#00fd9a] to-[#006941]" : ""
      }`}
    >
      <img src={image} alt={user} className="w-20 mx-auto mt-[-3rem] bg-white p-3 rounded-xl" />
      <h2 className="text-2xl font-bold text-center py-8 pb-3 mx-auto">{user}</h2>
      <p className="text-4xl font-bold mx-auto">{price}</p>
      <div className="text-center font-medium mt-3">
        {Object.values(offeredServices).map((service, index) => (
          <p key={index} className="py-2 border-b mx-8">{service}</p>
        ))}
      </div>
      <Button
        text="Start Trial"
        className={`w-[145px] mx-auto my-8 hover:bg-black hover:text-[#00fd9a] transition-all duration-200 ${btnClassName}`}
      />
    </div>
  );
};

export default Card;

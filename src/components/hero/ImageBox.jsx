import React from "react";
import { CardContainer } from "../ui/CardContainer";

export const ImageBox = () => {
  return (
    <CardContainer className=" w-full p-0 ">
      <img
        src="/imgs/hero-img.jpg" // Replace with your actual image path
        alt="Travel destination"
        className="w-full h-auto object-cover rounded-lg"
      />
    </CardContainer>
  );
};

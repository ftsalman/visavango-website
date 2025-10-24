import React from "react";
import { StatsSection } from "../components/About-page/StatsSection";
import { WhoWeAre } from "../components/About-page/WhoWeAre";
import { IconArrowRightCircle } from "@tabler/icons-react";
import Button from "../components/ui/button/Button";
import { useNavigate } from "react-router-dom";
import WhyChooseUs from "../components/About-page/WhyChooseUs/WhyChooseUs";
import { VisaExperts } from "../components/About-page/VisaExperts";
import { ReadyCard } from "../components/About-page/ReadyCard";

export const AboutPage = () => {

   const   navigate  =  useNavigate();
  return (
    <div className="py-20 bg-white">
      {/* ---- Header Section ---- */}
      <div className="flex flex-col items-center justify-center text-center space-y-6 px-4">
        <h3 className="text-4xl md:text-6xl text-[#2B1700] font-semibold leading-snug">
          Simplifying your immigration journey <br /> with us
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-3 text-lg text-[#2B1700]">
          <span className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
            <IconArrowRightCircle /> Expert team
          </span>
          <span className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
            <IconArrowRightCircle /> High approval rates
          </span>
          <span className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
            <IconArrowRightCircle /> Fast and reliable service
          </span>
        </div>

        <Button
        onClick={()=>navigate("/contact")}
          variant="secondary"
          size="lg"
          className="bg-[#2B1700] px-10 rounded-full text-lg text-white hover:bg-yellow-400 hover:text-[#2B1700] transition duration-300 hover:scale-105"
        >
          Start Your Journey
        </Button>
      </div>

      {/* ---- Animated Sections ---- */}
    
      <StatsSection />
        <WhoWeAre />
        <WhyChooseUs/>
        <VisaExperts/>
        <ReadyCard/>
    </div>
  );
};

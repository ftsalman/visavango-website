import React from "react";
import { Hero } from "../components/hero/Hero";
import { About } from "../components/About/About";
import { Immigrations } from "../components/ServicesSection/Immigrations";
import { JourneySteps } from "../components/journeySetup/JourneySteps";
import { GlobalReach } from "../components/GlobalReach/GlobalReach";
import { CaseStudies } from "../components/CaseStudies/CaseStudies";
import { VisaServices } from "../components/VisaServices/VisaServices";
import { Frequently } from "../components/frequently-section/Frequently";
import { Blog } from "../components/blog/Blog";

export const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
       
          <Hero />
       

      {/* About Section */}
      <div>
        <About />
      </div>

      {/* Immigrations Section */}
      <div id="immigrations">
        <Immigrations />
      </div>

      {/* Journey Steps */}
      <JourneySteps />

      {/* Case Studies */}
      <CaseStudies />

      {/* Visa Services */}
      <div>
        <VisaServices />
      </div>

      {/* Frequently Asked Questions */}
      <Frequently />

      {/* Blog */}
      <Blog />
    </div>
  );
};

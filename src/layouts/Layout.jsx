import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { ScrollToTop } from "../components/ui/ScrollToTop";

export const Layout = () => {
  return (
    <>
  

   <ScrollToTop/>
    
     <div className="flex flex-col min-h-screen ">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow flex flex-col pt-[64px]">
        <Outlet />
      </main>
          <Footer />
    </div>
    
    
    </>
   
  );
};

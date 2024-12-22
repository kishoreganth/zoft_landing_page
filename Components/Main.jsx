"use client";
import React, { useState, useEffect } from "react";
import Home from "./Home/Home";
import Companies from "./Companies/Companies";
import BentoGrid from "./Bento/BentoGrid";
import Feature from "./featured/Feature";
import { Text } from "./featured/Text";
import Lenis from "lenis";
import Pricing from "./pricing/Pricing";
import PricingM from "./pricing/PricingM";
import Footer from "./footer/Footer";
import useScreenSize from "./ScreenSize";
import BentoGridM from "./Bento/BentoGridM";

const Main = () => {
  const screenWidth = useScreenSize();

  return (
    <div className="w-full relative  bg-[#F6F6F4] overflow-hidden">
      <Home />
      <Companies />
      {screenWidth < 768 ? <BentoGridM /> : <BentoGrid />}
      <Text />
      <Feature />
      {screenWidth < 768 ? <PricingM/> : <Pricing/>}
      <Footer />
    </div>
  );
};

export default Main;

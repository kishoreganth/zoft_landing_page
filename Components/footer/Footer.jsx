"use client";

import React from "react";
import { cn } from "@/lib/utils"; // Ensure you have this utility function
import DotPattern from "../ui/dot-pattern";
import CTA from "../CTA";


const Footer = () => {




  return (
    <footer className="relative w-full h-[80vh] tablet:h-[50vh] bg-green- overflow-hidden">
      {/* DotPattern component with a radial mask */}
      <DotPattern
        className={cn(
          "absolute inset-0 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
        )}
      />
      
      {/* Footer Content */}
     <div className="w-full h-full ">
      <div className="w-full h-[70%] flex flex-col px-[2vw]   ">
      <div className="w-full flex flex-col justify-center gap-[1vw] pl-[8vw] py-[5vw ">
      <a className="text-2xl font-bold capitalize" href="#">kayzen</a>
      {/* <h6 className="text-xs w-1/5">41 E 11th St, 11th Floor, New York, NY 10003</h6> */}
      </div>

      <div className="w-full h-[80%] flex gap-[.5vw] pl-[8vw] ">
      <div className="w-1/3 h-full flex flex-col justify-center gap-[2vw] ">
      <h6 className="capitalize text-2xl font-semibold text-zinc-200">product</h6>
      <div className="flex flex-col gap-[1vw] capitalize font-semibold text-sm">
        <p>platform</p>
        <p>agent accelarator</p>
        <p>industries</p>
      </div>
      </div>

      <div className="w-1/3 h-full flex flex-col justify-center gap-[2vw]">
      <h6 className="capitalize text-2xl font-semibold text-zinc-200">company</h6>
      <div className="flex flex-col gap-[1vw] capitalize font-semibold text-sm">
        <p>media inquiries</p>
        <p>careers</p>
        <p>resources</p>
        <p>docs</p>
      </div>
      </div>

      <div className="w-1/3 h-full flex flex-col justify-center gap-[2vw]">
      <h6 className="capitalize text-2xl font-semibold text-zinc-200">support</h6>
      <div className="flex flex-col gap-[1vw] capitalize font-semibold text-sm">
        <p>help centre</p>
        <p>API docs</p>
        <p>partners</p>
        <p>contact us</p>
      </div>
      </div>

      </div>

      </div>

      <div className="w-full h-[30%] lg:mt-[2vw]">
        <div className="w-full h-1/2 flex flex-col">
        <div className="h-full w-full flex justify-evenly items-center capitalize font-semibold tablet:mb-4">
        <h6>instagram</h6>
        <h6>linkedin</h6>
        <h6>X(twitter)</h6>
        <h6>slack community</h6>
        </div>

        <div className="h-full w-full flex justify-center items-center lg:mt-[2vw]">
        <CTA/>
        </div>
        </div>
      </div>
     </div>
    </footer>
  );
};

export default Footer;

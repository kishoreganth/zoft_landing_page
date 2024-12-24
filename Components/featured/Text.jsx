'use client'
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import { useRef, useEffect } from "react";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import useScreenSize from "../ScreenSize";


gsap.registerPlugin(ScrollTrigger)

export function Text() {
const screenWidth = useScreenSize()
const textRef = useRef(null)
const mainRef = useRef(null)


useEffect(() => {

  if(textRef.current) {
    const textContent = textRef.current.textContent;
    const wrappedText = textContent
      .split("")
      .map((char, index) => `<span key=${index}>${char}</span>`)
      .join("");

    textRef.current.innerHTML = wrappedText; // Dynamically set the innerHTML
  }

  const spans = textRef.current.querySelectorAll('span')


  // ScrollTrigger.create({
  //   trigger: mainRef.current,
  //   start: "top top", 
  //   end: "bottom", 
  //   scrub: true, 
  //   markers: true, 
  //   pin: true, 
  // });

  gsap.to(spans, {
    scrollTrigger: {
      trigger: mainRef.current,
      start: '30% center',
      end: '70% center',
      scrub: 2,
      // markers: true,
      
    },
    color: '#000',
    stagger: .2,
    ease: Power4.easeInOut,
    duration: 1
  })
}, [])




  return (
    <div className="relative w-full flex h-1/2 md:h-screen tablet:h-[58vh] items-center justify-center overflow-hidden rounded-lg  dark:bg-black tablet:my-10">
      {/* Animated Grid Pattern */}
      {screenWidth < 768 ?(<AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={1}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "absolute inset-0 skew-y-12 z-0"
        )}
      />) : (    <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={1}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "absolute inset-0 skew-y-12 z-0"
        )}
      />) }
  



      {/* Text Reveal Content */}
      {screenWidth < 768 ? (<div ref={mainRef} className="relative z-10 h-[70vh] w-full px-[2vw]">
        <div className="text-center flex justify-center items-center w-full h-full">
         <h1 ref={textRef} className="md:text-5xl text-sm  font-black leading-tight text-zinc-300 dark:text-white px-2">zoft revolutionizes conversations with AI chat and phone agents that truly understand you. Our mission is to elevate every interaction, blending seamless communication with cutting-edge technology. Step into the future of engagement with Zoft.</h1>
          
        </div>
      </div>): (  <div ref={mainRef} className="relative z-10 h-screen w-full px-[2vw]">
        <div className="text-center flex justify-center items-center w-full h-full">
         <h1 ref={textRef} className="md:text-4xl tablet:text-3xl text-lg  font-bold leading-tight text-zinc-300 dark:text-white">zoft revolutionizes conversations with AI chat and phone agents that truly understand you. Our mission is to elevate every interaction, blending seamless communication with cutting-edge technology. Step into the future of engagement with Zoft.</h1>
          
        </div>
      </div>)}
    
    </div>
  );
}

"use client";

import React, { useRef, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../ui/animated-beam";
import { Icons } from "./Icons";
import Circle from "./Circle";


export function Beam({className}) {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg  p-10 ",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.googleDocs />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.googleDrive />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16">
            <Icons.openai />
          </Circle>
        </div>
      </div>

      {/* Animated beams connecting circles */}
      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} />
      {/* <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} /> */}
    </div>
  );
}

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref} // This expects a valid ref (created by useRef or React.createRef)
      className={cn(
        "z-10 flex w-[3vw] h-[3vw] items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default Circle;

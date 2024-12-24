"use client"

import dynamic from "next/dynamic";

const NoSSRComponent = dynamic(() => import("./root"), { ssr: false });

export default function Page() {
  return <NoSSRComponent />;
}
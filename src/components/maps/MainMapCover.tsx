"use client";

import dynamic from "next/dynamic";
import React from "react";
const MainMap = dynamic(() => import("@/components/maps/MainMap"), {
  ssr: false,
});

const MainMapCover = () => {
  return (
    <div>
      {/* {typeof window === "undefined" && ( */}
      <MainMap zoom={7} />
      {/* )} */}
    </div>
  );
};

export default MainMapCover;

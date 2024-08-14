import { AuroraBackgroundDemo } from "@/components/Aurorabackground";
import React from "react";
import Spline from "@splinetool/react-spline/next";
import MainNav from "@/components/navbar/MainNav";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getServerAuthSession } from "@/server/auth";

const HomePage = async () => {
  const session = await getServerAuthSession();
  return (
    <div className="relative w-full">
      <AuroraBackgroundDemo />
      <MainNav />

      <div className="absolute inset-0 flex p-8">
        <div className="flex w-1/2 flex-col items-center justify-center">
          <h1 className="p-4 text-right text-6xl font-extrabold text-black">
            Unlocking Tomorrow’s Supply Chain Today.
          </h1>
          {session ? (
            <Link href="/dashboard" className="self-end p-4">
              <Button size={"lg"}>Go to Dashboard</Button>
            </Link>
          ) : (
            <Link href="/login" className="self-end p-4">
              <Button size={"lg"}>Login</Button>
            </Link>
          )}
        </div>

        <div className="flex w-1/2 items-center justify-center p-8">
          <Spline scene="https://prod.spline.design/EIYwG4LR00LTFFor/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

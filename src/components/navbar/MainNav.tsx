import React from "react";
import Link from "next/link";

const MainNav = async () => {
  return (
    <div className="absolute top-0 w-screen">
      <div className="flex w-full items-center justify-between p-4 backdrop-blur">
        <div className="rounded-md p-2 font-mono text-2xl">
          <Link href="/" passHref>
            <p className="font-bold">Kazeko</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNav;

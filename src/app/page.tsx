  // import { AuroraBackgroundDemo } from '@/components/Aurorabackground'
  // import React from 'react'

  // // type Props = {}

  // const page = () => {
  //   return (
  //     <div>
  //       <AuroraBackgroundDemo />
  //     </div>
  //   )
  // }

  // export default page

  // pages/index.tsx

// pages/index.tsx

import { AuroraBackgroundDemo } from '@/components/Aurorabackground';
import React from 'react';
import Spline from '@splinetool/react-spline/next';

const HomePage = () => {
  return (
    <div className="relative w-full h-screen">
      <AuroraBackgroundDemo />

      <div className="absolute inset-0 flex p-8">
        <div className="w-1/2 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-black text-center p-4">
            Unlocking Tomorrow’s Supply Chain Today
          </h1>
        </div>

        <div className="w-1/2 p-8 flex items-center justify-center">
          <Spline
            scene="https://prod.spline.design/EIYwG4LR00LTFFor/scene.splinecode"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

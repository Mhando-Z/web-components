"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
// import image
import logo from "../../public/assets/logo/mhd.png";
import { redirect } from "next/navigation";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      redirect("dashboard/home");
    }, 2000); // Show intro for 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);
  //
  if (showIntro) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Image
          src={logo}
          alt="MhdLogo"
          className="object-cover md:w-[300px] w-[200px] animate-pulse duration-1000 transition-all"
        />
      </div>
    );
  }
  return (
    <div>
      <div></div>
    </div>
  );
}

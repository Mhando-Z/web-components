"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
// import image
import logo from "../../public/assets/logo/mhd.png";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // total duration (ms)
    const interval = 100; // update every 100ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        return next >= 100 ? 100 : next;
      });
    }, interval);

    const redirectTimer = setTimeout(() => {
      redirect("dashboard/home");
    }, duration);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(redirectTimer);
    };
  }, []);
  //

  if (showIntro) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={logo}
            alt="MhdLogo"
            className="object-cover md:w-[300px] w-[200px]  transition-all"
          />
        </motion.div>
        {/* Progress bar container */}
        <div className="w-full max-w-[300px] h-2 mt-5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-400 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div></div>
    </div>
  );
}

"use client";

import AniButton, { AniButtonCode } from "@/components/Button/AniButton";
import NormalButton from "@/components/Button/NormalButton";
import CodeHighlighter from "@/components/CodeHighlighter";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";

function Buttons() {
  const [ShowCode, setShowCode] = useState({
    id: "",
    activate: false,
  });

  return (
    <div className="flex font-roboto flex-col min-h-screen p-4 gap-4">
      {/* Normal Button */}
      <div className="flex flex-col ">
        <h1 className="text-4xl ">Normal Button</h1>
        <div className="flex gap-5 mt-5  justify-between">
          <NormalButton text="Demo Button" />
          <NormalButton text="Demo Button" bgcolor={"bg-amber-400"} />
          <NormalButton text="Demo Button" bgcolor={"bg-cyan-700"} />
          <NormalButton text="Demo Button" />
        </div>
        {/* show source code button */}
        <div className="mt-10 mb-3 w-full gap-2 justify-center flex  items-center">
          <button
            onClick={() => setShowCode({ id: 1, activate: true })}
            className="px-7 py-2 text-black cursor-pointer rounded-3xl bg-gray-200"
          >
            Source Code
          </button>
          {ShowCode?.activate && ShowCode?.id && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 130 }}
              onClick={() => setShowCode({ id: "", activate: false })}
              className="px-4 p-2  cursor-pointer rounded-full hover:text-white hover:bg-red-500 bg-gray-200 text-black"
            >
              X
            </motion.div>
          )}
        </div>
        <AnimatePresence>
          {/* Source code */}
          {ShowCode?.activate && ShowCode?.id && (
            <motion.div>
              <CodeHighlighter codeString={AniButtonCode} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Animated Button */}
      <div className="flex flex-col ">
        <h1 className="text-4xl ">Animated Buttom</h1>
        <div className="flex gap-5 mt-5  justify-between">
          <AniButton text="Demo Button" />
          <AniButton text="Demo Button" className="bg-blue-700 " />
          <AniButton text="Demo Button" className="bg-green-700 " />
          <AniButton text="Demo Button" variant="secondary" />
        </div>
        {/* show source code button */}
        <div className="mt-10 mb-3 w-full gap-2 justify-center flex  items-center">
          <button
            onClick={() => setShowCode({ id: 1, activate: true })}
            className="px-7 py-2 text-black cursor-pointer rounded-3xl bg-gray-200"
          >
            Source Code
          </button>
          {ShowCode?.activate && ShowCode?.id && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 130 }}
              onClick={() => setShowCode({ id: "", activate: false })}
              className="px-4 p-2  cursor-pointer rounded-full hover:text-white hover:bg-red-500 bg-gray-200 text-black"
            >
              X
            </motion.div>
          )}
        </div>
        <AnimatePresence>
          {/* Source code */}
          {ShowCode?.activate && ShowCode?.id && (
            <motion.div>
              <CodeHighlighter codeString={AniButtonCode} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Buttons;

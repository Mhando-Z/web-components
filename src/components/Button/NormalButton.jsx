import React from "react";
import { motion } from "framer-motion";

function NormalButton({
  text = "Button",
  size = "medium",
  bgcolor = "bg-green-600",
  classname = "",
}) {
  const sizeStyles = {
    small: "px-3 py-1.5 text-xs sm:text-sm",
    medium: "px-4 py-2 text-sm sm:text-base",
    large: "px-6 py-3 text-base sm:text-lg",
  };
  return (
    <div>
      <motion.button
        className={` ${sizeStyles[size]} ${classname} ${bgcolor}`}
        whileHover="hover"
        initial="initial"
      >
        <span className="relative z-10 flex items-center">{text}</span>
      </motion.button>
    </div>
  );
}

export default NormalButton;

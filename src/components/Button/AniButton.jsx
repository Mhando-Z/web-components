"use client";

import React from "react";
import { motion } from "framer-motion";

const AniButton = ({
  text = "Button",
  onClick,
  variant = "primary",
  size = "medium",
  icon: Icon,
  className = "",
}) => {
  const baseStyles =
    "relative rounded overflow-hidden font-bold font-medium  ring-2 hover:ring-[#b67a3d] transition duration-300";
  const sizeStyles = {
    small: "px-3 py-1.5 text-xs sm:text-sm",
    medium: "px-4 py-2 text-sm sm:text-base",
    large: "px-6 py-3 text-base sm:text-lg",
  };

  const variantStyles = {
    primary: "bg-[#EC7C15] hover:text-inherit text-white",
    secondary: "bg-white ring-gray-700 hover:text-white",
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        className={`absolute inset-0  ${
          variantStyles[variant] === "bg-white ring-gray-700 hover:text-white"
            ? "bg-[#EC7C15] text-white font-bold"
            : "bg-white text-[#EC7C15] font-bold"
        } `}
        initial={{ x: "-100%" }}
        variants={{ hover: { x: 0 } }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0"
        initial={{ x: 0 }}
        variants={{ hover: { x: "100%" } }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10 flex items-center">
        {text} {Icon && <Icon className="w-5 h-5 ml-2" />}
      </span>
    </motion.button>
  );
};

export default AniButton;

export const AniButtonCode = `
"use client"

import React from "react";
import { motion } from "framer-motion";

const AniButton = ({
  text = "Button",
  onClick,
  variant = "primary",
  size = "medium",
  icon: Icon,
  className = "",
}) => {
  const baseStyles =
    "relative rounded overflow-hidden font-bold font-medium ring-2 hover:ring-[#b67a3d] transition duration-300";
  const sizeStyles = {
    small: "px-3 py-1.5 text-xs sm:text-sm",
    medium: "px-4 py-2 text-sm sm:text-base",
    large: "px-6 py-3 text-base sm:text-lg",
  };
  const variantStyles = {
    primary: "bg-[#EC7C15] ring-[#EC7C15] hover:text-inherit text-white",
    secondary: "bg-white ring-gray-700 hover:text-white",
  };

  return (
    <motion.button
      onClick={onClick}
      className={\`\${baseStyles} \${sizeStyles[size]} \${variantStyles[variant]} \${className}\`}
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        className={\`absolute inset-0 \${variantStyles[variant] === "bg-white ring-gray-700 hover:text-white"
          ? "bg-[#EC7C15] text-white font-bold"
          : "bg-white text-[#EC7C15] font-bold"}\`}
        initial={{ x: "-100%" }}
        variants={{ hover: { x: 0 } }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0"
        initial={{ x: 0 }}
        variants={{ hover: { x: "100%" } }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10 flex items-center">
        {text} {Icon && <Icon className="w-5 h-5 ml-2" />}
      </span>
    </motion.button>
  );
};

export default AniButton;
`;

"use client";

import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import DataContext from "@/context/DataContext";

// icons imports
import { GiVote } from "react-icons/gi";
import { BsClipboardDataFill } from "react-icons/bs";
import { VscServerProcess } from "react-icons/vsc";
import { RxCrossCircled } from "react-icons/rx";
import { BiLinkExternal } from "react-icons/bi";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Movies Website",
    description: "Browse and explore movies with rich details",
    url: "https://mhd-movies.vercel.app/",
    icon: <GiVote />,
    color: "from-purple-500 to-pink-500",
    tags: ["Entertainment", "UI/UX"],
  },
  {
    id: 2,
    title: "Herveg Website",
    description: "Agricultural marketplace and services",
    url: "https://hervegweb.vercel.app/",
    icon: <GiVote />,
    color: "from-purple-500 to-pink-500",
    tags: ["Agriculture", "UI/UX"],
  },
  {
    id: 3,
    title: "Necta Results",
    description: "Educational examination results portal",
    url: "https://necta-results.vercel.app/",
    icon: <BsClipboardDataFill />,
    color: "from-blue-500 to-cyan-500",
    tags: ["Education", "Data"],
  },
  {
    id: 4,
    title: "Sciwrite",
    description: "Scientific writing and documentation platform",
    url: "https://sciwrite.vercel.app/",
    icon: <VscServerProcess />,
    color: "from-green-500 to-emerald-500",
    tags: ["Writing", "Science"],
  },
  {
    id: 5,
    title: "CRDB Saccos",
    description: "Banking and financial services management",
    url: "https://crdbworkers-saccos.vercel.app/",
    icon: <VscServerProcess />,
    color: "from-orange-500 to-red-500",
    tags: ["Finance", "Banking"],
  },
  {
    id: 6,
    title: "Herveg05",
    description: "Agricultural marketplace and services",
    url: "https://herveg-mhandozs-projects.vercel.app/",
    icon: <VscServerProcess />,
    color: "from-teal-500 to-green-500",
    tags: ["Agriculture", "E-commerce"],
  },
  {
    id: 7,
    title: "Historical Association of Tanzania",
    description: "Historical research and documentation platform",
    url: "https://hattz.ac.tz/",
    icon: <VscServerProcess />,
    color: "from-teal-500 to-green-500",
    tags: ["History", "Research"],
  },
];

function MyProjects() {
  const router = useRouter();
  const [expandedId, setExpandedId] = useState(null);
  const { handleCancel } = useContext(DataContext);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 w-full min-h-screen">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-xl border-b border-white/10 shadow-2xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex items-center gap-4"
              >
                <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-lg shadow-emerald-500/30">
                  <VscServerProcess className="text-white text-2xl" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-gradient">
                    My Projects
                  </h1>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    Interactive portfolio showcasing my work
                  </p>
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCancel}
                className="text-2xl sm:text-3xl text-slate-400 hover:text-emerald-400 transition-all duration-300 p-2 sm:p-3 rounded-full hover:bg-white/5 backdrop-blur-sm border border-transparent hover:border-emerald-500/30"
              >
                <RxCrossCircled />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className={`group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/50 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 ${
                  expandedId === project.id ? "lg:col-span-2" : ""
                }`}
              >
                {/* Gradient overlay on border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 p-[2px]">
                  <div
                    className={`w-full h-full bg-gradient-to-r ${project.color}`}
                  />
                </div>

                {/* Project Header */}
                <div className="relative p-4 sm:p-6 bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-md border-b border-white/5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 p-2 sm:p-3 rounded-xl bg-gradient-to-br ${project.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="text-white text-xl sm:text-2xl">
                          {project.icon}
                        </div>
                      </div>

                      {/* Title and description */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-300 truncate">
                          {project.title}
                        </h3>
                        <p className="text-slate-400 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-white/5 text-emerald-400 rounded-full border border-emerald-500/20 backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleExpand(project.id)}
                        className="p-2 sm:p-2.5 rounded-lg bg-slate-700/50 hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-400 transition-all duration-300 border border-white/5 hover:border-emerald-500/30 backdrop-blur-sm"
                        title={
                          expandedId === project.id ? "Minimize" : "Maximize"
                        }
                      >
                        {expandedId === project.id ? (
                          <FiMinimize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        ) : (
                          <FiMaximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                      </motion.button>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-2.5 rounded-lg bg-slate-700/50 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-all duration-300 border border-white/5 hover:border-cyan-500/30 backdrop-blur-sm"
                        title="Open in new tab"
                      >
                        <BiLinkExternal className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Preview */}
                <motion.div
                  layout
                  className={`relative bg-white ${
                    expandedId === project.id
                      ? "h-[500px] sm:h-[600px] lg:h-[700px]"
                      : "h-[300px] sm:h-[400px]"
                  } transition-all duration-500`}
                >
                  {/* Loading shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-pulse" />

                  {/* Live iframe */}
                  <iframe
                    src={project.url}
                    className="absolute inset-0 w-full h-full border-0"
                    title={project.title}
                    loading="lazy"
                  />

                  {/* Decorative border */}
                  <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/5 group-hover:ring-emerald-500/20 transition-all duration-500" />

                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />
                </motion.div>

                {/* Footer info */}
                <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-900/50 backdrop-blur-sm border-t border-white/5">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500">
                    <span>Live Preview</span>
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Active
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="space-y-3"
          >
            <p className="text-slate-400 text-sm sm:text-base">
              All projects are live and interactive
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <FiMaximize2 className="text-emerald-400" />
                Click to expand
              </span>
              <span className="flex items-center gap-2">
                <BiLinkExternal className="text-cyan-400" />
                Open in new tab
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default MyProjects;

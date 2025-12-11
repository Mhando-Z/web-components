"use client";

// icons
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import logo from "../../../public/assets/logo/mhd.png";
// other imports
import { IoKeySharp, IoPeople } from "react-icons/io5";
import { FaMoneyBillTrendUp, FaPowerOff } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { RiLuggageDepositFill } from "react-icons/ri";

// what vano and other supervisors can see
const Routes = [
  {
    sections: "Buttons",
    path: "/dashboard/buttons",
    links: "buttons",
    icon: <FaHome />,
  },
  {
    sections: "Farmers",
    path: "/dashboard/farmer",
    links: "farmer",
    icon: <IoPeople />,
  },
  {
    sections: "Packages",
    path: "/dashboard/package",
    links: "package",
    icon: <RiLuggageDepositFill />,
  },
  {
    sections: "Payments Updates",
    path: "/dashboard/payments",
    links: "payments",
    icon: <FaMoneyBillTrendUp />,
  },
];

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [show, setshow] = useState(false);
  const pathname = usePathname();

  // scrolll to top function
  const scrollToTop = () => {
    // Check if the screen width is less than or equal to the tablet breakpoint (e.g., 768px)
    if (window.innerWidth <= 768) {
      toggleSidebar(); // Only toggle sidebar for tablet or mobile views
    }
  };

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // button functons
  const handleShow = () => {
    if (show === true) {
      setshow(!show);
    }
    setshow(!show);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 bg-slate-100  h-full transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col justify-between min-h-screen p-6">
          <div>
            <div className=" w-full flex flex-col items-center">
              <Image src={logo} alt="herveg logo" className="w-[150px] " />
            </div>
            <nav className="mt-10">
              <div className="flex flex-col w-full">
                {Routes?.map((dt, index) => {
                  return (
                    <div key={index + 234} className="flex flex-col gap-y-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ type: "spring", ease: "easeOut" }}
                        className="w-full"
                      >
                        <Link href={dt.links}>
                          <div
                            onClick={scrollToTop}
                            className={`${
                              pathname === dt.path
                                ? "bg-red-600 items-center rounded gap-x-5 text-center font-medium  text-gray-50 w-full flex flex-row py-2 px-7 mt-2"
                                : "flex  flex-row py-2 w-full  gap-x-2  items-center  hover:bg-gray-200 hover:text-gray-900  px-7 mt-2 text-slate-800 rounded"
                            }`}
                          >
                            <p className="text-xl">{dt.icon}</p>
                            <h1 className="text-sm xl:text-base line-clamp-1">
                              {dt.sections}
                            </h1>
                          </div>
                        </Link>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      </aside>

      {/* Overlay for Sidebar on small screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}
      {/* Main content */}
      <div className="flex-1 ml-0 overflow-y-auto bg-gray-50 md:ml-64">
        <header className="sticky top-0 z-30 flex items-center justify-between py-4 shadow bg-slate-100 md:py-6">
          {/* Button to toggle sidebar on mobile */}
          <button
            className="px-4 md:invisible text-gray-600 focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </header>
        {/* other pages router rendered here */}
        <main className="flex flex-col min-h-screen p-4 md:p-6">
          <main>{children}</main>
        </main>
      </div>
    </div>
  );
}

import myImage from "../assets/Group 12 (1).png";
import ProgressBar from "./ProgressBar";
import { X } from "lucide-react";
import { motion } from "framer-motion";

function NavBar() {
  return (
    <>
      <motion.header
        className="flex justify-between items-center px-6 py-4 shadow-lg rounded-lg mb-8 hover:shadow-xl transition-all duration-300"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
          <img
            src={myImage}
            alt="Logo"
            className="w-[60px] md:w-[80px] transform transition-transform duration-300 ease-in-out"
          />
        </div>

        <nav>
          <h2 className="font-semibold text-3xl text-gray-800">
            Fantasy Quiz <span className="text-purple-500">#156</span>
          </h2>
        </nav>

        <button className="bg-gray-100 p-2 rounded-full transition-colors duration-300 hover:bg-gray-300">
          <X size={18} />
        </button>
      </motion.header>

      <div className="mt-3 lg:hidden flex">
        <ProgressBar />
      </div>
    </>
  );
}

export default NavBar;

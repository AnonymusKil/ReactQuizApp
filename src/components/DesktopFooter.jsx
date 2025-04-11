import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion";

function DesktopFooter() {
  return (
    <motion.footer
      className="hidden lg:flex bg-white justify-between items-center px-6 py-4 shadow-lg rounded-lg mt-8 hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-3 w-full max-w-md">
        <ProgressBar />
      </div>
      <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-md w-full max-w-xs mx-auto shadow-md transition duration-300">
        CONTINUE
      </button>
    </motion.footer>
  );
}

export default DesktopFooter;
// Compare this snippet from src/components/DesktopFooter.jsx:
// import ProgressBar from "./ProgressBar";

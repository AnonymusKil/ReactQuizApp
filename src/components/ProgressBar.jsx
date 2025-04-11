import { motion } from "framer-motion";

function ProgressBar({ progress }) {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="h-full bg-green-500"
          initial={{ width: 0 }}
          // Replace with logic if needed
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>
      <motion.p
        className="text-sm font-medium text-gray-600 ml-2"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        1/5
      </motion.p>
    </div>
  );
}

export default ProgressBar;

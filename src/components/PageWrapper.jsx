import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -10, y: 50 }}
      animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, rotate: 10, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen - bg-gradient-to-r from-purple-900 to-cyan-700"


    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;

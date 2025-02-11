import { Link } from "react-router-dom";
import { motion } from "motion/react";
import "./index.css";

export default function BorderBtn() {
  return (
    <Link to={"/allArtifacts"}>
      <motion.button
        className="fancy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.9,
          ease: "easeOut",
        }}
      >
        <span className="top-key"></span>
        <span className="text">Learn More</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </motion.button>
    </Link>
  );
}

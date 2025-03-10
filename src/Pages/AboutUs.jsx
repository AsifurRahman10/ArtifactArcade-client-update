import { Link } from "react-router-dom";
import img1 from "../assets/aboutus.jpg";
import dummy from "../assets/dummy.png";
import { motion } from "motion/react";

export const AboutUs = () => {
  return (
    <div className="py-10 md:py-20 bg-gradient-to-r from-[#F4E3D2] to-[#ECD5C7] relative">
      <div className="flex flex-col lg:flex-row items-center w-11/12 lg:w-9/12 mx-auto gap-12">
        {/* Image Section */}
        <div className="flex-1 relative">
          <div className="rounded-lg overflow-hidden shadow-lg group">
            <img
              src={img1}
              alt="Historical Artifact"
              className="object-cover w-full h-auto transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-500"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-[#4A3423] text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Unveil Timeless Mysteries
          </h2>
          <p className="text-[#705D4A] text-lg md:text-xl leading-relaxed tracking-wide">
            Step into a realm where history whispers its secrets. Dive into
            stories etched in artifacts, revealing the marvels of ancient
            civilizations. Let your curiosity unlock the door to the past.
          </p>
          <Link
            to="/allArtifacts"
            className="bg-custom-btn font-semibold text-white py-3 rounded group overflow-hidden px-8 md:px-6 lg:px-10 relative flex justify-center items-center w-full lg:w-1/3"
          >
            <span className="relative z-10">Learn More</span>
            <span className="absolute inset-0 w-0 bg-[#183153] transition-all rounded duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
        </div>
      </div>
      <motion.div
        className="absolute -bottom-52 lg:bottom-0 lg:-top-32 right-4 opacity-50 hidden md:block"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <img src={dummy} alt="" />
      </motion.div>
    </div>
  );
};

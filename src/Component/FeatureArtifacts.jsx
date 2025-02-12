import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FeatureCard } from "./FeatureCard";
import { Link } from "react-router-dom";

export const FeatureArtifacts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/highestLike").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="py-10 md:py-20 w-11/12 lg:w-9/12 mx-auto">
      <div className="text-center">
        <p className="text-custom-btn font-semibold tracking-[0.15em] text-lg mb-6">
          What's going on
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold title-text">
          Featured Artifacts
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10 md:mt-20">
        {data.map((item) => (
          <FeatureCard key={item._id} item={item}></FeatureCard>
        ))}
      </div>
      <Link
        to="/allArtifacts"
        className="bg-custom-btn font-semibold text-white py-3 rounded group overflow-hidden px-8 md:px-6 lg:px-10 relative flex justify-center items-center w-1/3 mx-auto mt-8"
      >
        <span className="relative z-10">View all artifacts</span>
        <span className="absolute inset-0 w-0 bg-[#183153] transition-all rounded duration-500 ease-in-out group-hover:w-full"></span>
      </Link>
    </div>
  );
};

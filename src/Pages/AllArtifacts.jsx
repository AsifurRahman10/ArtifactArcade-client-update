import { Title } from "../Component/Title";
import { Card } from "../Component/Card";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "motion/react";

export const AllArtifacts = () => {
  const [allArtifactsData, setAllArtifactsData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleSelectedType = (e) => {
    setSelectedType(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/allArtifacts?search=${search}&sort=${selectedType}`
      )
      .then((res) => {
        setAllArtifactsData(res.data);
      });
  }, [search, selectedType]);
  return (
    <div className="mt-[112px]">
      <HelmetProvider>
        <Helmet>
          <title>All Artifacts - ArtifactArcade</title>
        </Helmet>
      </HelmetProvider>
      <Title
        title={"All Artifacts"}
        para={
          "Explore a curated collection of historical artifacts from around the world. Discover their origins, significance, and the fascinating stories behind these treasures of human history."
        }
      ></Title>
      <div className="w-11/12 lg:w-9/12 flex justify-end items-center my-10 mx-auto">
        <form className="w-full md:w-[307px] ml-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white "
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              id="default-search"
              className="block w-full p-4 py-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#183153] focus:border-[#183153] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by artifacts name"
              required
            />
          </div>
        </form>

        <div>
          <div className="flex lg:items-center flex-col md:flex-row justify-between gap-4 ml-4">
            {/* Dropdown Filter */}
            <select
              onChange={handleSelectedType}
              value={selectedType}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-btn focus:border-custom-btn block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-btn dark:focus:border-custom-btn"
            >
              <option disabled value="">
                Filter
              </option>
              <option value="name-asc">Name: A-Z</option>
              <option value="name-desc">Name: Z-A</option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-11/12 lg:w-9/12 mx-auto grid lg:mb-20 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allArtifactsData.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

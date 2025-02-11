import { Title } from "../Component/Title";
import { Card } from "../Component/Card";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "motion/react";

export const AllArtifacts = () => {
  const [allArtifactsData, setAllArtifactsData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/allArtifacts?search=${search}`)
      .then((res) => {
        setAllArtifactsData(res.data);
      });
  }, [search]);
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
        <form className="w-7/12 md:w-1/3 ml-auto">
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
          <div className="flex items-center justify-center p-4">
            <button
              id="dropdownDefault"
              data-dropdown-toggle="dropdown"
              className="text-black border focus:ring-4 focus:outline-none focus:ring-[#183153] font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              type="button"
            >
              Filter
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <div
              id="dropdown"
              className="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
            >
              <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Category
              </h6>
              <ul
                className="space-y-2 text-sm"
                aria-labelledby="dropdownDefault"
              >
                <li className="flex items-center">
                  <input
                    id="apple"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />

                  <label
                    for="apple"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Apple (56)
                  </label>
                </li>
              </ul>
            </div>
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

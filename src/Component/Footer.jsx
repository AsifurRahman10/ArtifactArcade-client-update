import { Link } from "react-router-dom";
import logo from "../../public/logo.png";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white  border-t">
      <div className="mx-auto w-11/12 lg:w-9/12 py-10 lg:py-20">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex flex-col items-center">
              <img src={logo} className="h-32" alt="FlowBite Logo" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 ">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Website navigation
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/allArtifacts" className="hover:underline">
                    All Artifacts
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Login & Registration
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/login" className="hover:underline ">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:underline">
                    Registration
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 <a className="hover:underline">Artifacts™</a>. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

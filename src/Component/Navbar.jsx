import React, { useContext, useEffect, useRef, useState } from "react";
import "flowbite";
import logo from "../../public/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { LuSunMedium, LuSunMoon } from "react-icons/lu";
import { ThemeContext } from "../Provider/ThemeProvider";

export const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);

  const { toggleTheme } = useContext(ThemeContext);

  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const handleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleNavbarOpen = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setIsNavbarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const li = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-custom-btn" : "")}
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/allArtifacts"
        className={({ isActive }) => (isActive ? "text-custom-btn" : "")}
      >
        <li>All Artifacts</li>
      </NavLink>
      {user && (
        <NavLink
          to="/add_artifacts"
          className={({ isActive }) => (isActive ? "text-custom-btn" : "")}
        >
          <li>Add Artifacts</li>
        </NavLink>
      )}
      <NavLink
        to="/learn-more"
        className={({ isActive }) => (isActive ? "text-custom-btn" : "")}
      >
        <li>Learn More</li>
      </NavLink>
    </>
  );
  return (
    <nav className="mx-auto fixed left-0 top-0 z-40 w-full bg-white dark:bg-dark-bg">
      <div className=" border-gray-200 relative small-text w-11/12 lg:w-9/12 mx-auto">
        <div className="flex flex-wrap items-center justify-between p-4">
          {/* Logo */}
          <Link to={"/"} className="">
            <img src={logo} className="h-20 w-20" alt="Logo" />
          </Link>

          {/* User Profile Section */}
          {user ? (
            <div
              ref={dropdownRef}
              className="flex items-center ml-0 md:ml-8 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse translate-x-20 md:translate-x-0 relative mr-0 md:mr-14 lg:mr-0"
            >
              {/* User Menu Button */}
              <label className="inline-flex items-center cursor-pointer space-x-2 mr-4">
                <span className="text-gray-600 dark:text-gray-400 transition-colors">
                  <LuSunMedium />
                </span>
                <input type="checkbox" value="" className="sr-only peer" />
                <div
                  className="relative w-12 h-7 bg-gray-300 rounded-full peer dark:bg-gray-700 
            peer-checked:bg-[#97643F] transition-colors duration-300
            peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-5 
            peer-checked:after:border-white after:content-[''] after:absolute after:top-1 
            after:left-1 after:bg-white after:border-gray-300 after:border 
            after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500"
                ></div>
                <span className="text-gray-900 dark:text-gray-100 transition-colors">
                  <LuSunMoon />
                </span>
              </label>
              <button
                type="button"
                onClick={handleDropDown}
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-16 h-16 rounded-full"
                  src={user?.photoURL}
                  alt="User photo"
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="z-50 absolute w-[200px] -right-3 md:-right-16 top-20 md:top-20 lg:-right-16 lg:top-20 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {user?.displayName}
                    </span>
                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                      {user?.email}
                    </span>
                  </div>
                  <ul className="py-2">
                    <li>
                      <Link
                        to={"/myArtifacts"}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        My Artifacts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/likedArtifacts"}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Liked Artifacts
                      </Link>
                    </li>
                    <li onClick={handleSignOut}>
                      <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-between items-center translate-x-10 md:translate-x-0 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:gap-3 lg:gap-6">
              {/* Dark Mode Toggle */}
              <label className="hidden md:inline-flex items-center cursor-pointer space-x-2">
                <span className="text-gray-600 dark:text-gray-400 transition-colors">
                  <LuSunMedium />
                </span>
                <input
                  type="checkbox"
                  // checked={darkMode}
                  onChange={toggleTheme}
                  className="sr-only peer"
                />
                <div
                  className="relative w-12 h-7 bg-gray-300 rounded-full peer dark:bg-gray-700 
          peer-checked:bg-[#97643F] transition-colors duration-300 
          peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-5 
          peer-checked:after:border-white after:content-[''] after:absolute after:top-1 
          after:left-1 after:bg-white after:border-gray-300 after:border 
          after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500"
                ></div>
                <span className="text-gray-900 dark:text-gray-100 transition-colors">
                  <LuSunMoon />
                </span>
              </label>

              {/* Login Button */}
              <Link
                to="/login"
                className="bg-custom-btn font-semibold text-white py-3 rounded group overflow-hidden px-8 md:px-6 lg:px-10 relative"
              >
                <span className="relative z-10">Login</span>
                <span className="absolute inset-0 w-0 bg-[#183153] transition-all rounded duration-500 ease-in-out group-hover:w-full"></span>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={handleNavbarOpen}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Navigation Items */}
          <div
            className={`${
              isNavbarOpen ? "block" : "hidden"
            } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
            id="navbar-user"
            ref={navbarRef}
          >
            <ul
              className={`flex translate-x-6 ${
                user ? "lg:translate-x-10" : "lg:translate-x-24"
              } lg:translate-x-24 gap-2 md:gap-0 flex-col  font-bold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-dark-bg `}
            >
              {li}
              <label className="inline-flex items-center cursor-pointer space-x-2 md:hidden">
                <span className="text-gray-600 dark:text-gray-400 transition-colors">
                  <LuSunMedium />
                </span>
                <input type="checkbox" value="" className="sr-only peer" />
                <div
                  className="relative w-12 h-7 bg-gray-300 rounded-full peer dark:bg-gray-700 
          peer-checked:bg-[#97643F] transition-colors duration-300
          peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-5 
          peer-checked:after:border-white after:content-[''] after:absolute after:top-1 
          after:left-1 after:bg-white after:border-gray-300 after:border 
          after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500"
                ></div>
                <span className="text-gray-900 dark:text-gray-100 transition-colors">
                  <LuSunMoon />
                </span>
              </label>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

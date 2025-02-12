import React, { useContext } from "react";
import { Navbar } from "../Component/Navbar";
import { Footer } from "../Component/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Component/ScrollOnTop";
import { AuthContext } from "../Provider/AuthProvider";
import Lottie from "lottie-react";
import loadingImg from "../../public/loading.json";

export const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="min-h-screen w-full mt-[112px]">
        <Lottie
          className="w-1/3 mx-auto"
          animationData={loadingImg}
          loop={true}
        />
      </div>
    );
  }
  return (
    <div className="bg-[#FFFFFF] dark:bg-dark-bg dark:text-white">
      <ScrollToTop></ScrollToTop>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

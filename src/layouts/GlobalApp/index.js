import React from "react";
import { Outlet } from "react-router-dom";
import Gap from "../../components/atoms/Gap";
import Footer from "../../components/molecules/Footer";
import Navbar from "../../components/molecules/Navbar";

const GlobalApp = () => {
  return (
    <>
      <Navbar />
      <Gap height={70} />
      <Outlet />
      <Gap height={100} />
      <Footer />
    </>
  );
};

export default GlobalApp;

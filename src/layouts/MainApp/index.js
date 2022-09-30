import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/molecules/Sidebar";
import Navbar from "../../components/molecules/Navbar";

const MainApp = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <Sidebar />
          <div class="col py-3">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainApp;

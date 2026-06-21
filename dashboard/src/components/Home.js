import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <Dashboard />
      <ToastContainer autoClose={3000} /> {/* autoClose means that the tost popup willl stay for how many ms */}
    </>
  );
};

export default Home;

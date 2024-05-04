import React from "react";
import { Header, Footer, Loading } from "../components";
import { Outlet, useNavigation } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Header />
      {/* <Loading /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Landing;

import React from "react";
import { Header, Footer, Loading, BookNow } from "../components";
import { Outlet, useNavigation } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Header />
      {/* <Loading /> */}
      <Outlet />
      <BookNow />
      <Footer />
    </>
  );
};

export default Landing;

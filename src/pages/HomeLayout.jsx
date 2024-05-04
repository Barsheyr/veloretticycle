import React from "react";
import {
  Hero,
  Section1,
  Section2,
  Section3,
  Section4,
  Contacts,
  Faq,
  SectionTwoBicycle,
} from "../components";

const HomeLayout = () => {
  return (
    <div>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <SectionTwoBicycle />
      <Contacts />
      <Faq />
    </div>
  );
};

export default HomeLayout;

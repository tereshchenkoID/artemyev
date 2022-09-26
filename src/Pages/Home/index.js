import React from "react";

import SectionPortfolio from "../../Sections/SectionPortfolio/index";
import SectionResume from "../../Sections/SectionResume";
import SectionRandom from "../../Sections/SectionRandom";

const Home = () => {
  return (
      <>
          <SectionRandom />
          <SectionPortfolio />
          <SectionResume />
      </>
  )
}

export default Home

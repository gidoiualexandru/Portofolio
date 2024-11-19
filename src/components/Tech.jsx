import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Tech = () => {
  const isMobile = window.matchMedia("(max-width: 500px)").matches;

  const shuffledTechnologies = shuffleArray(technologies);

  const Map = (isMobile, technologies) => {
    if (isMobile) {
      return technologies.slice(0, 4).map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className="flex justify-center text-white font-bold">
            {technology.name}
          </p>
        </div>
      ));
    } else {
      return technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className="flex justify-center text-white font-bold">
            {technology.name}
          </p>
        </div>
      ));
    }
  };

  return (
    <>
      <h1 className="font-bold flex justify-center text-lg mb-5 text-[#915EFF]">
        My Tech Stack
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {Map(isMobile, shuffledTechnologies)}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
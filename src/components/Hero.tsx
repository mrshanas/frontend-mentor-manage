import React from "react";
import intro from "../assets/images/illustration-intro.svg";
import Button from "./Button";

const Hero: React.FC = () => {
  return (
    <div className="flex md:flex-row w-full flex-col-reverse">
      <div className="basis-1/2 flex flex-col align-top justify-around text-center">
        <h1 className="text-6xl font-bold">
          Bring everyone together to build better products.
        </h1>
        <p className="text-2xl font-thin ml-12">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view
        </p>
        <div className="w-1/4 ml-12">
          <Button />
        </div>
      </div>
      <div className="basis-1/2">
        <img src={intro} alt="" />
      </div>
    </div>
  );
};

export default Hero;

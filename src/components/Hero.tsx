import React from "react";
import intro from "../assets/images/illustration-intro.svg";
import Button from "./Button";

const Hero: React.FC = () => {
  return (
    <div className="flex md:flex-row w-full flex-col-reverse">
      <div className="basis-1/2 flex flex-col align-top">
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view
        </p>
        <Button buttonWidth="1" />
      </div>
      <div className="basis-1/2">
        <img src={intro} alt="" />
      </div>
    </div>
  );
};

export default Hero;

import React, { FC, useContext, useState } from "react";
import { use } from "i18next";
import FloorContext from "./store/FloorContext";

type LiftButtonProps = {
  floorNumber: number;
};

const ElevatorButton: FC<LiftButtonProps> = ({ floorNumber }) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const pickedFloor = useContext(FloorContext);

  const handelButtonOnClick = () => {
    setButtonClicked(!buttonClicked);
    pickedFloor.chooseFloor(floorNumber);
  };
  return (
    <div
      className={`w-24 h-24 rounded-full ${
        buttonClicked ? "bg-primary" : "bg-gray-500"
      } flex items-center justify-center`}
    >
      <div
        className={
          "w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-3xl select-none"
        }
        onClick={handelButtonOnClick}
      >
        {floorNumber}
      </div>
    </div>
  );
};

export default ElevatorButton;

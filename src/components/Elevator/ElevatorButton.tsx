import React, { FC, useContext, useEffect, useState } from "react";
import { use } from "i18next";
import FloorContext from "./store/FloorContext";
import { observer } from "mobx-react-lite";

type LiftButtonProps = {
  floorNumber: number;
  floorsStack: number[];
  pushFloor: (floorNumber: number) => void;
  elevatorLastFloor: number;
};

const ElevatorButton: FC<LiftButtonProps> = ({
  floorsStack,
  pushFloor,
  floorNumber,
  elevatorLastFloor,
}) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  let buttonChose = false;

  // if (floorsStack.includes(floorNumber)) {
  //   setButtonClicked(true);
  // }
  // console.log("ElevatorButton elevatorLastFloor", elevatorLastFloor);
  const handleButtonMouseDown = () => {
    // console.log("handleButtonMouseDown", elevatorLastFloor);

    setButtonClicked(true);
    if (
      !floorsStack.includes(floorNumber) &&
      floorNumber !== elevatorLastFloor
    ) {
      pushFloor(floorNumber);
      setTimeout(() => setButtonClicked(false), 1000);
    } else {
      setTimeout(() => setButtonClicked(false), 50);
    }
  };

  return (
    <div
      className={`w-24 h-24 rounded-full ${
        buttonClicked ? "bg-primary" : "bg-gray-500"
      } flex items-center justify-center m-1`}
    >
      <div
        className={
          "w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-3xl select-none"
        }
        onMouseDown={handleButtonMouseDown}
      >
        {floorNumber}
      </div>
    </div>
  );
};

export default ElevatorButton;

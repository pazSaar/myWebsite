import React, { FC, useContext, useEffect, useState } from "react";

type LiftButtonProps = {
  floorNumber: number;
  floorsStack: number[];
  onMouseDown: (
    setButtonLight: (lightOn: boolean) => void,
    floorNumber: number
  ) => void;
  onMouseUp: (
    setButtonLight: (lightOn: boolean) => void,
    floorNumber: number
  ) => void;
};

const ElevatorButton: FC<LiftButtonProps> = ({
  floorsStack,
  floorNumber,
  onMouseDown,
  onMouseUp,
}) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (!floorsStack.includes(floorNumber)) {
      setButtonClicked(false);
    }
  }, [floorsStack[0]]);

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
        onMouseDown={() => onMouseDown(setButtonClicked, floorNumber)}
        onMouseUp={() => onMouseUp(setButtonClicked, floorNumber)}
      >
        {floorNumber}
      </div>
    </div>
  );
};

export default ElevatorButton;

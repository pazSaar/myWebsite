import React, { FC, useContext, useEffect, useState } from "react";

type LiftButtonProps = {
  floorNumber: number;
  floorsStack: number[];
  pushFloor: (floorNumber: number) => void;
  elevatorLastFloor: number;
  elevatorMoves: boolean;
};

const ElevatorButton: FC<LiftButtonProps> = ({
  floorsStack,
  pushFloor,
  floorNumber,
  elevatorLastFloor,
  elevatorMoves,
}) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (!floorsStack.includes(floorNumber)) {
      setButtonClicked(false);
    }
  }, [floorsStack[0]]);

  const handleMouseDown = () => {
    setButtonClicked(true);
    if (
      (elevatorMoves && !floorsStack.includes(floorNumber)) ||
      (!elevatorMoves && floorNumber !== elevatorLastFloor)
    ) {
      pushFloor(floorNumber);
    }
  };

  const handleMouseUp = () => {
    if (floorNumber === elevatorLastFloor && !elevatorMoves)
      setButtonClicked(false);
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
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {floorNumber}
      </div>
    </div>
  );
};

export default ElevatorButton;

import React, { FC, useContext } from "react";
import ElevatorButton from "./ElevatorButton";
import FloorContext from "./store/FloorContext";
import { observer } from "mobx-react-lite";

type ElevatorPanelProps = {};

const ElevatorPanel: FC<ElevatorPanelProps> = observer(() => {
  const { numberOfFloors, floorsStack, pushFloor, elevatorLastFloor } =
    useContext(FloorContext);
  const buttonsArray = [];

  for (let i = numberOfFloors - 1; i >= 0; i--) {
    console.log("ElevatorPanel elevatorLastFloor", elevatorLastFloor);
    buttonsArray.push(
      <ElevatorButton
        key={i}
        floorNumber={i}
        floorsStack={floorsStack}
        pushFloor={pushFloor}
        elevatorLastFloor={elevatorLastFloor}
      />
    );
  }

  const drawPanel = () => {
    return (
      <div className=" self-center bg-gray-500 w-20 h-9 border border-gray-600">
        <div className="bg-black/60 w-15 h-8 border border-gray-600 text-center">
          <span className="text-green-500">
            {floorsStack[0] ? floorsStack[0] : elevatorLastFloor}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col bg-neutralBg">
      {drawPanel()}
      <div className="grid rev grid-cols-2 ">{buttonsArray}</div>
    </div>
  );
});

export default ElevatorPanel;

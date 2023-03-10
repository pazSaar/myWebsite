import React, { FC, useContext, useEffect, useState } from "react";
import FloorContext from "./store/FloorContext";
import { observer } from "mobx-react-lite";

type BuildingProps = {};

const Building: FC<BuildingProps> = observer(() => {
  const [elevatorNextFloor, setElevatorNextFloor] = useState(0);
  let { floorsStack, numberOfFloors, shiftFloor, setElevatorLastFloor } =
    useContext(FloorContext);

  useEffect(() => {
    let xxx: number;
    if (floorsStack[0] !== undefined) {
      setElevatorNextFloor(floorsStack[0]);
      floorsStack[0] && setElevatorLastFloor(floorsStack[0]);
    }
  }, [JSON.stringify(floorsStack)]);

  const handleTransitionEnd = () => {
    shiftFloor();
  };

  const drawRoof = () => {
    return (
      <div
        className="w-0 h-0
   border-l-[80px] border-l-transparent
   border-b-[80px] border-b-onPrimaryBg
   border-r-[80px] border-r-transparent"
      ></div>
    );
  };
  const drawFloorsLayers = () => {
    const drawDoors = () => {
      return (
        <div className="flex items-center h-8 w-6 bg-primary border border-2 border-onPrimaryBg">
          <div className="h-1 w-3 bg-gray-600 ml-0.5" />
        </div>
      );
    };
    const floors = [];
    for (let i = 0; i < numberOfFloors; i++) {
      floors.push(
        <div className="flex justify-evenly items-end bg-gray-500 w-20 h-10 border border-gray-600">
          {drawDoors()}
          {drawDoors()}
        </div>
      );
    }
    return <div className="grid grid-cols-1 grid-rows-6">{floors}</div>;
  };

  const drawElevator = () => {
    const bottomPXvalue = elevatorNextFloor * 40;
    const bottomPXvalueTailwindSyntax =
      bottomPXvalue === 0 ? "0" : `[${bottomPXvalue}px]`;
    const elevatorStyle =
      "relative w-8 h-8 bg-white place-self-center rounded-md shadow-md row-start-[6] transition-all duration-1000 ease-in-out bottom-" +
      bottomPXvalueTailwindSyntax;
    return <div className={elevatorStyle}></div>;
  };

  return (
    <div className="flex flex-col bg-neutralBg p-3">
      {drawRoof()}
      <div className="grid grid-cols-2 transition duration-150 ease-out">
        {drawFloorsLayers()}
        <div
          className="grid grid-cols-1 grid-rows-6 bg-gray-500"
          onTransitionEnd={handleTransitionEnd}
        >
          {drawElevator()}
        </div>
      </div>
    </div>
  );
});

export default Building;

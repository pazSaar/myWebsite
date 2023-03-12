import React, { FC, useContext, useEffect, useState } from "react";
import FloorContext from "./store/FloorContext";
import { observer } from "mobx-react-lite";
import Lift from "./Lift";

type BuildingProps = {};

const Building: FC<BuildingProps> = observer(() => {
  const [elevatorNextFloor, setElevatorNextFloor] = useState(0);
  const [elevatorDoorsToggle, setElevatorDoorsToggle] = useState(true);

  let { floorsStack, numberOfFloors, shiftFloor, setElevatorLastFloor } =
    useContext(FloorContext);

  const buildingColorTailwindSyntax = "bg-indigo-200";

  useEffect(() => {
    if (floorsStack[0] !== undefined) {
      setElevatorDoorsToggle(false);
      setElevatorLastFloor(floorsStack[0]);
      setElevatorNextFloor(floorsStack[0]);
    }
  }, [JSON.stringify(floorsStack)]);

  const handleElevatorDoorsMovementTransitionEnd = (e: any) => {
    // shiftFloor();
    console.log(e);
  };

  const handleElevatorMovementTransitionEnd = () => {
    setElevatorDoorsToggle(true);
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
  const drawFloors = () => {
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
        <div
          className={`flex justify-evenly items-end ${buildingColorTailwindSyntax} w-20 h-10 border border-gray-600`}
          key={i}
        >
          {drawDoors()}
          {drawDoors()}
        </div>
      );
    }
    return <div className="grid grid-cols-1 grid-rows-6">{floors}</div>;
  };

  return (
    <div className="flex flex-col bg-neutralBg p-3">
      {drawRoof()}
      <div className="grid grid-cols-2 transition duration-150 ease-out">
        {drawFloors()}
        <div
          className={`grid grid-cols-1 grid-rows-6 ${buildingColorTailwindSyntax}`}
          onTransitionEnd={handleElevatorMovementTransitionEnd}
        >
          {<Lift liftNextFloor={elevatorNextFloor} />}
        </div>
      </div>
    </div>
  );
});

export default Building;

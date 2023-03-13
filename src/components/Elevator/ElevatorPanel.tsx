import React, { FC, useContext, useEffect, useRef, useState } from "react";
import ElevatorButton from "./ElevatorButton";
import FloorContext from "./store/FloorContext";
import { observer } from "mobx-react-lite";

type ElevatorPanelProps = {};

const ElevatorPanel: FC<ElevatorPanelProps> = observer(() => {
  const {
    numberOfFloors,
    floorsStack,
    pushFloor,
    elevatorLastFloor,
    elevatorMoving,
    elevatorDoorsMoving,
  } = useContext(FloorContext);

  const [currentFloor, setCurrentFloor] = useState(elevatorLastFloor);

  useEffect(() => {
    const changeFloorDuringLiftMovement = () => {
      const isLiftGoingDown = elevatorLastFloor > floorsStack[0];

      if (isLiftGoingDown) {
        setCurrentFloor((currentFloor) => currentFloor - 1);
      } else {
        setCurrentFloor((currentFloor) => currentFloor + 1);
      }
    };

    const floorChangeDuration =
      (500 / Math.abs(floorsStack[0] - elevatorLastFloor)) * 2;

    let id: number | undefined = undefined;
    if (floorsStack.length > 0 && !elevatorDoorsMoving) {
      id = setInterval(changeFloorDuringLiftMovement, floorChangeDuration);
    }
    if (id) return () => clearInterval(id);
  }, [floorsStack[0], elevatorDoorsMoving]);

  const createPanelButtons = () => {
    const handleButtonMouseDown = (
      setButtonLight: (lightOn: boolean) => void,
      floorNumber: number
    ) => {
      setButtonLight(true);
      if (
        (elevatorMoving && !floorsStack.includes(floorNumber)) ||
        (!elevatorMoving && floorNumber !== elevatorLastFloor)
      ) {
        pushFloor(floorNumber);
      }
    };

    const handleButtonMouseUp = (
      setButtonLight: (lightOn: boolean) => void,
      floorNumber: number
    ) => {
      if (floorNumber === elevatorLastFloor && !elevatorMoving)
        setButtonLight(false);
    };

    const buttonsArray = [];

    for (let i = numberOfFloors - 1; i >= 0; i--) {
      buttonsArray.push(
        <ElevatorButton
          key={i}
          floorNumber={i}
          floorsStack={floorsStack}
          onMouseDown={handleButtonMouseDown}
          onMouseUp={handleButtonMouseUp}
        />
      );
    }

    return buttonsArray;
  };

  const drawPanel = () => {
    return (
      <div className=" self-center bg-gray-500 w-20 h-11 border border-gray-600">
        <div className="relative bg-black/60 w-15 h-10 border border-gray-600 text-center">
          <span className="absolute top-0 left-0 right-0 text-green-500 ">
            {currentFloor}
          </span>
          <span className="absolute bottom-0 left-0 right-0 text-green-500 text-xs m-0">
            <span className="text-green-500 text-[10px] m-0">
              {floorsStack.join("→")}
            </span>
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col bg-neutralBg">
      {drawPanel()}
      <div className="grid rev grid-cols-2 ">{createPanelButtons()}</div>
    </div>
  );
});

export default ElevatorPanel;

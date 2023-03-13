import React, { FC, useContext, useEffect, useRef, useState } from "react";
import FloorContext from "./store/FloorContext";

type LiftProps = {
  liftNextFloor: number;
};

const Lift: FC<LiftProps> = ({ liftNextFloor = 0 }) => {
  const [liftDoorsToggle, setLiftDoorsToggle] = useState(false);

  const doorAreOpening = useRef(true);

  let { setElevatorDoorsMoving, elevatorDoorsMoving } =
    useContext(FloorContext);

  const handleLiftMovementTransitionEnd = (e: React.TransitionEvent) => {
    if (e.propertyName === "bottom") {
      setElevatorDoorsMoving(true);
      setLiftDoorsToggle(true);
    }
  };

  const handleLiftDoorsMovementTransitionEnd = (e: React.TransitionEvent) => {
    if (e.propertyName === "right" && elevatorDoorsMoving) {
      if (doorAreOpening.current) {
        doorAreOpening.current = false;
        setLiftDoorsToggle(false);
      } else {
        doorAreOpening.current = true;
        setElevatorDoorsMoving(false);
      }
    }
  };

  const drewLiftDoors = () => {
    const doorsSharedStyle =
      "relative w-4 h-8 bg-gray-500 place-self-start border-2 border-black transition-all duration-500 ease-in-out";

    return (
      <>
        <div
          className={`${doorsSharedStyle} border-r-1 border-r-yellow-400 rounded-l-md shadow-l-md ${
            liftDoorsToggle ? "right-2" : "right-0"
          }`}
          onTransitionEnd={handleLiftDoorsMovementTransitionEnd}
        />
        <div
          className={`${doorsSharedStyle} border-l-2 border-l-yellow-400 rounded-r-md shadow-r-md ${
            liftDoorsToggle ? "left-2" : "left-0"
          }`}
        />
      </>
    );
  };

  const bottomPXvalue = liftNextFloor * 40;
  const bottomPXvalueTailwindSyntax =
    bottomPXvalue === 0 ? "0" : `[${bottomPXvalue}px]`;
  const liftStyle =
    "relative flex w-8 h-8 bg-gray-300 place-self-center rounded-md shadow-md row-start-[6] transition-all duration-1000 ease-in-out bottom-" +
    bottomPXvalueTailwindSyntax;
  return (
    <div
      className={liftStyle}
      onTransitionEnd={handleLiftMovementTransitionEnd}
    >
      {drewLiftDoors()}
    </div>
  );
};

export default Lift;

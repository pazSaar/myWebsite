import React, { FC, useContext } from "react";
import FloorContext from "./store/FloorContext";
import ElevatorPanel from "./ElevatorPanel";
import ElevatorStore from "./store/store";
import Building from "./Building";

type ElevatorProps = {};

const Elevator: FC<ElevatorProps> = ({}) => {
  return (
    <div className="my-10 p-20 flex flex-1 justify-around bg-onPrimaryBg border-8 border-dashed border-black">
      <FloorContext.Provider value={new ElevatorStore()}>
        <ElevatorPanel />
        <Building />
      </FloorContext.Provider>
    </div>
  );
};

export default Elevator;

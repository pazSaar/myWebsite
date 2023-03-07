import React, { FC } from "react";
import FloorContext from "./store/FloorContext";
import ElevatorPanel from "./ElevatorPanel";
import ElevatorStore from "./store/store";
import Building from "./Building";

type ElevatorProps = { numberOfFloors: number };

const Elevator: FC<ElevatorProps> = ({ numberOfFloors }) => {
  return (
    <div className="p-20 flex flex-1 justify-around bg-blue-300/40">
      <FloorContext.Provider value={new ElevatorStore()}>
        <ElevatorPanel numberOfFloors={numberOfFloors} />
        <Building />
      </FloorContext.Provider>
    </div>
  );
};

export default Elevator;

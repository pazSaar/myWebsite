import React, { FC, useContext } from "react";
import FloorContext from "./store/FloorContext";
import ElevatorPanel from "./ElevatorPanel";
import ElevatorStore from "./store/store";
import Building from "./Building";
import { AiFillGithub, BsGithub } from "react-icons/all";

type ElevatorProps = {};

const Elevator: FC<ElevatorProps> = ({}) => {
  return (
    <div>
      {" "}
      <h1 className="mb-2">
        The Elevator{" "}
        <a
          href="https://github.com/pazSaar/myWebsite/tree/main/src/components/Elevator"
          target="_blank"
        >
          <BsGithub className="inline-block text-xl" />
        </a>
      </h1>
      <div className="p-20 flex flex-1 flex-wrap gap-2 justify-around bg-onPrimaryBg border-8 border-dashed border-black">
        <FloorContext.Provider value={new ElevatorStore()}>
          <ElevatorPanel />
          <Building />
        </FloorContext.Provider>
      </div>
    </div>
  );
};

export default Elevator;

import React, { FC } from "react";
import ElevatorButton from "./ElevatorButton";

type ElevatorPanelProps = { numberOfFloors: number };

const ElevatorPanel: FC<ElevatorPanelProps> = ({ numberOfFloors }) => {
  const buttonsArray = [];

  for (let i = 0; i < numberOfFloors; i++) {
    buttonsArray.push(<ElevatorButton key={i} floorNumber={i} />);
  }

  return <div className="grid grid-cols-2">{buttonsArray}</div>;
};

export default ElevatorPanel;

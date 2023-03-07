import React, { FC, useContext, useState } from "react";
import FloorContext from "./store/FloorContext";
import { observer } from "mobx-react-lite";

type BuildingProps = {};

const Building: FC<BuildingProps> = observer(() => {
  // Grab the timer from the context.
  const floor = useContext(FloorContext); // See the Timer definition above.
  return <span>Chose Floor: {floor.floorNumber}</span>;
});

export default Building;

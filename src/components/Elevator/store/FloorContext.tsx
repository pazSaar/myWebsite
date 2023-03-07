import { observer } from "mobx-react-lite";
import { createContext, useContext } from "react";
import ElevatorStore from "./store";

const FloorContext = createContext<ElevatorStore>(new ElevatorStore());

export default FloorContext;

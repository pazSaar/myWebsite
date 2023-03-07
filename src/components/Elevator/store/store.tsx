import React from "react";
import { makeAutoObservable } from "mobx";

class ElevatorStore {
  floorNumber = 0;

  constructor() {
    makeAutoObservable(this);
  }

  chooseFloor(newFloor: number) {
    this.floorNumber = newFloor;
  }
}

export default ElevatorStore;

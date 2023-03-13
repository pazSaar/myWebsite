import React from "react";
import { makeAutoObservable } from "mobx";

class ElevatorStore {
  floorsStack: number[] = [];
  numberOfFloors = 6;
  elevatorLastFloor = 0;
  elevatorMoves = false;

  constructor() {
    makeAutoObservable(this);

    this.pushFloor = this.pushFloor.bind(this);
    this.shiftFloor = this.shiftFloor.bind(this);
    this.setElevatorLastFloor = this.setElevatorLastFloor.bind(this);
    this.setElevatorMoves = this.setElevatorMoves.bind(this);
  }

  pushFloor(newFloor: number) {
    this.floorsStack.push(newFloor);
  }

  shiftFloor() {
    this.floorsStack.shift();
  }

  setElevatorLastFloor(floorNumber: number) {
    this.elevatorLastFloor = floorNumber;
  }

  setElevatorMoves(elevatorMoves: boolean) {
    this.elevatorMoves = elevatorMoves;
  }
}

export default ElevatorStore;

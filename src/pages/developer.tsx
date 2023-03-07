import ElevatorButton from "../components/Elevator/ElevatorButton";
import Elevator from "../components/Elevator/Elevator";

export default function Developer() {
  return (
    <>
      <h1>This is the Developer page.</h1>
      <Elevator numberOfFloors={6} />
    </>
  );
}

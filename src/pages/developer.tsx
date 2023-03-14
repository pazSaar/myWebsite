import ElevatorButton from "../components/Elevator/ElevatorButton";
import Elevator from "../components/Elevator/Elevator";

export default function Developer() {
  return (
    <div className="flex flex-col justify-center align-middle p-6">
      <h1 className="self-center my-2 underline decoration-dashed">
        Here are some coding challenges that I've developed
      </h1>
      <Elevator />
    </div>
  );
}

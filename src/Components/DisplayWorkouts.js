import React from "react";
import { useEffect } from "react";
import MapWorkouts from "./MapWorkouts";
import { useContext } from "react";
import { AppContext } from "../AppContext";

function DisplayWorkouts() {
  const { workouts, sortedBy, setSortedWorkouts, sortedWorkouts } =
    useContext(AppContext);

  useEffect(() => {
    setSortedWorkouts(() =>
      workouts.filter((element) => element.data.workout === sortedBy)
    );
  });

  // the workout state object gets passed in
  // we map through it and display all the elements

  return (
    <div className="allWorkouts">
      {sortedBy === "All" ? (
        <MapWorkouts array={workouts} />
      ) : (
        <MapWorkouts array={sortedWorkouts} />
      )}
    </div>
  );
}

export default DisplayWorkouts;

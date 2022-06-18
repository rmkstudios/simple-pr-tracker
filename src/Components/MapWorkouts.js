import React from "react";
import SortingByCard from "./SortingByCard";
import Delete from "./Delete";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Badge } from "@chakra-ui/react";

function MapWorkouts({ array }) {
  const { sortedBy } = useContext(AppContext);

  if (array.length === 0) {
    return (
      <>
        {sortedBy === "All" ? "" : <SortingByCard />}
        <div className="noWorkouts">No workouts to display</div>
      </>
    );
  } else {
    return (
      <>
        {sortedBy === "All" ? "" : <SortingByCard />}

        {array.map((element) => (
          <div className="workout" key={element.id}>
            <div className="overflow">{element.data.workout}</div>
            <div className="stats">
              {element.data.weight} x {element.data.reps}
            </div>
            <div className="date">
              <Badge fontWeight="regular" variant="subtle">
                {new Date(element.data.date.seconds * 1000).toLocaleDateString(
                  "en-US"
                )}
              </Badge>
            </div>
            <Delete id={element.id} />
          </div>
        ))}
      </>
    );
  }
}

export default MapWorkouts;

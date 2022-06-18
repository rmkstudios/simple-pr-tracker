import React from "react";
import { useState } from "react";
import { Select, Input, IconButton } from "@chakra-ui/react";
import { IoIosAddCircle } from "react-icons/io";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Sort from "./Sort";
import { auth } from "../firebase";
import { Alert, AlertIcon } from "@chakra-ui/react";

function AddWorkout() {
  const [inputWorkout, setInputWorkout] = useState("");
  const [inputWeight, setInputWeight] = useState("");
  const [inputReps, setInputReps] = useState("");
  const [addError, setAddError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    let weightisnum = /^\d+$/.test(inputWeight);
    let repsisnum = /^\d+$/.test(inputReps);

    if (inputWorkout && weightisnum && repsisnum) {
      addDoc(collection(db, "workouts"), {
        user: auth.currentUser.uid,
        workout: inputWorkout,
        weight: inputWeight,
        reps: inputReps,
        date: new Date(),
      }).catch((err) => console.error(err));
      setInputWorkout("");
      setInputWeight("");
      setInputReps("");
      setAddError(false);
    } else {
      setAddError(true);
    }
    // This sets the input value back to blank after submitted
  };

  const closeError = () => {
    setAddError(false);
  };

  return (
    <>
      <div className="form">
        <Select
          placeholder="workout"
          bg="white"
          borderColor="border"
          fontSize=".9em"
          value={inputWorkout}
          onChange={(e) => setInputWorkout(e.target.value)}
        >
          <option value="Bench Press">Bench Press</option>
          <option value="Deadlift">Deadlift</option>
          <option value="Barbell Squat">Barbell Squat</option>
          <option value="Tricep Cable">Tricep Cable</option>
          <option value="Lat Pulldown">Lat Pulldown</option>
          <option value="Calf Raises">Calf Raises</option>
        </Select>
        <Input
          placeholder="lbs"
          bg="white"
          borderColor="border"
          fontSize=".9em"
          value={inputWeight}
          onChange={(e) => setInputWeight(e.target.value)}
        />
        <Input
          placeholder="reps"
          bg="white"
          borderColor="border"
          fontSize=".9em"
          value={inputReps}
          onChange={(e) => setInputReps(e.target.value)}
        />
        <IconButton
          aria-label="Submit"
          colorScheme="green"
          icon={<IoIosAddCircle />}
          onClick={handleClick}
          borderBottom="3px solid #368011"
        />
        <Sort />
      </div>
      {addError ? (
        <Alert status="warning" className="alert" onClick={closeError}>
          <AlertIcon />
          Whoops! Please select a workout and only use numbers!
        </Alert>
      ) : (
        ""
      )}
    </>
  );
}

export default AddWorkout;

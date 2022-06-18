import "./App.css";
import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import { db, auth, user } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";
import Header from "./Components/Header";
import NotLoggedIn from "./Components/NotLoggedIn";
import Loading from "./Components/Loading";
import LoggedIn from "./Components/LoggedIn";
import "animate.css";
import Footer from "./Components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [workouts, setWorkouts] = useState([]);
  const [sortedBy, setSortedBy] = useState("All");
  const [sortedWorkouts, setSortedWorkouts] = useState([]);
  const [userID, setUserID] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserID(user.uid);
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    if (userID) {
      const q = query(
        collection(db, "workouts"),
        where("user", "==", userID),
        orderBy("date", "desc")
      );
      onSnapshot(q, (querySnapshot) => {
        setWorkouts(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
        setLoading(false);
      });
    }
  }, [userID]);

  return (
    <AppContext.Provider
      value={{
        workouts,
        setWorkouts,
        sortedBy,
        setSortedBy,
        sortedWorkouts,
        setSortedWorkouts,
      }}
    >
      <div id="container">
        <Header loggedIn={loggedIn} setUserID={setUserID} />
        <main>
          {loading ? (
            <Loading />
          ) : (
            <>{loggedIn ? <LoggedIn /> : <NotLoggedIn />}</>
          )}
        </main>
        <Footer userID={userID} loading={loading} />
      </div>
    </AppContext.Provider>
  );
}

export default App;

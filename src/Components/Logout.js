import { auth } from "../firebase";
import { signOut } from "firebase/auth";

import { Link } from "@chakra-ui/react";

function Logout({ setUserID, setWorkouts, setSortedBy, setSortedWorkouts }) {
  const logout = async () => {
    setUserID("");
    setSortedBy("All");
    setWorkouts([]);
    setSortedWorkouts([]);
    await signOut(auth);
  };

  return (
    <div className="logout">
      logged in as: {auth.currentUser?.email} -{" "}
      <Link onClick={logout}>sign out</Link>
    </div>
  );
}

export default Logout;

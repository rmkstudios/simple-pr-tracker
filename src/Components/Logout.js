import { auth } from "../firebase";
import { signOut } from "firebase/auth";

import { Link } from "@chakra-ui/react";

function Logout({ setUserID }) {
  const logout = async () => {
    await signOut(auth);
    setUserID("");
  };

  return (
    <div className="logout">
      logged in as: {auth.currentUser?.email} -{" "}
      <Link onClick={logout}>sign out</Link>
    </div>
  );
}

export default Logout;

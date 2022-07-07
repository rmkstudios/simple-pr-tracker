import Logout from "./Logout";
import logo from "../logo.png";

function Header({
  loggedIn,
  setUserID,
  setWorkouts,
  setSortedBy,
  setSortedWorkouts,
}) {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Simple PR Tracker" className="unselectable" />
      </div>
      {loggedIn ? (
        <Logout
          setUserID={setUserID}
          setWorkouts={setWorkouts}
          setSortedBy={setSortedBy}
          setSortedWorkouts={setSortedWorkouts}
        />
      ) : (
        <div className="spacer"></div>
      )}
    </header>
  );
}

export default Header;

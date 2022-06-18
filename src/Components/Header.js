import Logout from "./Logout";
import logo from "../logo.png";

function Header({ loggedIn, setUserID }) {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Simple PR Tracker" className="unselectable" />
      </div>
      {loggedIn ? <Logout setUserID={setUserID} /> : <div></div>}
    </header>
  );
}

export default Header;

import { Link } from "react-router-dom";
import { logout } from "../services";
import { GoHome } from "react-icons/go";
import { RiLogoutCircleRLine, RiLoginCircleLine } from "react-icons/ri";
import { GiArchiveRegister } from "react-icons/gi";
import { useHistory } from "react-router-dom";
import "./Nav.css";
const Nav = (props) => {
  const history = useHistory();
  const handleClick = async () => {
    await logout();
    props.setUser(null);
    history.push("/");
  };

  return (
    <nav className="navbar">
      {props.user ? (
        <>
          <h3> Hello {props.user.username}</h3>
          <div>
            <Link to="/">
              <GoHome className="edit-icon" size="55px" />
            </Link>
            <RiLogoutCircleRLine
              onClick={handleClick}
              className="edit-icon"
              size="55px"
            />
          </div>
        </>
      ) : (
        <>
          <Link to="/login">
            <RiLoginCircleLine className="edit-icon" size="55px" />
          </Link>
          <Link to="/register">
            <GiArchiveRegister className="edit-icon" size="55px" />
          </Link>
        </>
      )}
    </nav>
  );
};

export default Nav;

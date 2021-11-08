import { Link } from "react-router-dom";
import { logout } from "../services";

const Nav = (props) => {
  const handleClick = async () => {
    await logout();
    props.setUser(null);
  };

  return (
    <nav>
      {props.user ? (
        <>
          <button onClick={handleClick}>Log out!</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Nav;

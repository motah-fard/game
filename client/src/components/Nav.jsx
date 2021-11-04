import { Link } from "react-router-dom";
import { logout } from "../services";

const Nav = (props) => {
  const handleClick = async () => {
    await logout();
    props.setUser(null);
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {props.user ? (
        <>
        <Link to='/test'>TEST</Link>
          <Link to='/random'>RRR</Link>
          <Link to='/words'>Words</Link>
          <Link to="/new/word">Add a new word to the list!</Link>
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
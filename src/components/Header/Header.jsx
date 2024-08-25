import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className=" bg-blue-700 text-white font-bold">
      <ul className="flex justify-between mx-4 p-4">
        <li>
          <NavLink className="isActive" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

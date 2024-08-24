import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className=" bg-blue-700 text-white font-bold">
      <ul className="flex justify-between mx-4 p-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

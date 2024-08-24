import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { id, name, email } = user;
  return (
    <div className="border-2 rounded-xl text-center text-white">
      <h2 className=" border-b-2 bg-rose-700  text-2xl">{id}</h2>
      <div className="bg-rose-900">
        <h4 className="p-2">Name: {name}</h4>
        <p className="p-2">Email: {email}</p>
        <Link to={`/user/${id}`}>
          {" "}
          <button className="border-2 m-2 rounded-xl px-2 hover:bg-rose-950">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

User.propTypes = {
  id: PropTypes.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default User;

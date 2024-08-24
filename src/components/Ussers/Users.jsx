import { useLoaderData } from "react-router-dom";
import User from "../User/User";
const Users = () => {
  const allUsers = useLoaderData();
  return (
    <div className="p-10">
      <h1 className="text-center font-semibold text-2xl">Users: {allUsers.length}</h1>
     <div className="grid grid-cols-3 gap-3">
     {
        allUsers.map(user=><User key={user.id} user={user}></User>)
      }
     </div>
    </div>
  );
};

export default Users;

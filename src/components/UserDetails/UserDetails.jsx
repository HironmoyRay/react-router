import { useLoaderData } from "react-router-dom";
const UserDetails = () => {
  const details = useLoaderData();
  const { id, name, email, website, address } = details;
  return (
    <div className="p-10 bg-rose-700 text-white text-center">
      <h1>ID: {id}</h1>
      <p>User Name is: {name}</p>
      <p>Email: {email}</p>
      <p>Website: {website}</p>
      <p>Location: {`${address.street} ${address.city}`}</p>

      <p></p>
    </div>
  );
};

export default UserDetails;

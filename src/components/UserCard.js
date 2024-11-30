import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h3 className="font-bold text-lg">{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company.name}</p>
      <Link
        to={`/user/${user.id}`}
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
};

export default UserCard;

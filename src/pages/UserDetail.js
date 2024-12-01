import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUsers } from "../redux/usersSlice";

const UserDetail = () => {
  const { id } = useParams();
  const user = useSelector(selectUsers).find((user) => user.id === parseInt(id));

  if (!user) return <p>User not found.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company.name}</p>
      <p>Address: {`${user.address.street}, ${user.address.city}`}</p>
    </div>
  );
};

export default UserDetail;

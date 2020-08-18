import React from "react";

const UserCard = (props) => {
  const { username, department } = props.userInfo;
  return (
    <div>
      <h2>Username: {username}</h2>
      <p>Department: {department}</p>
    </div>
  );
};

export default UserCard;

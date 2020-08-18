import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import UserCard from "./UserCard";

const UsersList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/users")
      .then((res) => {
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {!list ? (
        <span></span>
      ) : (
        list.map((user) => <UserCard key={user.id} userInfo={user} />)
      )}
    </div>
  );
};

export default UsersList;

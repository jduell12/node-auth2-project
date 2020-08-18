import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push("/login")}>Login</button>
      <button>Register</button>
    </div>
  );
};
export default Home;

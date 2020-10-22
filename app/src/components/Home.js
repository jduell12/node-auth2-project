import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <Button color="secondary" onClick={() => history.push("/login")}>
        Login
      </Button>
      <Button color="secondary" onClick={() => history.push("/register")}>
        Register
      </Button>
    </div>
  );
};
export default Home;

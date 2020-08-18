import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { Button } from "reactstrap";

//components
import { Login, Home, UsersList, PrivateRoute, Register } from "./index";

function App() {
  const history = useHistory();
  const logoutUser = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <div className="App">
      <Button color="secondary" onClick={logoutUser}>
        Logout
      </Button>
      <h1>Get Users Using JWT</h1>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/private/list" component={UsersList} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;

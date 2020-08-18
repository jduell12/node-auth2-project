import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";

//components
import { Login, Home, UsersList } from "./components/";

function App() {
  const history = useHistory();
  const logoutUser = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <div className="App">
      <button onClick={logoutUser}>Logout</button>
      <h1>Get Users Using JWT</h1>
      <Switch>
        {/* <Route exact path="/register" component={Register}/> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/private/list" component={UsersList} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;

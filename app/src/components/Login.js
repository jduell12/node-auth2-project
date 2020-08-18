import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const history = useHistory();

  const initialFormValues = {
    username: "",
    password: "",
  };

  //   const initialFormErrors = {
  //     username: "",
  //     password: "",
  //   };

  const [formValues, setValues] = useState(initialFormValues);
  //   const [formErrors, setErrors] = useState(initialFormErrors);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    const user = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };

    axios
      .post(`${BASE_URL}/login`, user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/private/list");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submitForm}>
        <label htmlFor="username">
          Username: &nbsp;
          <input
            id="username"
            type="text"
            name="username"
            value={formValues.username}
            onChange={changeHandler}
          />
        </label>
        <label>
          Password: &nbsp;
          <input
            id="password"
            type="password"
            name="password"
            value={formValues.password}
            onChange={changeHandler}
          />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};
export default Login;

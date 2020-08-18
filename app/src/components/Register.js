import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Register = () => {
  const history = useHistory();

  const initialFormValues = {
    username: "",
    password: "",
    department: "",
  };

  const [formValues, setValues] = useState(initialFormValues);

  const changeHandler = (eve) => {
    const { name, value } = eve.target;

    setValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitForm = (eve) => {
    eve.preventDefault();

    const user = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      department: formValues.department.trim(),
    };

    axios
      .post(`${BASE_URL}/register`, user)
      .then((res) => {
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="username">
        Username: &nbsp;
        <input
          type="text"
          id="username"
          name="username"
          value={formValues.username}
          onChange={changeHandler}
        />
      </label>
      <label htmlFor="password">
        Password: &nbsp;
        <input
          type="password"
          id="password"
          name="password"
          value={formValues.password}
          onChange={changeHandler}
        />
      </label>
      <label htmlFor="department">
        Department: &nbsp;
        <input
          type="text"
          id="department"
          name="department"
          value={formValues.department}
          onChange={changeHandler}
        />
      </label>
      <button>Register</button>
    </form>
  );
};

export default Register;

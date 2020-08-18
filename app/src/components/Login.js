import React, { useEffect, useState } from "react";

const Login = () => {
  const initialFormValues = {
    username: "",
    password: "",
  };

  const initialFormErrors = {
    username: "",
    password: "",
  };

  const [formValues, setValues] = useState(initialFormValues);
  const [formErrors, setErrors] = useState(initialFormErrors);

  const changeHandler = (name, value) => {
    setValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
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

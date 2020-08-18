import React, { useState } from "react";

const Register = () => {
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

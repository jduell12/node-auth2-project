import React from "react";

const Login = () => {
  const changeHandler = () => {};

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
            onChange={changeHandler}
          />
        </label>
        <label>
          Password: &nbsp;
          <input
            id="password"
            type="password"
            name="password"
            onChange={changeHandler}
          />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};
export default Login;

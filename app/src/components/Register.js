import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";

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
    <Form onSubmit={submitForm}>
      <FormGroup>
        <Label htmlFor="username">
          Username: &nbsp;
          <Input
            type="text"
            id="username"
            name="username"
            value={formValues.username}
            onChange={changeHandler}
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">
          Password: &nbsp;
          <Input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={changeHandler}
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="department">
          Department: &nbsp;
          <Input
            type="text"
            id="department"
            name="department"
            value={formValues.department}
            onChange={changeHandler}
          />
        </Label>
      </FormGroup>
      <Button color="success">Register</Button>
    </Form>
  );
};

export default Register;

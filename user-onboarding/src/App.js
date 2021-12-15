import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import "./App.css";
import UserForm from "./components/UserForm";
import schema from "./components/formSchema";

const initialFormValues = {
  firstName: "",
  lastName: "",
  password: "",
  termsOfService: false,
};

const initialFormError = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  termsOfService: "",
};

const initialUser = [];

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormError);
  const [users, setUsers] = useState(initialUser);

  // const getUsers = () => {
  //   axios
  //     .get("https://reqres.in/api/users")
  //     .then((res) => setUsers(res.data))
  //     .catch((err) => console.log(err));
  // };

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => setUsers([res.data, ...users]))
      .catch((err) => console.log(err))
      .finally(() => setFormValues(initialFormValues));
  };

  const validateForm = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const changedInput = (name, value) => {
    validateForm(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitForm = () => {
    const newUser = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
    };
    postNewUser(newUser);
  };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <div className="App">
      <header>
        <h1>New User Onboarding</h1>
      </header>
      <UserForm
        formValues={formValues}
        changedInput={changedInput}
        formErrors={formErrors}
        submitForm={submitForm}
      />
      {/* {users.map((user) => (
        <div>
          <div>{user.firstName}</div>
          <div>{user.lastName}</div>
        </div>
      ))} */}
    </div>
  );
}

export default App;

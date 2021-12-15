import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import "./App.css";
import UserForm from "./components/UserForm";
import User from "./components/User";
import schema from "./components/formSchema";

const initialFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  termsOfService: false,
};

const initialFormError = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

const initialUser = [];

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormError);
  const [users, setUsers] = useState(initialUser);

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => setUsers(res.data.data))
      .catch((err) => console.log(err));
  };

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => setUsers([...users, res.data]))
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
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: formValues.termsOfService,
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

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

      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;

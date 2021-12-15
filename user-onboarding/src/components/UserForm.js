import React from "react";

function UserForm(props) {
  const { formValues, changedInput, formErrors, submitForm } = props;

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    changedInput(name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <div>
      <h2>User Form</h2>
      <div>{formErrors.firstName}</div>
      <form onSubmit={onSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            onChange={onChange}
            value={formValues.firstName}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            onChange={onChange}
            value={formValues.lastName}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={onChange}
            value={formValues.email}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={onChange}
            value={formValues.password}
          />
        </label>
        <label>
          I agree to the Terms of Service
          <input
            type="checkbox"
            name="termsOfService"
            checked={formValues.termsOfService}
            onChange={onChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;

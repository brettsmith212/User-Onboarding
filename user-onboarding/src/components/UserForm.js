import React from "react";

function UserForm(props) {
  const { formValues, changedInput, formErrors, submitForm } = props;

  const onChange = (e) => {
    const { name, value, checked, type } = e.target;
    const valueNeeded = type === "checkbox" ? checked : value;
    changedInput(name, valueNeeded);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <div>
      <h2>User Form</h2>
      <div>{formErrors.first_name}</div>
      <div>{formErrors.last_name}</div>
      <div>{formErrors.email}</div>
      <div>{formErrors.password}</div>
      <div>{formErrors.termsOfService}</div>
      <form onSubmit={onSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            onChange={onChange}
            value={formValues.first_name}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            onChange={onChange}
            value={formValues.last_name}
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

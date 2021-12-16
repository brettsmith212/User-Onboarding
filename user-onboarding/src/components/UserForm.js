import React from "react";
import styled from "styled-components";

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin: 1rem auto;

  button {
    margin-top: 1rem;
    padding: 1rem 2rem;
    border-radius: 10px;
    background-color: #e9ecef;
    border: 1px solid #e9ecef;
    cursor: pointer;
  }

  button:hover {
    background-color: #dee2e6;
    border: 1px solid #dee2e6;
  }
`;

function UserForm(props) {
  const { formValues, changedInput, formErrors, submitForm, disabled } = props;

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
    <FormContainer>
      <h2>User Form</h2>
      <div>{formErrors.first_name}</div>
      <div>{formErrors.last_name}</div>
      <div>{formErrors.email}</div>
      <div>{formErrors.password}</div>
      <div>{formErrors.termsOfService}</div>
      <form onSubmit={onSubmit}>
        <FormWrapper>
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
          <button id="submitBtn" disabled={disabled}>
            Submit
          </button>
        </FormWrapper>
      </form>
    </FormContainer>
  );
}

export default UserForm;

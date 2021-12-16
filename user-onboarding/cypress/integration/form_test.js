// Tests Go Here

describe("User Onboarding Testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  // Helpers
  const firstNameInput = () => cy.get("input[name=first_name]");
  const lastNameInput = () => cy.get("input[name=last_name]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const termsOfServiceInput = () => cy.get("input[name=termsOfService]");

  it("Sanity Check", () => {
    expect(1 + 2).to.equal(3);
  });

  it("All correct inputs are showing", () => {
    firstNameInput().should("exist");
    lastNameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    termsOfServiceInput().should("exist");
  });

  it("Inputs receive data correctly", () => {
    firstNameInput()
      .should("have.value", "")
      .type("Brett")
      .should("have.value", "Brett");
    lastNameInput()
      .should("have.value", "")
      .type("Smith")
      .should("have.value", "Smith");
    emailInput()
      .should("have.value", "")
      .type("brettsmith212@gmail.com")
      .should("have.value", "brettsmith212@gmail.com");
    passwordInput()
      .should("have.value", "")
      .type("password")
      .should("have.value", "password");
  });
});
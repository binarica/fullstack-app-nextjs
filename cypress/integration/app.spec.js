describe("Tests", () => {
  it("should navigate to the new session page", () => {
    cy.visit("http://localhost:3000/");

    cy.get('a[href*="new"]').click();

    cy.url().should("include", "/new");

    cy.get("h5").contains("New Session");
  });

  it("should create a new session", () => {
    cy.visit("http://localhost:3000/new");

    cy.intercept("POST", "http://localhost:3000/api/session").as(
      "createSession"
    );

    cy.get("input[name=patient]").type("John Doe");
    cy.get("input[name=fee]").type("100");

    cy.get("button").contains("Submit").click();

    cy.wait("@createSession").then((interception) => {
      expect(interception.response.body).to.have.property(
        "patient",
        "John Doe"
      );
    });
  });

  it("should contain the new session in the list", () => {
    cy.visit("http://localhost:3000/");

    cy.get("table tbody tr").find("td").contains("John Doe");
  });

  it("should add a new payment", () => {
    cy.visit("http://localhost:3000/");

    cy.intercept("POST", "http://localhost:3000/api/payment").as(
      "createPayment"
    );

    cy.get("button[data-cy=pay-button]").first().click();
    cy.get("input[name=amount]").type("100");

    cy.get("button").contains("OK").click();

    cy.wait("@createPayment").then((interception) => {
      assert.isNotNull(interception.response.body);
    });
  });
});

describe("Accessibility", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.injectAxe();
  });

  it("Should have no accessibility violations on main page", () => {
    cy.checkA11y();
  });
  it("Test for any baccessibility issues on page with custom parameters.", () => {
    cy.checkA11y("shelf-item", {
      runOnly: {
        type: "tag",
        values: ["wcag2a"],
      },
    });
  });
});

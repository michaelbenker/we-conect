describe("Menu responsive", () => {
  context("Resolutions", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });

    it("cy.viewport() - set the viewport size and dimension", () => {
      cy.viewport("macbook-13");
      cy.get("#basic-navbar-nav").should("be.visible");

      cy.viewport("iphone-5");
      cy.get("#basic-navbar-nav").should("not.be.visible");
      cy.get(".navbar-toggler").should("be.visible").click();
      cy.get("#basic-navbar-nav").should("be.visible");
    });
  });
});

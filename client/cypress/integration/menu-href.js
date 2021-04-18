describe("Menu Test", function () {
  it("Visit", function () {
    cy.visit("http://localhost:3000/");
    cy.get("#we-conect").should(
      "have.attr",
      "href",
      "https://www.we-conect.com/"
    );
  });
});

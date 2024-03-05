import dashboardPage from "../fixtures/page_objects/dashboard.page";
import platformMenuItems from "../fixtures/test_data/platformMenuItems.json";
import solutionsMenuItems from "../fixtures/test_data/solutionsMenuItems.json";

describe("Main Menu Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("verifies platform Xcover page existence", () => {
    dashboardPage.platformsTab.click();
    cy.contains(platformMenuItems.xCovers).click();
    cy.url().should("include", "xcover");
  });

  it("verifies rentalcover page existence", () => {
    dashboardPage.platformsTab.trigger("mouseover");
    cy.contains(platformMenuItems.rentalCover).click();
    cy.url().should("include", "rentalcover");
  });

  it("verifies xclaim page existence", () => {
    dashboardPage.platformsTab.trigger("mouseover");
    cy.contains(platformMenuItems.xClaim).click();
    cy.url().should("include", "xclaim");
  });

  it("verifies brightwrite page existence", () => {
    dashboardPage.platformsTab.trigger("mouseover");
    cy.contains(platformMenuItems.brightwrite).click();
    cy.url().should("include", "brightwrite");
  });

  it("verifies total-shipping-protection existence", () => {
    dashboardPage.solutionsTab.click();
    cy.contains(solutionsMenuItems.shippingProtection).click();
    cy.url().should("include", "total-shipping-protection");
  });
  it("verifies product protection page existence", () => {
    dashboardPage.solutionsTab.trigger("mouseover");
    cy.contains(solutionsMenuItems.productProtection).click({
      force: true,
    });
    cy.url().should("include", "full-product-protection");
  });
  it("verifies cancellation page existence", () => {
    dashboardPage.solutionsTab.trigger("mouseover");
    cy.contains(solutionsMenuItems.cancellation).click({
      force: true,
    });
    cy.url().should("include", "any-reason");
  });
  it("verifies protection pocket page existence", () => {
    dashboardPage.solutionsTab.trigger("mouseover");
    cy.contains(solutionsMenuItems.protectionPocket).click();
    cy.url().should("include", "protection-pocket");
  });
  it("verifies gig cover page existence", () => {
    dashboardPage.solutionsTab.trigger("mouseover");
    cy.contains(solutionsMenuItems.gigCover).click();
    cy.url().should("include", "gig-cover");
  });
  it("verifies gem guard page existence", () => {
    dashboardPage.solutionsTab.trigger("mouseover");
    cy.contains(solutionsMenuItems.gemGuard).click();
    cy.url().should("include", "gem-guard");
  });
  it("verifies geniebot page existence", () => {
    dashboardPage.solutionsTab.trigger("mouseover");
    cy.contains(solutionsMenuItems.geniebot).click();
    cy.url().should("include", "natural-language-processing-geniebot");
  });
  it("verifies geniebot page existence", () => {
    dashboardPage.solutionsTab.trigger("mouseover");
    cy.contains(solutionsMenuItems.delayValet).click();
    cy.url().should("include", "delay-valet");
  });
});

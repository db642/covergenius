import dashboardPage from "../fixtures/page_objects/dashboard.page";
import contactForm from "../fixtures/page_objects/contact.form";
import { generateUserData } from "../helpers/fakerData";
let userData;
userData = generateUserData();
const { registerCommand } = require("cypress-wait-for-stable-dom");
registerCommand();

describe("Demo", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Request Demo", () => {
    dashboardPage.contactToSpecialistBtn.click();
    cy.wait(2000);
    contactForm.emailInp.type(userData.email);
    contactForm.phoneInp.type(userData.phoneNumber);
    contactForm.firstNameInp.type(userData.firstName);
    contactForm.lastNameInp.type(userData.lastName);
    contactForm.companyInp.type(userData.lastName);
    contactForm.commentInp.type(
      "Hi, My name is Daria. I have created a test automation framework from scratch for your open position. GitHub Actions set up. Let`s discuss further if interested. "
    );
    //contactForm.submitBtn.click() commenting out to spare the team from spam unless I'm hired.
  });
});

import AccountDetailPage from "../../../../pages/AccountDetailPage";
import HomePage from "../../../../pages/HomePage";
import LoginPage from "../../../../pages/LoginPage";

describe("Login Page", () => {
  const homepage = new HomePage();
  const loginPage = new LoginPage();
  const accountDetailPage = new AccountDetailPage();

  beforeEach(function () {
    cy.fixture("testdata").as("testData");
    cy.visit("https://web-playground.ultralesson.com/");
  });

  it("Should Login User and navigate to Account details Page", function () {
    homepage.clickOnAccountIcon();
    loginPage.doLogin(
      this.testData.credential.email,
      this.testData.credential.password
    );
    accountDetailPage.isUserOnAccountdetailPage();
  });
});

import AccountDetailPage from "../../pages/AccountDetailPage";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";

describe("Search Page", () => {
  const homepage = new HomePage();
  const loginPage = new LoginPage();
  const accountDetailPage= new AccountDetailPage()

  beforeEach(function () {
    cy.fixture("testdata").as("testData");
    cy.visit("https://web-playground.ultralesson.com/");
  });

  it("Should Navigate to Home Page", function () {
    homepage.clickOnAccountIcon();
    loginPage.doLogin(
      this.testData.credential.email,
      this.testData.credential.password
    );
    accountDetailPage.isUserOnAccountdetailPage();
  });
});

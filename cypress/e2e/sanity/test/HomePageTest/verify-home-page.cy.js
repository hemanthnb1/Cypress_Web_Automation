import { loginPageConstants, contactPageConstants, homePageConstants, productsPageConstants } from "../../../../constants/UiConstants";
import ContactPage from "../../../../pages/ContactPage";
import HomePage from "../../../../pages/HomePage";
import LoginPage from "../../../../pages/LoginPage";
import ProductsPage from "../../../../pages/ProductPage";

describe("Home Page", () => {
  const homePage = new HomePage();
  const productPage = new ProductsPage();
  const contactPage= new ContactPage();
  const loginPage= new LoginPage ();


  beforeEach(() => {
    cy.visit("https://web-playground.ultralesson.com/");
  });

  it("Should Navigate to Home Page", () => {
    homePage.getTitle().should("eq", homePageConstants.title);
  });

  it("Should Navigate to Products Page", () => {
    homePage.clickOnStoreMenu();
    productPage.getTitle().should("eq", productsPageConstants.title);
  });

  it("Should navigate to Contact Page", ()=>{
    homePage.clickOnContactMenu();
    contactPage.getTitle().should("eq", contactPageConstants.title);
  })

  it("Should Navigate to Account Page",()=>{
    homePage.clickOnAccountIcon();
    loginPage.getTitle().should("eq", loginPageConstants.title)
  })

  it("Should Navigate to Account Page",()=>{
    homePage.clickOnAccountIcon();
    loginPage.getTitle().should("eq", loginPageConstants.title)
  })

  it("Should Navigate to Cart Page",()=>{
    homePage.clickOnAccountIcon();
    loginPage.getTitle().should("eq", loginPageConstants.title)
  })
});

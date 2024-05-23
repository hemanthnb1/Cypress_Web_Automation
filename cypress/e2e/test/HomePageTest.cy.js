import { accountPageConstants, contactPageConstants, homePageConstants, productsPageConstants } from "../../constants/UiConstants";
import AccountPage from "../../pages/AccountPage";
import ContactPage from "../../pages/ContactPage";
import HomePage from "../../pages/HomePage";
import ProductsPage from "../../pages/ProductsPage";
import ProductPage from "../../pages/ProductsPage";

describe("Home Page", () => {
  const homePage = new HomePage();
  const productPage = new ProductsPage();
  const contactPage= new ContactPage();
  const accountPage= new AccountPage();


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
    accountPage.getTitle().should("eq", accountPageConstants.title)
  })

  it("Should Navigate to Account Page",()=>{
    homePage.clickOnAccountIcon();
    accountPage.getTitle().should("eq", accountPageConstants.title)
  })

  it("Should Navigate to Cart Page",()=>{
    homePage.clickOnAccountIcon();
    accountPage.getTitle().should("eq", accountPageConstants.title)
  })
});

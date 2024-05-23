import {
    cartPageConstants,
    productsPageConstants,
  } from "../../../../constants/UiConstants";
  import CartPage from "../../../../pages/CartPage";
  import HomePage from "../../../../pages/HomePage";
  import ProductsPage from "../../../../pages/ProductPage";
  import SearchPage from "../../../../pages/SearchPage";
import LoginUserWorkflow from "../../workflows/LoginUserWorkflow";
  
  describe("Cart Functionality", () => {
    const loginUserWorkflow= new LoginUserWorkflow();
    const homepage = new HomePage();
    const searchPage = new SearchPage();
    const productpage = new ProductsPage();
    const cartPage = new CartPage();
  
    beforeEach(function () {
      cy.fixture("testdata").as("testData");
      cy.visit("https://web-playground.ultralesson.com/");
    });
  
    it("should add a product to the cart and verify the cart count", function () {
      loginUserWorkflow.doLogin(this.testData.credential.email, this.testData.credential.password )  
      homepage.clickOnSearchIcon();
      searchPage.searchProductFromSearchBox(this.testData.products.sneakers);
      searchPage.selectFirstProductFromSuggetionList();
      productpage.clickOnAddToCart();
      productpage.clickOnCheckout()
    });
  });
  
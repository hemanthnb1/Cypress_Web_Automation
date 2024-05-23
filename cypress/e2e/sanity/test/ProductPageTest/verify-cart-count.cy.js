import {
  cartPageConstants,
  productsPageConstants,
} from "../../../../constants/UiConstants";
import CartPage from "../../../../pages/CartPage";
import HomePage from "../../../../pages/HomePage";
import ProductsPage from "../../../../pages/ProductPage";
import SearchPage from "../../../../pages/SearchPage";

describe("Cart Functionality", () => {
  const homepage = new HomePage();
  const searchPage = new SearchPage();
  const productpage = new ProductsPage();
  const cartPage = new CartPage();

  beforeEach(function () {
    cy.fixture("testdata").as("testData");
    cy.visit("https://web-playground.ultralesson.com/");
  });

  it("should add a product to the cart and verify the cart count", function () {
    homepage.clickOnSearchIcon();
    searchPage.searchProductFromSearchBox(this.testData.products.sneakers);
    searchPage.selectFirstProductFromSuggetionList();
    productpage.clickOnAddToCart();
    cartPage.cartCount.should("have.text", cartPageConstants.cartCount);
  });
});

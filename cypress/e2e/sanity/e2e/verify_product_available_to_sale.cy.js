import { productsPageConstants } from "../../../constants/UiConstants";
import HomePage from "../../../pages/HomePage";
import ProductsPage from "../../../pages/ProductPage";
import SearchPage from "../../../pages/SearchPage";

describe("e2e Add to cart", () => {
  const homepage = new HomePage();
  const searchPage = new SearchPage();
  const productpage = new ProductsPage();

  beforeEach(function () {
    cy.fixture("testdata").as("testData");
    cy.visit("https://web-playground.ultralesson.com/");
  });

  it("Should Navigate to Home Page", function () {
    homepage.clickOnSearchIcon();
    searchPage.searchProductFromSearchBox(this.testData.products.sneakers);
    searchPage.selectFirstProductFromSuggetionList();
    productpage.addToCart.should('be.visible')
  });
});

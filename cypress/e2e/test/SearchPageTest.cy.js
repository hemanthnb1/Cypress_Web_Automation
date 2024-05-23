import HomePage from "../../pages/HomePage";
import SearchPage from "../../pages/SearchPage";

describe("Search Page", () => {
  const homepage = new HomePage();
  const searchPage = new SearchPage();

  beforeEach(function() { 
    cy.fixture("testdata").as("testData");
    cy.visit("https://web-playground.ultralesson.com/");
  });

  it("Should Navigate to Home Page", function() {  
    homepage.clickOnSearchIcon();
    searchPage.searchProductFromSearchBox(this.testData.products.sneakers);
    cy.get(searchPage.firstProductFromSuggestionList).should('include.text', this.testData.products.sneakers);
  });
});

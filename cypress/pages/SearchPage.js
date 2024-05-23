import BasePage from "./BasePage";

export default class SearchPage extends BasePage {
  #searchTextBox = ".search__input";
  #productText = "#predictive-search-option-1 > a";
  #firstProductFromSuggestionList =
    "#predictive-search-option-1 > a > div > h3";
  

  searchProductFromSearchBox = (productName) => {
    cy.get(this.#searchTextBox).type(productName);
  };

  get firstProductFromSuggestionList() {
    return this.#firstProductFromSuggestionList;
  }

  selectFirstProductFromSuggetionList=()=>{
    cy.get(this.firstProductFromSuggestionList).then((element)=>{
      element.click();
    })
  } 
}

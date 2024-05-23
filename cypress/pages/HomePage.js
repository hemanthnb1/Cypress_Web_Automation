import { homePageConstants } from "../constants/UiConstants";
import BasePage from "./BasePage";

class HomePage extends BasePage {
  #storeMenu = ".header__menu-item";
  #contactMenu = ".header__menu-item";
  #accountIcon=".header__icon--account"
  #cartIcon=".header__icon--cart";
  #searchIcon=".header__search";

  clickOnStoreMenu = () => {
    cy.get(this.#storeMenu).eq(1).click();
  };

  clickOnContactMenu = () => {
    cy.get(this.#contactMenu).should('be.visible');
    cy.get(this.#contactMenu).eq(2).click();
  };

  clickOnAccountIcon=()=>{
    cy.get(this.#accountIcon).then((element)=>{
      cy.wrap(element).click();
    })
  }
  clickOnCartIcon=()=>{
    cy.get(this.#cartIcon).then(element=>{
      cy.wrap(element).click();
    })
  }
  clickOnSearchIcon=()=>{
    cy.get(this.#searchIcon).click();
  }
}
export default HomePage;

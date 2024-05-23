import BasePage from "./BasePage";

export default class CartPage extends BasePage{
        #cartCount='.cart-count-bubble >span'

        get cartCount(){
            return cy.get(this.#cartCount).eq(0);
        }
}
import BasePage from "./BasePage";

class ProductsPage extends BasePage {
  #addToCart = 'button[name="add"]';
  #soldOut = ".badge price__badge-sold-out";
  #cartCount = ".cart-count-bubble >span";
  #checkout = 'button[name="checkout"]';

  get cartCount() {
    return cy.get(this.#cartCount).eq(0);
  }

  get productSoldOut() {
    return cy.get(this.#soldOut);
  }
  get addToCartButton() {
    return cy.get(this.#addToCart);
  }
  clickOnAddToCart = () => {
    this.addToCartButton.click();
  };
  clickOnCheckout = () => {
    cy.get(this.#checkout).click();
  };
}
export default ProductsPage;

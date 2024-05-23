import BasePage from "./BasePage";

class ProductsPage extends BasePage {
  #addToCart = 'button[name="add"]';
  #cartCount = ".cart-count-bubble > span";
  #soldOut = ".badge price__badge-sold-out";
  get productSoldOut() {
    return cy.get(this.#soldOut);
  }
  get addToCartButton() {
    return cy.get(this.#addToCart);
  }
  clickOnAddToCart=()=>{
    this.addToCartButton.click()
  }
}
export default ProductsPage;

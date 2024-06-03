export const getAddToCartButton = () => cy.get('button[name="add"]');
export const getProductSoldOutButton = () => cy.get('.badge price__badge-sold-out');
export const getCartCount = () => cy.get('#cart-icon-bubble > div > span:nth-child(1)');
export const getCheckout = () => cy.get('button[name="checkout"]');
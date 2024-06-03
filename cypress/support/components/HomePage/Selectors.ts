export const getHomeIcon = () => cy.get('.header__menu-item').eq(0);
export const getStoreMenu = () => cy.get('.header__menu-item').eq(1);
export const getContactMenu = () => cy.get('.header__menu-item').eq(2);
export const getAccountIcon = () => cy.get('.header__icon--account');
export const getCartIcon = () => cy.get('.header__icon--cart');
export const getSearchIcon = () => cy.get('.header__search');


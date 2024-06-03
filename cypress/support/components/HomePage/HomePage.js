import {
  getAccountIcon,
  getCartIcon,
  getContactMenu,
  getHomeIcon,
  getSearchIcon,
  getStoreMenu,
} from "./Selectors";

export const getTitle = () => cy.title();
export const clickOnHomeIcon = () => getHomeIcon().click();

export const clickOnStoreMenu = () => getStoreMenu().click();

export const clickOnContactMenu = () => {
  getContactMenu().should("be.visible");
  getContactMenu().click();
};

export const clickOnAccountIcon = () => {
  getAccountIcon().then((element) => {
    cy.wrap(element).click();
  });
};

export const clickOnCartIcon = () => {
  getCartIcon().then((element) => {
    cy.wrap(element).click();
  });
};

export const clickOnSearchIcon = () => getSearchIcon().click();

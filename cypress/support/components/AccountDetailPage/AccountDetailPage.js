import { getLogoutElement } from "./Selectors";

export const getTitle = () => cy.title();

export const isLogOutIconPresent = () =>
  getLogoutElement().should("be.visible");

export const isUserOnAccountdetailPage = () => isLogOutIconPresent();
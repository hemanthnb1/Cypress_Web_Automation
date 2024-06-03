import {
  loginPageConstants,
  contactPageConstants,
  homePageConstants,
  productsPageConstants,
} from "../../../../constants/uiConstants";

import { getTitle } from "../../../../support/components/HomePage/HomePage";
import {
  getAccountIcon,
  getContactMenu,
  getStoreMenu,
} from "../../../../support/components/HomePage/Selectors";

describe("Home Page", () => {
  it("Verify user is on Home Page", () => {
    getTitle().should("eq", homePageConstants.title);
  });

  it("Verify user is on Products Page", () => {
    getStoreMenu().click();
    getTitle().should("eq", productsPageConstants.title);
  });

  it("Verify user is on Contact Page", () => {
    getContactMenu().click();
    getTitle().should("eq", contactPageConstants.title);
  });

  it("Verify user is on Account Page", () => {
    getAccountIcon().then((element) => {
      cy.wrap(element).click();
    });
    getTitle().should("eq", loginPageConstants.title);
  });
});

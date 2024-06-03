import { getSearchInputBox, getFirstProduct } from "./Selectors";

export const searchProductFromSearchBox = (productName) =>
  getSearchInputBox().type(productName);

export const selectFirstProductFromSuggetionList = () => {
  getFirstProduct()
    .should("be.visible")
    .then((element) => {
      element.click();
    });
};

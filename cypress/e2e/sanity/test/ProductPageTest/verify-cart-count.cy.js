import {
  getAddToCartButton,
  getCartCount,
} from "../../../../support/components/ProductPage/Selectors";

import { productsPageConstants } from "../../../../constants/uiConstants";
import { getSearchIcon } from "../../../../support/components/HomePage/Selectors";
import {
  getFirstProduct,
  getSearchInputBox,
} from "../../../../support/components/SearchPage/Selectors";

describe("Cart Functionality", () => {
  it("verify the cart count is same as products added to cart", function () {
    getSearchIcon().click();
    getSearchInputBox().type(this.testData.products.sneakers);
    getFirstProduct().then((element) => element.click());
    getAddToCartButton().click();
    getCartCount().should("have.text", productsPageConstants.cartCount);
  });
});

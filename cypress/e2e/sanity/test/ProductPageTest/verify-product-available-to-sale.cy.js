import { getAddToCartButton } from "../../../../support/components/ProductPage/Selectors";
import { getSearchIcon } from "../../../../support/components/HomePage/Selectors";
import { getFirstProduct, getSearchInputBox } from "../../../../support/components/SearchPage/Selectors";
describe("Add to cart", () => {

  it("Verify the product available to checkout", function () {
    getSearchIcon().click();
    getSearchInputBox().type(this.testData.products.sneakers);
    getFirstProduct().then((element) => element.click());
    getAddToCartButton().should("be.visible");
  });
});

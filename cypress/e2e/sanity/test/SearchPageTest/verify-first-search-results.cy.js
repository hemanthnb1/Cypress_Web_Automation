import { getSearchIcon } from "../../../../support/components/HomePage/Selectors";
import {
  getFirstProduct,
  getSearchInputBox,
} from "../../../../support/components/SearchPage/Selectors";
describe("Search Page", () => {
  it("Verify search result is same as input", function () {
    getSearchIcon().click();
    getSearchInputBox().type(this.testData.products.sneakers);
    getFirstProduct().should("include.text", this.testData.products.sneakers);
  });
});

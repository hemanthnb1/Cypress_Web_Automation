import { getLogoutElement } from "../../../../support/components/AccountDetailPage/Selectors";
import { getAccountIcon } from "../../../../support/components/HomePage/Selectors";

describe("Login Page Test", () => {
  it("Verify user should be able to login and navigate to Account details Page", function () {
    getAccountIcon().click();
    getLogoutElement().should("be.visible");
  });
});

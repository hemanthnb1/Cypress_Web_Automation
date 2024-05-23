import HomePage from "../../../pages/HomePage";
import LoginPage from "../../../pages/LoginPage";

export default class LoginUserWorkflow {
  constructor() {
    this.homepage = new HomePage();
    this.loginPage= new LoginPage();
  }

  doLogin = (email, password) => {
    this.homepage.clickOnAccountIcon();
    this.loginPage.doLogin(email, password);
    this.homepage.clickOnHomeIcon()
  };
}


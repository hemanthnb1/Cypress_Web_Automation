import {
  getEmailInputbox,
  getPasswordInputbox,
  getSigninButton,
} from "./Selectors";

export const enterEmail = (email) => getEmailInputbox().type(email);

export const enterPassword = (password) => getPasswordInputbox().type(password);

export const clickOnSignInButton = () => getSigninButton().click();

export const doLogin = (email, password) => {
  enterEmail(email);
  enterPassword(password);
  clickOnSignInButton();
};

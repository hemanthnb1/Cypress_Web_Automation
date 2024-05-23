import { loginPageConstants } from "../constants/UiConstants";
import BasePage from "./BasePage";

export default class LoginPage extends BasePage{
        #emailInputBox="#CustomerEmail"
        #passwordInputBox="#CustomerPassword"
        #signinButtonElement="button"

        get signinButton(){
            return cy.contains(this.#signinButtonElement,loginPageConstants.signIn);
        }
        enterEmail=(email)=>{
            cy.get(this.#emailInputBox).type(email);
        }
        
        enterPassword=(password)=>{
            cy.get(this.#passwordInputBox).type(password);
        }

        clickOnSignInButton=()=>{
            this.signinButton.click();
        }

        doLogin=(email,password)=>{
            this.enterEmail(email);
            this.enterPassword(password);
            this.clickOnSignInButton();
        }
}
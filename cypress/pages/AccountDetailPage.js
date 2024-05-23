import BasePage from "./BasePage"
import { accountsPageConstants, loginPageConstants } from "../constants/UiConstants"

export default class AccountDetailPage extends BasePage{

    #logOutIconElement='a'

    get logOutElement(){
        return cy.contains(this.#logOutIconElement,accountsPageConstants.logOutIcon);
    }

    isLogOutIconPresent=()=>{
        this.logOutElement.should('be.visible');
    }

    isUserOnAccountdetailPage=()=>{
        this.isLogOutIconPresent();
    }
}
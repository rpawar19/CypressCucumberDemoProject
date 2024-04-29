import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import {loginPageObjects} from "../../selectors/login"


const loginPO = new loginPageObjects()


Given("user open the website", () =>{
    cy.viewport(1280, 720);
    cy.visit("https://magento.softwaretestingboard.com/")
    loginPO.getSignInLink().eq(0).click()
    // var text1 = loginPO.getCustomerLoginPageHeader().
    cy.log
    loginPO.getCustomerLoginPageHeader()
        .should('be.visible')
        .should('have.text','Customer Login')
})
 
When("user enter the credential", (datatable) =>{
    const data = datatable.hashes()[0];
    const uname = data.username
    const pwd = data.password
    loginPO.getEmailInputBox().type(uname)
    loginPO.getPasswordInputField().type(pwd)

})

Then("user login successfully",() =>{
    cy.log("user login successfully started")
    loginPO.getSignInButton().click()
    loginPO.getWelcomeText()
           .should('be.visible')

})

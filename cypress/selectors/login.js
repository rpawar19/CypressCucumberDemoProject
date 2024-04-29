export class loginPageObjects{
     
    getSignInLink(){
        return cy.get(".authorization-link>a:first-of-type")
    }
    getCustomerLoginPageHeader(){
        return cy.xpath("//h1[@class='page-title']/child::span")
    }
    getEmailInputBox(){
        return cy.get("#email")
    }
    getPasswordInputField(){
        return cy.get("#pass")
    }
    getSignInButton(){
        return cy.get("#send2")
    }
    getWelcomeText(){
        return cy.xpath("//li/child::span[@class='logged-in'][1]")
    }
}
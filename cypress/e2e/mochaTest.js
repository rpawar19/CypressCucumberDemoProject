import {menuPageObjects} from "../../selectors/menubar"
import {productPageObjects} from "../../selectors/productPage"
import {productDetailPageObject} from "../../selectors/productDetailsPage"

const menuPO = new menuPageObjects()
const productPO = new productPageObjects()
const productDetailPO = new productDetailPageObject(); 

describe("This is a TestSuite1",()=>{
    
    it("Test1",()=>{

        cy.visit(Cypress.env('baseUrl'))
        loginPO.getSignInLink().eq(0).click()
        loginPO.getCustomerLoginPageHeader()
            .should('be.visible')
            .should('have.text','Customer Login')
        loginPO.getEmailInputBox().type("testuser6@testdomain.com")
        loginPO.getPasswordInputField().type("asdf#123")
        loginPO.getSignInButton().click()
        cy.log("user login successfully started")
        cy.wait(5000)
        loginPO.getWelcomeText()
           .should('be.visible')

    })
})

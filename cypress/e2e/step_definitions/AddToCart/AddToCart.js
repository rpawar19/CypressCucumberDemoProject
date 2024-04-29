import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import {loginPageObjects} from "../../../selectors/login"
import {menuPageObjects} from "../../../selectors/menubar"
import {productPageObjects} from "../../../selectors/productPage"
import {productDetailPageObject} from "../../../selectors/productDetailsPage"

const loginPO = new loginPageObjects()
const menuPO = new menuPageObjects()
const productPO = new productPageObjects()
const productDetailPO = new productDetailPageObject(); 


Given("user open the website11", () =>{
    cy.viewport(1280, 720);
    cy.visit("https://magento.softwaretestingboard.com/")
    loginPO.getSignInLink().eq(0).click()
    // var text1 = loginPO.getCustomerLoginPageHeader().
    cy.log
    loginPO.getCustomerLoginPageHeader()
        .should('be.visible')
        .should('have.text','Customer Login')
})

Given("user open the website12", () =>{
    cy.viewport(1280, 720);
    cy.visit("https://magento.softwaretestingboard.com/")
    loginPO.getSignInLink().eq(0).click()
    // var text1 = loginPO.getCustomerLoginPageHeader().
    cy.log
    loginPO.getCustomerLoginPageHeader()
        .should('be.visible')
        .should('have.text','Customer Login')
})
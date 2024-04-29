export class productDetailPageObject{
    getProductName(){
        return cy.get(".page-title-wrapper span")
    }
    getProductPrice(){
        return cy.get(".product-info-main span.price")
    }
    getProductQuantity(){
        return cy.get("#qty")
    }
    getXSSize(){
        return cy.get(".product-info-main div.swatch-option.text:first-of-type")
    }
    getBlackColour(){
        return cy.get(".product-info-main div.swatch-option.color:first-of-type")
    } 
    getMessageAfterAddingCart(){
        return cy.get('.page.messages div[data-bind="html: $parent.prepareMessageForHtml(message.text)')
    }
    getAddToCartButton(){
        return cy.get("#product-addtocart-button")
    }
}
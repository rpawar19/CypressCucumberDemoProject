export class productPageObjects{
    getCartButtonFromHomePage()
    {
        return cy.get(".action.showcart")
    }
    getEmptyCartMessage(){
        return cy.get(".subtitle.empty")
    }
    getCloseEmptyDialogButton(){
        return cy.get(".action.close")
    }
    getCountOFProducts(){
        return cy.get(".toolbar-amount>span")
    }
    getCountOfVisibleProduct(){
        return cy.get("ol.products.list.items.product-items>li")
    }
    getFirstProductFromResult(){
        return cy.get("ol.products.list.items.product-items>li:first-of-type")  
    }
    getFirstProductName(){
        return cy.get("ol.products.list.items.product-items>li:first-of-type>div>div a.product-item-link")
    }
    getFirstProductPrice(){
        return cy.get("ol.products.list.items.product-items>li:first-of-type>div>div div span.price")
    }
    // getAddToCartButton(){
    //     return cy.get("ol.products.list.items.product-items>li:first-of-type>div>div div.actions-primary button")
    // }
    
}
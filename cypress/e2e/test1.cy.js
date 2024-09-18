/// <reference types="cypress" />

describe('Test site', () => {
    it('Login Test', () => {
        cy.visit('https://unsplash.com/');
        cy.get('.W1Or3 > .J7FDr > .X2u6K').click();
        cy.get(':nth-child(1) > .W8OOb').type('loginass@test.com');
        cy.get(':nth-child(2) > .W8OOb').type('asslogin321');
        cy.get('.IF9eQ').click();
        
       
        
    });
});
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('l open login page', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
})

When('l submit login', () => {
    cy.get('#user_login').type('username');
    cy.get('#user_password').type('password');
    cy.contains('Sign in').click();
})

Then('1 should see homepage', () => {
    cy.get('#account_summary_tab > a').should('be.visible');
})
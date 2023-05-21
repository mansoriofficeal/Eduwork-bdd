import LoginPage from './login.page';   
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('l open login page', () => {
    LoginPage.visit();
})

When('l submit login', () => {
    LoginPage.fillUsername('username');
    LoginPage.fillPassword('password');
    LoginPage.signIN();
})

Then('1 should see homepage', () => {
    cy.get('#account_summary_tab > a').should('be.visible');
})
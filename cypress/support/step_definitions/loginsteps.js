import LoginPage from '../../e2e/Pages/loginPages';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(function () {
    // Clear cookies and local storage, then load fixture data
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.fixture('user_data').then((data) => {
        this.data = data;
    });
    LoginPage.visit();
});

//Authentication
Given('I visit the login page', () => {
    LoginPage.visit();
});

When('I enter valid credentials', function () {
    LoginPage.fillUsername(this.data.validUser.username);
    LoginPage.fillPassword(this.data.validUser.password);
});

When('I enter invalid credentials', function () {
    LoginPage.fillUsername(this.data.invalidUser.username);
    LoginPage.fillPassword(this.data.invalidUser.password);
});

When('I click the login button', () => {
    LoginPage.submitLogin();
});

Then('I should be redirected to the dashboard', () => {
    LoginPage.checkDashboard();
});

Then('I should see an invalid credentials message', () => {
    LoginPage.checkInvalidCredentialsMessage();
});

Then('I should remain on the login page', () => {
    LoginPage.checkLoginPage();
});

//API
Given('I send a POST request to the login API with valid credentials', () => {
    // You can implement API request here if needed.
});

Then('I should receive a 405 status code', () => {
    // You can verify the status code for the API request here.
});
//Password recovery
Given('I visit the forgot password page', () => {
    LoginPage.visitForgotPasswordPage();
});

When('I enter a valid username for password recovery', function () {
    LoginPage.fillUsernameForPasswordReset(this.data.validUser.username);
});

When('I enter an invalid username for password recovery', function () {
    LoginPage.fillUsernameForPasswordReset(this.data.invalidUser.username);
});

When('I click the submit button for password recovery', () => {
    LoginPage.submitPasswordReset();
});

Then('I should see a password reset link sent confirmation', () => {
    LoginPage.checkPasswordResetLinkSent();
});

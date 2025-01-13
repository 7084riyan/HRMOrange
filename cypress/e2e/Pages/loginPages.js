class LoginPage {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    fillUsername(username) {
        cy.get('input[name="username"]').type(username);
    }

    fillPassword(password) {
        cy.get('input[type="password"]').type(password);
    }

    submitLogin() {
        cy.get('button[type="submit"]').click();
    }

    checkDashboard() {
        cy.url().should('include', '/dashboard');
    }

    checkInvalidCredentialsMessage() {
        cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
    }
    checkLoginPage() {
        cy.url().should('include', '/auth/login');
    }

    visitForgotPasswordPage() {
        cy.contains('Forgot your password?').click();
    }

    fillUsernameForPasswordReset(username) {
        cy.get('input[name="username"]').type(username);
    }

    submitPasswordReset() {
        cy.get('button[type="submit"]').click();
    }

    checkPasswordResetLinkSent() {
        cy.contains('Reset Password link sent successfully').should('be.visible');
    }
}

export default new LoginPage();

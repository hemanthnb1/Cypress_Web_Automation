export const getEmailInputbox = () => cy.get('#CustomerEmail');
export const getPasswordInputbox = () => cy.get('#CustomerPassword');
export const getSigninButton = () => cy.contains('button', 'Sign in');

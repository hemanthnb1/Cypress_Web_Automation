// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import { getHomeIcon } from './components/HomePage/Selectors';

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
    // Perform common setup tasks
    cy.visit('https://web-playground.ultralesson.com/account/login');
    cy.login(Cypress.env('email'), Cypress.env('password'));
    getHomeIcon().click();
    cy.fixture("testdata").as("testData"); // Visit your application URL
    // cy.login(Cypress.env('email'), Cypress.env('password'));
  });
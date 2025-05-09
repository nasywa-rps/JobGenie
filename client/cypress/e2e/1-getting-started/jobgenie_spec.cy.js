describe('JobGenie Application Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173');
    });
  
    it('Should load the homepage', () => {
      cy.contains('JobGenie').should('be.visible');
    });
  
    it('Should navigate to the login page', () => {
      cy.get('a[href="/login"]').click();
      cy.url().should('include', '/login');
      cy.contains('Login').should('be.visible');
    });
  
    it('Should allow user to register', () => {
      cy.get('a[href="/register"]').click();
      cy.url().should('include', '/register');
      cy.get('input[name="username"]').type('testuser');
      cy.get('input[name="email"]').type('testuser@example.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('button[type="submit"]').click();
      cy.contains('Registration successful').should('be.visible');
    });
  
    it('Should allow user to login', () => {
      cy.get('a[href="/login"]').click();
      cy.get('input[name="email"]').type('testuser@example.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('button[type="submit"]').click();
      cy.contains('Welcome, testuser').should('be.visible');
    });
  
    it('Should display job listings', () => {
      cy.get('a[href="/jobs"]').click();
      cy.url().should('include', '/jobs');
      cy.get('.job-listing').should('have.length.greaterThan', 0);
    });
  });
  
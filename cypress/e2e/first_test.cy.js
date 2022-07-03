import GooglePage from './pageObjects/googlePage.js';

describe('first test', () => {
     
  const googlePage = new GooglePage;
  
    it('visit to google page', () => {
    cy.visit('https://google.com.ua');       
  });
  
  it('google title', () => {        
    googlePage.mainTitle().should('contain', 'Google');       
  });
  
  it('google input', () => {   
        googlePage.mainInput().click();       
  });
  
  it('type some word', () => { 
        googlePage.mainInput().type('holla');
  });
});
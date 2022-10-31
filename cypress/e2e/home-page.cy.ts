const oneDay = 24 * 60 * 60 * 1000;
const today = new Date(new Date().getTime()).toLocaleString('en-us', {month: 'long', day:'numeric'});
const tomorrow = new Date(new Date().getTime() + (oneDay)).toLocaleString('en-us', {month: 'long', day:'numeric'});
const inFiveDays = new Date(new Date().getTime() + (oneDay* 5)).toLocaleString('en-us', {month: 'long', day:'numeric'});
const inFourDays = new Date(new Date().getTime() + (oneDay* 4)).toLocaleString('en-us', {month: 'long', day:'numeric'});

const city = 'Rotterdam';
const country = 'Spain';

describe('Testing main page', () => {
  it('It returns the weather if we type a city', () => {
    cy.visit('/');
    cy.get('#searchInput').type('Rotterdam');
    cy.wait(3000);
    cy.get('app-forecast-table').find('app-forecast').should('have.length', 5);
    const regex = new RegExp(`${today}|${tomorrow}`, 'g')
    cy.get('app-forecast-table app-forecast:nth-child(1)').find('.time').contains(regex);
  });

  it('It returns the weather if we type a country', () => {
    cy.visit('/');
    cy.get('#searchInput').type('Rotterdam');
    cy.wait(3000);
    cy.get('app-forecast-table').find('app-forecast').should('have.length', 5);
  });
  
  it('It returns an error if doesnt find anything', () => {
    cy.visit('/');
    cy.get('#searchInput').type('gjeaipaf');
    cy.wait(3000);
    cy.get('app-forecast-table').find('div').contains('city not found');
  });

  it('It should change the order when we sort', () => {
    cy.visit('/');
    cy.get('#searchInput').type('Rotterdam');
    cy.wait(3000);
    cy.get('app-forecast-table').find('app-forecast').should('have.length', 5);
    cy.get('mat-icon[fonticon="expand_more"]').click();
    const regex = new RegExp(`${inFourDays}|${inFiveDays}`, 'g')
    cy.get('app-forecast-table app-forecast:nth-child(1)').find('.time').contains(regex);
  });

})
// https://on.cypress.io/api

// describe('My First Test', () => {
//   it('visits the app root url', () => {
//     cy.visit('/')
//     cy.contains('h1', 'You did it!')
//   })
// })

describe('Sanity Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('#header a:first-child', 'Music')
  })
})

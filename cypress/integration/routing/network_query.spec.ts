describe('querystring network', () => {
  beforeEach(function () {
    cy.visit('/?network=MainNet')
  })

  it('should contain network querystring for /', function () {
    cy.location().should((loc) => {
      expect(loc.search).to.contains('network=MainNet')
    })
  })

  it('should preserve network querystring when route to /prices', function () {
    cy.get('footer')
      .findAllByText('Prices')
      .should('exist')
      .click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/prices')
      expect(loc.search).to.contains('network=MainNet')
    })
  })
})
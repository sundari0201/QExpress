describe('Verify when valid input data login and successfully', () => {
    it('passes', () => {
      cy.visit('https://sandbox-app.oexpress.co.id')
      cy.get(':nth-child(1) > .form-control').type('admaoffice.2022@gmail.com')
      cy.get('.input-password > .form-control').type('admaoffice')

      
      cy.get('.d-grid').click()
      cy.get('.text-center > h3').invoke('text').then((text) => {

        expect(text).to.eq('Selamat Datang, adma office!')
      })
    })
  })
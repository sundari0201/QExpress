describe('Verify when register akun successfully', () => {
    it('passes', () => {
      cy.visit('https://sandbox-app.oexpress.co.id')
      cy.get('.text-danger').click()

      cy.get(':nth-child(1) > .form-control').click()
      cy.get(':nth-child(1) > .form-control').type('adma office')

      cy.get('form > :nth-child(2) > .form-control').type('admaoffice.2022@gmail.com')
      cy.get('.input-password > .form-control').type('admaoffice')
      cy.get(':nth-child(4) > .form-control').type('080004567991')

      cy.get('.d-grid').click()
      cy.get('.mt-0').invoke('text').then((text) => {

        expect(text).to.eq('Please Check Your Email!')
      })
    
    })
    
  })

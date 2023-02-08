describe('Verify when login negative case', () => {
    it('passes', () => {
      cy.visit('https://sandbox-app.oexpress.co.id')
        // Verify when invalid input email data "not minimum characters"
        cy.get(':nth-child(1) > .form-control').type('test')
        cy.get('form > :nth-child(1) > .text-danger').invoke('text').then((text) => {
            expect(text).to.eq('email harus email valid.')
        cy.get(':nth-child(1) > .form-control').clear()
    })
      // Verify when empty input email 
        cy.get('form > :nth-child(1) > .text-danger').invoke('text').then((text) => {
            expect(text).to.eq('email tidak boleh kosong.')
        cy.get(':nth-child(1) > .form-control').type('admaoffice.2022@gmail.com')
    })
    // Verify when invalid input password
    cy.get('.input-password > .form-control').type('testtesttest')
    cy.get('.btn').click()
    cy.wait(2000)

    // it('should trigger an alert with a message', () => {
        cy.get('.alert').click();
    
        cy.on('.alert', (text) => {
          expect(text).to.contains('Invalid Password');
        });
    });
       
})

    

describe('Verify forget password successfully send gmail', () => {
    it('passes', () => {
      cy.visit('https://sandbox-app.oexpress.co.id')

      cy.get('small').click()

      cy.wait(2000)

      cy.get('.form-control').each((ele)=>{

        if(ele.text())
        cy.wrap(ele)
        cy.get('.form-control').type('admaoffice.2022@gmail.com')

        cy.get('.btn').click()
        cy.wait(2000)
     

        // cy.get(':nth-child(2) > .text-muted').invoke('text').then((text) => {
        // expect(text).to.eq("We've send a link for reset your password. Please Check Your Email!") 
        // // cy.get('form').find('img').should('have.attr', 'src', 'My-Logo')
        // cy.get('.logout-icon > img').find('img').should('be.visable')
      })      
      })  
    }) 


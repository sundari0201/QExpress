describe('Verify when valid input data login and successfully', () => {
  it('passes', () => {
    cy.visit('https://sandbox-app.oexpress.co.id')
    cy.get(':nth-child(1) > .form-control').type('udummy72@gmail.com')
    cy.get('.input-password > .form-control').type('idasundari')
    cy.get('.d-grid').click()

//Verify when input data step 1 in Onboarding corp
    cy.wait(2000)
    cy.get('.row > :nth-child(1) > .form-control').type('Cahaya Abadi')
    cy.wait(2000)
    cy.get(':nth-child(2) > .form-control').type('User testing')
    cy.wait(2000)
    cy.get(':nth-child(3) > .form-control').type('Food')
    cy.wait(2000)
    cy.get(':nth-child(4) > .form-control').type('0278784641619')
    cy.wait(2000)
    cy.get(':nth-child(5) > .form-control').type('888999000999')
    cy.wait(2000)
    cy.get(':nth-child(6) > .form-control').type('aidaputrilaksono@gmail.com')
    cy.wait(2000)
    cy.get(':nth-child(7) > .form-control').type('Ligung Majalengka Jawa Barat')
    cy.wait(2000)
    cy.get('.multiselect__select').click()
    cy.wait(2000)
    cy.get('.multiselect__input').type('Ligung')
    cy.contains('.multiselect__option', 'Jawa Barat, Kab. Majalengka, Ligung')      
     .click()
     cy.wait(2000)
     cy.get('.flex').click()
     cy.wait(2000)


  }) })

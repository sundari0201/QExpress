describe('Verify when valid input data login and successfully', () => {
  it('passes', () => {
    cy.visit('https://sandbox-app.oexpress.co.id')
    cy.get(':nth-child(1) > .form-control').type('utesting215@gmail.com')
    cy.get('.input-password > .form-control').type('idasundari')
    cy.wait(2000)
    cy.get('.d-grid').click()

//Verify when input data step 1 in Onboarding user 
    cy.wait(2000)
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .form-control').type('Cahaya Abadi')
    cy.wait(2000)
    cy.get(':nth-child(2) > .form-control').type('User Staging')
    cy.wait(2000)
    cy.get(':nth-child(2) > .col-md-6 > .form-control').type('081221114129')
    cy.wait(2000)
    cy.get(':nth-child(3) > .col-md-12 > .form-control').type('Blok Manis Jawa Barat Indonesia')
    cy.wait(2000)
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .form-control').type('Cahaya Abadi')
    cy.wait(2000)
    cy.get(':nth-child(2) > .form-control').type(' Testing')
    cy.wait(2000)

    cy.get('.multiselect__single').click()

    cy.get('.multiselect__input').type('Ligung')
    cy.contains('.multiselect__option', 'Jawa Barat, Kab. Majalengka, Ligung')      
     .click()
     cy.wait(2000)
     cy.get('.flex > .btn').click()
     cy.wait(2000)

// //Verify when input data step 2 in Onboarding user 
cy.wait(2000)
cy.get('.form-check').click()
cy.get('.form-check').check()
cy.wait(2000)
cy.get('.flex > .btn').click()

// // //Verify when input data step 3 in Onboarding user 
cy.get('.multiselect__tags').click()
cy.contains('.multiselect__content', 'BCA').click()
cy.get('.row > :nth-child(2) > .form-control').type('123456789')
cy.get(':nth-child(3) > .mb-3 > .form-control').type('User test')
cy.get('.flex > .btn').click()

// //Verify when input data step 4 in Onboarding user
cy.get('.dnd-uploader').click()

//     })
// })


  


  }) })

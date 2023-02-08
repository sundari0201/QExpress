// describe('Verify when register akun failed', () => {
//     it('passes', () => {
//       cy.visit('https://sandbox-app.oexpress.co.id')
//       cy.get('.text-danger').click()
//       cy.wait(2000)

//       //Verify when empty input Name Lengkap 
//       cy.get(':nth-child(1) > .form-control').click()
//       cy.get(':nth-child(1) > .form-control').type('Staging User')
//       cy.get(':nth-child(1) > .form-control').clear()
//       cy.get('form > :nth-child(1) > .text-danger').invoke('text').then((text) => {
//          expect(text).to.eq('name tidak boleh kosong.')
//     })

//     //Verify when invalid input Name Lengkap
//       cy.get(':nth-child(1) > .form-control').type('S')
//       cy.get('form > :nth-child(1) > .text-danger').invoke('text').then((text) => {
//         expect(text).to.eq('name terlalu pendek.')
//         cy.get(':nth-child(1) > .form-control').clear()
//         cy.get(':nth-child(1) > .form-control').type('Staging User')
//     })

//         // Verify when invalid input email data "not minimum characters"
//         cy.get('form > :nth-child(2) > .form-control').type('test')
//         cy.get(':nth-child(2) > .text-danger').invoke('text').then((text) => {
//             expect(text).to.eq('email terlalu pendek.')
//     })
//         // Verify when invalid input email data "invalid name email"
//         cy.get('form > :nth-child(2) > .form-control').clear()
//         cy.get('form > :nth-child(2) > .form-control').type('testuser')
//         cy.get(':nth-child(2) > .text-danger').invoke('text').then((text) => {
//            expect(text).to.eq('email harus email valid.')
//         cy.get('form > :nth-child(2) > .form-control').clear()

//     })
//         //Verify when empty input email 
//         cy.get(':nth-child(2) > .text-danger').invoke('text').then((text) => {
//             expect(text).to.eq('email tidak boleh kosong.')
//          cy.get('form > :nth-child(2) > .form-control').clear()
//         cy.get('form > :nth-child(2) > .form-control').type('admaoffice.2022@gmail.com')
//         //Verify when input valid password
//         cy.get('.input-password > .form-control').type('user123')
//     })
//        //Verify when invalid input data Nomor Handphone "not minimum characters"
//        cy.get(':nth-child(4) > .form-control').type('123')
//        cy.get(':nth-child(4) > .text-danger').invoke('text').then((text) => {
//         expect(text).to.eq('phone terlalu pendek.')
//         cy.get(':nth-child(4) > .form-control').clear()
// })
//      //Verify when empty input data Nomor Handphone 
//      cy.get(':nth-child(4) > .text-danger').invoke('text').then((text) => {
//       expect(text).to.eq('phone tidak boleh kosong.')
//       cy.get(':nth-child(4) > .form-control').clear()
//       cy.get(':nth-child(4) > .form-control').type('8889990001112')
//       cy.wait(2000)
// })    

//     })
// })

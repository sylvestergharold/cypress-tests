describe('Login', function() {
    it('logs in with valid creds', function() {
        cy.visit('https://italist.com');
        cy.get('#navbar_user > a').click();
        cy.get('#email_big').click().type('sylvestertest@gmail.com');
        cy.get('#password_big').click().type('asdf1234');
        cy.get('.login.modal-body button').click();
        cy.get('#navbar_user > a').contains(/logout/i)
            .should('have.attr', 'href', 'https://www.italist.com/logout');
    });
})
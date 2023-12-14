describe('Test Gestion Stock', () => {
  it('Add an article and remove it', () => {
    cy.visit('/');
    cy.contains('Gestion Stock');
    cy.contains('Mentions Légales');
    cy.contains('main a', 'Voir le stock').click();
    cy.url().should('include', '/stock');
    cy.get('a[title="Ajouter"]').click();
    cy.contains('h1', "Ajout d'un article");
    const name = 'a_' + Cypress._.random(0, 1e6);
    cy.get('input').eq(0).clear().type(name);
    cy.get('input').eq(1).clear().type('123.45');
    cy.get('input').eq(2).clear().type('234');
    cy.contains('button', 'Ajouter').click();

    cy.get('table tbody tr').contains(name).click();
    cy.get('button[title="Supprimer"]').click();
  });
});

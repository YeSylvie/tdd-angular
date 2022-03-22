describe('Test fonctionnel', () => {
  it('Ajouter un article au panier et abandon du panier', () => {
    // On arrive sur le site
    cy.visit('http://localhost:4200/')

    // On cherche l'article pomme
    cy.get('.pomme').click()

    // On arrive sur la page de détail
    cy.url().should('include', '/detail/pomme')

    // On clique sur le bouton "ajouter au panier"
    cy.contains("Ajouter au panier").click()

    // Vérifier que le panier s'est bien incrémenté
    cy.get('.article-number').should('have.value', 1)

    // On clique sur la panier
    cy.get('.basket').click()

    // On vérifie l'url du panier
    cy.url().should('include', '/basket')

    // On vérifie le titre
    cy.title().should('eq', 'Mon panier')

    // On supprime notre article
    cy.get('.btn-delete-pomme').click()

    // Vérification de la mise à jour de la page
    cy.title().should('eq', 'Mon panier')
    cy.get('.article-number').should('have.value', 0)
    cy.get('.btn-delete-pomme').should('not.exist')
    cy.contains('Votre panier est vide.')
  })

  it('Ajouter un article au panier et aller au paiement', () => {
    // On arrive sur le site
    cy.visit('http://localhost:4200/')

    // On cherche l'article pomme
    cy.get('.pomme').click()

    // On arrive sur la page de détail
    cy.url().should('include', '/detail/pomme')

    // On clique sur le bouton "ajouter au panier"
    cy.contains("Ajouter au panier").click()

    // Vérifier que le panier s'est bien incrémenté
    cy.get('.article-number').should('have.value', 1)

    // On clique sur la panier
    cy.get('.basket').click()

    // On vérifie l'url du panier
    cy.url().should('include', '/basket')

    // On vérifie le titre
    cy.title().should('eq', 'Mon panier')

    // On clique sur le bouton "Valider mon panier"
    cy.contains('Valider mon panier').click()

    // On vérifier qu'on est bien redirigé vers la page de paiement
    cy.get('.full-name')
      .type('Sylvie YE')
      .should('have.value', 'Sylvie YE')
    cy.get('.address')
      .type('1 rue Saint Martin 75001 Paris')
      .should('have.value', '1 rue Saint Martin 75001 Paris')
    cy.get('#card-number')
      .type('1111222233334444')
      .should('have.value', '1111222233334444')
    cy.get('#cvv')
      .type('098')
      .should('have.value', '098')
    cy.get('#card-name')
      .type('Sylvie YE')
      .should('have.value', 'Sylvie YE')

    // On clique sur "Payer la commande"
    cy.contains('Payer la commander').click()

    // On vérifie le message de confirmation
    cy.contains('Votre commande a bien été prise en compte.')
  })
})

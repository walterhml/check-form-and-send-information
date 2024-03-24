describe('template spec', () => {
  it('passes', () => {
    const text = 'Gavin is the owner a multi-billion company. Aside from his business, he has stocks in other major companies. However, these stocks are under another name.';


    cy.visit('https://translate.google.com/?hl=pt-BR&tab=TT');

    cy.get('.rm1UF').type(text);



  });
});
describe('Testando funcionalidades da agenda de contatos', () => {
  beforeEach(()=>{
    cy.visit('https://agenda-contatos-react.vercel.app')
  })
  it('Adicionar novo contato', () => {
    cy.get('input[type=text]').type('Leonardo Marinho')
    cy.get('input[type=email]').type('leo@gmail.com')
    cy.get('input[type=tel]').type('1299999999')
    cy.get('button[type=submit]').click()

    cy.contains('Leonardo Marinho').should('exist')
    cy.contains('leo@gmail.com').should('exist')
    cy.contains('1299999999').should('exist')

  })
  it('Editar contato', () => {
    cy.contains('Leonardo Marinho').parents('.contato').find('button.edit').click()
    cy.get('input[type=text]').clear().type('Leonardo Editado')
    cy.get('input[type=email]').clear().type('leo.editado@gmail.com')
    cy.get('input[type=tel]').clear().type('1199999999')
    cy.get('button[type=submit]').click()

    cy.contains('Leonardo Editado').should('exist')
    cy.contains('leo.editado@gmail.com').should('exist')
    cy.contains('1199999999').should('exist')


  })
  it('Deletar contato', () => {
    cy.contains('Leonardo Editado').parents('.contato').find('button.delete').click()
    cy.contains('Leonardo Editado').should('not.exist')
  })


})
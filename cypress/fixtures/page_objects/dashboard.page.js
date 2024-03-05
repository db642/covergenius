class dashboardPage {
  get contactToSpecialistBtn() {
    return cy.contains('CONTACT A LOCAL INDUSTRY SPECIALIST');
  }
  get platformsTab(){
    return cy.get('.jet-mega-menu-list').find('#jet-mega-menu-item-2503')
  }
  get solutionsTab(){
    return cy.get('.jet-mega-menu-list').find('.jet-mega-menu-item-2507')
  }
}
export default new dashboardPage();

class GooglePage {

         mainTitle() {
            return cy.title()
         };

          mainInput() {
              return cy.get('.gLFyf');
          };

}

export default GooglePage;
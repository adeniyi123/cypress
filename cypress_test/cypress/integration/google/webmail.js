context('Google', () => {
    describe('Login to Webmail', () => {
        beforeEach(() => {
            cy.visit('https://webmail.thepfs.biz/'); //go to website
            cy.viewport(1536, 960); //screen orientation
        })

        it('Should sign in successfully to mail', () => {
           cy.get('input[name="user"]').type(''); //input the username
			
			cy.get('input[name="pass"]').type('{enter}'); //input the password
			
			cy.get('span[class="subject"]').first().click(); //click on the first element
        })
		
    });
});
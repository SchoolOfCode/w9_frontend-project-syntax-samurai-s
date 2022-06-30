/// <reference types="cypress" />

// Headless Testing:
//for CI/CD testing (Headless) use the npx cypress run --headless cmd in the terminal and it will auto run tests against a virtual representation of the project

/*The Samurai-Test-Dummy.json file in /fixtures contains dummy data to test Snippet Samurais Submit form by passing in BS info such as title, function etc into the 
form, this does NOT deploy to the Database*/

/* Initial test of cypress to see if it can 1: Access localhost:3000 and then find Submit and click on it to load the Submit page
best to npm start front end project first */

//click test
describe('Tests to see if page is renders and a .clck action can be taken', () => {
	it('Submit Click Test', () => {
		cy.visit('localhost:3000/'); //npm start Samurai front end first
		//ignore red line, code still works. Unsure why this started to happen, just randomly appeared even though code is valid
		cy.wait(1000); //waits 1 second before attempting a click
		cy.get('a[href*="submit"]').click(); //searches for submit and clicks
	});
});

/*
Writie tests here before adding to the test stack above :

describe('Tests to see if cypress can type inside the text box on front page', () => {
	it('Type Test', () => {
		cy.
	});
});


*/

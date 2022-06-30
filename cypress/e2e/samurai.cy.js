/// <reference types="cypress" />

//cypress hello world ping test. Visits any URL entered on line 7 to make sure cypress is working and that the test is valid.

describe('Empty Test', () => {
	it('test one', () => {
		cy.visit('https://en.wikipedia.org/wiki/Main_Page'); //Wikipedia homepage used as to not be super obnoxious on every save and load of Cy
	});
});

// Headless Testing:
//for CI/CD testing (Headless) use the npx cypress run --headless cmd in the terminal and it will auto run tests against a virtual representation of the project

/*The Samurai-Test-Dummy.json file in /fixtures contains dummy data to test Snippet Samurais Submit form by passing in BS info such as title, function etc into the 
form, this does NOT deploy to the Database*/

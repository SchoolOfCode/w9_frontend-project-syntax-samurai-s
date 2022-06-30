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

		// This test block sees if Cypress can navigate to localhost:3000/submit

		cy.wait(500); //waits 1/2 a second before attempting a click
		cy.get('a[href*="submit"]').click(); //searches for submit and clicks
		cy.wait(500);

		// This block of tests is the contains, checks to see if page contains the following elements (text)

		cy.contains('Title:').should('exist');
		cy.wait(500);
		cy.contains('Code Snippet:').should('exist');
		cy.wait(500);
		cy.contains('Description:').should('exist');
		cy.wait(500);
		cy.contains('Youtube Link:').should('exist'); //<-- Designed to fail, change UpperCase T to LowerCase and the test will work
		cy.wait(500);
		cy.contains('Docs Link:').should('exist');
		cy.wait(500);
		cy.contains('Submit Snippet').should('exist');

		// This block of tests, checks for certain Divs

		cy.get('div#nav-logo').should('exist');
		cy.wait(500);
		cy.get('div#nav-links').should('exist');
		cy.wait(500);
		cy.get('img#background').should('exist');

		//Viewer Checks - Check view on different devices/resolutions

		cy.visit('localhost:3000/');
		cy.wait(500);
		cy.viewport(1280, 720); // SD
		cy.wait(500);
		cy.viewport(1366, 768); // HD
		cy.wait(500);
		cy.viewport(1600, 900); // HD+
		cy.wait(500);
		cy.viewport(1920, 1080); // Full HD
		cy.wait(500);
		cy.viewport(2560, 1440); // QHD
		cy.wait(500);
		cy.viewport(3840, 2160); // 4k - UHD
		cy.wait(500);
		cy.viewport('samsung-s10'); // 1440 x 3040
		cy.wait(500);
		cy.viewport('macbook-16'); // 3024 x 1984
		cy.wait(500);
		cy.viewport('ipad-mini'); // 2048 x 1536
		cy.wait(500);
		cy.viewport('iphone-xr'); // 1792 x 828
		cy.wait(1000);
		cy.visit('localhost:3000/submit');
		cy.wait(500);
		cy.viewport(1280, 720); // SD
		cy.wait(500);
		cy.viewport(1366, 768); // HD
		cy.wait(500);
		cy.viewport(1600, 900); // HD+
		cy.wait(500);
		cy.viewport(1920, 1080); // Full HD
		cy.wait(500);
		cy.viewport(2560, 1440); // QHD
		cy.wait(500);
		cy.viewport(3840, 2160); // 4k - UHD
		cy.wait(500);
		cy.viewport('samsung-s10'); // 1440 x 3040
		cy.wait(500);
		cy.viewport('macbook-16'); // 3024 x 1984
		cy.wait(500);
		cy.viewport('ipad-mini'); // 2048 x 1536
		cy.wait(500);
		cy.viewport('iphone-xr'); // 1792 x 828
		cy.wait(500);
		cy.visit('localhost:3000/');

		//
	});
});

/*
Writie tests here before adding to the test stack above :

describe('Tests to see if page is renders and a .clck action can be taken', () => {
	it('Submit Click Test', () => {
		cy.visit('localhost:3000/'); 
		cy.wait(1000); 
		cy.get('a[href*="submit"]').click();
		cy.wait(1000); 
		y.contains('Title:').should('exist');
		cy.wait(1000);
		cy.contains('Code Snippet:').should('exist');
		cy.wait(1000);
		cy.contains('Description:').should('exist');
		cy.wait(1000);
		cy.contains('YouTube Link:').should('exist');
		cy.wait(1000);
		cy.contains('Docs Link:').should('exist');
		cy.wait(1000);
		cy.contains('Submit Snippet').should('exist');
		
		// This block of tests, checks for certain Divs & Background image

		cy.get('div#nav-logo').should('exist');
		cy.wait(500);
		cy.get('div#nav-links').should('exist');
		cy.wait(500);
		cy.get('img#background').should('exist');
		cy.wait(500);

		//Viewer Checks - Check view on different devices/resolutions

		cy.visit('localhost:3000/');
		cy.wait(500);
		cy.viewport(1280, 720);
		cy.wait(500);
		cy.viewport('samsung-s10');
		cy.wait(500);
		cy.viewport('macbook-16');
		cy.wait(500);
		cy.viewport('ipad-mini');
		cy.wait(500);
		cy.viewport('iphone-xr');
		cy.wait(1000);
		cy.visit('localhost:3000/submit');
		cy.wait(500);
		cy.viewport(1280, 720);
		cy.wait(500);
		cy.viewport('samsung-s10');
		cy.wait(500);
		cy.viewport('macbook-16');
		cy.wait(500);
		cy.viewport('ipad-mini');
		cy.wait(500);
		cy.viewport('iphone-xr');
		cy.wait(500);
		cy.visit('localhost:3000/');

});


*/

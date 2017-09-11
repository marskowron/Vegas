var helper = require('../helper');
var VegasHomePage = require('../objects/homePage.js');
var params = browser.params;
var hp = new VegasHomePage();

describe('searching game on Vegas site', function(){
	
	beforeEach(() => {
		
		browser.get(browser.params.URL);
		browser.driver.manage().window().maximize();
		browser.manage().timeouts().implicitlyWait(browser.params.implicityTimeout);
        browser.ignoreSynchronization = true;
        
        expect(browser.getTitle()).toEqual(hp.expectedWebsiteTilte);
		console.log("Open page: " + hp.expectedWebsiteTilte);
	});	
	
	it('finding a game using searchbox', function(){
		
		console.log('Searching magnifer button');
		hp.magnifierSearchButton.click();
		
		console.log('Searching game: '+ params.gameName);
		hp.searchBox.clear().sendKeys(params.gameName);
		expect(hp.searchBox.getAttribute('value')).toBe(params.gameName);
		
		console.log('Waiting for search engine to load results');
		helper.waitUntilReady(hp.gameList);
		
		console.log('Verifying whether object was found');
		expect(hp.gameBox.isDisplayed()).toBeTruthy();		
		console.log ("Object found");
		browser.actions().mouseMove(hp.gameBox).perform();
		
		console.log('Time for hover to expand');
		browser.sleep(5000);
				
		console.log("Verifying if 'More' button is dispalyed");
		//helper.waitUntilReady(additionalInfoButton);
		hp.additionalInfoButton.isDisplayed().then(function(){hp.additionalInfoButton.click()});

		console.log("Verifying if login 'Play Now' button is dispalyed");
		helper.waitUntilReady(hp.playNowButton);
		hp.playNowButton.isDisplayed().then(function(){hp.playNowButton.click()});
		
		console.log("Verifying if login dialog is dispalyed");
		expect(hp.loginDialog.isDisplayed()).toBeTruthy();
		
	});
});

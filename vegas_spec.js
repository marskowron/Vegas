
describe('searching game on Vegas site', function(){

	var params = browser.params;
	
	beforeEach(() => {
		var URL = 'https://vegas.williamhill.com/';
		var expectedWebsiteTitle = 'Play Online Casino Games at William Hill Vegas';
		browser.get(URL);
		browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
		expect(browser.getTitle()).toEqual(expectedWebsiteTitle);
		console.log("Page open");
	});	
	
	it('finding a game using searchbox', function(){
			
		element(by.css('.btn-search-magnifier')).click();
		
		var gameName= "Mayfair Roulette";
		element(by.css('.search-input__input-wrapper>input')).clear().sendKeys(params.gameName);
				
		const gameBox = element.all(by.xpath("//div[@class='grid__category-row']//img[@alt='"+params.gameName+"']"));
		expect(gameBox.isDisplayed()).toBeTruthy();		
		console.log ("Object found");
		browser.actions().mouseMove(gameBox).perform();
		
		browser.sleep(2000);
		
	});
});

var VegasHomePage = function(){
	
	this.expectedWebsiteTilte = "Play Online Casino Games at William Hill Vegas";
	this.searchBox = element(by.css('.search-input__input-wrapper>input'));
	this.gameList = element.all(by.xpath("//div[contains(@class,'tiles-shift-group__item--visible')]"));
	this.gameBox = element.all(by.xpath("//div[contains(@class,'tiles-shift-group__item--visible')]")).first();
	this.additionalInfoButton = element(by.buttonText('More'));
	this.playNowButton = element(by.buttonText('Play Now'));
	this.loginDialog = element(by.className('modal-title'));
	this.magnifierSearchButton = element(by.css('.btn-search-magnifier'))
	
}

module.exports = VegasHomePage;
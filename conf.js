exports.config = {
  directConnect: true,

  //seleniumAddress: 'http://localhost:4444/wd/hub',
  
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  
  params:{
	  gameName: "Mayfair Roulette" ,
	  URL: "https://vegas.williamhill.com/",
	  implicityTimeout: 30000,
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['pages/vegas_spec.js'],
  getPageTimeout: 120000,
  allScriptsTimeout: 120000,

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
	showColors: true,
    defaultTimeoutInterval: 30000
  }
};

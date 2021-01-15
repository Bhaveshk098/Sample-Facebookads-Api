//Step 1 to create ad Campaign

//Importing required facebook lib
const bizSdk = require('facebook-nodejs-business-sdk');
const AdAccount = bizSdk.AdAccount;
const Campaign = bizSdk.Campaign;

const access_token =
	'EAAo6p9k9RvMBAF3Fimz6uAcvD7v86MTALvNAMmj807ihJUtKtdelrqf18PUZBkvDZA1my1gWnWXoZAkMhRgcCAsJ6fQZAWGgWaTc1Moo0lZA849KChYoDAtZCfIFxXZBUPlciUH9fLnzXaOSrQ0cTZCyHNa4xFwfBbVwnaCbRCIVBIxxX5tk3tPCCKCdqcXnC5hkw9jm7aZAlGCRG1FlqEnxPOiCd4wBqwKjgUZBEpqgNvvM0nx9rYA2mepUGRWZAKN7ngZD';
const app_secret = '<APP_SECRET>';
const app_id = '<APP_ID>';
const id = 'act_887834618644108';
const api = bizSdk.FacebookAdsApi.init(access_token);
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
	api.setDebug(true);
}

//Fetching and logging the data to cosole
const logApiCallResult = (apiCallName, data) => {
	console.log(apiCallName);
	if (showDebugingInfo) {
		console.log('Data:' + JSON.stringify(data));
	}
};

//Field will be empty and providing req params
let fields, params;
fields = [];
params = {
	name: 'FIOBOT-FREE-EDITION-24DEC2020',
	objective: 'CONVERSIONS',
	status: 'PAUSED',
	buying_type: 'AUCTION',
	bid_strategy: 'LOWEST_COST_WITHOUT_CAP',
	daily_budget: '500',
	special_ad_categories: 'NONE'
};

//Using AdAccount to create campaign
const campaigns = new AdAccount(id)
	.createCampaign(fields, params)
	.then((result) => {
		console.log(result);
	})
	.catch((error) => console.log(error));
logApiCallResult('campaigns api call complete.', campaigns);

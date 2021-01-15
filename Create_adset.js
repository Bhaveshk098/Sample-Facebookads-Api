//Step 2 to create adset

//Importing required facebook lib
const bizSdk = require('facebook-nodejs-business-sdk');
const AdAccount = bizSdk.AdAccount;
const AdSet = bizSdk.AdSet;

const access_token =
	'EAAo6p9k9RvMBAAyCoZCGE2KCRPRZBsVSY5YC9g0iph9EpKUFOUVWyfWiIyulzkaJcxgnext8xtcZCgL37PqPC4ZA81AMwgarZCJ4BzbnfapmkZB8wA3Dm4s4RNdOeLSZAy9TzJGgwRewRfSWmu0CfekaS1TZA6uX7ZAzV7CQjfVZA9SW7OxdEpjjgr31Us4nvT0CDj3ZAzQULv182ZBnM5lBO2I6JrpRAExq3Td91nszQVk3Pb5ZAcidL9RLQ5lKNBlAZCZBrAZD';
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
	name: 'FIOBOT-FREE-EDITION-124DEC2020-STARTUP',
	start_time: '2020-12-31T08:44:23-0700',
	end_time: '2021-01-01T08:44:23-0700',
	campaign_id: '23846247919380081',

	// conversion_event: 'LEAD',
	billing_event: 'IMPRESSIONS',

	optimization_goal: 'POST_ENGAGEMENT',
	targeting: {
		publisher_platforms: [ 'facebook' ],
		age_min: 25,
		facebook_positions: [ 'feed', 'story' ],
		geo_locations: { countries: [ 'US' ] },
		interests: [
			{
				id: 6003325004380,
				name: 'Startup company'
			}
		]
	},
	status: 'PAUSED'
};

//Using AdAccount to create an adset
const adsets = new AdAccount(id)
	.createAdSet(fields, params)
	.then((result) => {
		console.log(result);
	})
	.catch((error) => console.log(error));
logApiCallResult('adsets api call complete.', adsets);

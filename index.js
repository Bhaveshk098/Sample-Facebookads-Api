//
// const bizSdk = require('facebook-nodejs-business-sdk');

// const AdsInsights = bizSdk.AdsInsights;
// const AdAccountActivity = bizSdk.AdAccountActivity;

// const access_token =
// 	'EAAo6p9k9RvMBAMb6qFZA30I8ttdS4LCts1cS1b3oFwIR9mzpcGyuFeHaYIEjvRpVIyjMBDqwJ3EOtZBaWi4ZAI1ZBJaZCHJZCMFmz7D0tFoZBNdCYYBMBKinFCBhxorikTss9nBMe7DZB9f2s0VvJILLvMYAW6ThjHhg58U9ZCY7VZAHxUkccZCYqT0J3hVpxNZAYCZCwZB5C2RcJuRFXZA40HNx5cDTjR7NwoRyX4ZD';
// // const app_secret = '<APP_SECRET>';
// // const app_id = '<APP_ID>';
// const id = 'act_887834618644108';
// const api = bizSdk.FacebookAdsApi.init(access_token);
// const showDebugingInfo = true; // Setting this to true shows more debugging info.
// if (showDebugingInfo) {
// 	api.setDebug(true);
// }

// const logApiCallResult = (apiCallName, data) => {
// 	console.log(apiCallName);
// 	if (showDebugingInfo) {
// 		console.log('Data:' + JSON.stringify(data));
// 	}
// };

// let fields, params;
// fields = [ 'impressions' ];
// params = {
// 	breakdown: 'publisher_platform'
// };
// const insightss = new AdSet(id).getInsights(fields, params);
// logApiCallResult('insightss api call complete.', insightss);

const bizSdk = require('facebook-nodejs-business-sdk');
const AdSet = bizSdk.AdSet;
const AdAccountActivity = bizSdk.AdAccountActivity;
const AdAccount = bizSdk.AdAccount;
const ReachEstimate = bizSdk.ReachEstimate;
const AdCreative = bizSdk.AdCreative;
const access_token =
	'EAAo6p9k9RvMBAA3W86PZC4jmEbVYivqzJooDVesJRS5mzQyfaD71lUgBaYeZBV9unRfQYV2Xy9HYZC2qPjNayPxU47K4gKgCB4ulY1admyZB03FkMjYJNoTZC3rCqCiMVwc6nnqQSqbNwxTwaewfr1ZCne0iWU1OBq8Aco6UmHyflhilpeY8HrNtgzloYHukfWDqS5BRPm0359OrDApYsQdr9bGljvUpr6sF0WMahxLv1tNZBUOemqkM1obFZBDvlyUZD';
// const app_secret = '<APP_SECRET>';
// const app_id = '<APP_ID>';
const id = 'act_887834618644108';
const api = bizSdk.FacebookAdsApi.init(access_token);
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
	api.setDebug(true);
}

const logApiCallResult = (apiCallName, data) => {
	console.log(apiCallName);
	if (showDebugingInfo) {
		console.log('Data:' + JSON.stringify(data));
	}
};

/* account id

// let fields, params;
// fields = [];
// params = {};
// const sample_code = new AdAccountActivity(id).get(fields, params);
// logApiCallResult('sample_code api call complete.', sample_code);

*/

/* estimate reach

let fields, params;
fields = [];
params = {
	targeting_spec: { geo_locations: { countries: [ 'US' ] }, age_min: 20, age_max: 40 }
};
const reachestimates = new AdAccount(id).getReachEstimate(fields, params);
logApiCallResult('reachestimates api call complete.', reachestimates);

*/

//insights

let fields, params;
fields = [ 'impressions', 'frequency', 'unique_clicks', 'actions', 'spend', 'cpc' ];
params = {
	breakdown: 'publisher_platform'
};
const insightss = new AdSet(id).getInsights(fields, params);
logApiCallResult('insightss api call complete.', insightss);

//campaings

// let fields, params;
// fields = [ 'name', 'objective' ];
// params = {
// 	effective_status: [ 'ACTIVE', 'PAUSED' ]
// };
// const campaignss = new AdAccount(id).getCampaigns(fields, params);
// logApiCallResult('campaignss api call complete.', campaignss);

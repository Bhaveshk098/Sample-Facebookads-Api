//Step 4 to create adset

const bizSdk = require('facebook-nodejs-business-sdk');
const AdAccount = bizSdk.AdAccount;
const Ad = bizSdk.Ad;

const access_token =
	'EAAo6p9k9RvMBAKd1OZBDuOAZCuYqyCPh7y2AJQIEZBAa08xYjDybcENMG6McS32HZACV3JZBWz0DUOR6RJ8oe4yv8D5CeBZB3nQPvpHJTmNRdOxii6F7VMPLtwuJY6ZCrVpHZAaWBC1iSgZAFvuFd85dLziSI1r6VpvkAhcueAXLZAhZB9bZBIVPXngl5mzB2m6FNS0354tMnL5uTMc7Uu7UZAEK7N4VZBpEIumhRpow4WDoz8wsG5WMF2UjeW0IKPDKZArk1MZD';
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
	name: 'Fio Bot',
	adset_id: '23846249100050081',
	creative: { creative_id: '23846249564380081' },
	status: 'PAUSED'
};

//Using AdAccount to create an AD
const ads = new AdAccount(id)
	.createAd(fields, params)
	.then((result) => {
		console.log(result);
	})
	.catch((error) => console.log(error));
logApiCallResult('ads api call complete.', ads);

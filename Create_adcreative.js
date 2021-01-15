//Step 3 to create adCreative

//Importing required facebook lib
const bizSdk = require('facebook-nodejs-business-sdk');
const AdAccount = bizSdk.AdAccount;
const AdCreative = bizSdk.AdCreative;

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
	object_story_spec: {
		page_id: '543503409188877',
		link_data: {
			picture:
				'https://carestorage.blob.core.windows.net/root/state_park-mac_os_x_mountain_lion_hd_wallpapers_1200x900.jpg',
			link: 'https://www.fiolabs.ai/fiobot/',
			message: "24x7 Automated Customer Support, It's real.",
			call_to_action: { type: 'LEARN_MORE', value: { link: 'https://www.fiolabs.ai/fiobot/' } }
		}
	}

	// object_story_spec: {
	// 	page_id: '543503409188877',
	// 	link_data: {
	// 		link: 'https://www.fiolabs.ai/fiobot/',
	// 		message: "24x7 Automated Customer Support, It's real."
	// 	}
	// }
};

//Using AdAccount to create Adcreative
const adcreatives = new AdAccount(id)
	.createAdCreative(fields, params)
	.then((result) => {
		console.log(result);
	})
	.catch((error) => console.log(error));
logApiCallResult('adcreatives api call complete.', adcreatives);

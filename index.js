const DashButton = require('dash-button');
const request = require('request');
const {DASH_BUTTON_MAC_ADDRESS} = require('./config');

let button = new DashButton(DASH_BUTTON_MAC_ADDRESS);

console.log(button);

const opts = {
	method: 'POST',
	uri: 'http://192.168.1.15:8080/',
}
button.addListener((some) => {
	console.log('clicked');
	request(opts)
		.then((response) => {

			console.log(response);
		})
		.catch((err) => {
			console.log(err);
		})
})

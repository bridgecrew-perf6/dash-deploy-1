const sys = require('util');
const {exec} = require('child_process');

exec('cd ~/Documents/Five_Tech/portfolio/chillflix/; ls', (err, stdout, stderr) => {
	console.log(stdout);
})

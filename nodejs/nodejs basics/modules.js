const { people,ages } = require(__dirname+'/people');

console.log(people,ages);

const os = require('os');

console.log(os.platform(),os.homedir());
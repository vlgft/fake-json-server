//#region test with chance

// // Load Chance
// var Chance = require('chance');

// // Instantiate Chance so it can be used
// var chance = new Chance();

// // Use Chance here.
// var my_random_string = chance.string();

// console.log(my_random_string);

//#endregion

//#region using casual
var casual = require('casual');

// Define custom generator
casual.define('user', function() {
	return {
		email: casual.email,
		firstname: casual.first_name,
		lastname: casual.last_name,
		password: casual.password
	};
});

casual.define('profile', function(type) {
	return {
		title: casual.title,
		description: casual.description,
		type: type || 'private'
	};
});

// Generate random user
var user = casual.user;

// Generate object with random data
var profile = casual.profile('public');
console.log(user,profile);

//#endregion
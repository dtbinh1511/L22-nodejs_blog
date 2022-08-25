// Using Node.js `require()`
const mongoose = require('mongoose');

async function connect() {
	try {
		await mongoose.connect('mongodb://localhost/f8_education_dev', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connected successfully');
	} catch (error) {
		console.log('Connected failed: ' + error.message);
	}
}

module.exports = { connect };

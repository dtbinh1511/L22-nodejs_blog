const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator'); // library of mongoose
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String, maxLength: 600 },
		image: { type: String },
		slug: { type: String, slug: 'name', unique: true },
		users: { type: Number },
		videoId: { type: String },
		level: { type: String },
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model('Course', Course);

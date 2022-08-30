const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator'); // library of mongoose
const mongooseDelete = require('mongoose-delete');

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

// add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
	deletedAt: true,
	overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);

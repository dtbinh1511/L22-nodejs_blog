module.exports = {
	mutilpleMongooseToObject: function (moogonses) {
		return moogonses.map((moogonse) => moogonse.toObject());
	},

	mongooseToObject: function (moogonse) {
		return moogonse ? moogonse.toObject() : moogonse;
	},
};

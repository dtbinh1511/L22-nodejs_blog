const Course = require('../models/Course');
const { mutilpleMongooseToObject } = require('../../util/mongoose');
class SiteController {
	// [GET] /
	index(req, res, next) {
		/**use moogonse callback function
		Course.find({}, function (err, course) {
			if (!err) res.json(course);
			else res.status(400).json({ error: 'ERROR!!!' });
		});
		*/
		//use moogonse promise
		Course.find({})
			.then((courses) => {
				res.render('home', { courses: mutilpleMongooseToObject(courses) });
			})
			.catch(next);
	}

	// [GET] /search
	search(req, res) {
		res.render('search');
	}
	// [POST] /search
	//   post(req, res) {
	// UI -> middleware  -> controller
	// req.query -> middleware
	// req.body != middleware => use middleware
	//     console.log(req.body);
	//     res.send("search post");
	//   }
}
module.exports = new SiteController();

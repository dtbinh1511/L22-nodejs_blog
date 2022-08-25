const Course = require('../models/Course');

class SiteController {
	// [GET] /
	index(req, res) {
		Course.find({}, function (err, course) {
			if (!err) res.json(course);
			else res.status(400).json({ error: 'ERROR!!!' });
		});
		// res.render('home');
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

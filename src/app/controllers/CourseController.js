const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {
	// [GET] /courses/:slug
	show(req, res, next) {
		Course.findOne({ slug: req.params.slug })
			.then((course) => {
				res.render('courses/show', { course: mongooseToObject(course) });
			})
			.catch(next);
	}

	// [GET] /courses/create
	create(req, res, next) {
		res.render('courses/create');
	}

	// [POST] /courses/store
	store(req, res, next) {
		const formData = req.body;
		formData.image = `https://i.ytimg.com/vi/${formData.videoId}/maxresdefault.jpg`;
		formData.users = 1;
		const course = new Course(formData);
		course
			.save()
			.then(() => {
				res.redirect(`/`);
			})
			.catch(next);
	}

	// [GET] /courses/:id/edit
	edit(req, res, next) {
		// use moogonsejs to handle databse
		Course.findById(req.params.id)
			.then((courses) => {
				res.render('courses/edit', { courses: mongooseToObject(courses) });
			})
			.catch(next);
	}

	// [PUT] /courses/:id
	update(req, res, next) {
		Course.updateOne({ _id: req.params.id }, req.body)
			.then(() => res.redirect('/me/stored/courses/'))
			.catch(next);
	}

	// [DELETE] /courses/:id
	delete(req, res, next) {
		Course.deleteOne({ _id: req.params.id }, req.body)
			.then(() => res.redirect('/me/stored/courses/'))
			.catch(next);
	}
}
module.exports = new CourseController();

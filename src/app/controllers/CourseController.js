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
		req.body.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`;
		req.body.users = 1;
		const course = new Course(req.body);
		course
			.save()
			.then(() => {
				res.redirect(`/me/stored/courses`);
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
		// use plugin to soft delete
		Course.delete({ _id: req.params.id })
			.then(() => res.redirect('back'))
			.catch(next);
	}

	// [PATCH] /courses/:id/restore
	restore(req, res, next) {
		Course.restore({ _id: req.params.id })
			.then(() => res.redirect('back'))
			.catch(next);
	}

	// [DELETE] /courses/:id/forceDelete
	forceDelete(req, res, next) {
		Course.deleteOne({ _id: req.params.id })
			.then(() => res.redirect('back'))
			.catch(next);
	}
}
module.exports = new CourseController();

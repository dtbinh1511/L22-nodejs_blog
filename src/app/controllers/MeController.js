const Course = require('../models/Course');
const { mutilpleMongooseToObject } = require('../../util/mongoose');
class CourseController {
	// [GET] /me/stored/courses
	storedCourses(req, res, next) {
		Promise.all([Course.find(), Course.countDocumentsDeleted()])
			.then(([courses, deletedCount]) => {
				res.render('me/stored_courses', {
					courses: mutilpleMongooseToObject(courses),
					deletedCount,
				});
			})
			.catch(next);

		// Course.countDocumentsDeleted()
		// 	.then((deletedCount) => console.log(deletedCount))
		// 	.catch(next);

		// Course.find({})
		// 	.then((courses) => {
		// 		res.render('me/stored_courses', { courses: mutilpleMongooseToObject(courses) });
		// 	})
		// 	.catch(next);
	}

	// [GET] /me/trash/courses
	trashCourses(req, res, next) {
		Course.findDeleted({})
			.then((courses) => {
				res.render('me/trash_courses', { courses: mutilpleMongooseToObject(courses) });
			})
			.catch(next);
	}
}
module.exports = new CourseController();

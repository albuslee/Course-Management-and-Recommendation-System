// import external class
let mongoose = require('mongoose');
let courseModel = require('./models/course.js');
let userModel = require('./models/user.js');
let enrollmentModel = require('./models/enrollment.js');

const courseDB = require('./dbConn');

userModel
	.find({currentTerm: 2})
	.exec()
	.then( function(docs) {
		docs.map(doc => {
		let enroll = new enrollmentModel({
			user: doc._id,
			course: ['5b823a66a1dae80310a4d28c', '5b823a66a1dae80310a4d28a', '5b823a66a1dae80310a4d29f']
		})
		.save()
		.then(
			console.log(doc.zid + 'inserted successfully!')
		)
		.catch(err => console.log(err))
	})}
);
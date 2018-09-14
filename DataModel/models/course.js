let mongoose = require('mongoose');
let validator = require('validator');
let Schema = mongoose.Schema;

let courseSchema = new Schema({
    career: String,
    code: String,
    name: String,
    prerequisites: String,
    term: Number,
    pre_courses: {
        code: {
            '1': [String], '2': [String]
        },
        UOC: Number,
    },
    description: String,
    courseId: {
        type: String,
        unique: true,
    }
})

module.exports = mongoose.model('Course', courseSchema, 'Course');
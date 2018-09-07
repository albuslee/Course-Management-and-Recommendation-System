let mongoose = require('mongoose');
let validator = require('validator');
let Schema = mongoose.Schema;

let enrollmentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: 'User',
        unique: true,
    },
    course: [{
        type: Schema.Types.ObjectId, ref: 'Course'
    }],
    star: Number,  
})

module.exports = new mongoose.model('Enrollment', enrollmentSchema);
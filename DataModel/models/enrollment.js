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
    star: {type: Number, default: 0} 
})

module.exports = mongoose.model('Enrollment', enrollmentSchema);
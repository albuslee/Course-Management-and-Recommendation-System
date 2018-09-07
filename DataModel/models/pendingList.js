let mongoose = require('mongoose');
let validator = require('validator');
let Schema = mongoose.Schema;

let pendingListSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: 'User',
        unique: true,
    },
    course: [{
        type: Schema.Types.ObjectId, ref: 'Course'
    }]
})

module.exports = new mongoose.model('PendingList', pendingListSchema);
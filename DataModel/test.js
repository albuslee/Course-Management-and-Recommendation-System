const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/";

let courseModel = require('./models/course.js');
let userModel = require('./models/user.js');
let enrollmentModel = require('./models/enrollment.js');
let pendingListModel = require('./models/pendingList');


// const enrollmentInfo = new Promise((resolve, reject) => {
//   mongoose.connect(url+'coursetest')
//   .then(
//     () => {
//       console.log('Database connect')
//     },
//     err => { console.log(err) }
//   )

  // courseModel
  // .find({'full_name': /.*di.*/i})
  //   .exec(function(err, docs){
  //     if (err) return handleError(err);
  //     console.log('docs', docs);
      
  //   })
  // }) // promise end

const enrollmentInfo = new Promise((resolve, reject) => {
  mongoose.connect(url+'coursetest')
  .then(
    () => {
      console.log('Database connect')
    },
    err => { console.log(err) }
  )

  enrollmentModel
  .findOneAndUpdate(
    {'user': parseInt(5198786), 'course_list._id': '1COMP9021'},
    {'$set':{ 'course_list.$.star': 4 } },
    {'new': true, "upsert": true})
    .exec(function(err, raw){
      if (err){
        console.log(err)
      }
      console.log(raw)
      
    })
}) // promise end
// enrollmentInfo.then( enroll_list => {
//     return res.json(enroll_list);
// })

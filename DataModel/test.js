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
    .find({'user': parseInt(5198786)})
    .populate('course_list._id')
    .exec(function(err, docs){
      if (err) return handleError(err);
      let full_list = {}
      full_list['id'] = 5198786
      full_list['enrollment'] = docs[0].course_list
      resolve(full_list);
      //console.log('docs', docs[0].course_list);
      
    })
  }) // promise end
enrollmentInfo
  .then(full_list => {
    pendingListModel
      .find({'user': full_list['id']})
      .exec(function(err, docs){
        if (err) return handleError(err);
        full_list['pending'] = docs[0].course_list
        //resolve(full_list);
        //mongoose.disconnect();
      })
    }
  ).then(full_list => {
    console.log(full_list)
  })
  

//server.js is the main app.js for backend
//writing your api services in this page

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/";
const app = express();

// import database external library
let courseModel = require('./DataModel/models/course.js');
let userModel = require('./DataModel/models/user.js');
let enrollmentModel = require('./DataModel/models/enrollment.js');

// CSRF pre-fighting
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});

app.get('/endpoint', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})


// the example given by author, no mongodb
app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

// the backend and mongodb test
// can be used to do authentication and get studentprofile

app.get('/api/user/:id', (req, res) => {
  const userInfo = new Promise((resolve, reject) => {
    MongoClient.connect(url, {useNewUrlParser: true}, function(err, db){
      if (err) reject(err);
      let dbo =db.db('coursetest');
      dbo.collection("User").findOne({_id: parseInt(req.params.id)}, function(err, result){
        if (err) reject (err);
        db.close();
        resolve(result);
      });
    });
  });
  userInfo.then((result) => {
    //console.log(res);
    res.json({username : result})    //// TEMP: need use "then" to load user's trasction, until both info loaded,then return to front-end.
  })
  .catch((err) => {
    console.log(`Opz, something wrong, the error message is ${err}`);
  });
});




// get enrollment
app.get('/api/enrollment/:id', (req, res) => {
  const enrollmentInfo = new Promise((resolve, reject) => {
    mongoose.connect(url+'coursetest')
    .then(
      () => {
        console.log('Database connect')
      },
      err => { console.log(err) }
    )

  enrollmentModel
    .find({'user': parseInt(req.params.id)})
    .exec(function(err, docs){
      if (err) return handleError(err);
      //console.log('docs', docs);
      for( let enroll of docs){
        //console.log(enroll.course_list)
        var enroll_list = [];
        var nb_of_course = enroll.course_list.length;
        for( let course of enroll.course_list) {
          //console.log('coursename',course)
          courseModel
            .findOne({'_id': course._id})
            .lean()
            .exec(function(e, result) {
              if (e) {
                console.log(e);
              }
              enroll_list.push(result)
              //console.log('enroll_list', enroll_list);
              mongoose.disconnect();
              if (enroll_list.length === nb_of_course){
                resolve(enroll_list);
              }
            });
        }
      }
    })
  }) // promise end
  enrollmentInfo.then( enroll_list => {
      return res.json(enroll_list);
  })
});


//dummydata for test pending list

app.get('/api/pendinglist/:uid', (req, res) => {
  //fetch data from database using original 

  // const pendinglistInfo = new Promise((resolve, reject) => {
  //   mongoose.connect(url+'coursetest')
  //   .then(
  //     () => {
  //       resolve(console.log('Database connect'))
  //     },
  //     reject(err => { console.log(err) })
  //   )
  
  // enrollmentModel
  //   .find({'user': parseInt(req.params.uid)})
  //   .populate('course_list._id')
  //   .exec(function(err, docs){
  //     if (err) return handleError(err);
      // console.log(docs[0].course_list);
      // const courses = docs[0].course_list
      //res.json(docs[0].course_list)

      //// fetch enrollment data
      // const enrollmentList = []

      //// fetch real pendinglist data
      // courses_dto = []
      // var index = 1
      // for (const course of courses){
      //// TODO: Need to get the real enrollment data from other API and convert the list like below: ['COMP9020', 'COMP9021', 'COMP9024']
      //// let prerequisitiesChecking = prerequisitiesValidation(course._id.pre_courses, enrollmentList);
      //   let course_single_dto = {id: index, CourseId: course._id.code, CourseName: course._id.name, CourseDescription:course._id.description, Prerequisities: course._id.pre_courses};
      //   courses_dto.push(course_single_dto);
      //   index ++;
      // }
      // res.json(courses_dto)
  //    })
  // })

  // fetch dammy data

  const enrollmentList = ['COMP9020', 'COMP9021', 'COMP9311']
  
  var courses = [
    {id: 1, CourseId: 'COMP9024', CourseName: 'Data Structures & Algorithms', CourseDescription: 'Data types and data structures: abstractions and representations; lists, stacks, queues, heaps, graphs; dictionaries and hash tables; search trees; searching and sorting algorithms' ,Prerequisities:{"code":{"1":["COMP9021"],"2":[]},"UOC":0}, Prerequisities_Desc:"Prerequisite: COMP9021"},
    {id: 2, CourseId: 'COMP9417', CourseName: 'Machine Learning & Data Mining', CourseDescription: 'Machine learning is the algorithmic approach to learning from data. This course covers the key techniques in data mining technology, gives their theoretical background and shows their application. Topics include: decision tree algorithms (such as C4.5), regression and model tree algorithms, neural network', Prerequisities:{"code":{"1": ["COMP9021", "COMP9024"],"2": ["COMP9020", "COMP9024"]},"UOC": 0}, Prerequisities_Desc:"Prerequisite: (COMP9020 and COMP9021) or COMP9024"},
    {id: 3, CourseId: 'COMP9101', CourseName: 'Design &Analysis of Algorithms', CourseDescription: 'Techniques for design and performance analysis of algorithms for a variety of computational problems. Asymptotic notations, bounding summations, recurrences, best-case, worst-case and average-case analysis. Design techniques: divide-and-conquer, dynamic programming and memorisation, greedy strategy',Prerequisities:{"code":{"1": ["COMP9024"],"2": []},"UOC": 0}, Prerequisities_Desc:"Prerequisite: COMP9024"}
  ];




  var index = 0;
  courses.forEach(course => {
    // console.log(course.Prerequisities, enrollmentList)
    let preRequisitiesCheck = prerequisitiesValidator(course.Prerequisities, enrollmentList);
    console.log(preRequisitiesCheck);
    courses[index].Prerequisities['isPre'] = preRequisitiesCheck;
    index++;
  });
  res.json(courses);
});

//search course code and name
app.get('/api/search/:query', (req, res) => {
  const searchInfo = new Promise((resolve, reject) => {
    mongoose.connect(url+'coursetest')
    .then(
      () => {
        console.log('Database connect')
      },
      err => { console.log(err) }
    )

    courseModel
    .find({'full_name': new RegExp(req.params.query, 'i')})
      .exec(function(err, docs){
        if (err) reject(err);
        console.log('docs', docs);
        mongoose.disconnect();
        resolve(docs)
      })
    }) // promise end
  searchInfo.then(result => {
    return res.json(result);
  })
})

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);


// Pending List Schema
// let pendingListSchema = new Schema({
//   user: {
//       type: Number, ref: 'User',
//       unique: true,
//   },
//   course_list: [{
//       _id: {type: String, ref: 'Course'},
//       star: {type: Number, default: 0} ,
//   }],
// })

// Dummy Data for pending list , the real data should fetch from database
// const user_pending_list = {
//   user: 5198285,
//   course_list : [
//   {_id: '2COMP9024', star: 0},
//   {_id: '2COMP9417', star: 0},
//   {_id: '2COMP9101', star: 0}
// ]}
// res.json(user_pending_list);


//checking prerequisities for pendinglist
function prerequisitiesValidator (Prerequisities, Enrollment){
  // arg Prerequisities should be in this format:
  // Prerequisities = {"code":{"1": ["COMP9021", "COMP9024"],"2": ["COMP9020", "COMP9024"]},"UOC": 0}
  let canBeEnrolled = false;
  console.log(Prerequisities.code, Enrollment);
  if (Prerequisities.code[1].length === 0 && Prerequisities.code[2].length === 0){
    console.log('1');
    canBeEnrolled = true;
  }else if(Prerequisities.code[1].length >= 1 && Prerequisities.code[2].length === 0){
    console.log('2');
    for(let course of Prerequisities.code[1]){
      if(Enrollment.includes(course)){
        canBeEnrolled = true;
        break;
      }
    }
  }else if(Prerequisities.code[1].length === 0  && Prerequisities.code[2] >= 1){
    console.log('3');
    for(let course of Prerequisities.code[2]){
      if(Enrollment.includes(course)){
        canBeEnrolled = true;
        break;
      }
    }
  }else if(Prerequisities.code[1].length >= 1 && Prerequisities.code[2].length >=1 ){
    console.log('4');
    let validatorCodeList1 = false;
    let validatorCodeList2 = false;
    for(let course of Prerequisities.code[1]){
      if(Enrollment.includes(course)){
        canBeEnrolled = true;
        break;
      }
    }
    for(let course of Prerequisities.code[2]){
      if(Enrollment.includes(course)){
        canBeEnrolled = true;
        break;
      }
    }
    if(validatorCodeList1 === true && validatorCodeList2 === true){
      canBeEnrolled = true;
    }
  }
  return canBeEnrolled;
}
import React, { Component } from 'react';
import { Helmet } from 'react-helmet'; 
// import Iframe from 'react-iframe'

import '../css/style.css';
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';

import NavigationBar from '../components/NavigationBar';

// TODO: need decomposite the student info and course enrolment info from the below html code. 
const StudentProfileBackground = () => 
        <div>
          <Helmet>
          <meta charset="utf-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          {/* <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags --> */}

          <title>Student Profile</title>

          {/* <!-- Custom stlylesheet -->
          <!-- Original css--> */}
          <link type="css" rel="stylesheet" href="css/style.css"/>

          {/* <!-- Bootstrap--> */}
          <link type="css" rel="stylesheet" href="css/bootstrap.min.css"/>

          {/* <!-- Icons --> */}
          <link rel="stylesheet" type="font" href="css/font-awesome.min.css"/>
          </Helmet>
          {/* Write your background code here. */}

          <div className="Sbody">
            {/* <!-- About --> */}
            
            <div id="about" className="section">
              <NavigationBar/>
              {/* <iframe src="../../../public.navigation.html" width="100%" height="110px" frameBorder="0" scrolling="no" name="navigationbar"></iframe> */}
              {/* <!-- container --> */}
              <div className="container">

                {/* <!-- row --> */}
                <div className="row">
                  
                  <div className="col-md-6">
                    <div className="section-header">
                      <h2>Student Information</h2>
                    </div>
                    <img src={require(`../images/5198410.jpg`)} alt="" className="Student_img"/>
                    {/* <!-- feature --> */}
                    <div className="student_info"> 
                      <div className="feature">
                        <i className="feature-icon fa fa-flask"></i>
                        <div className="feature-content">
                          <h4>Name</h4>
                          <p>info1</p>
                        </div>
                      </div>
                      {/* <!-- /feature --> */}

                      {/* <!-- feature --> */}
                      <div className="feature">
                        <i className="feature-icon fa fa-users"></i>
                        <div className="feature-content">
                          <h4>ZID</h4>
                          <p>info2</p>
                        </div>
                      </div>
                      {/* <!-- /feature --> */}

                      {/* <!-- feature --> */}
                      <div className="feature">
                        <i className="feature-icon fa fa-comments"></i>
                        <div className="feature-content">
                          <h4>Current Term</h4>
                          <p>info3</p>
                        </div>
                    </div>
                    {/* <!-- /feature --> */}
                  </div>
                  </div>
                  <div className="section-header">
                    <h2>Your Enrollents</h2>
                  </div>
                  <table  className="zebra course_information">
                    <tbody>
                      <tr>
                        <td width="20%" id="CourseID">CourseID</td>
                        <td id="CourseDitails">CourseDitails</td>
                          
                      </tr>
                      <tr>
                        <td width="20%" id="CourseID">CourseID</td>
                        <td id="CourseDitails">CourseDitails</td>
                        
                      </tr>
                      <tr>
                        <td width="20%" id="CourseID">CourseID</td>
                        <td id="CourseDitails">CourseDitails</td>
                          
                      </tr>
                      <tr>
                        <td width="20%" id="CourseID">CourseID</td>
                        <td id="CourseDitails">CourseDitails</td>
                          
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
                {/* <!-- row --> */}
                
              </div>
              {/* <!-- container --> */}
            </div>
            {/* <!-- /About --> */}
          </div>

        </div>



class StudentProfile extends Component {

  render() {
    return (
      <div>
        <StudentProfileBackground/>
      </div> 
    );
  }
}

export default StudentProfile;

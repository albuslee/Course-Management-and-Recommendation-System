import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';

class CourseEnrolmentPage extends Component {
    
  render() {
    return (
      <div>
          <div className="Sbody">
          {/* <!-- Contact --> */}
          <div id="contact" className="section">
            <NavigationBar/>
            {/* <!-- container --> */}
            <div className="container">
              {/* <!-- row --> */}
              <div className="row">
                {/* <!-- contact information --> */}
                <div className="section-header">
                  <h1>Course Enrollment</h1>
                </div>
                <form action="/" method="POST" className="search_bar">
                  <input type="text" name="search" className="search" id="search" placeholder="Please input Keywords"/>
                  <button type="submit" className="search_button"><i className="search_icon fa fa-search"></i></button>
                </form>
                <div className="section-header">
                  <h2 className="notice">Here is some course recommand to you:</h2>
                </div>
                <div className="search_result">
                  <form action="/" method="post" className="enroll">
                    <ul>
                      <li>
                        <div className="course_detail">
                          <span className="course_id">CourseID + CourseName</span>
                          <span className="course_description">Course Description</span>
                          <button type="submit" className="proceed_to_enroll">Proceed to Enroll</button>
                        </div>
                        
                      </li>
                      <li>
                        <div className="course_detail">
                          <span className="course_id">CourseID + CourseName</span>
                          <span className="course_description">Course Description</span>
                          <button type="submit" className="proceed_to_enroll">Proceed to Enroll</button>
                        </div>
                      </li>
                      <li>
                        <div className="course_detail">
                          <span className="course_id">CourseID + CourseName</span>
                          <span className="course_description">Course Description</span>
                          <button type="submit" className="proceed_to_enroll">Proceed to Enroll</button>
                        </div>
                      </li>
                      <li>
                        <div className="course_detail">
                          <span className="course_id">CourseID + CourseName</span>
                          <span className="course_description">Course Description</span>
                          <button type="submit" className="proceed_to_enroll">Proceed to Enroll</button>
                        </div>
                      </li>
                      <li>
                        <div className="course_detail">
                          <span className="course_id">CourseID + CourseName</span>
                          <span className="course_description">Course Description</span>
                          <button type="submit" className="proceed_to_enroll">Proceed to Enroll</button>
                        </div>
                      </li>
                      <li>
                        <div className="course_detail">
                          <span className="course_id">CourseID + CourseName</span>
                          <span className="course_description">Course Description</span>
                          <button type="submit" className="proceed_to_enroll">Proceed to Enroll</button>
                        </div>
                      </li>
                      <li>
                        <div className="course_detail">
                          <span className="course_id">CourseID + CourseName</span>
                          <span className="course_description">Course Description</span>
                          <button type="submit" className="proceed_to_enroll">Proceed to Enroll</button>
                        </div>
                      </li>
                      <li>
                        <div className="course_detail">
                          <span className="course_id">CourseID + CourseName</span>
                          <span className="course_description">Course Description</span>
                          <button type="submit" className="proceed_to_enroll">Proceed to Enroll</button>
                        </div>
                      </li>
                    </ul>
                    <div className="pages">
                      <button type="submit" className="previous_page">&lt;</button>
                      <button type="submit" className="page1">1</button>
                      <button type="submit" className="page2">2</button>
                      <button type="submit" className="page3">3</button>
                      <button type="submit" className="next_page">&gt;</button>
                    </div>
                  </form>
                </div>
                {/* <!-- contact information --> */}
              </div>
              {/* <!-- /row --> */}
            </div>
            {/* <!-- /container --> */}
          {/* </div>
          <!-- /Contact --> */}
        </div>
      </div>
      </div>
    );
  }
}

export default CourseEnrolmentPage;
import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';

class CourseEnrolmentPage extends Component {
    
  render() {
    return (
      <div>
          <div class="Sbody">
          {/* <!-- Contact --> */}
          <div id="contact" class="section">
            <NavigationBar/>
            {/* <!-- container --> */}
            <div class="container">
              {/* <!-- row --> */}
              <div class="row">
                {/* <!-- contact information --> */}
                <div class="section-header">
                  <h1>Course Enrollment</h1>
                </div>
                <form action="/" method="POST" class="search_bar">
                  <input type="text" name="search" class="search" id="search" placeholder="Please input Keywords"/>
                  <button type="submit" class="search_button"><i class="search_icon fa fa-search"></i></button>
                </form>
                <div class="section-header">
                  <h2 class="notice">Here is some course recommand to you:</h2>
                </div>
                <div class="search_result">
                  <form action="/" method="post" class="enroll">
                    <ul>
                      <li>
                        <div class="course_detail">
                          <span class="course_id">CourseID + CourseName</span>
                          <span class="course_description">Course Description</span>
                          <div class="rank">
                            <span class="course_rank">rank</span>
                            <img src={require("../img/stars.png")} class="rank_star"></img>
                          </div>
                          <button type="submit" class="proceed_to_enroll">Proceed to Enroll</button>
                        </div>
                        
                      </li>
                      <li>
                        <div class="course_detail">
                          <span class="course_id">CourseID + CourseName</span>
                          <span class="course_description">Course Description</span>
                          <div class="rank">
                            <span class="course_rank">rank</span>
                            <img src={require("../img/stars.png")} class="rank_star"></img>
                          </div>
                          <button type="submit" class="proceed_to_enroll">Proceed to Enroll</button>
                        </div>
                      </li>
                      <li>
                        <div class="course_detail">
                          <span class="course_id">CourseID + CourseName</span>
                          <span class="course_description">Course Description</span>
                          <div class="rank">
                            <span class="course_rank">rank</span>
                            <img src={require("../img/stars.png")} class="rank_star"></img>
                          </div>
                          <button type="submit" class="proceed_to_enroll">Proceed to Enroll</button>
                        </div>
                      </li>
                      <li>
                        <div class="course_detail">
                          <span class="course_id">CourseID + CourseName</span>
                          <span class="course_description">Course Description</span>
                          <div class="rank">
                            <span class="course_rank">rank</span>
                            <img src={require("../img/stars.png")} class="rank_star"></img>
                          </div>
                          <button type="submit" class="proceed_to_enroll">Proceed to Enroll</button>
                        </div>
                      </li>
                      <li>
                        <div class="course_detail">
                          <span class="course_id">CourseID + CourseName</span>
                          <span class="course_description">Course Description</span>
                          <div class="rank">
                            <span class="course_rank">rank</span>
                            <img src={require("../img/stars.png")} class="rank_star"></img>
                          </div>
                          <button type="submit" class="proceed_to_enroll">Proceed to Enroll</button>
                        </div>
                      </li>
                      <li>
                        <div class="course_detail">
                          <span class="course_id">CourseID + CourseName</span>
                          <span class="course_description">Course Description</span>
                          <div class="rank">
                            <span class="course_rank">rank</span>
                            <img src={require("../img/stars.png")} class="rank_star"></img>
                          </div>
                          <button type="submit" class="proceed_to_enroll">Proceed to Enroll</button>
                        </div>
                      </li>
                      <li>
                        <div class="course_detail">
                          <span class="course_id">CourseID + CourseName</span>
                          <span class="course_description">Course Description</span>
                          <div class="rank">
                            <span class="course_rank">rank</span>
                            <img src={require("../img/stars.png")} class="rank_star"></img>
                          </div>
                          <button type="submit" class="proceed_to_enroll">Proceed to Enroll</button>
                        </div>
                      </li>
                      <li>
                        <div class="course_detail">
                          <span class="course_id">CourseID + CourseName</span>
                          <span class="course_description">Course Description</span>
                          <div class="rank">
                            <span class="course_rank">rank</span>
                            <img src={require("../img/stars.png")} class="rank_star"></img>
                          </div>
                          <button type="submit" class="proceed_to_enroll">Proceed to Enroll</button>
                        </div>
                      </li>
                    </ul>
                    <div class="pages">
                      <button type="submit" class="previous_page">&lt;</button>
                      <button type="submit" class="page1">1</button>
                      <button type="submit" class="page2">2</button>
                      <button type="submit" class="page3">3</button>
                      <button type="submit" class="next_page">&gt;</button>
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
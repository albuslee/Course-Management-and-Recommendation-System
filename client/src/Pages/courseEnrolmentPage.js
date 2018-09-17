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
<<<<<<< HEAD
                        <div className="course_detail">
                          <span className="course_id">CourseID + CourseName</span>
                          <span className="course_description">Course Description</span>
                          <button type="submit" className="proceed_to_enroll">Proceed to Enroll</button>
=======
                        <div class="course_detail">
                          <span class="course_id">CourseID + CourseName</span>
                          <span class="course_description">Course Description</span>
                          <div class="rank">
                            <span class="course_rank">rank</span>
                            <img src={require("../img/stars.png")} class="rank_star"></img>
                          </div>
                          <button type="submit" class="proceed_to_enroll">Proceed to Enroll</button>
>>>>>>> b2b71aa91d45524c5ee55915c4b986130ae81079
                        </div>
                        
                      </li>
                      <li>
<<<<<<< HEAD
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
=======
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
>>>>>>> b2b71aa91d45524c5ee55915c4b986130ae81079
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
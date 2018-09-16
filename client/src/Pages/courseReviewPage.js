import React, { Component } from 'react';
import { Helmet } from 'react-helmet'; 
import '../css/style.css';
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';

import NavigationBar from '../components/NavigationBar';



class CourseReviewPage extends Component {
  render() {
    return (
      <div>    
        <div className = "Sbody">
        {/* <!-- Contact --> */}
          <div id = "contact" className = "section">
            <NavigationBar/>
            {/* <!-- container --> */}
            <div className = "container">
                {/* <!-- row --> */}
                <div className = "row">
                    {/* <!-- contact information --> */}
                    <div className="section-header">
                        <h1>Course Review</h1>
                    </div>
                    
                    <form action = "/" method = "POST" className = "course_review">
                        <div className="section-header">
                            <h2>Semenster 1</h2>
                        </div>
                        <table width="100%" class="zebra review_table">
                            <tbody>
                                <tr>
                                    <td>Course ID</td>
                                    <td>Course Details</td>
                                    <td>Course Review</td>
                                </tr>
                                <tr>
                                    <td width="10%" id="CourseID">CourseID</td>
                                    <td width="70%" id="CourseDitails">CourseDitails</td>
                                    <td width="20%" id="Star">
                                        <div class="review">
                                            <span class="star">
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                            </span>
                                            <span class="star-txt"></span>
                                        </div>
                                        
                                    </td>	
                                </tr>
                                <tr>
                                    <td width="10%" id="CourseID">CourseID</td>
                                    <td width="70%" id="CourseDitails">CourseDitails</td>
                                    <td width="20%" id="Star">
                                        <div class="review">
                                            <span class="star">
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                            </span>
                                            <span class="star-txt"></span>
                                        </div>
                                    </td>	
                                </tr>
                                <tr>
                                    <td width="10%" id="CourseID">CourseID</td>
                                    <td width="70%" id="CourseDitails">CourseDitails</td>
                                    <td width="20%" id="Star">
                                        <div class="review">
                                            <span class="star">
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                            </span>
                                            <span class="star-txt"></span>
                                        </div>
                                    </td>	
                                </tr>
                            </tbody>
                        </table>
                        <div className="section-header">
                            <h2>Semenster 2</h2>
                        </div>
                        <table width="100%" class="zebra review_table">
                            <tbody>
                                <tr>
                                    <td width="10%" id="CourseID">CourseID</td>
                                    <td width="70%" id="CourseDitails">CourseDitails</td>
                                    <td width="20%" id="Star">
                                        <div class="review">
                                            <span class="star">
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                            </span>
                                            <span class="star-txt"></span>
                                        </div>
                                    </td>	
                                </tr>
                                <tr>
                                    <td width="10%" id="CourseID">CourseID</td>
                                    <td width="70%" id="CourseDitails">CourseDitails</td>
                                    <td width="20%" id="Star">
                                        <div class="review">
                                            <span class="star">
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                            </span>
                                            <span class="star-txt"></span>
                                        </div>
                                    </td>	
                                </tr>
                                <tr>
                                    <td width="10%" id="CourseID">CourseID</td>
                                    <td width="70%" id="CourseDitails">CourseDitails</td>
                                    <td width="20%" id="Star">
                                        <div class="review">
                                            <span class="star">
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                            </span>
                                            <span class="star-txt"></span>
                                        </div>
                                    </td>	
                                </tr>
                            </tbody>
                        </table>
                        <div className="section-header">
                            <h2>Semenster 3</h2>
                        </div>
                        <table width="100%" class="zebra review_table">
                            <tbody>
                                <tr>
                                    <td width="10%" id="CourseID">CourseID</td>
                                    <td width="70%" id="CourseDitails">CourseDitails</td>
                                    <td width="20%" id="Star">
                                        <div class="review">
                                            <span class="star">
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                            </span>
                                            <span class="star-txt"></span>
                                        </div>
                                    </td>	
                                </tr>
                                <tr>
                                    <td width="10%" id="CourseID">CourseID</td>
                                    <td width="70%" id="CourseDitails">CourseDitails</td>
                                    <td width="20%" id="Star">
                                        <div class="review">
                                            <span class="star">
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                            </span>
                                            <span class="star-txt"></span>
                                        </div>
                                    </td>	
                                </tr>
                                <tr>
                                    <td width="10%" id="CourseID">CourseID</td>
                                    <td width="70%" id="CourseDitails">CourseDitails</td>
                                    <td width="20%" id="Star">
                                        <div class="review">
                                            <span class="star">
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                                <b class="ct-star  ic-star-off"></b>
                                            </span>
                                            <span class="star-txt"></span>
                                        </div>
                                    </td>	
                                </tr>
                            </tbody>
                        </table>
                        <div class="button_part">
                            <button type="submit" class="button">Submit</button>
                            <a href="StudentProfile.html" class="button">Back</a>
                        </div>
                    </form>


                    
                    {/* <!-- contact information --> */}

                </div>
                {/* <!-- /row --> */}

            </div>
            {/* <!-- /container --> */}

        </div>
        {/* <!-- /Contact --> */}
    </div>
        
      </div>
    );
  }
}

export default CourseReviewPage;
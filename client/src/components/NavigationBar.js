import React, { PropTypes, Component } from 'react';
import { Helmet } from "react-helmet";

class NavigationBar extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <title></title>
                    <meta name="description" content="navigationbar of Course System" />
                    <link rel="stylesheet" type="css" href="css/style.css"/>
                    <script type="text/javascript" src="https://cdn.bootcss.com/jquery/1.4.0/jquery.js"></script>
                </Helmet>

                <header id="header" className="transparent-nav">
                <div className="navigationbar">
                
                    {/* <!-- Logo --> */}
                    <div className="navbar-brand">
                        <a className="logo" href="StudentProfile.html" target="_parent">
                            <img src="src/img/unsw.png" alt="logo"/>
                        </a>
                    </div>
                     {/* <!-- /Logo --> */}

                    {/* <!-- Navigation --> */}
                    <nav id="nav">
                        <ul className="main-menu">
                            <li><a href="CourseEnrollment.html" target="_parent">Course Enrollment</a></li>
                            <li><a href="CourseReview.html" target="_parent">Course Review</a></li>
                            <li><a href="PendingList.html" target="_parent">Pending List</a></li>
                            <li><span id="Username">Username</span></li>
                            <li><a href="StudentProfile/logout" target="_parent">Logout</a></li>
                        </ul>
                    </nav>
                    {/* <!-- /Navigation --> */}
                </div>
                
            </header>
        {/* <!-- </div> --> */}
            </div>

        );
    }
}


export default NavigationBar;
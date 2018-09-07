//Done

import React, { Component } from 'react';
import '../css/login.css';
import LoginForm from '../components/LoginForm';

const Loginbackground = (props) => 
  <div className="limiter">
      <div className="container-login100">
          <div className="wrap-login100">
                <span className="login100-form-title">
                    Course Management System Login
                </span>
                <LoginForm/>
          </div>
      </div>
  </div>




class LoginPage extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         username: "",
    //         password: ""
    //     };
    // };


    render() {
        return (
            <div>         
              <Loginbackground />
            </div>
        );
      }
    }
export default LoginPage;
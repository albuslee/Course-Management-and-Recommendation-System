import React, { Component } from 'react';

class LoginForm extends Component {

    constructor(){
      super();
      this.state = {
        username : "",
        password : ""
      };
    };

    render() {
      return (
        <div>
          <form className="login100-form validate-form "  name="loginform" action = '/' method = "POST">

            <div className="wrap-input100 validate-input" data-validate = "Enter username">
                <input className="input100" type="text" name="username" placeholder="User name"/>
                <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Enter password">
                <input className="input100" type="password" name="password" placeholder="Password"/>
                <span className="focus-input100"></span>
            </div>
            <div className="container-login100-form-btn">
                <button className="login100-form-btn" type="submit" >
                    Login
                </button>
            </div>
          </form>
        </div>
      );
    }
  }

export default LoginForm;

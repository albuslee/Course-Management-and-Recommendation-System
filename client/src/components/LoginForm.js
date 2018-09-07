import React, { PropTypes, Component } from 'react';

class LoginForm extends Component {

    constructor(props){
      super();
      this.submit = this.submit.bind(this);
      // this.state = {
      //   username : "",
      //   password : ""
      // };
    };

    submit(e) {
      e.preventDefault()
      console.log('username', this.refs.username.value);
      console.log('password', this.refs.password.value);
    }


    render() {
      return (
        <div>
          <form className="login100-form validate-form " onSubmit={this.submit} name="loginform" >

            <div className="wrap-input100 validate-input" data-validate = "Enter username">
                <input className="input100" type="text" name="username" placeholder="User name" ref="username" required/>
                <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Enter password">
                <input className="input100" type="password" name="password" placeholder="Password" ref="password" required/>
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

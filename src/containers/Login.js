import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../Redux/Actions/login'
import LoginForm from '../Components/Forms/LoginForm'

class Login extends Component {

    constructor(props){
      super(props);
      this.state = {
        username: "",
        password: ""
      };
      this.handleUserNameChange = this.handleUserNameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserNameChange(e) {
      this.setState({ username: e.target.value });
      console.log(this.state);
    }

    handlePasswordChange(e) {
      this.setState({ password: e.target.value });
      console.log(this.state);
    }

    handleSubmit(e) {

      e.preventDefault();
      var formData = {
        username: this.state.username,
        password: this.state.password
      }
      console.log(formData);
      //alert(formData)
      this.props.loginRequest(formData)
      this.setState({
        username: "",
        password: ""
      });
      //alert("Submitted...");

    }

    render() {
      let {isLoggedIn} = this.props

      if (isLoggedIn){
        return this.props.router.push('/admin')
      }
        return (
          <div className="container-fluid-full">
            <div className="row-fluid">
              <div className="row-fluid">
                <div className="login-box">
                  <div className="icons">
                    <a href="index.html"><i className="halflings-icon home"></i></a>
                    <a href="#"><i className="halflings-icon cog"></i></a>
                  </div>
                  <h2>Login to your account</h2>
                    <form className="form-horizontal" onSubmit={this.handleSubmit} ref="loginForm">
                      <fieldset>
                        <div className="input-prepend" title="Username">
                          <span className="add-on"><i className="halflings-icon user"></i></span>
                          <input className="input-large span10" name="username" id="username" type="text" onChange={this.handleUserNameChange} value={this.state.username} placeholder="type username"/>
                        </div>
                        <div className="clearfix"></div>

                        <div className="input-prepend" title="Password">
                          <span className="add-on"><i className="halflings-icon lock"></i></span>
                          <input className="input-large span10" name="password" id="password" type="password" onChange={this.handlePasswordChange} value={this.state.password} placeholder="type password"/>
                        </div>
                        <div className="clearfix"></div>

                        <label className="remember" htmlFor="remember"><input type="checkbox" id="remember" />Remember me</label>

                        <div className="button-login">
                          <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <div className="clearfix"></div>
                      </fieldset>
                    </form>
                  <hr />
                  <h3>Forgot Password?</h3>
                  <p>
                    No problem, <a href="#">click here</a> to get a new password.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = state => ({
  isLoggedIn: state.userStatus.isLoggedIn,
})

function mapDispatchToProps(dispatch){
    return bindActionCreators({...loginActions},dispatch);
}

export default connect (mapStateToProps,mapDispatchToProps)(Login);

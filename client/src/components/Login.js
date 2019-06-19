import React, { Component } from 'react';

class Login extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <h1 className="large text-primary"><i className="fas fa-lock"></i> The Dispensary Door Is Locked!</h1>
        <p className="lead">In order to save your prescriptions - please Sign up/Login in with Google to use the Dispensary and Medicine Cabinet</p>
        <a className="btn btn-primary" id="sign-up" href="/auth/google">Sign Up with Google</a>
        <p className="lead">Already have an account? <a className="text-primary" href="/auth/google">Login</a></p>

      </div>
    )
  }
}

export default Login;
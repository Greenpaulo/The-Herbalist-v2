import React, { Component } from 'react';

class Login extends Component {
  state = {
    lockClicked: true
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    setTimeout(() => {
      const lock = document.querySelector('#lock');
      lock.classList.add('animated', 'shake');
    }, 2000)
  }

  render() {
    return (
      <div className="container" id="sign-up">
        <h1 className="x-large text-primary"><i className="fas fa-lock animated bounce" id="lock" onClick={this.onLockClick}></i> The Dispensary Door Is Locked!</h1>
        <div id="login-reason">
          <p className="lead">In order to save your prescriptions and keep then secure - please Sign up/Login in with Google to use the Dispensary and Medicine Cabinet</p>
        </div>
        <a className="btn btn-primary shadow" id="sign-up-btn" href="/auth/google">Sign Up with Google</a>
        <p className="lead">Already have an account? <a className="text-primary animated-link" href="/auth/google" id="login-link">Login</a></p>
      </div>
    )
  }
}

export default Login;
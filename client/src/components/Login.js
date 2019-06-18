import React, { Component } from 'react';

class Login extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <h1 className="large text-primary">Please Login to use these features</h1>
        <p>In order to save your prescriptions - sign up/login in with Google to use the Dispensary and Medicine Cabinet</p>
        <a href="/auth/google">Sign Up with Google</a>
        <p>Already have an account? <a href="/auth/google">Login</a></p>

      </div>
    )
  }
}
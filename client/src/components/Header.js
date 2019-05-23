import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  // Helper method to show authenticated content
  renderContent() {
    switch (this.props.auth) {
      // If we don't know yet, show nothing.
      case null:
        return;
      // If the user isn't logged in - show the Login button
      case false:
        return (
          <li className="nav-item"><a className="nav-link" href="/auth/google">Login with Google</a></li>
        );
      // Default is that they are logged in - show the Logout button
      default:
        return <li className="nav-item"><a className="nav-link" href="/api/logout">Logout</a></li>
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-main">
        <div className="container">
          <Link to="/home" className="navbar-brand">The Herbalist</Link>
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/herb_finder">Herb Finder</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/dispensary">Dispensary</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/cabinet">Medicine Cabinet</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
}





export default connect(mapStateToProps)(Header);
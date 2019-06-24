import React from 'react';

class Test extends React.Component {
  state = {
    isAnimated: false
  }

  // Arrow function for binding
  toggleAnimation = () => {
    this.setState({ isAnimated: !this.state.isAnimated });
  }

  render() {
    return (
      <div className="container">
        <div
          className={`card ${this.state.isAnimated && "bounce animated"}`}
          onClick={this.toggleAnimation}
        >
        </div >
      </div >
    )

  }
}
export default Test;
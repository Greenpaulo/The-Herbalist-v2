import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div id="about-intro" className="my-2">
        <h1 className="x-large text-primary animated fadeInDown">About Us</h1>
        <h2 className="medium text-dark">Hello, I'm Paul!</h2>
        <p className="lead">This app was created by Paul Bingham, a Web Developer and Herbalist!</p>

        <div className="card" id="about-skills">

          <h2 className="medium text-dark"><i className="fas fa-code"></i>  I'm a Web Developer</h2>
          <p className="lead">I'm a self taught full-stack junior Web Developer. This app was built after 10 months of study, using React/Redux, Node/Express, MongoDB and custom CSS.</p>

          <h2 className="medium text-dark"><i className="fas fa-seedling"></i>  I'm a Herbalist</h2>
          <p className="lead">With a first-class honours degree in Herbal Medicine, I'm also a fully-qualified Herbalist. </p>

        </div>
      </div>

      <div id="contact">
        <h2 className="medium text-primary"> Get In Touch</h2>
        <p className="lead">Any feedback on the app or questions about Herbal Medicine?</p>
        <div className="list-group">
          <i className="fas fa-envelope fa-2x"></i>
          <span className="lead contact-info">greenpaulo@yahoo.co.uk</span>
        </div>
        <div className="list-group">
          <i className="fab fa-github fa-2x"></i>
          <a href='https://github.com/Greenpaulo' className="lead contact-info">https://github.com/Greenpaulo</a>
        </div>
      </div>
    </div>

  )
}

export default About;
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Fragment>

        <div className="pimg1">
          <div className="ptext title">
            <span className="border trans">
              <Link to="/how_to_use">The Herbalist</Link>
            </span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Welcome to The Herbalist!</h2>
          <p>
            We are here to help people reconnect with nature, our roots and our forgotten understanding of plant medicine. For
            thousands of years before the advent of modern medicine, humans dealt with all their health needs with the
            medicinal plants provided by nature. On this site you will find information on herbal medicines for all your
            health concerns.
          </p>
        </section>

        <div className="pimg2">
          <div className="ptext">
            <span className="border inside_head">
              <Link to="/how_to_use">Herbal Medicine</Link>
            </span>
          </div>
        </div>

        <section className="section section-light">
          <h2>Materia Medica</h2>
          <p>
            A Materia Medica is a collected body of knowledge describing the traditional usage of each plant. There are a vast
            number of medicinal plants around the world and we have collected knowledge of many well-used, easy to find plant
            remedies that can help address your health problems.
          </p>
        </section>

        <div className="pimg3">
          <div className="ptext">
            <span className="border inside_head">
              Holistic Treatment
            </span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Stress Relief</h2>
          <p>
            Herbal Medicine views the patient as a whole. Mental, physical, and spiritual concerns are all taken onboard. One
            of the major contributors of illness in the modern world is stress. Plant remedies are excellent at relieving all
            forms of stress and address many other mental and emotional conditions.
          </p>
        </section>

        <div className="pimg1">
          <div className="ptext title">
            <span className="border trans">
              <Link to="/how_to_use">The Herbalist</Link>
            </span>
          </div>
        </div>

      </Fragment>
    );
  }
}

export default Landing;
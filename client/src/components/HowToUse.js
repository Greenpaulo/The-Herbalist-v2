import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Fragment>
        <div className="container">

          <h1 className="x-large text-primary animated fadeInDown">What is Herbal Medicine?</h1>

          <section id="section1" className="animated fadeIn delay-custom1">
            <p className="lead">Herbal Medicine is the use of plants to heal our body, mind and spirit. There are several types of
            herbal medicine used by a herbalist including herbal teas, tinctures, creams and essences. Teas,
            tinctures and creams help our physical body to heal and relax the mind. Plant Essences work with our
            emotions and consciousness to help us grow and expand.</p>
          </section>

          <section id="section2">
            <p id="para1" className="bg-light animated fadeInLeft delay-custom2">There is a lot more to healing than is currently practised in our healthcare system. Real healing goes
            way beyond the physical. By using plants to heal us we can begin to understand the power of the mind and
              our role in healing our own bodies and lives.</p>

            <p id="para2" className="bg-light animated fadeInLeft delay-custom2">Plant medicines work in an entirely different way than orthodox medicines, they are alive and contain
            intelligent life-force or spirit that teach us to heal our minds and bodies through direct realisation
            of how we have created our disease and how we can heal it. This may seem a burden at first but with
            understanding we realise that we are empowered by this knowledge and as nature teaches us to regain
            control of our health and our lives, we see that we can create anything we want in our life. Ultimately
              this power is our birthright.</p>
            <img className="animated fadeInRight delay-custom2" id="leaf-drop" src="./images/leaf-drop.jpg" alt="Medicine bottle" />
          </section>


          <section id="section3" className="animated fadeIn delay-custom4">
            <h2 className="large text-primary">How To Use</h2>

            <div id="grid" className="shadow">
              <div id="square1" className="bg-light">
                <Link to='/herb_finder'><i className="fa fa-search fa-5x"></i>
                  <h3>The Herb Finder</h3>
                  <p className="">To begin your journey into herbal medicine navigate to the Herb Finder. Here you can search for herbs that treat a wide range of conditions</p>
                </Link>
              </div>

              <div id="square2" className="bg-lighter">
                <Link to='/materia_medica'><i className="fa fa-book-medical fa-5x"></i>
                  <h3>Materia Medica</h3>
                  <p className="">Information about each herb and its uses are located in the Materia Medica. Using this information you will be able to start building your own prescriptions.</p>
                </Link>
              </div>

              <div id="square3" className="bg-lighter">
                <Link to="/dispensary"><i className="fa fa-flask fa-5x"></i>
                  <h3>Dispensary</h3>
                  <p className="">When you have found the herbs you need you can then enter the Dispensary. Here you will write your own prescription and decide on the ratios of each herb in your medicine. You can then dispense your herbs.</p>
                </Link>
              </div>

              <div id="square4" className="bg-light">
                <Link to="/cabinet"><i className="fa fa-lock fa-5x"></i>
                  <h3>Medicine Cabinet</h3>
                  <p className="">The Medicine Cabinet is where you can safely store all your dispensed medicines. You can change your medicine if you wish, altering the ratios as needed, or adding new herbs as the treatment progresses.</p>
                </Link>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default Home;

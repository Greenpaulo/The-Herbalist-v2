import React, { Component, Fragment } from 'react';
import Footer from './Footer';

class Terms extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <div className="container" id="terms">


          <h1 className="x-large text-primary animated fadeInDown">Terms And Conditions</h1>

          <div className="animated fadeIn delay-custom1">
            <p>By using this website you agree to the terms and conditions stated. If not, please do not use this website.</p>
            <p>These terms & conditions and the content of this site shall be governed by English Law and all matters in connection with them shall be determined by the English Courts. These Terms & Conditions do not affect your statutory rights as a customer.</p>
          </div>

          <div className="animated fadeIn delay-custom2">
            <h2 className="medium text-primary">Disclaimer</h2>
            <p>The information provided on this website is not intended to treat, cure, prevent or diagnose any health issue.  All information and use of any product is entirely at your own risk and I will not be liable.  All statements are for entertainment and education purposes only and are in no way a claim of therapeutic quality. If in doubt, please consult a qualified practitioner.</p>


            <h2 className="medium text-primary">Privacy Policy</h2>
            <p>The Herbalist is committed to protecting and preserving the privacy of our visitors when visiting our site or communicating electronically with us.
          This policy sets out how we process any personal data we collect from you or that you provide to us through our website. We confirm that we will keep your information secure and that we will comply fully with all applicable UK Data Protection legislation and regulations. Please read the following carefully to understand what happens to personal data that you choose to provide to us, or that we collect from you when you visit this site. By visiting The Herbalist you are accepting and consenting to the practices described in this policy.</p>

            <h3 className="subtitle text-primary my-2">Types of information we may collect from you</h3>
            <p>We may collect, store and use the following kinds of personal information about individuals who visit and use our website:

            Information you supply to us. You may supply us with information about you by registering through Google. The information you give us may include your name, address, e-mail address and phone number.

          Information our website automatically collects about you. With regard to each of your visits to our website we may automatically collect information including the following: technical information, including a truncated and anonymised version of your Internet protocol (IP) address, browser type and version, operating system and platform; information about your visit, including what pages you visit, how long you are on the site, how you got to the site (including date and time); page response times, length of visit, what you click on, documents downloaded and download errors.</p>


            <h3 className="subtitle text-primary my-2">Cookies</h3>

            <p>Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.

            How we may use the information we collect

            to administer our site including troubleshooting and statistical purposes;
            to improve our site to ensure that content is presented in the most effective manner for you and for your computer;
            security and debugging as part of our efforts to keep our site safe and secure.
            This information is collected anonymously and is not linked to information that identifies you as an individual.

            Disclosure of your information
            Any information you provide to us will be stored on a secure server located near Dublin within the Republic of Ireland. We use trusted hosting providers to facilitate the running and management of this website. They meet high data protection and security standards.

            We do not rent, sell or share personal information about you with other people or non-affiliated companies.

            We will use all reasonable efforts to ensure that your personal data is not disclosed to regional/national institutions and authorities, unless required by law or other regulations.

          Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our site; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.</p>

            <h3 className="subtitle text-primary my-2">Third party links</h3>
            <p>Our site may, from time to time, contain links to and from the third party websites. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites.</p>
          </div>
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default Terms;

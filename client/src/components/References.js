import React, { Component, Fragment } from 'react';
import Footer from './Footer';

class References extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <h1 className="x-large text-primary animated fadeInDown">Materia Medica References</h1>
          <ul className="card animated fadeIn delay-custom1" id="reference-list">
            <li>(Ba) Bartram, T. (1998) Bartram’s Encyclopedia of Herbal Medicine. London: Robinson</li>
            <li>(KB)  Bone, K. (2003) A Clinical Guide to Blending Liquid Herbs.  Edinburgh: Churchill Livingston</li>
            <li>(B&C) Braun, L. & Cohen, M. (2005) Herbs & Natural Supplements.  London: Elsevier Mosby</li>
            <li>(EB) Brooke, E. (1992) A Woman’s Book of Herbs. London: The Women’s Press</li>
            <li>(AC) Chevallier, A. (2007) Herbal Remedies.  London: Dorling Kindersley</li>
            <li>(NC) Culpeper, N. (2007) Culpeper’s Complete Herbal. Hertfordshire: Wordsworth Editions</li>
            <li>(MA) Cunningham, S. (2006) Magical Aromatherapy. Minnesota: Llewellyn</li>
            <li>(MH) Cunningham, S. (2007) Magical Herbalism. Minnesota: Llewellyn</li>
            <li>(WF) Grey-Wilson, C. (1995) Wild Flowers. London: Dorling Kindersley</li>
            <li>(Ho) Hoffman, D. (1990) Holistic Herbal.  London: Harper Collins</li>
            <li>(PSS) Heaven, R. & Charing, H. (2006) Plant Spirit Shamanism.  Vermont: Destiny Books</li>
            <li>(AM) McIntyre, A. (2002) The Complete Floral Healer. New York: Sterling Publishing Co.</li>
            <li>(SM) Mills, S. (1991) The Essential Book Of Herbal Medicine. London: Penguin</li>
            <li>(M&B)  Mills, S, Bone, K. (2005) The Essential Guide To Herbal Safety. London: Churchill Livingston</li>
            <li>(Po) Williamson, E. (2003) Potter’s Herbal Cyclopaedia. London: C. W. Daniel</li>
            <li><span>Note: All dosages in the materia medica are from (M&B)</span></li>
          </ul>
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default References;
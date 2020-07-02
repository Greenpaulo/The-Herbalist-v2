import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import uuid from 'uuid';

class HerbEntry extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  }

  renderActionsIndications = () => {
    const { currentHerb } = this.props;
    if (currentHerb.actionsIndications !== undefined) {
      return currentHerb.actionsIndications.map((actInd) => {
        return (
          <div className="action-indication card animated fadeIn delay-custom3" key={uuid.v4()}>
            <div className="actions">
              <h3 className="my-1.5">Actions</h3>
              <h4>{actInd.actions}</h4>
            </div>
            <div className="indications">
              <h3 className="my-1.5">Indications</h3>
              {this.renderIndications(actInd)}
            </div>
          </div>
        )
      })
    }
  }

  renderIndications = (actInd) => {
    return actInd.indications.map(indication => {
      return (
        <div key={uuid.v4()} className="list-group">
          <h4>{indication}</h4>
          <i className="fas fa-check"></i>
        </div>
      )
    })
  }

  renderContraIndicationList = () => {
    const { currentHerb } = this.props;
    if (currentHerb.contraIndications !== null &&
      currentHerb.contraIndications !== undefined) {
      return (
        <div className="card-dark">
          <h3>Contra-indications</h3>
          {this.renderContraIndication()}
        </div>
      )
    }
  }

  renderContraIndication = () => {
    return this.props.currentHerb.contraIndications.map((contraIndication) => {
      return <p key={uuid.v4()}>{contraIndication}</p>
    })
  }

  renderSafety = () => {
    const { currentHerb } = this.props;
    if (currentHerb.safety !== null &&
      currentHerb.safety !== undefined) {
      return (
        <div className="card-dark">
          <h3>Safety </h3>
          <p>{currentHerb.safety}</p>
        </div>
      )
    }
  }

  renderBotanicalDescription = () => {
    const { currentHerb } = this.props;
    if (currentHerb.botanicalDescription !== null &&
      currentHerb.botanicalDescription !== undefined) {
      return (
        <div className="card-dark">
          <h3>Botanical Description </h3>
          <p>{currentHerb.botanicalDescription}</p>
        </div>
      )
    }
  }

  renderExternalUsage = () => {
    const { currentHerb } = this.props;
    if (currentHerb.externalUsage !== null &&
      currentHerb.externalUsage !== undefined) {
      return (
        <div className="card-dark">
          <h3>External Usage</h3>
          {this.renderUsage()}
        </div>
      )
    }
  }

  renderUsage = () => {
    return this.props.currentHerb.externalUsage.map((usage) => {
      return <p key={uuid.v4()}>{usage}</p>
    })
  }

  renderEnergeticUsage = () => {
    const { currentHerb } = this.props;
    if (currentHerb.energeticUsage !== null &&
      currentHerb.energeticUsage !== undefined) {
      return (
        <div className="card-dark" id="traditional-usage">
          <h3>Other Traditional Usage</h3>
          {this.renderTradition()}
        </div>
      )
    }
  }

  renderTradition = () => {
    return this.props.currentHerb.energeticUsage.map((usage) => {
      return <p key={uuid.v4()}>{usage}</p>
    })
  }

  renderClinicalTrials = () => {
    const { currentHerb } = this.props;
    if (currentHerb.clinicalTrials !== null &&
      currentHerb.clinicalTrials !== undefined) {
      return (
        <div className="card-dark">
          <h3>Clinical Trials</h3>
          {this.renderTrial()}
        </div>
      )
    }
  }

  renderTrial = () => {
    return this.props.currentHerb.clinicalTrials.map((Trial) => {
      return <p key={uuid.v4()}>{Trial}</p>
    })
  }

  renderHerbSelect = () => {
    if (this.props.herbList !== null && this.props.herbList !== undefined) {
      return this.props.herbList.map(herb => {
        return (
          <option key={uuid.v4()} id={herb.title}>{herb.title}</option>
        )
      })
    }
  }

  render() {
    const { currentHerb } = this.props;

    return (
      <Fragment>
        <section id="herb-entry">

          <div id="herb-id">
            <div id="herb-subtitles" className="animated fadeInLeft delay-custom2">
              <h1 id="herb-title" className="large text-primary">{currentHerb.title}</h1>
              <h3 className="lead">Common Name: {currentHerb.commonName}</h3>
              <h3 className="lead">Family: {currentHerb.family}</h3>
              <h3 className="lead">Parts Used: {currentHerb.partsUsed}</h3>
            </div>
            <div id="herb-img" className="animated fadeInRight delay-custom2">
              <img src={currentHerb.image} alt="Herb" />
            </div>
          </div>

          {this.renderActionsIndications()}

          <section id="other-info">
            <div id="spacer" className="card-dark"></div>

            {this.renderContraIndicationList()}

            {this.renderSafety()}

            <div className="card-dark">
              <h3>Dosage</h3>
              <p>{currentHerb.dosage}</p>
            </div>

            {this.renderBotanicalDescription()}

            {this.renderClinicalTrials()}

            {this.renderExternalUsage()}

            {this.renderEnergeticUsage()}

          </section>
        </section>

      </Fragment>

    )
  }

}

const MapStateToProps = (state) => {
  return { currentHerb: state.herb, herbList: state.herbList }
}
export default connect(MapStateToProps, actions)(HerbEntry);
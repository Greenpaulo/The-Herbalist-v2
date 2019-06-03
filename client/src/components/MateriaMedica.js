import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import uuid from 'uuid';

class MateriaMedica extends Component {
  componentDidMount = () => {
    console.log(this.props.match.params.herb)
    this.props.fetchHerb(this.props.match.params.herb)
  }

  renderActionsIndications = () => {
    const { currentHerb } = this.props;
    console.log(currentHerb);
    if (currentHerb.actionsIndications !== undefined) {
      console.log(currentHerb.actionsIndications);
      return currentHerb.actionsIndications.map((actInd) => {
        return (
          <div key={uuid.v4()}>
            <h3>Actions:</h3>
            <h4>{actInd.actions}</h4>
            <h3>Indications:</h3>
            {this.renderIndications(actInd)}
            <br />
          </div>
        )
      })
    }
  }

  renderIndications = (actInd) => {
    return actInd.indications.map(indication => {
      return <h4 key={uuid.v4()}>{indication}</h4>
    })
  }

  renderContraIndicationList = () => {
    const { currentHerb } = this.props;
    if (currentHerb.contraIndications !== null &&
      currentHerb.contraIndications !== undefined) {
      return (
        <div>
          <h3>Contra-indications:</h3>
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
        <div>
          <h3>Safety: </h3>
          <p>{currentHerb.safety}</p>
        </div>
      )
    }
  }

  renderBotanicalDescription = () => {
    const { currentHerb } = this.props;
    if (currentHerb.botanicalDescription !== null &&
      currentHerb.botanicalDescription !== undefined) {
      return <p>Botanical Description: {currentHerb.botanicalDescription}</p>
    }
  }

  renderExternalUsage = () => {
    const { currentHerb } = this.props;
    if (currentHerb.externalUsage !== null &&
      currentHerb.externalUsage !== undefined) {
      return (
        <div>
          <h3>External Usage:</h3>
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
        <div>
          <h3>Other Traditional Usage:</h3>
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
        <div>
          <h3>Clinical Trials:</h3>
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

  renderSection = (section) => {
    const { currentHerb } = this.props;
    console.log(this.props.currentHerb[section]);
    if (currentHerb[section] !== null &&
      currentHerb[section] !== undefined) {
      return (
        <div>
          <h3>{section}:</h3>
          {/* {this.`render+${section}`()} */}
        </div>
      )
    }
  }


  render() {
    const { currentHerb } = this.props;

    return (
      <div>
        {/* TODO - ADD HERB SEARCH BAR AND DROPDOWN SELECT BUTTON*/}
        <h1>{currentHerb.title}</h1>
        <h3>Common Name: {currentHerb.commonName}</h3>
        <h3>Family: {currentHerb.family}</h3>
        <h3>Parts Used: {currentHerb.partsUsed}</h3>
        <br />

        {this.renderActionsIndications()}
        <br />

        {this.renderContraIndicationList()}
        <br />

        {this.renderSafety()}
        <br />

        <h3>Dosage:</h3>
        <p>{currentHerb.dosage}</p>
        <br />

        {this.renderSection('dosage')}

        {this.renderBotanicalDescription()}
        <br />

        {this.renderClinicalTrials()}
        <br />

        {this.renderExternalUsage()}
        <br />

        {this.renderEnergeticUsage()}
        <br />
      </div>
    )
  }

}

const MapStateToProps = (state) => {
  return { currentHerb: state.herb }
}
export default connect(MapStateToProps, actions)(MateriaMedica);
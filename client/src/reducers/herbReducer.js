import { FETCH_HERB } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_HERB:
      const { payload } = action;
      console.log('inside reducer', action.payload);
      return {
        name: payload.name,
        title: payload.title,
        commonName: payload.commonName,
        family: payload.family,
        partsUsed: payload.partsUsed,
        image: payload.image,
        actionsIndications: payload.actionsIndications,
        contraIndications: payload.contraIndications,
        safety: payload.safety,
        dosage: payload.dosage,
        botanicalDescription: payload.botanicalDescription,
        energeticUsage: payload.energeticUsage,
        constituents: payload.constituents,
        clinicalTrials: payload.clinicalTrials,
        pharmacology: payload.pharmacology,
        externalUsage: payload.externalUsage
      }
    default:
      return state;
  }
}
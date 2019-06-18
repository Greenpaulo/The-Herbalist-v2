import { FETCH_HERB } from '../actions/types';

// Set the initial state to be the first herb alphabetically to show on the materia medica page
const initialState = {
  name: "Agnuscastus",
  title: "Vitex Agnus-Castus",
  commonName: "Agnus-castus, Chasteberry, Chaste tree",
  family: "Verbenaceae",
  partsUsed: "Dried, ripe fruits",
  image: "null",
  actionsIndications: [
    {
      actions: "Hormone Balancer, Uterine Tonic",
      indications: [
        "Menstrual problems e.g. menstrual irregularity and PMS. (AC)",
        "Vitex has the effect of normalising pituitary function and works on the pituitary-hypothalamic axis, especially as it relates to relative  progesterone levels. (MHo)",
        "Helps the body gain a natural balance after stopping oral contraceptives. (MHo)",
        "Acne in young women and men. (MHo)",
        "Menopausal symptoms. (LH)",
        "Infertility. (LH)"
      ]
    },
    {
      actions: "Galactagogue, Prolactin modulator",
      indications: [
        "Promotes milk flow. (M&B)",
        "Slows excessive milk flow. (LH)",
        "Hyperprolactinaemia. (LH)"
      ]
    }
  ],
  contraIndications: [
    "Not in pregnancy and not in children. (LH)"
  ],
  safety: "Not to be taken with progesterone drugs, HRT or the contraceptive pill. (M&B)",
  dosage: "Maximum weekly recommended dosage = 60ml of a 1:3 tincture",
  botanicalDescription: "A native shrub of the Mediterranean region and central Asia. The fruits are small, brownish black, hard round berries about 0.5cm in d iameter with a persistent calyx, containing four seeds. The berries should be picked when ripe, which is between October and November. (Po)(Ho)",
  "energeticUsage": [
    "In medieval times, monks reputedly chewed chaste berries to curb their sexual desire, hence its name Monk\u2019s pepper. (AC)",
    "Vitex is ruled by Mars. (LH)"
  ],
  clinicalTrials: [
    "Observation by 153 gynecologists of 551 patients with symptoms of corpus luteal insufficiency, cyclic disorders, or PMS over several menstrual cycles revealed that chaste tree was beneficial in 68.8% of cases. The average dose of chaste tree was equivalent to 36mg/day of dried fruit. Over 80% of patients were relieved of complaints or stated that their condition had improved. (KB)",
    "In a controlled trial of male and female patients with acne, a minimum of 3 months\u2019 treatment with Agnus castus resulted in an improvement for 70% of patients, which was significantly better than placebo. Patients were treated with Agnus castus (equivalent to 36mg/day of dried fruit) for 4 to 6 weeks, followed by a lower dose for 1 to 2 years. The mechanism for the beneficial treatment on acne is not known but may be a result of a mild antiandrogenic effect. (KB)"
  ],
  externalUsage: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_HERB:
      const { payload } = action;
      console.log(payload)
      if (payload) {
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
      } else {
        return state;
      }

    default:
      return state;
  }
}
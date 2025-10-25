// assets/data-br.js
const PLEDGE_STATUS_SCORES = window.PLEDGE_STATUS_SCORES;
const IMPORTANCE_WEIGHTS = window.IMPORTANCE_WEIGHTS;
function createPledge({ text, policyArea, status, source, impactedByCrisis = false }) {
  return { text, policyArea, status, source, impactedByCrisis, importanceWeight: IMPORTANCE_WEIGHTS[policyArea] || 1.0 };
}

/* =================================== PLEDGES =================================== */
const BR_LULA_2023_PLEDGES = [
  createPledge({ text: "Zero deforestation in the Amazon.", policyArea: "Environment / Climate", status: "Weak Compromise / In Progress", source: "G1" }),
  createPledge({ text: "Reduce extreme poverty and hunger.", policyArea: "Economy / Cost of Living", status: "Stalled / Wait & See / Unclear", source: "G1" }),
  createPledge({ text: "Revive the 'Mais Médicos' public health program.", policyArea: "Health and Social Care", status: "Kept / Achieved", source: "G1" }),
];
const BR_LULA_2003_2010_PLEDGES = [
  createPledge({ text: "Creation of the 'Bolsa Família' social program.", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "ACAD" }),
  createPledge({ text: "Achieve self-sustained economic growth.", policyArea: "Economy / Cost of Living", status: "Strong Compromise / On Track", source: "ACAD" }),
];

/* =================================== DATA OBJECT =================================== */
const brGovernments = {
  "Lula 2023–Present": { leader: "Luiz Inácio Lula da Silva", party: "Workers' Party", term: "2023–Present", termStartYear: 2023, termEndYear: 2026, approvalRating: 52, pledges: BR_LULA_2023_PLEDGES, majorChallenge: "Amazon Deforestation & Poverty Reduction", crisisName: "Environmental Policy Overhaul" },
  "Lula 2003–2010": { leader: "Luiz Inácio Lula da Silva", party: "Workers' Party", term: "2003–2010", termStartYear: 2003, termEndYear: 2010, approvalRating: 80, pledges: BR_LULA_2003_2010_PLEDGES, majorChallenge: "Extreme Poverty Eradication", crisisName: "None" }
};
window.brGovernments = brGovernments;
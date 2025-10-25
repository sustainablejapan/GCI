// assets/data-au.js
const PLEDGE_STATUS_SCORES = window.PLEDGE_STATUS_SCORES;
const IMPORTANCE_WEIGHTS = window.IMPORTANCE_WEIGHTS;
function createPledge({ text, policyArea, status, source, impactedByCrisis = false }) {
  return { text, policyArea, status, source, impactedByCrisis, importanceWeight: IMPORTANCE_WEIGHTS[policyArea] || 1.0 };
}

/* =================================== PLEDGES =================================== */
const AU_ALBANESE_2022_PLEDGES = [
  createPledge({ text: "Cut emissions by 43% by 2030.", policyArea: "Environment / Climate", status: "Strong Compromise / On Track", source: "ABC" }),
  createPledge({ text: "Establish a National Anti-Corruption Commission.", policyArea: "Devolution / Governance", status: "Kept / Achieved", source: "ABC" }),
  createPledge({ text: "Raise minimum wage by 5.1%.", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "ABC" }),
  createPledge({ text: "The Voice to Parliament constitutional recognition.", policyArea: "Devolution / Governance", status: "Broken / Not Kept / Abandoned", source: "ABC" }),
];
const AU_ABBOTT_2013_2016_PLEDGES = [ 
  createPledge({ text: "Repeal the carbon and mining taxes.", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "ABC" }),
  createPledge({ text: "Build the NBN faster.", policyArea: "Housing / Infrastructure", status: "Broken / Not Kept / Abandoned", source: "ABC" }),
];

/* =================================== DATA OBJECT =================================== */
const auGovernments = {
  "Albanese 2022–Present": { leader: "Anthony Albanese", party: "Labor Party", term: "2022–Present", termStartYear: 2022, termEndYear: 2025, approvalRating: 48, pledges: AU_ALBANESE_2022_PLEDGES, majorChallenge: "Meeting Climate Targets & Housing Supply", crisisName: "None" },
  "Abbott 2013–2016": { leader: "Tony Abbott", party: "Conservative", term: "2013–2016", termStartYear: 2013, termEndYear: 2016, approvalRating: 38, pledges: AU_ABBOTT_2013_2016_PLEDGES, majorChallenge: "Budget Deficit & Carbon Tax Repeal", crisisName: "None" }
};
window.auGovernments = auGovernments;
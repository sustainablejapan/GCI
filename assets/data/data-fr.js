// assets/data-fr.js
const PLEDGE_STATUS_SCORES = window.PLEDGE_STATUS_SCORES;
const IMPORTANCE_WEIGHTS = window.IMPORTANCE_WEIGHTS;
function createPledge({ text, policyArea, status, source, impactedByCrisis = false }) {
  return { text, policyArea, status, source, impactedByCrisis, importanceWeight: IMPORTANCE_WEIGHTS[policyArea] || 1.0 };
}

/* =================================== PLEDGES =================================== */
const FR_MACRON_2022_PLEDGES = [
  createPledge({ text: "Raise the legal retirement age to 64.", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "LMT" }),
  createPledge({ text: "Recruit 10,000 police and gendarmes.", policyArea: "Crime, Policing, Justice", status: "Strong Compromise / On Track", source: "LMT" }),
  createPledge({ text: "Guarantee 100% renewable energy by 2050.", policyArea: "Environment / Climate", status: "Weak Compromise / In Progress", source: "LMT" }),
];
const FR_SARKOZY_2007_2012_PLEDGES = [ 
  createPledge({ text: "Require minimum service during public transport strikes.", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "ACAD" }),
  createPledge({ text: "No replacement for one of every two retiring civil servants.", policyArea: "Economy / Cost of Living", status: "Strong Compromise / On Track", source: "ACAD" }),
];

/* =================================== DATA OBJECT =================================== */
const frGovernments = {
  "Macron 2022–Present": { leader: "Emmanuel Macron", party: "Renaissance", term: "2022–Present", termStartYear: 2022, termEndYear: 2027, approvalRating: 38, pledges: FR_MACRON_2022_PLEDGES, majorChallenge: "Pensions Reform & High Public Debt", crisisName: "Pensions Protests" },
  "Sarkozy 2007–2012": { leader: "Nicolas Sarkozy", party: "UMP", term: "2007–2012", termStartYear: 2007, termEndYear: 2012, approvalRating: 35, pledges: FR_SARKOZY_2007_2012_PLEDGES, majorChallenge: "Civil Service Reform and Austerity", crisisName: "Global Financial Crisis" }
};
window.frGovernments = frGovernments;
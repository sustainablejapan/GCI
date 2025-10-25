// assets/data-ca.js
const PLEDGE_STATUS_SCORES = window.PLEDGE_STATUS_SCORES;
const IMPORTANCE_WEIGHTS = window.IMPORTANCE_WEIGHTS;
function createPledge({ text, policyArea, status, source, impactedByCrisis = false }) {
  return { text, policyArea, status, source, impactedByCrisis, importanceWeight: IMPORTANCE_WEIGHTS[policyArea] || 1.0 };
}

/* =================================== PLEDGES =================================== */
const CA_TRUDEAU_2021_PLEDGES = [
  createPledge({ text: "Establish a $10-a-day child care system.", policyArea: "Economy / Cost of Living", status: "Strong Compromise / On Track", source: "CBC" }),
  createPledge({ text: "Ban assault-style firearms.", policyArea: "Crime, Policing, Justice", status: "Weak Compromise / In Progress", source: "CBC" }),
  createPledge({ text: "Introduce National Dental Care Program.", policyArea: "Health and Social Care", status: "Strong Compromise / On Track", source: "CBC" }),
  createPledge({ text: "Build 400,000 new housing units by 2024.", policyArea: "Housing / Infrastructure", status: "Broken / Not Kept / Abandoned", source: "CBC" }),
];
const CA_HARPER_2011_2015_PLEDGES = [ 
  createPledge({ text: "Introduce the Family Tax Cut (income splitting).", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "POLIM" }),
  createPledge({ text: "Commit $10 billion to infrastructure projects.", policyArea: "Housing / Infrastructure", status: "Strong Compromise / On Track", source: "POLIM" }),
];

/* =================================== DATA OBJECT =================================== */
const caGovernments = {
  "Trudeau 2021–Present": { leader: "Justin Trudeau", party: "Liberal Party", term: "2021–Present", termStartYear: 2021, termEndYear: 2025, approvalRating: 36, pledges: CA_TRUDEAU_2021_PLEDGES, majorChallenge: "Affordable Housing & Cost of Living", crisisName: "Housing Crisis" },
  "Harper 2011–2015": { leader: "Stephen Harper", party: "Conservative", term: "2011–2015", termStartYear: 2011, termEndYear: 2015, approvalRating: 55, pledges: CA_HARPER_2011_2015_PLEDGES, majorChallenge: "Post-Recession Recovery", crisisName: "Post-Recession Recovery" }
};
window.caGovernments = caGovernments;
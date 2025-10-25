// assets/data-jp.js
const PLEDGE_STATUS_SCORES = window.PLEDGE_STATUS_SCORES;
const IMPORTANCE_WEIGHTS = window.IMPORTANCE_WEIGHTS;
function createPledge({ text, policyArea, status, source, impactedByCrisis = false }) {
  return { text, policyArea, status, source, impactedByCrisis, importanceWeight: IMPORTANCE_WEIGHTS[policyArea] || 1.0 };
}

/* =================================== PLEDGES =================================== */
const JP_ISHIBA_2024_PLEDGES = [
  createPledge({ text: "Allocate ¥10 trillion to chip and AI industries.", policyArea: "Economy / Cost of Living", status: "Strong Compromise / On Track", source: "WAM" }),
  createPledge({ text: "Raise corporate tax to fund defense budget increase.", policyArea: "Defense / Foreign Policy", status: "Weak Compromise / In Progress", source: "LDP" }),
  createPledge({ text: "Push for political reforms following fundraising scandal.", policyArea: "Devolution / Governance", status: "Weak Compromise / In Progress", source: "WAM" }),
  createPledge({ text: "Implement policy to combat sharp Yen depreciation.", policyArea: "Economy / Cost of Living", status: "Stalled / Wait & See / Unclear", source: "NHK" }),
];
const JP_ABE_2012_2020_PLEDGES = [
  createPledge({ text: "Overcome deflation (Abenomics).", policyArea: "Economy / Cost of Living", status: "Weak Compromise / In Progress", source: "ACAD" }),
  createPledge({ text: "Increase consumption tax rate.", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "ACAD" }),
];

/* =================================== DATA OBJECT =================================== */
const jpGovernments = {
  "Ishiba 2024–Present": { leader: "Shigeru Ishiba", party: "LDP", term: "2024–Present", termStartYear: 2024, termEndYear: 2028, approvalRating: 60, pledges: JP_ISHIBA_2024_PLEDGES, majorChallenge: "Yen Depreciation & Political Funding Crisis", crisisName: "Political Funding Scandal" },
  "Abe 2012–2020": { leader: "Shinzo Abe", party: "LDP", term: "2012–2020", termStartYear: 2012, termEndYear: 2020, approvalRating: 58, pledges: JP_ABE_2012_2020_PLEDGES, majorChallenge: "Overcoming Deflation", crisisName: "Abenomics Failure" }
};
window.jpGovernments = jpGovernments;
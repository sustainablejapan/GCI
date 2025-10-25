// assets/data-kr.js
const PLEDGE_STATUS_SCORES = window.PLEDGE_STATUS_SCORES;
const IMPORTANCE_WEIGHTS = window.IMPORTANCE_WEIGHTS;
function createPledge({ text, policyArea, status, source, impactedByCrisis = false }) {
  return { text, policyArea, status, source, impactedByCrisis, importanceWeight: IMPORTANCE_WEIGHTS[policyArea] || 1.0 };
}

/* =================================== PLEDGES =================================== */
const KR_YOON_2022_PLEDGES = [
  createPledge({ text: "Declare 'demographic national emergency'.", policyArea: "Health and Social Care", status: "Kept / Achieved", source: "Korea Times" }),
  createPledge({ text: "Establish a Ministry of Population Strategy Planning.", policyArea: "Devolution / Governance", status: "Strong Compromise / On Track", source: "Chosun" }),
  createPledge({ text: "Reverse declining Total Fertility Rate (TFR) trend.", policyArea: "Health and Social Care", status: "Broken / Not Kept / Abandoned", source: "Statistics Korea" }), // The core goal is not met
  createPledge({ text: "Increase housing supply and ease real estate regulation.", policyArea: "Housing / Infrastructure", status: "Weak Compromise / In Progress", source: "KH" }),
];
const KR_PARK_2013_2017_PLEDGES = [
  createPledge({ text: "Introduce 'creative economy' to boost tech.", policyArea: "Economy / Cost of Living", status: "Weak Compromise / In Progress", source: "ACAD" }),
  createPledge({ text: "Expand childcare subsidies.", policyArea: "Health and Social Care", status: "Kept / Achieved", source: "ACAD" }),
];

/* =================================== DATA OBJECT =================================== */
const krGovernments = {
  "Yoon 2022–Present": { leader: "Yoon Suk Yeol", party: "PPP", term: "2022–Present", termStartYear: 2022, termEndYear: 2027, approvalRating: 38, pledges: KR_YOON_2022_PLEDGES, majorChallenge: "World's Lowest Birth Rate (0.72)", crisisName: "Demographic Crisis" },
  "Park 2013–2017": { leader: "Park Geun-hye", party: "Saenuri", term: "2013–2017", termStartYear: 2013, termEndYear: 2017, approvalRating: 25, pledges: KR_PARK_2013_2017_PLEDGES, majorChallenge: "Creative Economy Initiative", crisisName: "Impeachment Crisis" }
};
window.krGovernments = krGovernments;
// assets/data-in.js
const PLEDGE_STATUS_SCORES = window.PLEDGE_STATUS_SCORES;
const IMPORTANCE_WEIGHTS = window.IMPORTANCE_WEIGHTS;
function createPledge({ text, policyArea, status, source, impactedByCrisis = false }) {
  return { text, policyArea, status, source, impactedByCrisis, importanceWeight: IMPORTANCE_WEIGHTS[policyArea] || 1.0 };
}

/* =================================== PLEDGES =================================== */
const IN_MODI_2019_PLEDGES = [
  createPledge({ text: "Achieve $5 trillion economy target.", policyArea: "Economy / Cost of Living", status: "Weak Compromise / In Progress", impactedByCrisis: true, source: "HT" }),
  createPledge({ text: "Provide piped water to all rural households.", policyArea: "Housing / Infrastructure", status: "Strong Compromise / On Track", source: "HT" }),
  createPledge({ text: "New Employment Generation Scheme for 1 crore youth.", policyArea: "Economy / Cost of Living", status: "Strong Compromise / On Track", source: "Invest India" }),
  createPledge({ text: "Provide free health coverage for all senior citizens over 70.", policyArea: "Health and Social Care", status: "Kept / Achieved", source: "MyGov" }),
];
const IN_SINGH_2004_2014_PLEDGES = [
  createPledge({ text: "Implement the National Rural Employment Guarantee Act (NREGA).", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "ACAD" }),
  createPledge({ text: "Expand access to higher education.", policyArea: "Education / Schools", status: "Strong Compromise / On Track", source: "ACAD" }),
];

/* =================================== DATA OBJECT =================================== */
const inGovernments = {
  "Modi 2019–Present": { leader: "Narendra Modi", party: "BJP", term: "2019–Present", termStartYear: 2019, termEndYear: 2029, approvalRating: 76, pledges: IN_MODI_2019_PLEDGES, majorChallenge: "Infrastructure Development & Job Creation", crisisName: "COVID-19 Pandemic" },
  "Singh 2004–2014": { leader: "Manmohan Singh", party: "INC", term: "2004–2014", termStartYear: 2004, termEndYear: 2014, approvalRating: 45, pledges: IN_SINGH_2004_2014_PLEDGES, majorChallenge: "Rural Employment Guarantee (NREGA)", crisisName: "None" }
};
window.inGovernments = inGovernments;
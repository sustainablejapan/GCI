// assets/data-de.js
const PLEDGE_STATUS_SCORES = window.PLEDGE_STATUS_SCORES;
const IMPORTANCE_WEIGHTS = window.IMPORTANCE_WEIGHTS;
function createPledge({ text, policyArea, status, source, impactedByCrisis = false }) {
  return { text, policyArea, status, source, impactedByCrisis, importanceWeight: IMPORTANCE_WEIGHTS[policyArea] || 1.0 };
}

/* =================================== PLEDGES =================================== */
const DE_MERZ_2025_PLEDGES = [
  createPledge({ text: "Introduce major tax relief for SMEs.", policyArea: "Economy / Cost of Living", status: "Strong Compromise / On Track", source: "CDU" }),
  createPledge({ text: "Boost military spending to 2% of GDP.", policyArea: "Defense / Foreign Policy", status: "Strong Compromise / On Track", source: "CDU" }),
  createPledge({ text: "Revive economic growth through deregulation.", policyArea: "Economy / Cost of Living", status: "Weak Compromise / In Progress", source: "CDU" }),
];
const DE_SCHOLZ_2021_2025_PLEDGES = [
  createPledge({ text: "Achieve 80% of electricity from renewables by 2030.", policyArea: "Environment / Climate", status: "Weak Compromise / In Progress", impactedByCrisis: true, source: "DW" }),
  createPledge({ text: "Build 400,000 new apartments per year.", policyArea: "Housing / Infrastructure", status: "Broken / Not Kept / Abandoned", source: "DW" }),
  createPledge({ text: "Raise minimum wage to €12/hour.", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "SPD" }),
];

/* =================================== DATA OBJECT =================================== */
const deGovernments = {
  "Merz 2025–Present": { leader: "Friedrich Merz", party: "CDU", term: "2025–Present", termStartYear: 2025, termEndYear: 2029, approvalRating: 45, pledges: DE_MERZ_2025_PLEDGES, majorChallenge: "Economic Fragmentation & Energy Transition", crisisName: "Post-Traffic-Light Coalition" },
  "Scholz 2021–2025": { leader: "Olaf Scholz", party: "SPD", term: "2021–2025", termStartYear: 2021, termEndYear: 2025, approvalRating: 25, pledges: DE_SCHOLZ_2021_2025_PLEDGES, majorChallenge: "Ukraine War Energy Shock", crisisName: "Ukraine War Energy Shock" },
  "Merkel 2013–2017": { leader: "Angela Merkel", party: "CDU/CSU-SPD", term: "2013–2017", termStartYear: 2013, termEndYear: 2017, approvalRating: 60, pledges: [createPledge({ text: "Introduce a national minimum wage.", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "ACAD" }), createPledge({ text: "No tax increases.", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "ACAD" })], majorChallenge: "Refugee Crisis (2015)", crisisName: "Refugee Crisis" }
};
window.deGovernments = deGovernments;
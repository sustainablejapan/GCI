/* ===================================
   USA GOVERNMENT COMMITMENT DATA
   Comprehensive Historical & Current
   Source: PolitiFact Promise Trackers
=================================== */

function createUSPledge({ text, policyArea, status, source, impactedByCrisis = false }) {
  return {
    text,
    policyArea,
    status,
    source,
    impactedByCrisis,
    importanceWeight: IMPORTANCE_WEIGHTS[policyArea] || 1.0
  };
}

/* ===================================
   TRUMP 2025-PRESENT (Second Term)
=================================== */
const USA_TRUMP_2025_PLEDGES = [
  createUSPledge({ text: "Pardon January 6 Capitol riot defendants", policyArea: "Crime, Policing, Justice", status: "Kept / Achieved", source: "PolitiFact" }),
  createUSPledge({ text: "End birthright citizenship", policyArea: "Immigration / Border Control", status: "Stalled / Wait & See / Unclear", source: "Courier News" }),
  createUSPledge({ text: "Massive deportation operation", policyArea: "Immigration / Border Control", status: "Strong Compromise / On Track", source: "PolitiFact" }),
  createUSPledge({ text: "Eliminate DEI programs across federal government", policyArea: "Devolution / Governance", status: "Strong Compromise / On Track", source: "Courier News" }),
  createUSPledge({ text: "Pull US out of Paris Climate Agreement (again)", policyArea: "Environment / Climate", status: "Kept / Achieved", source: "News" }),
  createUSPledge({ text: "Enact tariffs on China, Mexico, and Canada", policyArea: "Economy / Cost of Living", status: "Strong Compromise / On Track", source: "Axios" }),
  createUSPledge({ text: "Drill, baby, drill - expand oil production", policyArea: "Economy / Cost of Living", status: "Strong Compromise / On Track", source: "PolitiFact" }),
  createUSPledge({ text: "Fire all federal employees working on programs he opposes", policyArea: "Devolution / Governance", status: "Strong Compromise / On Track", source: "USNews" })
];

/* ===================================
   BIDEN 2021-2025
   Source: PolitiFact Biden Promise Tracker
=================================== */
const USA_BIDEN_2021_PLEDGES = [
  // COVID-19 (Kept)
  createUSPledge({ text: "Get COVID under control and vaccinate 50M in 100 days", policyArea: "Health and Social Care", status: "Kept / Achieved", impactedByCrisis: true, source: "PolitiFact" }),
  createUSPledge({ text: "Increase COVID-19 testing capacity", policyArea: "Health and Social Care", status: "Kept / Achieved", impactedByCrisis: true, source: "PolitiFact" }),
  createUSPledge({ text: "Rejoin World Health Organization", policyArea: "Health and Social Care", status: "Kept / Achieved", source: "PolitiFact" }),
  
  // Immigration (Mixed)
  createUSPledge({ text: "Rescind Trump's Muslim travel bans", policyArea: "Immigration / Border Control", status: "Kept / Achieved", source: "PolitiFact" }),
  createUSPledge({ text: "Reverse Trump's family separation policies", policyArea: "Immigration / Border Control", status: "Kept / Achieved", source: "PolitiFact" }),
  createUSPledge({ text: "Create pathway to citizenship for undocumented immigrants", policyArea: "Immigration / Border Control", status: "Stalled / Wait & See / Unclear", source: "PolitiFact" }),
  
  // Economy & Taxes (Mixed)
  createUSPledge({ text: "Only raise taxes on Americans earning over $400K", policyArea: "Economy / Cost of Living", status: "Weak Compromise / In Progress", source: "PolitiFact" }),
  createUSPledge({ text: "Create millions of automotive industry jobs", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "PolitiFact" }),
  createUSPledge({ text: "Increase federal minimum wage to $15/hour", policyArea: "Economy / Cost of Living", status: "Broken / Not Kept / Abandoned", source: "USNews" }),
  
  // Student Loans (Broken)
  createUSPledge({ text: "Forgive all undergraduate student loan debt for borrowers earning under $125K", policyArea: "Education / Schools", status: "Broken / Not Kept / Abandoned", source: "PolitiFact" }),
  createUSPledge({ text: "Cancel $1.2B in student debt for 153,000 borrowers", policyArea: "Education / Schools", status: "Strong Compromise / On Track", source: "PolitiFact" }),
  
  // Climate (Compromise)
  createUSPledge({ text: "Rejoin Paris Climate Agreement", policyArea: "Environment / Climate", status: "Kept / Achieved", source: "PolitiFact" }),
  createUSPledge({ text: "Achieve net-zero emissions by 2050", policyArea: "Environment / Climate", status: "Weak Compromise / In Progress", source: "PolitiFact" }),
  
  // Healthcare (Mixed)
  createUSPledge({ text: "Lower prescription drug costs", policyArea: "Health and Social Care", status: "Strong Compromise / On Track", source: "PolitiFact" }),
  createUSPledge({ text: "Restore federal funding for Planned Parenthood", policyArea: "Health and Social Care", status: "Kept / Achieved", source: "PolitiFact" }),
  createUSPledge({ text: "Codify Roe v. Wade into law", policyArea: "Health and Social Care", status: "Broken / Not Kept / Abandoned", source: "USNews" }),
  
  // Justice & Appointments (Kept)
  createUSPledge({ text: "Nominate first Black woman to Supreme Court", policyArea: "Crime, Policing, Justice", status: "Kept / Achieved", source: "PolitiFact" }),
  createUSPledge({ text: "Reverse transgender military ban", policyArea: "Defense / Foreign Policy", status: "Kept / Achieved", source: "PolitiFact" }),
  createUSPledge({ text: "Prevent White House interference in federal investigations", policyArea: "Crime, Policing, Justice", status: "Broken / Not Kept / Abandoned", source: "PolitiFact" }),
  
  // Other Promises
  createUSPledge({ text: "End forever wars in Afghanistan and Middle East", policyArea: "Defense / Foreign Policy", status: "Strong Compromise / On Track", source: "USNews" }),
  createUSPledge({ text: "Decriminalize marijuana at federal level", policyArea: "Crime, Policing, Justice", status: "Stalled / Wait & See / Unclear", source: "PolitiFact" }),
  createUSPledge({ text: "Support study of reparations for African Americans", policyArea: "Devolution / Governance", status: "Stalled / Wait & See / Unclear", source: "PolitiFact" }),
  createUSPledge({ text: "End online sales of firearms and ammunition", policyArea: "Crime, Policing, Justice", status: "Broken / Not Kept / Abandoned", source: "AlJazeera" }),
  createUSPledge({ text: "Require background checks for all gun sales", policyArea: "Crime, Policing, Justice", status: "Weak Compromise / In Progress", source: "PolitiFact" })
];

/* ===================================
   TRUMP 2017-2021 (First Term)
   Source: PolitiFact Trump-O-Meter
=================================== */
const USA_TRUMP_2017_PLEDGES = [
  // Immigration (Mostly Broken)
  createUSPledge({ text: "Build a wall on southern border and make Mexico pay for it", policyArea: "Immigration / Border Control", status: "Broken / Not Kept / Abandoned", source: "PolitiFact" }),
  createUSPledge({ text: "Deport all criminal undocumented immigrants", policyArea: "Immigration / Border Control", status: "Weak Compromise / In Progress", source: "WashingtonPost" }),
  createUSPledge({ text: "End DACA program", policyArea: "Immigration / Border Control", status: "Broken / Not Kept / Abandoned", source: "American Prospect" }),
  
  // Healthcare (Broken)
  createUSPledge({ text: "Repeal and replace Affordable Care Act (Obamacare)", policyArea: "Health and Social Care", status: "Broken / Not Kept / Abandoned", source: "PolitiFact" }),
  
  // Economy & Jobs (Mixed)
  createUSPledge({ text: "Create 25 million new jobs over 10 years", policyArea: "Economy / Cost of Living", status: "Broken / Not Kept / Abandoned", impactedByCrisis: true, source: "WashingtonPost" }),
  createUSPledge({ text: "Cut taxes for every American", policyArea: "Economy / Cost of Living", status: "Weak Compromise / In Progress", source: "PolitiFact" }),
  createUSPledge({ text: "Reduce corporate tax rate to 15%", policyArea: "Economy / Cost of Living", status: "Weak Compromise / In Progress", source: "Poynter" }),
  createUSPledge({ text: "Bring back manufacturing jobs", policyArea: "Economy / Cost of Living", status: "Broken / Not Kept / Abandoned", source: "Poynter" }),
  createUSPledge({ text: "Revive coal industry", policyArea: "Economy / Cost of Living", status: "Broken / Not Kept / Abandoned", source: "American Prospect" }),
  createUSPledge({ text: "Achieve 4% economic growth annually", policyArea: "Economy / Cost of Living", status: "Broken / Not Kept / Abandoned", source: "PolitiFact" }),
  createUSPledge({ text: "Eliminate federal deficit", policyArea: "Economy / Cost of Living", status: "Broken / Not Kept / Abandoned", source: "American Prospect" }),
  
  // Regulation & Governance (Kept)
  createUSPledge({ text: "Cut two regulations for every new one", policyArea: "Devolution / Governance", status: "Kept / Achieved", source: "Poynter" }),
  createUSPledge({ text: "Enact five-year ban on executive branch lobbying", policyArea: "Devolution / Governance", status: "Broken / Not Kept / Abandoned", source: "CNN" }),
  createUSPledge({ text: "Drain the swamp", policyArea: "Devolution / Governance", status: "Broken / Not Kept / Abandoned", source: "American Prospect" }),
  
  // Foreign Policy & Trade (Kept)
  createUSPledge({ text: "Move US embassy in Israel to Jerusalem", policyArea: "Defense / Foreign Policy", status: "Kept / Achieved", source: "PolitiFact" }),
  createUSPledge({ text: "Withdraw from Paris Climate Agreement", policyArea: "Environment / Climate", status: "Kept / Achieved", source: "PolitiFact" }),
  createUSPledge({ text: "Withdraw from Trans Pacific Partnership", policyArea: "Defense / Foreign Policy", status: "Kept / Achieved", source: "CNN" }),
  createUSPledge({ text: "Impose tariffs on China and other countries", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "PolitiFact" }),
  
  // Justice (Mixed)
  createUSPledge({ text: "Appoint conservative judges to federal courts", policyArea: "Crime, Policing, Justice", status: "Kept / Achieved", source: "PolitiFact" }),
  createUSPledge({ text: "Lock up Hillary Clinton", policyArea: "Crime, Policing, Justice", status: "Broken / Not Kept / Abandoned", source: "American Prospect" }),
  
  // COVID-19 Response (Broken)
  createUSPledge({ text: "Coronavirus will go away without a vaccine", policyArea: "Health and Social Care", status: "Broken / Not Kept / Abandoned", impactedByCrisis: true, source: "American Prospect" }),
  createUSPledge({ text: "Anyone who wants COVID test will get one", policyArea: "Health and Social Care", status: "Broken / Not Kept / Abandoned", impactedByCrisis: true, source: "American Prospect" }),
  
  // Other (Mostly Broken)
  createUSPledge({ text: "$4,000 pay raise for average American from tax cuts", policyArea: "Economy / Cost of Living", status: "Broken / Not Kept / Abandoned", source: "American Prospect" }),
  createUSPledge({ text: "End use of personal cell phones for official business", policyArea: "Devolution / Governance", status: "Broken / Not Kept / Abandoned", source: "American Prospect" }),
  createUSPledge({ text: "Bring peace to Middle East", policyArea: "Defense / Foreign Policy", status: "Broken / Not Kept / Abandoned", source: "American Prospect" })
];

/* ===================================
   USA DATA OBJECT
=================================== */
const usaGovernments = {
  "Trump 2025–Present": {
    leader: "Donald Trump",
    party: "Republican",
    term: "2025–Present",
    termStartYear: 2025,
    termEndYear: null,
    approvalRating: 44,
    pledges: USA_TRUMP_2025_PLEDGES,
    majorChallenge: "Border Security & Economic Uncertainty",
    crisisName: null
  },
  
  "Biden 2021–2025": {
    leader: "Joe Biden",
    party: "Democratic",
    term: "2021–2025",
    termStartYear: 2021,
    termEndYear: 2025,
    approvalRating: 40,
    pledges: USA_BIDEN_2021_PLEDGES,
    majorChallenge: "COVID-19 Recovery & Inflation",
    crisisName: "COVID-19 Pandemic"
  },
  
  "Trump 2017–2021": {
    leader: "Donald Trump",
    party: "Republican",
    term: "2017–2021",
    termStartYear: 2017,
    termEndYear: 2021,
    approvalRating: 41,
    pledges: USA_TRUMP_2017_PLEDGES,
    majorChallenge: "COVID-19 Pandemic & Political Division",
    crisisName: "COVID-19 Pandemic"
  }
};

// Make accessible
window.usaGovernments = usaGovernments;
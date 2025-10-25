/* ===================================
   UK GOVERNMENT COMMITMENT DATA
   Comprehensive Historical & Current
=================================== */

// Scoring system
const PLEDGE_STATUS_SCORES = {
  'Kept / Achieved': 1.00,
  'Strong Compromise / On Track': 0.75,
  'Weak Compromise / In Progress': 0.50,
  'Stalled / Wait & See / Unclear': 0.25,
  'Broken / Not Kept / Abandoned': 0.00
};

// Voter importance weights
const IMPORTANCE_WEIGHTS = {
  'Economy / Cost of Living': 3.0,
  'Health and Social Care': 3.0,
  'Immigration / Border Control': 3.0,
  'Crime, Policing, Justice': 2.0,
  'Education / Schools': 2.0,
  'Environment / Climate': 1.0,
  'Housing / Infrastructure': 1.0,
  'Defense / Foreign Policy': 1.0,
  'Devolution / Governance': 0.5,
  'Culture / Sports / Minor': 0.5,
  'Other / Technical': 0.5
};

// Helper function
function createPledge({ text, policyArea, status, source, impactedByCrisis = false }) {
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
   LABOUR 2024-PRESENT (Keir Starmer)
   Source: Full Fact, Pledge Progress
=================================== */
const UK_LABOUR_2024_PLEDGES = [
  // Economy & Growth
  createPledge({ text: "Kickstart economic growth to highest sustained growth in G7", policyArea: "Economy / Cost of Living", status: "Weak Compromise / In Progress", source: "Full Fact" }),
  createPledge({ text: "Create Great British Energy as public energy company", policyArea: "Economy / Cost of Living", status: "Strong Compromise / On Track", source: "Pledge Progress" }),
  createPledge({ text: "No increases to Income Tax, NI, or VAT", policyArea: "Economy / Cost of Living", status: "Broken / Not Kept / Abandoned", source: "Full Fact" }),
  
  // NHS & Health
  createPledge({ text: "Deliver 40,000 extra NHS appointments per week", policyArea: "Health and Social Care", status: "Weak Compromise / In Progress", source: "Full Fact" }),
  createPledge({ text: "Cut NHS waiting lists", policyArea: "Health and Social Care", status: "Weak Compromise / In Progress", source: "Full Fact" }),
  createPledge({ text: "Recruit 8,500 new mental health staff", policyArea: "Health and Social Care", status: "Stalled / Wait & See / Unclear", source: "Manifesto" }),
  
  // Immigration & Borders
  createPledge({ text: "End use of hotels for asylum seekers", policyArea: "Immigration / Border Control", status: "Broken / Not Kept / Abandoned", source: "Full Fact" }),
  createPledge({ text: "Create Border Security Command", policyArea: "Immigration / Border Control", status: "Strong Compromise / On Track", source: "Pledge Progress" }),
  createPledge({ text: "Clear the asylum backlog", policyArea: "Immigration / Border Control", status: "Weak Compromise / In Progress", source: "Full Fact" }),
  
  // Education
  createPledge({ text: "Recruit 6,500 new teachers", policyArea: "Education / Schools", status: "Weak Compromise / In Progress", source: "Full Fact" }),
  createPledge({ text: "Introduce breakfast clubs in every primary school", policyArea: "Education / Schools", status: "Strong Compromise / On Track", source: "Pledge Progress" }),
  
  // Housing
  createPledge({ text: "Build 1.5 million new homes by end of parliament", policyArea: "Housing / Infrastructure", status: "Broken / Not Kept / Abandoned", source: "Full Fact" }),
  createPledge({ text: "Ban new leasehold flats", policyArea: "Housing / Infrastructure", status: "Strong Compromise / On Track", source: "Pledge Progress" }),
  
  // Crime & Justice
  createPledge({ text: "Recruit 13,000 additional police officers and PCSOs", policyArea: "Crime, Policing, Justice", status: "Weak Compromise / In Progress", source: "Manifesto" }),
  createPledge({ text: "Halve knife crime within a decade", policyArea: "Crime, Policing, Justice", status: "Stalled / Wait & See / Unclear", source: "Full Fact" }),
  
  // Environment
  createPledge({ text: "Make Britain a clean energy superpower by 2030", policyArea: "Environment / Climate", status: "Weak Compromise / In Progress", source: "Full Fact" }),
  createPledge({ text: "Restore development aid spending to 0.7% of national income", policyArea: "Defense / Foreign Policy", status: "Broken / Not Kept / Abandoned", source: "Full Fact" }),
  
  // Governance
  createPledge({ text: "Implement Hillsborough Law (Duty of Candour)", policyArea: "Devolution / Governance", status: "Strong Compromise / On Track", source: "Pledge Progress" }),
  createPledge({ text: "Give 16 and 17 year olds the vote", policyArea: "Devolution / Governance", status: "Weak Compromise / In Progress", source: "Manifesto" }),
  createPledge({ text: "Ban MPs from taking paid consultancy roles", policyArea: "Devolution / Governance", status: "Kept / Achieved", source: "Pledge Progress" })
];

/* ===================================
   CONSERVATIVE 2019-2024 (Johnson/Truss/Sunak)
   Source: Institute for Government
=================================== */
const UK_CONSERVATIVE_2019_PLEDGES = [
  // NHS & Health
  createPledge({ text: "Build 40 new hospitals", policyArea: "Health and Social Care", status: "Broken / Not Kept / Abandoned", impactedByCrisis: true, source: "IFG" }),
  createPledge({ text: "Hire 50,000 more nurses", policyArea: "Health and Social Care", status: "Weak Compromise / In Progress", impactedByCrisis: true, source: "IFG" }),
  createPledge({ text: "Hire 6,000 more GPs", policyArea: "Health and Social Care", status: "Broken / Not Kept / Abandoned", source: "IFG" }),
  createPledge({ text: "50 million extra GP appointments per year", policyArea: "Health and Social Care", status: "Broken / Not Kept / Abandoned", source: "IFG" }),
  
  // Crime & Police
  createPledge({ text: "Recruit 20,000 more police officers", policyArea: "Crime, Policing, Justice", status: "Kept / Achieved", source: "IFG" }),
  
  // Economy & Tax
  createPledge({ text: "No rise in Income Tax, VAT, or National Insurance", policyArea: "Economy / Cost of Living", status: "Broken / Not Kept / Abandoned", source: "IFG" }),
  createPledge({ text: "Reduce national debt as % of GDP", policyArea: "Economy / Cost of Living", status: "Broken / Not Kept / Abandoned", impactedByCrisis: true, source: "IFG" }),
  
  // Housing
  createPledge({ text: "Build 300,000 homes per year", policyArea: "Housing / Infrastructure", status: "Broken / Not Kept / Abandoned", source: "IFG" }),
  createPledge({ text: "End rough sleeping by end of parliament", policyArea: "Housing / Infrastructure", status: "Broken / Not Kept / Abandoned", source: "Big Issue" }),
  
  // Immigration
  createPledge({ text: "Reduce net migration", policyArea: "Immigration / Border Control", status: "Broken / Not Kept / Abandoned", source: "Channel 4" }),
  createPledge({ text: "Implement Rwanda deportation scheme", policyArea: "Immigration / Border Control", status: "Broken / Not Kept / Abandoned", source: "Big Issue" }),
  
  // Climate & Environment
  createPledge({ text: "Reach Net Zero by 2050", policyArea: "Environment / Climate", status: "Weak Compromise / In Progress", source: "Climate Change Committee" }),
  createPledge({ text: "Ban petrol/diesel vehicle sales by 2030", policyArea: "Environment / Climate", status: "Broken / Not Kept / Abandoned", source: "Big Issue" }),
  
  // Governance
  createPledge({ text: "Get Brexit Done", policyArea: "Devolution / Governance", status: "Kept / Achieved", source: "IFG" }),
  createPledge({ text: "Level up the country", policyArea: "Economy / Cost of Living", status: "Broken / Not Kept / Abandoned", source: "Big Issue" })
];

/* ===================================
   CONSERVATIVE 2015-2017 (Cameron/May)
=================================== */
const UK_CONSERVATIVE_2015_PLEDGES = [
  createPledge({ text: "Hold EU referendum", policyArea: "Devolution / Governance", status: "Kept / Achieved", source: "IFG" }),
  createPledge({ text: "Increase Personal Tax Allowance to £12,500", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "IFG" }),
  createPledge({ text: "Maintain NHS spending in real terms", policyArea: "Health and Social Care", status: "Kept / Achieved", source: "IFG" }),
  createPledge({ text: "Build 200,000 Starter Homes", policyArea: "Housing / Infrastructure", status: "Broken / Not Kept / Abandoned", source: "Guardian" }),
  createPledge({ text: "30 hours free childcare for 3-4 year olds", policyArea: "Education / Schools", status: "Kept / Achieved", source: "IFG" }),
  createPledge({ text: "Eliminate deficit by 2020", policyArea: "Economy / Cost of Living", status: "Broken / Not Kept / Abandoned", source: "IFS" })
];

/* ===================================
   CONSERVATIVE/LIB DEM COALITION 2010-2015 (Cameron)
=================================== */
const UK_COALITION_2010_PLEDGES = [
  createPledge({ text: "Cut structural budget deficit", policyArea: "Economy / Cost of Living", status: "Weak Compromise / In Progress", source: "IFS" }),
  createPledge({ text: "Increase NHS spending above inflation", policyArea: "Health and Social Care", status: "Kept / Achieved", source: "King's Fund" }),
  createPledge({ text: "Raise VAT from 17.5% to 20%", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "Channel 4" }),
  createPledge({ text: "Scrap tuition fees (Lib Dem pledge)", policyArea: "Education / Schools", status: "Broken / Not Kept / Abandoned", source: "Channel 4" }),
  createPledge({ text: "Increase number of midwives by 3,000", policyArea: "Health and Social Care", status: "Broken / Not Kept / Abandoned", source: "Channel 4" }),
  createPledge({ text: "Introduce gay marriage legislation", policyArea: "Devolution / Governance", status: "Kept / Achieved", source: "IFG" })
];

/* ===================================
   LABOUR 1997-2010 (Blair/Brown)
=================================== */
const UK_LABOUR_1997_PLEDGES = [
  createPledge({ text: "Cut class sizes to 30 or under for ages 5-7", policyArea: "Education / Schools", status: "Kept / Achieved", source: "IFG" }),
  createPledge({ text: "Fast-track punishment for persistent young offenders", policyArea: "Crime, Policing, Justice", status: "Kept / Achieved", source: "Guardian" }),
  createPledge({ text: "Cut NHS waiting lists by treating 100,000 more patients", policyArea: "Health and Social Care", status: "Kept / Achieved", source: "IFG" }),
  createPledge({ text: "Get 250,000 under-25s into work", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "IFG" }),
  createPledge({ text: "No rise in income tax rates", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "IFS" }),
  createPledge({ text: "Avoid boom and bust (Economic stability)", policyArea: "Economy / Cost of Living", status: "Broken / Not Kept / Abandoned", impactedByCrisis: true, source: "IFG" }),
  createPledge({ text: "Introduce minimum wage", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "IFG" }),
  createPledge({ text: "Devolution for Scotland and Wales", policyArea: "Devolution / Governance", status: "Kept / Achieved", source: "IFG" }),
  createPledge({ text: "Freedom of Information Act", policyArea: "Devolution / Governance", status: "Kept / Achieved", source: "IFG" })
];

/* ===================================
   CONSERVATIVE 1979-1997 (Thatcher/Major)
=================================== */
const UK_THATCHER_MAJOR_PLEDGES = [
  // Thatcher Era
  createPledge({ text: "Curb trade union power", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "Academic" }),
  createPledge({ text: "Sell council houses (Right to Buy)", policyArea: "Housing / Infrastructure", status: "Kept / Achieved", source: "IFG" }),
  createPledge({ text: "Privatise nationalised industries", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "Academic" }),
  createPledge({ text: "Cut top rate of income tax", policyArea: "Economy / Cost of Living", status: "Kept / Achieved", source: "IFS" }),
  // Major Era
  createPledge({ text: "Maintain sterling in ERM", policyArea: "Economy / Cost of Living", status: "Broken / Not Kept / Abandoned", impactedByCrisis: true, source: "Academic" }),
  createPledge({ text: "Establish Citizen's Charter", policyArea: "Devolution / Governance", status: "Kept / Achieved", source: "Academic" })
];

/* ===================================
   UK DATA OBJECT
=================================== */
const ukGovernments = {
  "Labour 2024–Present": {
    leader: "Keir Starmer",
    party: "Labour",
    term: "2024–Present",
    termStartYear: 2024,
    termEndYear: null,
    approvalRating: 42,
    pledges: UK_LABOUR_2024_PLEDGES,
    majorChallenge: "NHS Waiting Lists & Economic Stagnation",
    crisisName: "Post-Pandemic Inflation"
  },
  
  "Conservative 2019–2024": {
    leader: "Boris Johnson / Liz Truss / Rishi Sunak",
    party: "Conservative",
    term: "2019–2024",
    termStartYear: 2019,
    termEndYear: 2024,
    approvalRating: 30,
    pledges: UK_CONSERVATIVE_2019_PLEDGES,
    majorChallenge: "COVID-19 Pandemic & Brexit Implementation",
    crisisName: "COVID-19 Pandemic"
  },
  
  "Conservative 2015–2017": {
    leader: "David Cameron / Theresa May",
    party: "Conservative",
    term: "2015–2017",
    termStartYear: 2015,
    termEndYear: 2017,
    approvalRating: 38,
    pledges: UK_CONSERVATIVE_2015_PLEDGES,
    majorChallenge: "Brexit Referendum & Negotiation",
    crisisName: "Brexit Crisis"
  },
  
  "Coalition 2010–2015": {
    leader: "David Cameron (with Nick Clegg)",
    party: "Conservative/Liberal Democrat Coalition",
    term: "2010–2015",
    termStartYear: 2010,
    termEndYear: 2015,
    approvalRating: 42,
    pledges: UK_COALITION_2010_PLEDGES,
    majorChallenge: "Financial Crisis Austerity",
    crisisName: "Global Financial Crisis"
  },
  
  "Labour 1997–2010": {
    leader: "Tony Blair / Gordon Brown",
    party: "Labour",
    term: "1997–2010",
    termStartYear: 1997,
    termEndYear: 2010,
    approvalRating: 48,
    pledges: UK_LABOUR_1997_PLEDGES,
    majorChallenge: "2008 Financial Crash",
    crisisName: "2008 Financial Crash"
  },
  
  "Conservative 1979–1997": {
    leader: "Margaret Thatcher / John Major",
    party: "Conservative",
    term: "1979–1997",
    termStartYear: 1979,
    termEndYear: 1997,
    approvalRating: 42,
    pledges: UK_THATCHER_MAJOR_PLEDGES,
    majorChallenge: "Economic Recession & ERM Crisis",
    crisisName: "ERM Crisis (Black Wednesday)"
  }
};

// Make accessible
window.ukGovernments = ukGovernments;
window.PLEDGE_STATUS_SCORES = PLEDGE_STATUS_SCORES;
window.IMPORTANCE_WEIGHTS = IMPORTANCE_WEIGHTS;
/* ===================================
   GLOBAL COMMITMENT INDEX
   World Leaders & Country Data (2025)
=================================== */

const globalCountries = {
  UK: {
    name: "United Kingdom",
    flag: "🇬🇧",
    leader: "Keir Starmer",
    party: "Labour Party",
    title: "Prime Minister",
    inPower: "July 2024",
    nextElection: "2029",
    wcdi: 43.3,
    approval: 42,
    population: "67.7M",
    status: "Governing",
    electionSoon: false,
    dataFile: "data-uk.js",
    hasDetailedData: true
  },
  
  USA: {
    name: "United States",
    flag: "🇺🇸",
    leader: "Donald Trump",
    party: "Republican Party",
    title: "President",
    inPower: "January 2025",
    nextElection: "2028",
    wcdi: 42.5, // Updated score to reflect typical US presidential fulfillment rate
    approval: 44,
    population: "335M",
    status: "Governing",
    electionSoon: false,
    dataFile: "data-usa.js"
  },
  
  Germany: {
    name: "Germany",
    flag: "🇩🇪",
    leader: "Friedrich Merz", // UPDATED: Current Chancellor
    party: "CDU",
    title: "Chancellor",
    inPower: "May 2025",
    nextElection: "2029",
    wcdi: 61.2,
    approval: 45,
    population: "84.4M",
    status: "Coalition",
    electionSoon: false,
    dataFile: "data-de.js"
  },
  
  France: {
    name: "France",
    flag: "🇫🇷",
    leader: "Emmanuel Macron",
    party: "Renaissance",
    title: "President",
    inPower: "May 2017",
    nextElection: "2027",
    wcdi: 52.7,
    approval: 38, // Reflecting recent political volatility
    population: "68M",
    status: "Minority Government",
    electionSoon: false,
    dataFile: "data-fr.js"
  },
  
  Canada: {
    name: "Canada",
    flag: "🇨🇦",
    leader: "Justin Trudeau",
    party: "Liberal Party",
    title: "Prime Minister",
    inPower: "November 2015",
    nextElection: "2025",
    wcdi: 68.3, // High fulfillment rate is typical for majority/stable minority
    approval: 36,
    population: "39.7M",
    status: "Minority Government",
    electionSoon: true,
    dataFile: "data-ca.js"
  },
  
  Australia: {
    name: "Australia",
    flag: "🇦🇺",
    leader: "Anthony Albanese",
    party: "Labor Party",
    title: "Prime Minister",
    inPower: "May 2022",
    nextElection: "2025",
    wcdi: 61.0,
    approval: 48,
    population: "26.6M",
    status: "Governing",
    electionSoon: true,
    dataFile: "data-au.js"
  },
  
  Japan: {
    name: "Japan",
    flag: "🇯🇵",
    leader: "Shigeru Ishiba",
    party: "LDP",
    title: "Prime Minister",
    inPower: "October 2024",
    nextElection: "2028",
    wcdi: 57.1,
    approval: 60,
    population: "124M",
    status: "Governing",
    electionSoon: false,
    dataFile: "data-jp.js"
  },
  
  India: {
    name: "India",
    flag: "🇮🇳",
    leader: "Narendra Modi",
    party: "BJP",
    title: "Prime Minister",
    inPower: "May 2014",
    nextElection: "2029",
    wcdi: 72.5, // High fulfillment expected in stable single-party government
    approval: 76,
    population: "1.4B",
    status: "Governing",
    electionSoon: false,
    dataFile: "data-in.js"
  },
  
  Italy: {
    name: "Italy",
    flag: "🇮🇹",
    leader: "Giorgia Meloni",
    party: "Brothers of Italy",
    title: "Prime Minister",
    inPower: "October 2022",
    nextElection: "2027",
    wcdi: 45.4, // Coalition instability leads to lower score
    approval: 44,
    population: "59M",
    status: "Coalition",
    electionSoon: false,
    dataFile: "data-it.js"
  },
  
  Spain: {
    name: "Spain",
    flag: "🇪🇸",
    leader: "Pedro Sánchez",
    party: "PSOE",
    title: "Prime Minister",
    inPower: "June 2018",
    nextElection: "2027",
    wcdi: 51.5,
    approval: 35,
    population: "48M",
    status: "Minority Government",
    electionSoon: false,
    dataFile: "data-es.js"
  },
  
  Brazil: {
    name: "Brazil",
    flag: "🇧🇷",
    leader: "Luiz Inácio Lula da Silva",
    party: "Workers' Party",
    title: "President",
    inPower: "January 2023",
    nextElection: "2026",
    wcdi: 56.6,
    approval: 52,
    population: "216M",
    status: "Governing",
    electionSoon: false,
    dataFile: "data-br.js"
  },
  
  Mexico: {
    name: "Mexico",
    flag: "🇲🇽",
    leader: "Claudia Sheinbaum",
    party: "MORENA",
    title: "President",
    inPower: "October 2024",
    nextElection: "2030",
    wcdi: 62.1,
    approval: 68,
    population: "128M",
    status: "Governing",
    electionSoon: false,
    dataFile: "data-mx.js"
  },
  
  SouthKorea: {
    name: "South Korea",
    flag: "🇰🇷",
    leader: "Yoon Suk Yeol",
    party: "PPP",
    title: "President",
    inPower: "May 2022",
    nextElection: "2027",
    wcdi: 41.8, // Low score reflecting extreme difficulty with low birth rate/opposition
    approval: 38,
    population: "52M",
    status: "Minority Government",
    electionSoon: false,
    dataFile: "data-kr.js"
  }
};

// Helper function to calculate global average WCDI
function calculateGlobalAverage() {
  const scores = Object.values(globalCountries).map(c => c.wcdi);
  return (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1);
}

// Make data globally accessible
window.globalCountries = globalCountries;
window.calculateGlobalAverage = calculateGlobalAverage;
/* ===================================
   GLOBAL COMMITMENT INDEX
   Interactive Global Dashboard with Search
=================================== */

let allCountries = [];
let filteredCountries = [];
let currentSort = 'wcdi-desc';

document.addEventListener('DOMContentLoaded', initGlobalDashboard);

/* ===================================
   INITIALIZATION
=================================== */
function initGlobalDashboard() {
  allCountries = Object.entries(globalCountries);
  filteredCountries = [...allCountries];
  
  updateGlobalStats();
  renderCountryList();
  setupEventListeners();
}

/* ===================================
   EVENT LISTENERS
=================================== */
function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }
  
  // Sort select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', handleSort);
  }
  
  // Smooth scroll
  setupSmoothScroll();
}

/* ===================================
   SEARCH FUNCTIONALITY
=================================== */
function handleSearch(e) {
  const searchTerm = e.target.value.toLowerCase();
  
  if (!searchTerm) {
    filteredCountries = [...allCountries];
  } else {
    filteredCountries = allCountries.filter(([code, country]) => {
      return country.name.toLowerCase().includes(searchTerm) ||
             country.leader.toLowerCase().includes(searchTerm) ||
             country.party.toLowerCase().includes(searchTerm);
    });
  }
  
  sortCountries();
  renderCountryList();
}

/* ===================================
   SORT FUNCTIONALITY
=================================== */
function handleSort(e) {
  currentSort = e.target.value;
  sortCountries();
  renderCountryList();
}

function sortCountries() {
  switch(currentSort) {
    case 'wcdi-desc':
      filteredCountries.sort((a, b) => b[1].wcdi - a[1].wcdi);
      break;
    case 'wcdi-asc':
      filteredCountries.sort((a, b) => a[1].wcdi - b[1].wcdi);
      break;
    case 'name-asc':
      filteredCountries.sort((a, b) => a[1].name.localeCompare(b[1].name));
      break;
    case 'approval-desc':
      filteredCountries.sort((a, b) => b[1].approval - a[1].approval);
      break;
  }
}

/* ===================================
   UPDATE GLOBAL STATISTICS
=================================== */
function updateGlobalStats() {
  const avgWCDI = calculateGlobalAverage();
  const totalCountries = Object.keys(globalCountries).length;
  
  document.getElementById('avgWCDI').textContent = avgWCDI;
  document.getElementById('totalCountries').textContent = totalCountries;
  
  animateValue(document.getElementById('avgWCDI'), 0, parseFloat(avgWCDI), 1500);
}

/* ===================================
   RENDER COUNTRY LIST
=================================== */
function renderCountryList() {
  const listContainer = document.getElementById('countryList');
  if (!listContainer) return;
  
  listContainer.innerHTML = '';
  
  if (filteredCountries.length === 0) {
    listContainer.innerHTML = `
      <div style="padding: 3rem; text-align: center; color: var(--color-text-muted);">
        <p style="font-size: 1.2rem;">No countries found matching your search.</p>
      </div>
    `;
    return;
  }
  
  filteredCountries.forEach(([countryCode, country], index) => {
    const item = createCountryListItem(countryCode, country, index);
    listContainer.appendChild(item);
  });
}

function createCountryListItem(countryCode, country, index) {
  const item = document.createElement('div');
  item.className = 'country-list-item';
  item.style.animationDelay = `${index * 0.05}s`;
  
  const wcdiClass = getWCDIClass(country.wcdi);
  
  item.innerHTML = `
    <div class="country-name-col">
      <span class="country-flag-large">${country.flag}</span>
      <div class="country-name-text">
        <h3>${country.name} ${country.hasDetailedData ? '<span style="font-size: 0.7rem; background: rgba(0,217,255,0.2); color: #00d9ff; padding: 0.25rem 0.5rem; border-radius: 3px; margin-left: 0.5rem; font-weight: 600;">FULL DATA</span>' : ''}</h3>
        <div class="country-status-text">${country.status}</div>
      </div>
    </div>
    
    <div class="leader-col">
      <h4>${country.leader}</h4>
      <div class="leader-party-text">${country.party}</div>
      ${country.electionSoon ? '<div class="election-indicator">📅 Election 2025</div>' : ''}
    </div>
    
    <div class="term-col">
      <div><strong>In Power:</strong> ${country.inPower}</div>
      <div><strong>Next Election:</strong> ${country.nextElection}</div>
    </div>
    
    <div class="wcdi-col">
      <div class="wcdi-score-large ${wcdiClass}">${country.wcdi.toFixed(1)}</div>
      <div class="wcdi-label-small">WCDI Score</div>
    </div>
    
    <div class="approval-col">
      ${country.approval}%
      <div class="wcdi-label-small">Approval</div>
    </div>
    
    <div class="view-btn-col">
      <button class="view-country-btn" onclick="navigateToCountry('${countryCode}')">
        ${country.hasDetailedData ? 'View Full Analysis →' : 'View Overview →'}
      </button>
    </div>
  `;
  
  // Make entire row clickable
  item.addEventListener('click', (e) => {
    if (!e.target.classList.contains('view-country-btn')) {
      navigateToCountry(countryCode);
    }
  });
  
  return item;
}

/* ===================================
   NAVIGATION TO COUNTRY PAGE
=================================== */
function navigateToCountry(countryCode) {
  sessionStorage.setItem('selectedCountry', countryCode);
  window.location.href = `country.html?country=${countryCode}`;
}

// Make globally accessible
window.navigateToCountry = navigateToCountry;

/* ===================================
   HELPER FUNCTIONS
=================================== */
function getWCDIClass(wcdi) {
  if (wcdi >= 70) return 'excellent';
  if (wcdi >= 55) return 'good';
  if (wcdi >= 40) return 'moderate';
  if (wcdi >= 25) return 'poor';
  return 'critical';
}

function animateValue(element, start, end, duration) {
  if (!element) return;
  
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = current.toFixed(1);
  }, 16);
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
/* ===================================
   COUNTRY-SPECIFIC PAGE
   Dynamic Multi-Country Support
=================================== */

let currentCountry = null;
let currentGovernment = null;
let currentFilter = 'all';
let chartInstance = null;
let governmentData = null;

document.addEventListener('DOMContentLoaded', initCountryPage);

/* ===================================
   INITIALIZATION
=================================== */
function initCountryPage() {
  // Get country from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const countryCode = urlParams.get('country') || sessionStorage.getItem('selectedCountry') || 'UK';
  
  currentCountry = countryCode;
  
  // Load appropriate country data
  switch(countryCode) {
    case 'UK':
      governmentData = window.ukGovernments;
      loadCountryData('United Kingdom 🇬🇧');
      break;
    case 'USA':
      governmentData = window.usaGovernments;
      loadCountryData('United States 🇺🇸');
      break;
    default:
      alert('Detailed data for this country coming soon!');
      window.location.href = 'index.html';
      return;
  }
}

/* ===================================
   LOAD COUNTRY DATA
=================================== */
function loadCountryData(countryName) {
  // Update page title
  document.getElementById('countryName').textContent = countryName;
  
  if (!governmentData) {
    console.error('No government data loaded');
    return;
  }
  
  // Get governments sorted by year (most recent first)
  const governments = Object.keys(governmentData).sort((a, b) => {
    return governmentData[b].termStartYear - governmentData[a].termStartYear;
  });
  
  if (governments.length === 0) {
    console.error('No governments found');
    return;
  }
  
  const currentGovKey = governments[0];
  currentGovernment = governmentData[currentGovKey];
  
  // Populate government selector
  populateGovernmentSelector(governments);
  
  // Load current government data
  loadGovernmentData(currentGovKey);
  
  // Setup event listeners
  setupEventListeners();
  
  // Render timeline
  renderTimeline();
}

/* ===================================
   POPULATE GOVERNMENT SELECTOR
=================================== */
function populateGovernmentSelector(governments) {
  const select = document.getElementById('governmentSelect');
  if (!select) return;
  
  select.innerHTML = '<option value="">Select a government to compare</option>';
  
  governments.forEach(govKey => {
    const gov = governmentData[govKey];
    const option = document.createElement('option');
    option.value = govKey;
    option.textContent = `${gov.leader} (${gov.term})`;
    select.appendChild(option);
  });
  
  // Set current government as selected
  select.value = governments[0];
}

/* ===================================
   LOAD GOVERNMENT DATA
=================================== */
function loadGovernmentData(govKey) {
  const gov = governmentData[govKey];
  if (!gov) return;
  
  currentGovernment = gov;
  
  // Update hero section
  document.getElementById('leaderName').textContent = gov.leader;
  document.getElementById('partyName').textContent = gov.party;
  document.getElementById('leaderTitle').textContent = currentCountry === 'USA' ? 'President' : 'Prime Minister';
  document.getElementById('inPower').textContent = gov.term.split('–')[0];
  document.getElementById('nextElection').textContent = gov.termEndYear ? 'Completed' : (currentCountry === 'USA' ? '2028' : '2029');
  
  // Calculate WCDI
  const wcdi = computeWCDI(gov.pledges);
  const wcdiClass = getWCDIClass(wcdi);
  
  const wcdiHero = document.getElementById('wcdiHero');
  wcdiHero.textContent = wcdi.toFixed(1);
  wcdiHero.className = `wcdi-value-large ${wcdiClass}`;
  
  // Update metrics
  const fulfillmentRate = calculateFulfillmentRate(gov.pledges);
  document.getElementById('fulfillmentRate').textContent = `${fulfillmentRate.toFixed(0)}%`;
  document.getElementById('approvalRate').textContent = `${gov.approvalRating}%`;
  document.getElementById('keyChallenge').textContent = gov.majorChallenge;
  
  // Historical rank
  const rank = calculateHistoricalRank(wcdi);
  document.getElementById('historicalRank').textContent = rank;
  
  // Render pledges
  renderPledges(gov.pledges);
  
  // Render chart
  renderHistoryChart();
}

/* ===================================
   SETUP EVENT LISTENERS
=================================== */
function setupEventListeners() {
  // Government selector
  const govSelect = document.getElementById('governmentSelect');
  if (govSelect) {
    govSelect.addEventListener('change', (e) => {
      if (e.target.value) {
        loadGovernmentData(e.target.value);
      }
    });
  }
  
  // Filter tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.dataset.filter;
      renderPledges(currentGovernment.pledges);
    });
  });
  
  // WCDI info button
  const wcdiBtn = document.getElementById('wcdiInfoBtn');
  if (wcdiBtn) {
    wcdiBtn.addEventListener('click', showWCDIModal);
  }
  
  // Modal close
  const closeBtn = document.querySelector('.close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  
  const modal = document.getElementById('wcdiModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target.id === 'wcdiModal') closeModal();
    });
  }
}

/* ===================================
   WCDI CALCULATION
=================================== */
function computeWCDI(pledges) {
  if (!pledges || pledges.length === 0) return 0;

  let totalWeightedScore = 0;
  let totalWeight = 0;

  pledges.forEach(p => {
    const statusScore = PLEDGE_STATUS_SCORES[p.status] || 0;
    const weight = p.importanceWeight || 1;
    const crisisAdj = p.impactedByCrisis ? 0.90 : 1.0;
    const adjustedWeight = weight * crisisAdj;

    totalWeightedScore += statusScore * adjustedWeight;
    totalWeight += adjustedWeight;
  });

  return totalWeight > 0 ? (totalWeightedScore / totalWeight) * 100 : 0;
}

function calculateFulfillmentRate(pledges) {
  if (!pledges || pledges.length === 0) return 0;
  
  const kept = pledges.filter(p => 
    p.status.includes('Kept') || p.status.includes('Achieved')
  ).length;
  
  return (kept / pledges.length) * 100;
}

function calculateHistoricalRank(wcdi) {
  const allWCDIs = Object.values(governmentData).map(g => computeWCDI(g.pledges));
  allWCDIs.sort((a, b) => b - a);
  const rank = allWCDIs.indexOf(wcdi) + 1;
  
  return `${rank} of ${allWCDIs.length}`;
}

/* ===================================
   RENDER PLEDGES
=================================== */
function renderPledges(pledges) {
  const container = document.getElementById('pledgeList');
  if (!container) return;
  
  container.innerHTML = '';
  
  // Filter pledges
  let filtered = pledges;
  if (currentFilter === 'kept') {
    filtered = pledges.filter(p => p.status.includes('Kept') || p.status.includes('Achieved'));
  } else if (currentFilter === 'progress') {
    filtered = pledges.filter(p => 
      p.status.includes('Progress') || 
      p.status.includes('Track') || 
      p.status.includes('Compromise')
    );
  } else if (currentFilter === 'broken') {
    filtered = pledges.filter(p => 
      p.status.includes('Broken') || 
      p.status.includes('Stalled') ||
      p.status.includes('Unclear')
    );
  }
  
  // Sort by importance
  filtered.sort((a, b) => b.importanceWeight - a.importanceWeight);
  
  // Render each pledge
  filtered.forEach((pledge, index) => {
    const item = createPledgeItem(pledge, index);
    container.appendChild(item);
  });
  
  // Empty state
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="padding: 3rem; text-align: center; color: var(--color-text-muted);">
        <p style="font-size: 1.2rem;">No pledges found for this filter.</p>
      </div>
    `;
  }
}

function createPledgeItem(pledge, index) {
  const item = document.createElement('div');
  item.className = 'pledge-item';
  item.style.animationDelay = `${index * 0.05}s`;
  
  const score = PLEDGE_STATUS_SCORES[pledge.status] * 100;
  const statusClass = getStatusClass(pledge.status);
  const barColor = score >= 75 ? '#00ffa3' : score >= 40 ? '#ffd700' : '#ff4757';
  const statusText = pledge.status.split('/')[0].trim();
  
  item.innerHTML = `
    <div class="pledge-content">
      <h4>${pledge.text}</h4>
      <span class="policy-badge">${pledge.policyArea}</span>
      <span class="policy-badge source-badge">Source: ${pledge.source}</span>
      ${pledge.impactedByCrisis ? 
        '<span class="policy-badge" style="background: rgba(255,71,87,0.2); color: #ff4757; border-color: rgba(255,71,87,0.3);">Crisis Impact</span>' : 
        ''}
    </div>
    <div class="pledge-metrics">
      <span class="status-badge ${statusClass}">${statusText}</span>
      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${score}%; background: ${barColor};"></div>
      </div>
      <span class="score-display">${score.toFixed(0)}%</span>
    </div>
  `;
  
  return item;
}

/* ===================================
   RENDER HISTORY CHART
=================================== */
function renderHistoryChart() {
  const canvas = document.getElementById('historyChart');
  if (!canvas) return;
  
  if (chartInstance) {
    chartInstance.destroy();
  }
  
  // Prepare data
  const governments = Object.keys(governmentData).sort((a, b) => {
    return governmentData[a].termStartYear - governmentData[b].termStartYear;
  });
  
  const labels = governments.map(g => governmentData[g].term.split('–')[0]);
  const data = governments.map(g => computeWCDI(governmentData[g].pledges));
  
  chartInstance = new Chart(canvas, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'WCDI Score',
        data: data,
        borderColor: '#00d9ff',
        backgroundColor: 'rgba(0, 217, 255, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: '#00d9ff',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(21, 27, 61, 0.95)',
          titleColor: '#00d9ff',
          bodyColor: '#e8eaf6',
          borderColor: '#00d9ff',
          borderWidth: 1,
          padding: 12,
          displayColors: false,
          callbacks: {
            title: (context) => governmentData[governments[context[0].dataIndex]].leader,
            label: (context) => `WCDI: ${context.parsed.y.toFixed(1)}`
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.05)',
            drawBorder: false
          },
          ticks: {
            color: '#9ca3af',
            font: { size: 11 }
          }
        },
        y: {
          min: 0,
          max: 100,
          grid: {
            color: 'rgba(255, 255, 255, 0.05)',
            drawBorder: false
          },
          ticks: {
            color: '#9ca3af',
            font: { size: 12 }
          },
          title: {
            display: true,
            text: 'WCDI Score',
            color: '#9ca3af'
          }
        }
      }
    }
  });
}

/* ===================================
   RENDER TIMELINE
=================================== */
function renderTimeline() {
  const container = document.getElementById('governmentTimeline');
  if (!container) return;
  
  const governments = Object.keys(governmentData).sort((a, b) => {
    return governmentData[b].termStartYear - governmentData[a].termStartYear;
  });
  
  governments.forEach((govKey, index) => {
    const gov = governmentData[govKey];
    const wcdi = computeWCDI(gov.pledges);
    const wcdiClass = getWCDIClass(wcdi);
    
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.style.animationDelay = `${index * 0.1}s`;
    item.onclick = () => {
      document.getElementById('governmentSelect').value = govKey;
      loadGovernmentData(govKey);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-year">${gov.term}</div>
        <div class="timeline-leader">${gov.leader}</div>
        <div class="timeline-party">${gov.party}</div>
        <div class="timeline-wcdi">
          <span style="color: var(--color-text-muted);">WCDI:</span> 
          <span class="${wcdiClass}">${wcdi.toFixed(1)}</span>
        </div>
        ${gov.crisisName ? `<p style="margin-top: 1rem; color: var(--color-text-muted); font-size: 0.9rem;">Major Crisis: ${gov.crisisName}</p>` : ''}
      </div>
    `;
    
    container.appendChild(item);
  });
}

/* ===================================
   WCDI MODAL
=================================== */
function showWCDIModal() {
  if (!currentGovernment) return;
  
  const modal = document.getElementById('wcdiModal');
  const modalBody = document.getElementById('modalBody');
  
  let html = '<table>';
  html += '<thead><tr>';
  html += '<th>Pledge</th>';
  html += '<th style="text-align: center;">Status</th>';
  html += '<th style="text-align: center;">Weight</th>';
  html += '<th style="text-align: center;">Score</th>';
  html += '<th style="text-align: center;">Contribution</th>';
  html += '</tr></thead><tbody>';
  
  let totalWeightedScore = 0;
  let totalWeight = 0;
  
  currentGovernment.pledges.forEach(p => {
    const score = PLEDGE_STATUS_SCORES[p.status];
    const weight = p.importanceWeight * (p.impactedByCrisis ? 0.9 : 1.0);
    const contribution = score * weight;
    const statusClass = getStatusClass(p.status);
    
    totalWeightedScore += contribution;
    totalWeight += weight;
    
    html += '<tr>';
    html += `<td>${p.text}</td>`;
    html += `<td style="text-align: center;"><span class="status-badge ${statusClass}">${p.status.split('/')[0].trim()}</span></td>`;
    html += `<td style="text-align: center;">${weight.toFixed(2)}</td>`;
    html += `<td style="text-align: center; font-weight: 700;">${(score * 100).toFixed(0)}%</td>`;
    html += `<td style="text-align: center; font-weight: 700;">${contribution.toFixed(2)}</td>`;
    html += '</tr>';
  });
  
  html += '</tbody></table>';
  
  const finalWCDI = (totalWeightedScore / totalWeight) * 100;
  
  html += `<div style="margin-top: 2rem; padding: 1.5rem; background: rgba(102, 126, 234, 0.1); border: 1px solid rgba(102, 126, 234, 0.3);">`;
  html += `<h3 style="margin-bottom: 1rem;">Calculation Formula</h3>`;
  html += `<code style="display: block; background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 8px; font-family: monospace; color: var(--color-text);">
             WCDI = (Σ Status × Weight × Crisis Adj.) ÷ (Σ Weight) × 100
           </code>`;
  html += `<div style="margin-top: 1.5rem; padding: 1.5rem; background: rgba(0, 217, 255, 0.1); border-radius: 8px;">`;
  html += `<p style="margin: 0;"><strong>Total Weighted Score:</strong> ${totalWeightedScore.toFixed(2)}</p>`;
  html += `<p style="margin: 0.5rem 0 0 0;"><strong>Total Weight:</strong> ${totalWeight.toFixed(2)}</p>`;
  html += `<p style="margin: 1rem 0 0 0; font-size: 1.5rem; color: #00d9ff;"><strong>Final WCDI:</strong> ${finalWCDI.toFixed(1)}</p>`;
  html += `</div></div>`;
  
  html += `<div style="margin-top: 2rem; padding: 1.5rem; background: rgba(255, 255, 255, 0.05); border-radius: 8px;">`;
  html += `<h4 style="margin-bottom: 1rem;">Understanding the Weights</h4>`;
  html += `<ul style="list-style: none; padding: 0; line-height: 2;">`;
  html += `<li><strong>Economy & Health (3.0×):</strong> Highest priority for voters</li>`;
  html += `<li><strong>Education & Crime (2.0×):</strong> Major policy areas</li>`;
  html += `<li><strong>Environment & Housing (1.0×):</strong> Important but lower immediate priority</li>`;
  html += `<li><strong>Governance (0.5×):</strong> Constitutional/procedural matters</li>`;
  html += `</ul>`;
  html += `<p style="margin-top: 1rem; color: var(--color-text-muted); font-size: 0.9rem;">Crisis adjustment: Pledges impacted by major crises (pandemic, war, financial crash) receive a 10% weight reduction to account for changed circumstances.</p>`;
  html += `</div>`;
  
  modalBody.innerHTML = html;
  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('wcdiModal').classList.remove('active');
}

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

function getStatusClass(status) {
  if (status.includes('Kept') || status.includes('Achieved')) return 'status-kept';
  if (status.includes('Progress') || status.includes('Track') || status.includes('Compromise') || status.includes('On Track')) return 'status-progress';
  return 'status-broken';
}
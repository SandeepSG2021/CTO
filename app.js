/* CTO Readiness Coach — client-side app. All data lives in localStorage. */
(function () {
  'use strict';

  const STORAGE_KEY = 'cto-coach-entries-v1';
  const DATA = window.COACH_DATA;

  // ---------------- Utilities ----------------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
  const todayISO = () => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  };
  const isoWeekNumber = (dateStr) => {
    const d = new Date(dateStr);
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  };

  // ---------------- Storage ----------------
  function loadEntries() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : [];
    } catch { return []; }
  }
  function saveEntries(entries) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }

  // ---------------- Tab switching ----------------
  function initTabs() {
    $$('.tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        $$('.tab-btn').forEach((b) => {
          b.classList.toggle('active', b === btn);
          b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
        });
        $$('.tab-panel').forEach((p) => {
          p.classList.toggle('active', p.id === `tab-${target}`);
        });
        if (target === 'report') renderReport();
      });
    });
  }

  // ---------------- Tab 1: Coach content ----------------
  function renderCoach() {
    const container = $('#coach-content');
    if (!container) return;
    const parts = DATA.coachContent.map((section, idx) => {
      const body = renderCoachSection(section);
      return `
        <div class="coach-section ${idx === 0 ? 'open' : ''}" data-idx="${idx}">
          <div class="coach-section-header">${escapeHtml(section.heading)}</div>
          <div class="coach-section-body">${body}</div>
        </div>`;
    });
    container.innerHTML = parts.join('');
    $$('.coach-section-header', container).forEach((h) => {
      h.addEventListener('click', () => h.parentElement.classList.toggle('open'));
    });
  }

  function renderCoachSection(section) {
    const html = [];
    if (section.subsections) {
      section.subsections.forEach((sub) => {
        html.push(`<div class="coach-subsection"><h4>${escapeHtml(sub.title)}</h4>`);
        if (sub.bullets) html.push(bulletList(sub.bullets));
        if (sub.text) html.push(`<p>${escapeHtml(sub.text)}</p>`);
        html.push('</div>');
      });
    }
    if (section.bullets) html.push(bulletList(section.bullets));

    if (section.phases) {
      section.phases.forEach((p) => {
        html.push(`<div class="coach-subsection"><h4>${escapeHtml(p.title)}</h4>`);
        html.push(`<p><strong>Objective:</strong> ${escapeHtml(p.objective)}</p>`);
        html.push('<div class="phase-grid">');
        html.push(phaseBlock('Behavior changes', p.behaviorChanges));
        html.push(phaseBlock('Daily', p.daily));
        html.push(phaseBlock('Weekly', p.weekly));
        html.push(phaseBlock('Monthly', p.monthly));
        html.push(phaseBlock('Avoid', p.avoid));
        html.push(phaseBlock('Success indicators', p.success));
        html.push('</div></div>');
      });
    }

    if (section.lists) {
      html.push('<div class="stop-start-continue">');
      Object.entries(section.lists).forEach(([label, items]) => {
        const cls = label.toLowerCase();
        html.push(`<div class="ssc-col ${cls}"><h4>${escapeHtml(label)}</h4>${bulletList(items)}</div>`);
      });
      html.push('</div>');
    }

    if (section.audiences) {
      section.audiences.forEach((a) => {
        html.push(`<div class="audience-row"><h4>${escapeHtml(a.audience)}</h4><div class="kv">`);
        html.push(`<div>How to speak</div><div>${escapeHtml(a.how)}</div>`);
        html.push(`<div>Technical depth</div><div>${escapeHtml(a.depth)}</div>`);
        html.push(`<div>How to challenge</div><div>${escapeHtml(a.challenge)}</div>`);
        html.push(`<div>Presence</div><div>${escapeHtml(a.presence)}</div>`);
        html.push('</div></div>');
      });
    }

    if (section.scripts) {
      section.scripts.forEach((s) => {
        html.push(`<div class="script-row"><div class="sit">${escapeHtml(s.situation)}</div><div class="scr">${escapeHtml(s.script)}</div></div>`);
      });
    }

    if (section.operatingModel) {
      Object.entries(section.operatingModel).forEach(([label, items]) => {
        html.push(`<div class="op-model-block"><h4>${escapeHtml(label)}</h4>${bulletList(items)}</div>`);
      });
    }

    if (section.periods) {
      section.periods.forEach((p) => {
        html.push(`<div class="coach-subsection"><h4>${escapeHtml(p.window)}</h4>`);
        html.push(`<p><strong>Focus:</strong> ${p.focus.map(escapeHtml).join(' • ')}</p>`);
        html.push('<div class="phase-grid">');
        html.push(phaseBlock('Actions', p.actions));
        html.push(phaseBlock('Reflection', p.reflection));
        html.push(phaseBlock('Ask your mentor', p.mentorAsks));
        html.push(phaseBlock('Observable changes', p.observables));
        html.push(phaseBlock('Measures', p.measures));
        html.push('</div></div>');
      });
    }

    if (section.months) {
      html.push('<div class="phase-grid">');
      section.months.forEach((m) => {
        html.push(`<div class="phase-block"><h5>${escapeHtml(m.m)}</h5><p style="margin:0">${escapeHtml(m.focus)}</p></div>`);
      });
      html.push('</div>');
    }

    if (section.accountability) {
      Object.entries(section.accountability).forEach(([label, items]) => {
        html.push(`<div class="op-model-block"><h4>${escapeHtml(label)}</h4>${bulletList(items)}</div>`);
      });
    }

    if (section.finalAdvice) {
      const fa = section.finalAdvice;
      html.push(`<div class="final-block"><strong>Mindset shift</strong>${escapeHtml(fa.mindsetShift)}</div>`);
      html.push(`<div class="final-block"><strong>Biggest risk</strong>${escapeHtml(fa.biggestRisk)}</div>`);
      html.push(`<div class="final-block"><strong>Strongest asset</strong>${escapeHtml(fa.strongestAsset)}</div>`);
      html.push(`<div class="final-block"><strong>One sentence to remember daily</strong>${escapeHtml(fa.oneSentence)}</div>`);
    }

    return html.join('');
  }

  function bulletList(items) {
    return `<ul>${items.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul>`;
  }
  function phaseBlock(label, items) {
    if (!items || !items.length) return '';
    return `<div class="phase-block"><h5>${escapeHtml(label)}</h5>${bulletList(items)}</div>`;
  }

  // ---------------- Tab 2: activity form ----------------
  function initActivityForm() {
    const dateInput = $('#activity-date');
    dateInput.value = todayISO();

    const mood = $('#activity-mood');
    const moodVal = $('#mood-value');
    mood.addEventListener('input', () => { moodVal.textContent = mood.value; });

    $('#activity-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const date = dateInput.value || todayISO();
      const text = $('#activity-text').value.trim();
      const feedback = $('#activity-feedback').value.trim();
      const moodScore = Number(mood.value);
      if (!text && !feedback) return;

      const combined = [text, feedback].filter(Boolean).join('\n');
      const analysis = analyze(combined);
      const entry = {
        id: `${date}-${Date.now()}`,
        date, text, feedback, moodScore,
        alignmentScore: analysis.alignmentScore,
        positiveHits: analysis.positiveHits,
        negativeHits: analysis.negativeHits,
        categoryScores: analysis.categoryScores,
        risks: analysis.risks,
        wins: analysis.wins
      };

      const entries = loadEntries();
      entries.unshift(entry);
      saveEntries(entries);

      renderAnalysis(analysis);
      renderEntries();

      $('#activity-text').value = '';
      $('#activity-feedback').value = '';
      mood.value = 3; moodVal.textContent = '3';
    });

    $('#btn-clear-form').addEventListener('click', () => {
      $('#activity-text').value = '';
      $('#activity-feedback').value = '';
      $('#activity-mood').value = 3;
      $('#mood-value').textContent = '3';
      $('#analysis-result').innerHTML = '';
    });

    $('#btn-delete-all').addEventListener('click', () => {
      if (!confirm('Delete ALL your logged activities? This cannot be undone unless you have exported a backup.')) return;
      saveEntries([]);
      renderEntries();
      renderReport();
    });
  }

  // ---------------- Analyzer ----------------
  function analyze(text) {
    const lower = text.toLowerCase();
    const perCat = {};
    let posTotal = 0, negTotal = 0;
    const wins = [];
    const risks = [];
    const positiveHits = [];
    const negativeHits = [];

    DATA.categories.forEach((cat) => {
      const pHits = cat.positive.filter((k) => lower.includes(k));
      const nHits = cat.negative.filter((k) => lower.includes(k));
      perCat[cat.id] = { pos: pHits.length, neg: nHits.length, name: cat.name };
      posTotal += pHits.length;
      negTotal += nHits.length;
      pHits.forEach((k) => {
        positiveHits.push({ cat: cat.name, keyword: k });
        wins.push(`${cat.name}: '${k}' — aligned with the roadmap.`);
      });
      nHits.forEach((k) => {
        negativeHits.push({ cat: cat.name, keyword: k });
        risks.push(`${cat.name} risk: '${k}' — this is a "Stop" behavior in the roadmap. See ${cat.phase}.`);
      });
    });

    // Alignment score: 50 + 8*positives − 12*negatives, clamped 0..100.
    let score = 50 + 8 * posTotal - 12 * negTotal;
    score = Math.max(0, Math.min(100, score));

    return {
      alignmentScore: score,
      positiveHits, negativeHits,
      categoryScores: perCat,
      wins, risks,
      totalsPos: posTotal, totalsNeg: negTotal
    };
  }

  function scoreClass(score) {
    if (score >= 70) return 'good';
    if (score >= 45) return 'warn';
    return 'bad';
  }
  function verdictText(a) {
    if (a.totalsNeg === 0 && a.totalsPos >= 3) return 'Strong day — several roadmap behaviors visible.';
    if (a.totalsNeg === 0 && a.totalsPos > 0) return 'Aligned. Look for one more high-leverage behavior tomorrow.';
    if (a.totalsNeg > 0 && a.totalsPos > a.totalsNeg) return 'Mixed. Aligned overall, but a few "Stop" behaviors showed up.';
    if (a.totalsNeg > 0 && a.totalsPos <= a.totalsNeg) return 'Drift detected. Multiple behaviors the roadmap says to STOP.';
    return 'Neutral log. Add specifics — meetings, moments, decisions — for a sharper read.';
  }

  function renderAnalysis(a) {
    const cls = scoreClass(a.alignmentScore);
    const container = $('#analysis-result');
    const risks = a.risks.length ? a.risks.map((r) => `<div class="risk-item">${escapeHtml(r)}</div>`).join('') : '<p class="muted">No "Stop" behaviors detected in today\'s log.</p>';
    const wins = a.wins.length ? a.wins.map((w) => `<div class="aligned-item">${escapeHtml(w)}</div>`).join('') : '<p class="muted">No explicit roadmap keywords detected. Try being more specific about what you did (delegated, paused, coached, asked, etc.).</p>';
    const chips = [
      ...a.positiveHits.map((h) => `<span class="chip pos">+ ${escapeHtml(h.keyword)}</span>`),
      ...a.negativeHits.map((h) => `<span class="chip neg">− ${escapeHtml(h.keyword)}</span>`)
    ].join('') || '<span class="muted">No matched keywords.</span>';

    container.innerHTML = `
      <div class="analysis-card">
        <div class="analysis-summary">
          <div class="big-score ${cls}">${a.alignmentScore}</div>
          <div class="analysis-verdict">
            <h3>${escapeHtml(verdictText(a))}</h3>
            <div>${chips}</div>
          </div>
        </div>
        <h4>Risks flagged (deviation from Tab 1)</h4>
        ${risks}
        <h4 style="margin-top:1rem;">Aligned behaviors</h4>
        ${wins}
      </div>
    `;
  }

  // ---------------- Entries list ----------------
  function renderEntries() {
    const list = $('#entries-list');
    const entries = loadEntries();
    if (!entries.length) {
      list.innerHTML = '<div class="no-data">No entries yet. Log your first day above.</div>';
      return;
    }
    list.innerHTML = entries.slice(0, 20).map((e) => `
      <div class="entry-row" data-id="${escapeHtml(e.id)}">
        <div class="entry-date">${escapeHtml(e.date)}</div>
        <div class="entry-text">
          ${e.text ? `<div>${escapeHtml(e.text)}</div>` : ''}
          ${e.feedback ? `<div class="entry-feedback"><strong>Feedback:</strong> ${escapeHtml(e.feedback)}</div>` : ''}
        </div>
        <div class="entry-score">
          <div class="big-score ${scoreClass(e.alignmentScore)}" style="font-size:1.1rem;padding:0.3rem 0.6rem;">${e.alignmentScore}</div>
        </div>
        <div class="entry-actions">
          <button class="icon-btn" data-action="delete" title="Delete this entry">✕</button>
        </div>
      </div>
    `).join('');
    $$('.icon-btn[data-action="delete"]', list).forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const row = e.target.closest('.entry-row');
        const id = row.dataset.id;
        if (!confirm('Delete this entry?')) return;
        const remaining = loadEntries().filter((x) => x.id !== id);
        saveEntries(remaining);
        renderEntries();
      });
    });
  }

  // ---------------- Tab 3: Report ----------------
  function renderReport() {
    const entries = loadEntries();
    const last30 = filterLastDays(entries, 30);

    $('#kpi-days').textContent = entries.length;

    if (last30.length === 0) {
      $('#kpi-score').textContent = '—';
      $('#kpi-score-sub').textContent = 'no data in last 30 days';
      $('#kpi-risk').textContent = '—';
      $('#kpi-risk-sub').textContent = 'log a few days first';
    } else {
      const avg = Math.round(last30.reduce((s, e) => s + e.alignmentScore, 0) / last30.length);
      $('#kpi-score').textContent = avg;
      $('#kpi-score-sub').textContent = `across ${last30.length} logged day${last30.length === 1 ? '' : 's'}`;
      const topRisk = topRiskCategory(last30);
      $('#kpi-risk').textContent = topRisk ? topRisk.name : 'none';
      $('#kpi-risk-sub').textContent = topRisk ? `${topRisk.count} deviations` : 'no deviations flagged';
    }

    $('#kpi-streak').textContent = currentStreak(entries);

    renderCategoryBars(last30);
    renderDeviationsList(last30);
    renderWeeklyQuestions();
    renderReportLog(entries);
  }

  function filterLastDays(entries, days) {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    return entries.filter((e) => new Date(e.date) >= cutoff);
  }
  function currentStreak(entries) {
    if (!entries.length) return 0;
    const dates = new Set(entries.map((e) => e.date));
    let count = 0;
    const cursor = new Date();
    while (true) {
      const iso = cursor.toISOString().slice(0, 10);
      if (dates.has(iso)) { count++; cursor.setDate(cursor.getDate() - 1); }
      else break;
    }
    return count;
  }
  function topRiskCategory(entries) {
    const totals = {};
    entries.forEach((e) => {
      Object.entries(e.categoryScores || {}).forEach(([id, s]) => {
        if (!totals[id]) totals[id] = { neg: 0, name: s.name };
        totals[id].neg += s.neg;
      });
    });
    const rows = Object.values(totals).filter((x) => x.neg > 0).sort((a, b) => b.neg - a.neg);
    if (!rows.length) return null;
    return { name: rows[0].name, count: rows[0].neg };
  }
  function renderCategoryBars(entries) {
    const container = $('#category-bars');
    if (!entries.length) {
      container.innerHTML = '<div class="no-data">Log a few days to see alignment by category.</div>';
      return;
    }
    const totals = {};
    DATA.categories.forEach((c) => { totals[c.id] = { name: c.name, phase: c.phase, pos: 0, neg: 0 }; });
    entries.forEach((e) => {
      Object.entries(e.categoryScores || {}).forEach(([id, s]) => {
        if (!totals[id]) return;
        totals[id].pos += s.pos;
        totals[id].neg += s.neg;
      });
    });
    const rows = Object.values(totals).map((t) => {
      const total = t.pos + t.neg;
      const pct = total === 0 ? 50 : Math.round((t.pos / total) * 100);
      const cls = pct >= 70 ? 'good' : pct >= 45 ? 'mid' : 'bad';
      return `
        <div class="bar-row">
          <div class="bar-row-label">
            <span><strong>${escapeHtml(t.name)}</strong> <span class="muted">${escapeHtml(t.phase)}</span></span>
            <span>${pct}% aligned · <span class="muted">${t.pos} + / ${t.neg} −</span></span>
          </div>
          <div class="bar-track"><div class="bar-fill ${cls}" style="width:${pct}%"></div></div>
        </div>`;
    }).join('');
    container.innerHTML = rows;
  }
  function renderDeviationsList(entries) {
    const container = $('#deviations-list');
    const all = [];
    entries.forEach((e) => {
      (e.risks || []).forEach((r) => all.push({ date: e.date, risk: r }));
    });
    if (!all.length) {
      container.innerHTML = '<div class="no-data">No deviations flagged in the last 30 days. Keep going.</div>';
      return;
    }
    container.innerHTML = all.slice(0, 40).map((r) => `
      <div class="risk-item"><strong>${escapeHtml(r.date)}</strong> — ${escapeHtml(r.risk)}</div>
    `).join('');
  }
  function renderWeeklyQuestions() {
    const container = $('#weekly-questions');
    const sets = DATA.weeklyReflectionSets;
    const week = isoWeekNumber(todayISO());
    const set = sets[week % sets.length];
    container.innerHTML = set.map((q) => `<li>${escapeHtml(q)}</li>`).join('');
  }
  function renderReportLog(entries) {
    const container = $('#report-log');
    if (!entries.length) {
      container.innerHTML = '<div class="no-data">No entries yet.</div>';
      return;
    }
    container.innerHTML = entries.map((e) => `
      <div class="report-log-row">
        <div class="entry-date">${escapeHtml(e.date)}</div>
        <div class="rl-text">
          ${e.text ? `<div>${escapeHtml(e.text)}</div>` : ''}
          ${e.feedback ? `<div class="entry-feedback"><strong>Feedback:</strong> ${escapeHtml(e.feedback)}</div>` : ''}
        </div>
        <div class="big-score ${scoreClass(e.alignmentScore)}" style="font-size:1rem;padding:0.25rem 0.6rem;">${e.alignmentScore}</div>
      </div>
    `).join('');
  }

  // ---------------- Import / Export ----------------
  function initImportExport() {
    $('#btn-export').addEventListener('click', () => {
      const payload = { exportedAt: new Date().toISOString(), entries: loadEntries() };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `cto-coach-log-${todayISO()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });
    $('#file-import').addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(reader.result);
          const incoming = Array.isArray(parsed) ? parsed : parsed.entries;
          if (!Array.isArray(incoming)) throw new Error('Unrecognized backup format.');
          if (!confirm(`Import ${incoming.length} entries? This will REPLACE your current log.`)) return;
          saveEntries(incoming);
          renderEntries();
          renderReport();
          alert('Import complete.');
        } catch (err) {
          alert('Import failed: ' + err.message);
        } finally {
          e.target.value = '';
        }
      };
      reader.readAsText(file);
    });
  }

  // ---------------- Boot ----------------
  document.addEventListener('DOMContentLoaded', () => {
    if (!DATA) {
      document.body.innerHTML = '<div style="padding:2rem">Failed to load coach data.</div>';
      return;
    }
    if (DATA.meta) {
      $('#app-title').textContent = DATA.meta.title;
      $('#app-subtitle').textContent = DATA.meta.subtitle;
    }
    initTabs();
    renderCoach();
    initActivityForm();
    renderEntries();
    initImportExport();
  });
})();

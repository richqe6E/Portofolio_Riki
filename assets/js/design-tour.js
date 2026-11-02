/**
 * design-tour.js - Behind The Scenes: Interactive Multi-Cursor Design Simulation
 * Portofolio Neubrutalist - Riki Rivaldi, A.Md.Ak.
 */

(function () {
  'use strict';

  // Tour Scenes Definition (Scene-by-scene script)
  const TOUR_SCENES = [
    {
      id: 'hero',
      targetSelector: '#hero',
      duration: 5200,
      title: {
        id: '1/7: Merakit Hero & Identitas Profesional',
        en: '1/7: Crafting Hero & Professional Identity'
      },
      tagText: {
        id: 'Komponen Hero · Profile & Headline',
        en: 'Hero Component · Profile & Headline'
      },
      cursorActions: [
        { cursor: 'ui', xRel: 0.25, yRel: 0.22, delay: 400, action: 'click', text: { id: 'Menata Badge Status', en: 'Positioning Badge' } },
        { cursor: 'riki', xRel: 0.32, yRel: 0.38, delay: 1200, action: 'select', text: { id: 'Verifikasi Gelar A.Md.Ak.', en: 'Verifying A.Md.Ak. Title' } },
        { cursor: 'ai', xRel: 0.72, yRel: 0.45, delay: 2200, action: 'drag', text: { id: 'Optimalisasi Frame Foto Neubrutalis', en: 'Framing Neubrutalist Photo' } },
        { cursor: 'riki', xRel: 0.28, yRel: 0.75, delay: 3600, action: 'click', text: { id: 'Sinkronisasi IPK 3.59 POLNES', en: 'Syncing GPA 3.59 POLNES' } }
      ]
    },
    {
      id: 'tentang',
      targetSelector: '#tentang',
      duration: 5000,
      title: {
        id: '2/7: Menyelaraskan Keuangan & Rekayasa Sistem',
        en: '2/7: Bridging Accounting & System Engineering'
      },
      tagText: {
        id: 'Section Tentang Saya · SAK EMKM & Macro VBA',
        en: 'About Section · SAK EMKM & Macro VBA'
      },
      cursorActions: [
        { cursor: 'riki', xRel: 0.28, yRel: 0.35, delay: 500, action: 'select', text: { id: 'Menyusun Logika Siklus Akuntansi', en: 'Structuring Accounting Cycle Logic' } },
        { cursor: 'ui', xRel: 0.75, yRel: 0.30, delay: 1500, action: 'click', text: { id: 'Menata Kartu Metrik IPK & Proyek', en: 'Aligning Stat Metric Cards' } },
        { cursor: 'ai', xRel: 0.32, yRel: 0.72, delay: 2800, action: 'click', text: { id: 'Mengaitkan Tujuan Karier Specialist', en: 'Linking Career Objectives' } },
        { cursor: 'ui', xRel: 0.75, yRel: 0.70, delay: 3800, action: 'drag', text: { id: 'Penyusunan Tag Bidang Minat', en: 'Tagging Competency Domains' } }
      ]
    },
    {
      id: 'keahlian',
      targetSelector: '#keahlian',
      duration: 5200,
      title: {
        id: '3/7: Konfigurasi Skill-Bars & Logika Database',
        en: '3/7: Configuring Skill Bars & Database Logic'
      },
      tagText: {
        id: 'Grid Keahlian · Accounting, Excel, Web & Tools',
        en: 'Skills Grid · Accounting, Excel, Web & Tools'
      },
      cursorActions: [
        { cursor: 'riki', xRel: 0.30, yRel: 0.28, delay: 400, action: 'click', text: { id: 'Kalibrasi SAK EMKM (90%)', en: 'Calibrating SAK EMKM (90%)' } },
        { cursor: 'ai', xRel: 0.72, yRel: 0.28, delay: 1400, action: 'click', text: { id: 'Kompilasi Macro VBA & UserForms', en: 'Compiling Macro VBA & Forms' } },
        { cursor: 'ui', xRel: 0.30, yRel: 0.58, delay: 2400, action: 'drag', text: { id: 'Integrasi REST API & Supabase', en: 'Integrating REST API & Supabase' } },
        { cursor: 'riki', xRel: 0.50, yRel: 0.88, delay: 3600, action: 'click', text: { id: 'Harmonisasi 7 Soft Skills', en: 'Harmonizing Soft Skills' } }
      ]
    },
    {
      id: 'proyek',
      targetSelector: '#proyek',
      duration: 5800,
      title: {
        id: '4/7: Portofolio Proyek & Sertifikat HKI DJKI',
        en: '4/7: Project Showcase & Official Copyright HKI'
      },
      tagText: {
        id: 'Kartu Proyek Unggulan · 4 Proyek Nyata',
        en: 'Featured Projects · 4 Production Apps'
      },
      cursorActions: [
        { cursor: 'riki', xRel: 0.40, yRel: 0.24, delay: 500, action: 'click', text: { id: 'Sematkan Hak Cipta EC002026199600', en: 'Affixing Copyright EC002026199600' } },
        { cursor: 'ui', xRel: 0.28, yRel: 0.62, delay: 1700, action: 'click', text: { id: 'Verifikasi Modul Kasir POS Android', en: 'Checking POS Android Modules' } },
        { cursor: 'ai', xRel: 0.72, yRel: 0.62, delay: 2900, action: 'click', text: { id: 'Uji Tautan Live Demo Website Yayasan', en: 'Testing Foundation Live Demo' } },
        { cursor: 'riki', xRel: 0.75, yRel: 0.85, delay: 4200, action: 'drag', text: { id: 'Pemeriksaan Arus Kas Logistik Average', en: 'Auditing Logistics Average Cashflow' } }
      ]
    },
    {
      id: 'pengalaman',
      targetSelector: '#pengalaman',
      duration: 5200,
      title: {
        id: '5/7: Rekam Jejak Magang Bankaltimtara & Metrik 92%',
        en: '5/7: Bankaltimtara Internship & 92% Time Savings'
      },
      tagText: {
        id: 'Kartu Pengalaman · Divisi Usaha Syariah',
        en: 'Experience Card · Sharia Banking Division'
      },
      cursorActions: [
        { cursor: 'riki', xRel: 0.75, yRel: 0.32, delay: 400, action: 'click', text: { id: 'Validasi Efisiensi Laporan 92%', en: 'Validating 92% Time Slashed' } },
        { cursor: 'ui', xRel: 0.32, yRel: 0.62, delay: 1600, action: 'select', text: { id: 'Pelurusan Sertifikat Magang (+0.85°)', en: 'Deskewing Internship Cert (+0.85°)' } },
        { cursor: 'ai', xRel: 0.72, yRel: 0.75, delay: 2800, action: 'drag', text: { id: 'Menata 4 Dokumentasi Operasional', en: 'Curating 4 Operational Photos' } },
        { cursor: 'riki', xRel: 0.28, yRel: 0.90, delay: 3900, action: 'click', text: { id: 'Verifikasi Freelance Developer', en: 'Verifying Freelance Dev Record' } }
      ]
    },
    {
      id: 'sertifikat',
      targetSelector: '#sertifikat',
      duration: 4800,
      title: {
        id: '6/7: Penataan Grid Sertifikasi & Legalitas Ijazah',
        en: '6/7: Arranging Credentials & Diploma Grid'
      },
      tagText: {
        id: 'Galeri Sertifikasi · Ijazah, LSP, HKI, & TOEFL',
        en: 'Credentials Gallery · Diploma, LSP, HKI, & TOEFL'
      },
      cursorActions: [
        { cursor: 'ui', xRel: 0.22, yRel: 0.36, delay: 400, action: 'click', text: { id: 'Sematkan Ijazah D3 Akuntansi POLNES', en: 'Pinning POLNES Diploma A.Md.Ak.' } },
        { cursor: 'riki', xRel: 0.50, yRel: 0.36, delay: 1500, action: 'click', text: { id: 'Verifikasi SK Kompetensi LSP', en: 'Verifying LSP Competency SK' } },
        { cursor: 'ai', xRel: 0.78, yRel: 0.36, delay: 2600, action: 'click', text: { id: 'Pemeriksaan HKI Kemenkum RI', en: 'Inspecting DJKI Copyright Deed' } },
        { cursor: 'ui', xRel: 0.50, yRel: 0.76, delay: 3600, action: 'drag', text: { id: 'Harmonisasi Galeri Lightbox 60FPS', en: 'Tuning 60FPS Lightbox Gallery' } }
      ]
    },
    {
      id: 'kontak',
      targetSelector: '#kontak',
      duration: 5400,
      title: {
        id: '7/7: Otomatisasi Formulir & Kesiapan Kolaborasi',
        en: '7/7: Form Automation & Ready to Collaborate'
      },
      tagText: {
        id: 'Kanal Kontak · Email, WhatsApp, & Jobstreet',
        en: 'Contact Channels · Email, WhatsApp, & Jobstreet'
      },
      cursorActions: [
        { cursor: 'riki', xRel: 0.25, yRel: 0.36, delay: 500, action: 'select', text: { id: 'Uji Validasi Form Kontak', en: 'Testing Contact Form Validation' } },
        { cursor: 'ai', xRel: 0.28, yRel: 0.65, delay: 1600, action: 'click', text: { id: 'Penyusunan Format Mailto Otomatis', en: 'Configuring Mailto Routing' } },
        { cursor: 'ui', xRel: 0.75, yRel: 0.45, delay: 2800, action: 'click', text: { id: 'Tautkan WhatsApp & Jobstreet', en: 'Linking WhatsApp & Jobstreet' } },
        { cursor: 'riki', xRel: 0.50, yRel: 0.88, delay: 4000, action: 'celebrate', text: { id: '✨ Portofolio Siap Menjangkau Dunia!', en: '✨ Portfolio Ready for the World!' } }
      ]
    }
  ];

  // State Management
  let isPlaying = false;
  let isPaused = false;
  let currentSceneIndex = 0;
  let playbackSpeed = 1.0;
  let sceneTimer = null;
  let actionTimers = [];
  let overlayEl = null;

  // Helper: Get Current Language
  function getLang() {
    return document.documentElement.lang === 'en' ? 'en' : 'id';
  }

  // Inject CSS Styles for Design Tour
  function injectStyles() {
    if (document.getElementById('design-tour-styles')) return;
    const style = document.createElement('style');
    style.id = 'design-tour-styles';
    style.textContent = `
      /* Tour Root Layer */
      #design-tour-overlay {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 99999;
        font-family: 'Outfit', sans-serif;
      }

      /* Blueprint Grid Background during tour */
      .tour-blueprint-active::before {
        content: '';
        position: fixed;
        inset: 0;
        pointer-events: none;
        background-size: 32px 32px;
        background-image:
          linear-gradient(to right, rgba(15, 30, 58, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(15, 30, 58, 0.05) 1px, transparent 1px);
        z-index: 9998;
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      .tour-blueprint-active.blueprint-on::before {
        opacity: 1;
      }

      /* Virtual Collaborative Cursors */
      .v-cursor {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        transition: transform 0.65s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease;
        will-change: transform, opacity;
        z-index: 100000;
        opacity: 0;
        filter: drop-shadow(2px 3px 0px rgba(13, 13, 13, 0.8));
      }
      .v-cursor.visible {
        opacity: 1;
      }
      .v-cursor svg {
        display: block;
        width: 26px;
        height: 26px;
      }
      .v-cursor .v-badge {
        position: absolute;
        top: 18px;
        left: 14px;
        white-space: nowrap;
        font-family: 'Outfit', sans-serif;
        font-weight: 800;
        font-size: 0.68rem;
        letter-spacing: 0.02em;
        padding: 2px 7px;
        border-radius: 6px;
        border: 2px solid #0D0D0D;
        box-shadow: 2px 2px 0 0 #0D0D0D;
        color: #0D0D0D;
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .v-cursor .v-action-toast {
        position: absolute;
        bottom: 24px;
        left: 14px;
        white-space: nowrap;
        font-size: 0.72rem;
        font-weight: 800;
        padding: 3px 9px;
        border-radius: 8px;
        background: #0F1E3A;
        color: #D4FF4F;
        border: 2px solid #0D0D0D;
        box-shadow: 2px 2px 0 #0D0D0D;
        opacity: 0;
        transform: translateY(6px);
        transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .v-cursor .v-action-toast.show {
        opacity: 1;
        transform: translateY(0);
      }

      /* Specific Cursor Themes */
      .v-cursor.c-riki .v-badge { background: #0F1E3A; color: #D4FF4F; }
      .v-cursor.c-ui   .v-badge { background: #D4FF4F; color: #0F1E3A; }
      .v-cursor.c-ai   .v-badge { background: #FFE566; color: #0D0D0D; }

      /* Click Ripple Effect */
      .v-ripple {
        position: absolute;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 3px solid #0D0D0D;
        pointer-events: none;
        transform: translate(-50%, -50%) scale(0.2);
        opacity: 1;
        animation: v-ripple-anim 0.7s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        z-index: 99999;
      }
      @keyframes v-ripple-anim {
        0%   { transform: translate(-50%, -50%) scale(0.2); opacity: 1; }
        60%  { opacity: 0.8; }
        100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
      }

      /* Selection Box (Figma Canvas Highlight) */
      #v-selection-box {
        position: absolute;
        border: 2px dashed #0F1E3A;
        background: rgba(200, 232, 255, 0.08);
        border-radius: 12px;
        pointer-events: none;
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 99990;
        opacity: 0;
      }
      #v-selection-box.active {
        opacity: 1;
      }
      #v-selection-box .s-handle {
        position: absolute;
        width: 8px;
        height: 8px;
        background: #fff;
        border: 2px solid #0F1E3A;
        border-radius: 2px;
      }
      #v-selection-box .s-tl { top: -4px; left: -4px; }
      #v-selection-box .s-tr { top: -4px; right: -4px; }
      #v-selection-box .s-bl { bottom: -4px; left: -4px; }
      #v-selection-box .s-br { bottom: -4px; right: -4px; }
      #v-selection-box .s-tag {
        position: absolute;
        top: -24px;
        left: 0;
        background: #0F1E3A;
        color: #D4FF4F;
        font-family: 'Outfit', sans-serif;
        font-weight: 800;
        font-size: 0.68rem;
        padding: 2px 8px;
        border-radius: 4px;
        border: 1.5px solid #0D0D0D;
        white-space: nowrap;
      }

      /* Floating Neubrutalist Playback Control Bar */
      #v-tour-toolbar {
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%) translateY(120px);
        background: #fff;
        border: 3px solid #0D0D0D;
        border-radius: 18px;
        box-shadow: 6px 6px 0 0 #0D0D0D;
        padding: 10px 16px;
        display: flex;
        align-items: center;
        gap: 12px;
        pointer-events: auto;
        z-index: 100005;
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        max-width: 95vw;
      }
      #v-tour-toolbar.visible {
        transform: translateX(-50%) translateY(0);
      }
      .tb-btn {
        background: #F5F0E8;
        border: 2px solid #0D0D0D;
        box-shadow: 2px 2px 0 #0D0D0D;
        border-radius: 10px;
        font-family: 'Outfit', sans-serif;
        font-weight: 800;
        font-size: 0.78rem;
        padding: 6px 11px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: #0D0D0D;
        transition: all 0.1s ease;
      }
      .tb-btn:hover {
        background: #D4FF4F;
        transform: translate(-1px, -1px);
        box-shadow: 3px 3px 0 #0D0D0D;
      }
      .tb-btn:active {
        transform: translate(2px, 2px);
        box-shadow: 0px 0px 0 #0D0D0D;
      }
      .tb-btn.active-speed {
        background: #FFE566;
      }
      .tb-progress-wrap {
        width: 140px;
        height: 8px;
        background: #EFE8DA;
        border: 2px solid #0D0D0D;
        border-radius: 999px;
        overflow: hidden;
      }
      .tb-progress-bar {
        height: 100%;
        width: 0%;
        background: #0F1E3A;
        transition: width 0.3s linear;
      }
      .tb-info {
        font-family: 'Outfit', sans-serif;
        font-weight: 800;
        font-size: 0.82rem;
        color: #0F1E3A;
        white-space: nowrap;
        min-width: 170px;
      }
      .tb-close {
        background: #FF5A5A;
        color: #fff;
      }
      .tb-close:hover {
        background: #e04444;
      }

      /* Floating FAB Button on Home */
      .fab-design-tour {
        position: fixed;
        bottom: 24px;
        left: 24px;
        background: #FFE566;
        color: #0D0D0D;
        border: 3px solid #0D0D0D;
        border-radius: 14px;
        box-shadow: 4px 4px 0 0 #0D0D0D;
        font-family: 'Outfit', sans-serif;
        font-weight: 900;
        font-size: 0.82rem;
        padding: 9px 14px;
        cursor: pointer;
        z-index: 90;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        transition: all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .fab-design-tour:hover {
        background: #D4FF4F;
        transform: translate(-3px, -3px);
        box-shadow: 6px 6px 0 0 #0D0D0D;
      }
      .fab-design-tour:active {
        transform: translate(2px, 2px);
        box-shadow: 1px 1px 0 0 #0D0D0D;
      }
      @media (max-width: 640px) {
        .fab-design-tour {
          bottom: 16px;
          left: 16px;
          padding: 8px 11px;
          font-size: 0.75rem;
        }
        .tb-progress-wrap, .tb-info {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Create Virtual Cursor Element
  function createCursorEl(name, roleClass, badgeText, bgBadge) {
    const el = document.createElement('div');
    el.className = `v-cursor ${roleClass}`;
    el.id = `v-cursor-${name}`;
    el.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 3L19 11L11.5 13.5L8.5 21L4 3Z" fill="${bgBadge}" stroke="#0D0D0D" stroke-width="2" stroke-linejoin="round"/>
      </svg>
      <div class="v-badge">${badgeText}</div>
      <div class="v-action-toast"></div>
    `;
    return el;
  }

  // Build the Tour Overlay DOM
  function buildTourOverlay() {
    if (overlayEl) return overlayEl;

    overlayEl = document.createElement('div');
    overlayEl.id = 'design-tour-overlay';

    // 1. Selection Box
    const selBox = document.createElement('div');
    selBox.id = 'v-selection-box';
    selBox.innerHTML = `
      <span class="s-handle s-tl"></span>
      <span class="s-handle s-tr"></span>
      <span class="s-handle s-bl"></span>
      <span class="s-handle s-br"></span>
      <span class="s-tag">Component</span>
    `;
    overlayEl.appendChild(selBox);

    // 2. Three Virtual Cursors
    const cRiki = createCursorEl('riki', 'c-riki', '🟣 Riki Rivaldi (Lead)', '#0F1E3A');
    const cUi   = createCursorEl('ui',   'c-ui',   '🟢 UI Architect',      '#D4FF4F');
    const cAi   = createCursorEl('ai',   'c-ai',   '🟡 AI Copilot',        '#FFE566');
    overlayEl.appendChild(cRiki);
    overlayEl.appendChild(cUi);
    overlayEl.appendChild(cAi);

    // 3. Floating Toolbar
    const tb = document.createElement('div');
    tb.id = 'v-tour-toolbar';
    tb.innerHTML = `
      <div class="tb-info" id="v-tour-title">1/7: Merakit Hero</div>
      <div class="tb-progress-wrap">
        <div class="tb-progress-bar" id="v-tour-bar"></div>
      </div>
      <button type="button" class="tb-btn" id="v-tour-playpause" aria-label="Pause Tour">⏸ Pause</button>
      <button type="button" class="tb-btn" id="v-tour-speed" aria-label="Toggle Speed">1x</button>
      <button type="button" class="tb-btn tb-close" id="v-tour-exit" aria-label="Exit Tour">✕ Keluar</button>
    `;
    overlayEl.appendChild(tb);

    document.body.appendChild(overlayEl);

    // Bind Toolbar Events
    document.getElementById('v-tour-playpause').addEventListener('click', togglePause);
    document.getElementById('v-tour-speed').addEventListener('click', toggleSpeed);
    document.getElementById('v-tour-exit').addEventListener('click', stopTour);

    return overlayEl;
  }

  // Spawn visual click ripple
  function triggerRipple(x, y, color = '#0D0D0D') {
    const ripple = document.createElement('div');
    ripple.className = 'v-ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.borderColor = color;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 750);
  }

  // Move Virtual Cursor
  function moveCursor(cursorId, pageX, pageY, actionToast = '') {
    const el = document.getElementById(`v-cursor-${cursorId}`);
    if (!el) return;
    el.classList.add('visible');
    el.style.transform = `translate(${pageX}px, ${pageY}px)`;

    const toast = el.querySelector('.v-action-toast');
    if (toast && actionToast) {
      toast.textContent = actionToast;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2000 / playbackSpeed);
    }
  }

  // Update selection box on target element
  function highlightComponent(targetEl, tagText) {
    const selBox = document.getElementById('v-selection-box');
    if (!selBox || !targetEl) return;
    const rect = targetEl.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    selBox.style.top = `${rect.top + scrollY - 6}px`;
    selBox.style.left = `${rect.left + scrollX - 6}px`;
    selBox.style.width = `${rect.width + 12}px`;
    selBox.style.height = `${rect.height + 12}px`;
    const tag = selBox.querySelector('.s-tag');
    if (tag) tag.textContent = tagText;
    selBox.classList.add('active');
  }

  // Play a single scene
  function playScene(idx) {
    if (!isPlaying) return;
    if (idx >= TOUR_SCENES.length) {
      finishTour();
      return;
    }

    currentSceneIndex = idx;
    const scene = TOUR_SCENES[idx];
    const lang = getLang();

    // 1. Update Toolbar
    const titleEl = document.getElementById('v-tour-title');
    const barEl = document.getElementById('v-tour-bar');
    if (titleEl) titleEl.textContent = scene.title[lang] || scene.title.id;
    if (barEl) barEl.style.width = `${((idx + 1) / TOUR_SCENES.length) * 100}%`;

    // 2. Smoothly scroll target into view
    const target = document.querySelector(scene.targetSelector);
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: Math.max(0, topOffset), behavior: 'smooth' });

      setTimeout(() => {
        highlightComponent(target, scene.tagText[lang] || scene.tagText.id);
      }, 500 / playbackSpeed);
    }

    // 3. Clear previous action timers
    actionTimers.forEach(t => clearTimeout(t));
    actionTimers = [];

    // 4. Schedule cursor actions within this scene
    scene.cursorActions.forEach(act => {
      const t = setTimeout(() => {
        if (!isPlaying || isPaused || !target) return;
        const rect = target.getBoundingClientRect();
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        const posX = rect.left + scrollX + (rect.width * act.xRel);
        const posY = rect.top + scrollY + (rect.height * act.yRel);
        const toastMsg = act.text[lang] || act.text.id;

        moveCursor(act.cursor, posX, posY, toastMsg);

        if (act.action === 'click' || act.action === 'celebrate') {
          setTimeout(() => {
            triggerRipple(posX, posY, act.cursor === 'riki' ? '#0F1E3A' : '#D4FF4F');
          }, 350 / playbackSpeed);
        }
      }, act.delay / playbackSpeed);

      actionTimers.push(t);
    });

    // 5. Schedule Next Scene
    sceneTimer = setTimeout(() => {
      if (isPlaying && !isPaused) {
        playScene(idx + 1);
      }
    }, scene.duration / playbackSpeed);
  }

  // Toggle Pause/Play
  function togglePause() {
    const btn = document.getElementById('v-tour-playpause');
    const lang = getLang();
    if (isPaused) {
      isPaused = false;
      if (btn) btn.textContent = '⏸ Pause';
      playScene(currentSceneIndex);
    } else {
      isPaused = true;
      if (btn) btn.textContent = lang === 'en' ? '▶ Resume' : '▶ Lanjut';
      clearTimeout(sceneTimer);
      actionTimers.forEach(t => clearTimeout(t));
    }
  }

  // Toggle Playback Speed (1x -> 2x -> 1x)
  function toggleSpeed() {
    const btn = document.getElementById('v-tour-speed');
    if (playbackSpeed === 1.0) {
      playbackSpeed = 1.8;
      if (btn) {
        btn.textContent = '2x ⚡';
        btn.classList.add('active-speed');
      }
    } else {
      playbackSpeed = 1.0;
      if (btn) {
        btn.textContent = '1x';
        btn.classList.remove('active-speed');
      }
    }
  }

  // Start Tour
  function startTour() {
    if (isPlaying) return;
    injectStyles();
    buildTourOverlay();

    isPlaying = true;
    isPaused = false;
    currentSceneIndex = 0;
    playbackSpeed = 1.0;

    document.body.classList.add('tour-blueprint-active');
    setTimeout(() => document.body.classList.add('blueprint-on'), 100);

    const tb = document.getElementById('v-tour-toolbar');
    if (tb) tb.classList.add('visible');

    const speedBtn = document.getElementById('v-tour-speed');
    if (speedBtn) {
      speedBtn.textContent = '1x';
      speedBtn.classList.remove('active-speed');
    }

    const ppBtn = document.getElementById('v-tour-playpause');
    if (ppBtn) ppBtn.textContent = '⏸ Pause';

    // Close mobile menu if open
    const mob = document.getElementById('mobile-menu');
    if (mob && mob.classList.contains('open')) {
      const cls = document.getElementById('close-menu');
      if (cls) cls.click();
    }

    playScene(0);
  }

  // Stop / Exit Tour
  function stopTour() {
    isPlaying = false;
    isPaused = false;
    clearTimeout(sceneTimer);
    actionTimers.forEach(t => clearTimeout(t));
    actionTimers = [];

    document.body.classList.remove('blueprint-on');
    setTimeout(() => document.body.classList.remove('tour-blueprint-active'), 500);

    const tb = document.getElementById('v-tour-toolbar');
    if (tb) tb.classList.remove('visible');

    const selBox = document.getElementById('v-selection-box');
    if (selBox) selBox.classList.remove('active');

    document.querySelectorAll('.v-cursor').forEach(c => c.classList.remove('visible'));
  }

  // Tour Completion Finale
  function finishTour() {
    const lang = getLang();
    const titleEl = document.getElementById('v-tour-title');
    if (titleEl) {
      titleEl.textContent = lang === 'en' ? '🎉 Design Tour Complete!' : '🎉 Simulasi Desain Selesai!';
    }
    setTimeout(() => stopTour(), 2500);
  }

  // Initialize Trigger Buttons on DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    injectStyles();

    // 1. Desktop Nav Button
    const navBtn = document.getElementById('btn-design-tour');
    if (navBtn) navBtn.addEventListener('click', (e) => {
      e.preventDefault();
      startTour();
    });

    // 2. Mobile Menu Button
    const mobBtn = document.getElementById('btn-design-tour-mob');
    if (mobBtn) mobBtn.addEventListener('click', (e) => {
      e.preventDefault();
      startTour();
    });

    // 3. Floating Action Pill (FAB)
    const fab = document.getElementById('fab-design-tour');
    if (fab) fab.addEventListener('click', (e) => {
      e.preventDefault();
      startTour();
    });

    // 4. Keyboard Shortcuts: Esc to Exit, Space to Play/Pause
    document.addEventListener('keydown', (e) => {
      if (!isPlaying) return;
      if (e.key === 'Escape') {
        stopTour();
      } else if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        togglePause();
      }
    });
  });

  // Expose global controller
  window.AntigravityDesignTour = {
    start: startTour,
    stop: stopTour,
    togglePause,
    toggleSpeed
  };

})();

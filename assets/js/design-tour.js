/**
 * design-tour.js - Blank Canvas UI/UX Motion Assembly ("Stitch Design Animation")
 * Portofolio Neubrutalist - Riki Rivaldi, A.Md.Ak.
 */

(function () {
  'use strict';

  // State
  let isRunning = false;
  let isPaused = false;
  let currentStep = 0;
  let speed = 1.0;
  let timers = [];
  let modalEl = null;

  function getLang() {
    return document.documentElement.lang === 'en' ? 'en' : 'id';
  }

  // Inject CSS Styles for Canvas Motion
  function injectStyles() {
    if (document.getElementById('stitch-canvas-styles')) return;
    const style = document.createElement('style');
    style.id = 'stitch-canvas-styles';
    style.textContent = `
      /* Studio Modal Overlay */
      #stitch-studio-modal {
        position: fixed;
        inset: 0;
        background: rgba(15, 30, 58, 0.92);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        z-index: 100000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
        padding: 16px;
        font-family: 'Outfit', sans-serif;
        user-select: none;
        overflow: hidden;
      }
      #stitch-studio-modal.active {
        opacity: 1;
        pointer-events: auto;
      }

      /* Studio Window Frame */
      .stitch-window {
        width: 100%;
        max-width: 1040px;
        height: 90vh;
        max-height: 720px;
        background: #0D0D0D;
        border: 4px solid #0D0D0D;
        border-radius: 20px;
        box-shadow: 12px 12px 0px 0px #0F1E3A, 0 20px 40px rgba(0,0,0,0.5);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
        transform: scale(0.96);
        transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      #stitch-studio-modal.active .stitch-window {
        transform: scale(1);
      }

      /* Window Titlebar (macOS / Figma Style) */
      .stitch-titlebar {
        background: #fff;
        border-bottom: 3px solid #0D0D0D;
        padding: 10px 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      .stitch-dots {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .stitch-dot {
        width: 13px;
        height: 13px;
        border-radius: 50%;
        border: 2px solid #0D0D0D;
      }
      .stitch-dot.red { background: #FF5A5A; }
      .stitch-dot.yellow { background: #FFE566; }
      .stitch-dot.green { background: #D4FF4F; }

      .stitch-title-text {
        font-weight: 900;
        font-size: 0.85rem;
        color: #0F1E3A;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .stitch-badge-building {
        background: #FFE566;
        color: #0D0D0D;
        border: 1.5px solid #0D0D0D;
        padding: 1px 7px;
        border-radius: 6px;
        font-size: 0.68rem;
        font-weight: 800;
        animation: pulse-building 1.2s infinite alternate;
      }
      @keyframes pulse-building {
        from { opacity: 0.6; }
        to { opacity: 1; transform: scale(1.04); }
      }

      /* Main Artboard Canvas Workspace */
      .stitch-workspace {
        flex: 1;
        background: #1E293B;
        background-image:
          radial-gradient(#334155 1.5px, transparent 1.5px);
        background-size: 24px 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        padding: 20px;
      }

      /* The Blank Artboard Sheet (Kanvas Kosong) */
      .stitch-artboard {
        width: 100%;
        max-width: 900px;
        height: 100%;
        max-height: 560px;
        background: #F5F0E8;
        border: 3px solid #0D0D0D;
        border-radius: 16px;
        box-shadow: 8px 8px 0px 0px #0D0D0D;
        position: relative;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .stitch-artboard::-webkit-scrollbar { width: 8px; }
      .stitch-artboard::-webkit-scrollbar-thumb { background: #0F1E3A; border-radius: 4px; }

      /* Artboard Placeholder Grid (Shown when blank) */
      .artboard-empty-hint {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        color: #94A3B8;
        font-weight: 800;
        pointer-events: none;
        transition: opacity 0.4s ease;
      }
      .artboard-empty-hint.hidden {
        opacity: 0;
      }

      /* Snap/Bounce Animation for dropped elements */
      @keyframes pop-drop {
        0% {
          opacity: 0;
          transform: scale(0.6) translateY(-20px);
        }
        70% {
          opacity: 1;
          transform: scale(1.05) translateY(2px);
        }
        100% {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }

      .canvas-item {
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .canvas-item.assembled {
        opacity: 1;
        pointer-events: auto;
        animation: pop-drop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      /* Cursors Layer */
      .stitch-cursor {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 999;
        transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.25s ease;
        will-change: transform;
        opacity: 0;
      }
      .stitch-cursor.active {
        opacity: 1;
      }
      .stitch-cursor svg {
        width: 28px;
        height: 28px;
        filter: drop-shadow(2px 3px 0 #0D0D0D);
      }
      .stitch-cursor .sc-tag {
        position: absolute;
        top: 20px;
        left: 14px;
        white-space: nowrap;
        font-weight: 800;
        font-size: 0.68rem;
        padding: 2px 7px;
        border-radius: 6px;
        border: 2px solid #0D0D0D;
        box-shadow: 2px 2px 0 #0D0D0D;
      }
      .stitch-cursor.cur-stitch .sc-tag { background: #3B82F6; color: #fff; }
      .stitch-cursor.cur-riki   .sc-tag { background: #0F1E3A; color: #D4FF4F; }
      .stitch-cursor.cur-ai     .sc-tag { background: #FFE566; color: #0D0D0D; }

      /* Virtual Drag Ghost Box attached to cursor while moving */
      .sc-drag-ghost {
        position: absolute;
        top: 30px;
        left: 30px;
        background: rgba(212, 255, 79, 0.85);
        border: 2px dashed #0D0D0D;
        padding: 4px 8px;
        border-radius: 6px;
        font-weight: 900;
        font-size: 0.65rem;
        color: #0D0D0D;
        box-shadow: 3px 3px 0 #0D0D0D;
        opacity: 0;
        transform: scale(0.8);
        transition: opacity 0.2s ease, transform 0.2s ease;
      }
      .stitch-cursor.dragging .sc-drag-ghost {
        opacity: 1;
        transform: scale(1);
      }

      /* Interactive Click Ripple */
      .sc-ripple {
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 3px solid #D4FF4F;
        pointer-events: none;
        transform: translate(-50%, -50%) scale(0.2);
        animation: sc-rip 0.5s ease-out forwards;
      }
      @keyframes sc-rip {
        0%   { transform: translate(-50%, -50%) scale(0.2); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
      }

      /* Control Toolbar at bottom of window */
      .stitch-toolbar {
        background: #fff;
        border-top: 3px solid #0D0D0D;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      .stitch-progress-outer {
        flex: 1;
        max-width: 320px;
        height: 10px;
        background: #F5F0E8;
        border: 2px solid #0D0D0D;
        border-radius: 999px;
        overflow: hidden;
      }
      .stitch-progress-fill {
        height: 100%;
        width: 0%;
        background: #0F1E3A;
        transition: width 0.3s ease;
      }

      .st-btn {
        background: #F5F0E8;
        border: 2px solid #0D0D0D;
        box-shadow: 2px 2px 0 #0D0D0D;
        border-radius: 10px;
        font-family: 'Outfit', sans-serif;
        font-weight: 900;
        font-size: 0.78rem;
        padding: 6px 12px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: #0D0D0D;
        transition: all 0.1s ease;
      }
      .st-btn:hover {
        background: #D4FF4F;
        transform: translate(-1px, -1px);
        box-shadow: 3px 3px 0 #0D0D0D;
      }
      .st-btn:active {
        transform: translate(2px, 2px);
        box-shadow: 0px 0px 0 #0D0D0D;
      }
      .st-btn.active-speed {
        background: #FFE566;
      }
      .st-btn.st-close {
        background: #FF5A5A;
        color: #fff;
      }
      .st-btn.st-close:hover {
        background: #e04444;
      }

      /* Complete Overlay Banner */
      .stitch-complete-card {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.8);
        background: #fff;
        border: 4px solid #0D0D0D;
        box-shadow: 10px 10px 0px 0px #0F1E3A;
        border-radius: 20px;
        padding: 28px;
        text-align: center;
        z-index: 1000;
        opacity: 0;
        pointer-events: none;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        max-width: 90%;
      }
      .stitch-complete-card.show {
        opacity: 1;
        pointer-events: auto;
        transform: translate(-50%, -50%) scale(1);
      }
    `;
    document.head.appendChild(style);
  }

  // Build Studio Window HTML Structure
  function buildStudioDOM() {
    if (modalEl) return modalEl;

    modalEl = document.createElement('div');
    modalEl.id = 'stitch-studio-modal';

    modalEl.innerHTML = `
      <div class="stitch-window" role="dialog" aria-modal="true" aria-label="Studio Motion Desain">
        <!-- Titlebar -->
        <div class="stitch-titlebar">
          <div class="stitch-dots">
            <span class="stitch-dot red" id="st-dot-close" title="Tutup"></span>
            <span class="stitch-dot yellow"></span>
            <span class="stitch-dot green"></span>
          </div>
          <div class="stitch-title-text">
            <span>🎨 Canvas Studio · Riki Rivaldi Portfolio</span>
            <span class="stitch-badge-building" id="st-status-badge">⚡ Assembling Live...</span>
          </div>
          <button type="button" class="st-btn st-close" id="st-btn-close-top">✕ Tutup</button>
        </div>

        <!-- Canvas Workspace -->
        <div class="stitch-workspace" id="st-workspace">
          <!-- The Blank Canvas / Artboard -->
          <div class="stitch-artboard" id="st-artboard">
            <div class="artboard-empty-hint" id="st-empty-hint">
              <span style="font-size:2.4rem;">📐</span>
              <p style="font-size:0.9rem; text-transform:uppercase; letter-spacing:0.08em;">Kanvas Kosong (Blank Canvas)</p>
              <p style="font-size:0.75rem; color:#64748B;">Kursor siap merakit desain UI/UX portofolio...</p>
            </div>

            <!-- Assembled Block 1: Navbar Header -->
            <div class="canvas-item w-full" id="c-item-navbar" style="background:#fff; border:3px solid #0D0D0D; border-radius:14px; box-shadow:4px 4px 0 #0D0D0D; padding:12px 18px; display:flex; align-items:center; justify-content:space-between;">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:32px; height:32px; background:#D4FF4F; border:2px solid #0D0D0D; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:0.9rem; box-shadow:2px 2px 0 #0D0D0D;">R!</div>
                <span style="font-weight:900; font-size:1.1rem; color:#0D0D0D;">RIKI <span style="color:#0F1E3A;">RIVALDI</span></span>
              </div>
              <div style="display:flex; gap:12px; font-weight:800; font-size:0.75rem;">
                <span style="color:#0F1E3A;">Tentang</span>
                <span style="color:#0F1E3A;">Keahlian</span>
                <span style="color:#0F1E3A;">Proyek</span>
                <span style="color:#0F1E3A;">Sertifikat</span>
              </div>
              <div style="background:#0F1E3A; color:#D4FF4F; padding:4px 12px; border-radius:8px; border:2px solid #0D0D0D; font-weight:900; font-size:0.75rem; box-shadow:2px 2px 0 #0D0D0D;">Hubungi Saya →</div>
            </div>

            <!-- Assembled Block 2: Hero Grid (Text Left + Photo Right) -->
            <div class="canvas-item w-full" id="c-item-hero" style="display:grid; grid-template-columns:1.2fr 0.8fr; gap:20px; align-items:center; padding:10px 0;">
              <div>
                <div style="display:inline-flex; align-items:center; gap:6px; background:#A7B6D0; border:2px solid #0D0D0D; border-radius:999px; padding:3px 10px; font-size:0.68rem; font-weight:900; box-shadow:2px 2px 0 #0D0D0D; margin-bottom:12px;">
                  <span style="width:6px; height:6px; background:#D4FF4F; border-radius:50%; border:1px solid #0D0D0D;"></span>
                  TERBUKA UNTUK PELUANG KARIER &amp; FREELANCE
                </div>
                <h1 style="font-weight:900; font-size:2.2rem; line-height:1.05; color:#0D0D0D; margin-bottom:8px;">
                  Halo, Saya<br>
                  <span style="background:#FFE566; padding:0 6px; border:2px solid #0D0D0D; box-shadow:3px 3px 0 #0D0D0D; display:inline-block; transform:rotate(-1deg);">Riki Rivaldi</span>
                </h1>
                <p style="font-weight:800; font-size:1.05rem; color:#0F1E3A; margin-bottom:12px;">Accounting &amp; Financial System Specialist</p>
                <p style="font-size:0.8rem; font-weight:600; color:#4A4A4A; line-height:1.5; margin-bottom:14px;">
                  <strong>Ahli Madya Akuntansi (A.Md.Ak.)</strong> lulusan <strong>Politeknik Negeri Samarinda</strong>. Mengubah alur akuntansi manual menjadi sistem terotomatisasi berbasis SAK EMKM &amp; Macro VBA.
                </p>
                <div style="display:flex; gap:12px; align-items:center;">
                  <div style="background:#0F1E3A; color:#D4FF4F; padding:8px 16px; border-radius:10px; border:2px solid #0D0D0D; font-weight:900; font-size:0.8rem; box-shadow:3px 3px 0 #0D0D0D;">Hubungi Saya →</div>
                  <div style="background:#fff; color:#0D0D0D; padding:8px 16px; border-radius:10px; border:2px solid #0D0D0D; font-weight:900; font-size:0.8rem; box-shadow:3px 3px 0 #0D0D0D;">Jobstreet Profile</div>
                </div>
              </div>
              <div style="position:relative; display:flex; justify-content:center;">
                <!-- Layered Cards -->
                <div style="position:absolute; width:180px; height:230px; background:#A7B6D0; border:2px solid #0D0D0D; border-radius:14px; box-shadow:4px 4px 0 #0D0D0D; transform:rotate(6deg) translate(8px, 8px); opacity:0.6;"></div>
                <div style="position:absolute; width:180px; height:230px; background:#D4FF4F; border:2px solid #0D0D0D; border-radius:14px; box-shadow:4px 4px 0 #0D0D0D; transform:rotate(-3deg) translate(-4px, -4px); opacity:0.8;"></div>
                <div style="position:relative; width:185px; height:235px; background:linear-gradient(180deg,#C8E8FF,#E8F4FF); border:3px solid #0D0D0D; border-radius:16px; box-shadow:5px 5px 0 #0D0D0D; overflow:hidden;">
                  <img src="assets/img/profil-nobg.jpg" style="width:100%; height:100%; object-fit:cover; object-position:top;" alt="Profil Riki Rivaldi" />
                  <div style="position:absolute; bottom:8px; left:8px; right:8px; background:#0F1E3A; color:#D4FF4F; padding:3px 8px; border-radius:8px; border:1.5px solid #0D0D0D; font-weight:900; font-size:0.68rem; text-align:center;">
                    📍 Samarinda, Kaltim
                  </div>
                </div>
              </div>
            </div>

            <!-- Assembled Block 3: Stats & Core Competencies -->
            <div class="canvas-item w-full" id="c-item-stats" style="display:grid; grid-template-columns:1fr 1fr 2fr; gap:14px;">
              <div style="background:#fff; border:3px solid #0D0D0D; border-radius:14px; padding:14px; text-align:center; box-shadow:4px 4px 0 #0D0D0D;">
                <div style="font-weight:900; font-size:1.8rem; color:#0F1E3A; line-height:1;">3.59</div>
                <div style="font-size:0.68rem; font-weight:800; color:#7A7060; text-transform:uppercase; margin-top:4px;">IPK Kelulusan POLNES</div>
              </div>
              <div style="background:#fff; border:3px solid #0D0D0D; border-radius:14px; padding:14px; text-align:center; box-shadow:4px 4px 0 #0D0D0D;">
                <div style="font-weight:900; font-size:1.8rem; color:#0F1E3A; line-height:1;">5+</div>
                <div style="font-size:0.68rem; font-weight:800; color:#7A7060; text-transform:uppercase; margin-top:4px;">Proyek Digital Selesai</div>
              </div>
              <div style="background:#fff; border:3px solid #0D0D0D; border-radius:14px; padding:12px 16px; box-shadow:4px 4px 0 #0D0D0D; display:flex; flex-direction:column; justify-content:center; gap:6px;">
                <div style="display:flex; justify-content:space-between; font-weight:800; font-size:0.75rem;">
                  <span>Laporan Keuangan SAK EMKM</span>
                  <span style="color:#0F1E3A; font-weight:900;">90%</span>
                </div>
                <div style="height:6px; background:#E0D8CA; border:1.5px solid #0D0D0D; border-radius:3px; overflow:hidden;">
                  <div style="height:100%; width:90%; background:#0F1E3A;"></div>
                </div>
                <div style="display:flex; justify-content:space-between; font-weight:800; font-size:0.75rem; margin-top:2px;">
                  <span>Excel Macro VBA &amp; POS Systems</span>
                  <span style="color:#0F1E3A; font-weight:900;">92%</span>
                </div>
                <div style="height:6px; background:#E0D8CA; border:1.5px solid #0D0D0D; border-radius:3px; overflow:hidden;">
                  <div style="height:100%; width:92%; background:#D4FF4F;"></div>
                </div>
              </div>
            </div>

            <!-- Assembled Block 4: Featured HKI & Projects -->
            <div class="canvas-item w-full" id="c-item-project" style="background:#fff; border:3px solid #0D0D0D; border-radius:16px; box-shadow:5px 5px 0 #0D0D0D; padding:16px; display:grid; grid-template-columns:120px 1fr; gap:16px; align-items:center;">
              <div style="background:linear-gradient(135deg,#0F1E3A,#1E2F4F); border:2px solid #0D0D0D; border-radius:12px; height:90px; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#fff; text-align:center;">
                <span style="font-size:1.6rem;">©️</span>
                <span style="font-weight:900; font-size:0.68rem; color:#D4FF4F;">HKI DJKI</span>
              </div>
              <div>
                <div style="display:flex; gap:6px; margin-bottom:4px;">
                  <span style="background:#FFE566; border:1.5px solid #0D0D0D; padding:1px 6px; border-radius:4px; font-weight:900; font-size:0.62rem;">EC002026199600</span>
                  <span style="background:#D4FF4F; border:1.5px solid #0D0D0D; padding:1px 6px; border-radius:4px; font-weight:900; font-size:0.62rem;">Program Komputer</span>
                </div>
                <h3 style="font-weight:900; font-size:1.05rem; color:#0D0D0D; margin-bottom:2px;">Aplikasi PO-lne-S Mikro Loa Lepu</h3>
                <p style="font-size:0.75rem; color:#4A4A4A; font-weight:600; line-height:1.4;">
                  Program komputer resmi tercatat Ciptaan Kementerian Hukum RI. Melindungi SIA UMKM selama 50 tahun.
                </p>
              </div>
            </div>

            <!-- Assembled Block 5: Bankaltimtara Magang & Credentials -->
            <div class="canvas-item w-full" id="c-item-experience" style="background:#F5F0E8; border:3px solid #0D0D0D; border-radius:14px; box-shadow:4px 4px 0 #0D0D0D; padding:14px; display:flex; justify-content:space-between; align-items:center;">
              <div>
                <div style="display:inline-block; background:#FFE566; border:1.5px solid #0D0D0D; border-radius:4px; padding:1px 6px; font-size:0.62rem; font-weight:900; margin-bottom:4px;">1 Jun - 1 Jul 2025</div>
                <h4 style="font-weight:900; font-size:0.95rem; color:#0F1E3A;">Staf Magang · Bankaltimtara Sharia</h4>
                <p style="font-size:0.72rem; font-weight:600; color:#4A4A4A;">Otomatisasi pengolahan data keuangan lintas periode dengan Excel Macro VBA.</p>
              </div>
              <div style="background:#D4FF4F; border:2px solid #0D0D0D; border-radius:10px; padding:6px 12px; text-align:center; box-shadow:2px 2px 0 #0D0D0D;">
                <span style="font-weight:900; font-size:1.2rem; color:#0F1E3A;">92%</span>
                <p style="font-size:0.6rem; font-weight:800; color:#4A6040;">Waktu Dipangkas</p>
              </div>
            </div>
          </div>

          <!-- Virtual Cursors (Stitch Style) -->
          <div class="stitch-cursor cur-stitch" id="sc-stitch">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M4 3L19 11L11.5 13.5L8.5 21L4 3Z" fill="#3B82F6" stroke="#0D0D0D" stroke-width="2" stroke-linejoin="round"/>
            </svg>
            <div class="sc-tag">⚡ Stitch / UI Architect</div>
            <div class="sc-drag-ghost" id="sc-ghost-stitch">📦 Box Frame</div>
          </div>

          <div class="stitch-cursor cur-riki" id="sc-riki">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M4 3L19 11L11.5 13.5L8.5 21L4 3Z" fill="#0F1E3A" stroke="#0D0D0D" stroke-width="2" stroke-linejoin="round"/>
            </svg>
            <div class="sc-tag">🟣 Riki (Lead Dev)</div>
            <div class="sc-drag-ghost" id="sc-ghost-riki">✍️ Typography</div>
          </div>

          <div class="stitch-cursor cur-ai" id="sc-ai">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M4 3L19 11L11.5 13.5L8.5 21L4 3Z" fill="#FFE566" stroke="#0D0D0D" stroke-width="2" stroke-linejoin="round"/>
            </svg>
            <div class="sc-tag">🟡 AI Copilot</div>
            <div class="sc-drag-ghost" id="sc-ghost-ai">🎨 Neubrutalism Assets</div>
          </div>

          <!-- Celebration Completion Card -->
          <div class="stitch-complete-card" id="st-complete-card">
            <div style="font-size:3rem; margin-bottom:8px;">🚀✨</div>
            <h2 style="font-weight:900; font-size:1.6rem; color:#0F1E3A; margin-bottom:6px;">DESAIN UI/UX SELESAI DIRAKIT!</h2>
            <p style="font-size:0.88rem; font-weight:600; color:#4A4A4A; max-width:440px; margin:0 auto 18px;">
              Seluruh elemen website portofolio Riki Rivaldi telah selesai ditempelkan dari kanvas kosong menjadi desain neubrutalis utuh siap produksi.
            </p>
            <div style="display:flex; justify-content:center; gap:12px;">
              <button type="button" class="st-btn" id="st-btn-replay" style="background:#FFE566;">🔄 Putar Ulang Animasi</button>
              <button type="button" class="st-btn" id="st-btn-view-live" style="background:#D4FF4F;">👀 Lihat Website Asli</button>
            </div>
          </div>
        </div>

        <!-- Studio Control Toolbar -->
        <div class="stitch-toolbar">
          <div style="display:flex; align-items:center; gap:8px;">
            <button type="button" class="st-btn" id="st-btn-playpause">⏸ Pause</button>
            <button type="button" class="st-btn" id="st-btn-speed">1x</button>
            <button type="button" class="st-btn" id="st-btn-restart">↺ Restart</button>
          </div>
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-weight:800; font-size:0.75rem; color:#7A7060;" id="st-pct-label">0% Selesai</span>
            <div class="stitch-progress-outer">
              <div class="stitch-progress-fill" id="st-progress-fill"></div>
            </div>
          </div>
          <div>
            <button type="button" class="st-btn st-close" id="st-btn-close-bot">✕ Keluar Studio</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modalEl);

    // Event Listeners
    document.getElementById('st-btn-close-top').addEventListener('click', stopStudio);
    document.getElementById('st-btn-close-bot').addEventListener('click', stopStudio);
    document.getElementById('st-dot-close').addEventListener('click', stopStudio);
    document.getElementById('st-btn-playpause').addEventListener('click', togglePause);
    document.getElementById('st-btn-speed').addEventListener('click', toggleSpeed);
    document.getElementById('st-btn-restart').addEventListener('click', restartAnimation);
    document.getElementById('st-btn-replay').addEventListener('click', restartAnimation);
    document.getElementById('st-btn-view-live').addEventListener('click', stopStudio);

    return modalEl;
  }

  // Visual Click Ripple inside workspace
  function spawnRipple(x, y, color = '#D4FF4F') {
    const ws = document.getElementById('st-workspace');
    if (!ws) return;
    const r = document.createElement('div');
    r.className = 'sc-ripple';
    r.style.left = `${x}px`;
    r.style.top = `${y}px`;
    r.style.borderColor = color;
    ws.appendChild(r);
    setTimeout(() => r.remove(), 550);
  }

  // Move Cursor to element or relative position
  function moveStitchCursor(cursorId, x, y, isDragging = false, dragLabel = '') {
    const cur = document.getElementById(`sc-${cursorId}`);
    if (!cur) return;
    cur.classList.add('active');
    cur.style.transform = `translate(${x}px, ${y}px)`;

    const ghost = document.getElementById(`sc-ghost-${cursorId}`);
    if (ghost) {
      if (isDragging) {
        cur.classList.add('dragging');
        if (dragLabel) ghost.textContent = dragLabel;
      } else {
        cur.classList.remove('dragging');
      }
    }
  }

  // The Motion Graphic Timeline Script
  const TIMELINE_STEPS = [
    // Step 0: Initial Cursor Entry
    {
      time: 200,
      run: () => {
        const hint = document.getElementById('st-empty-hint');
        if (hint) hint.classList.remove('hidden');
        moveStitchCursor('stitch', 100, 100);
        moveStitchCursor('riki', 650, 80);
        moveStitchCursor('ai', 400, 450);
        updateProgress(5, 'Menyiapkan Kanvas Kosong...');
      }
    },
    // Step 1: Stitch drags and snaps Navbar Header
    {
      time: 1400,
      run: () => {
        const artboard = document.getElementById('st-artboard');
        const abRect = artboard.getBoundingClientRect();
        const wsRect = document.getElementById('st-workspace').getBoundingClientRect();

        // Stitch grabs navbar from top
        moveStitchCursor('stitch', 60, 40, true, '📐 Header Navbar');
        moveStitchCursor('riki', wsRect.width * 0.45, 120);

        setTimeout(() => {
          // Drop onto artboard
          const targetX = abRect.left - wsRect.left + 150;
          const targetY = abRect.top - wsRect.top + 40;
          moveStitchCursor('stitch', targetX, targetY, false);
          spawnRipple(targetX, targetY, '#3B82F6');

          const hint = document.getElementById('st-empty-hint');
          if (hint) hint.classList.add('hidden');

          const item = document.getElementById('c-item-navbar');
          if (item) item.classList.add('assembled');

          updateProgress(22, 'Menempelkan Rangka Navbar & Logo R!');
        }, 500 / speed);
      }
    },
    // Step 2: Riki & AI assemble the Hero Section
    {
      time: 3800,
      run: () => {
        const artboard = document.getElementById('st-artboard');
        const abRect = artboard.getBoundingClientRect();
        const wsRect = document.getElementById('st-workspace').getBoundingClientRect();

        moveStitchCursor('riki', wsRect.width * 0.85, 200, true, '✍️ Hero Typography');
        moveStitchCursor('ai', wsRect.width * 0.15, 300, true, '🖼️ Profile Photo Frame');

        setTimeout(() => {
          const targetX = abRect.left - wsRect.left + 220;
          const targetY = abRect.top - wsRect.top + 160;
          moveStitchCursor('riki', targetX, targetY, false);
          spawnRipple(targetX, targetY, '#D4FF4F');

          const photoX = abRect.left - wsRect.left + abRect.width * 0.75;
          const photoY = abRect.top - wsRect.top + 180;
          moveStitchCursor('ai', photoX, photoY, false);
          spawnRipple(photoX, photoY, '#FFE566');

          const item = document.getElementById('c-item-hero');
          if (item) item.classList.add('assembled');

          updateProgress(45, 'Menempelkan Tipografi & Foto Profil Neubrutalis');
        }, 600 / speed);
      }
    },
    // Step 3: Stitch & AI snap the Stat Cards and Skills Bar
    {
      time: 6800,
      run: () => {
        const artboard = document.getElementById('st-artboard');
        const abRect = artboard.getBoundingClientRect();
        const wsRect = document.getElementById('st-workspace').getBoundingClientRect();

        moveStitchCursor('stitch', wsRect.width * 0.1, 400, true, '📊 IPK 3.59 & Stats');
        moveStitchCursor('ai', wsRect.width * 0.7, 450, true, '⚡ Skill Bar SAK EMKM');

        setTimeout(() => {
          const targetX = abRect.left - wsRect.left + 160;
          const targetY = abRect.top - wsRect.top + 320;
          moveStitchCursor('stitch', targetX, targetY, false);
          spawnRipple(targetX, targetY, '#3B82F6');

          const item = document.getElementById('c-item-stats');
          if (item) item.classList.add('assembled');

          updateProgress(65, 'Menempelkan Kotak IPK 3.59 & Skill Bar');
        }, 600 / speed);
      }
    },
    // Step 4: Riki stamps the official HKI DJKI Project Card
    {
      time: 9800,
      run: () => {
        const artboard = document.getElementById('st-artboard');
        const abRect = artboard.getBoundingClientRect();
        const wsRect = document.getElementById('st-workspace').getBoundingClientRect();

        moveStitchCursor('riki', wsRect.width * 0.8, 100, true, '📜 Hak Cipta EC002026199600');
        moveStitchCursor('stitch', wsRect.width * 0.5, 300);

        setTimeout(() => {
          const targetX = abRect.left - wsRect.left + 350;
          const targetY = abRect.top - wsRect.top + 430;
          moveStitchCursor('riki', targetX, targetY, false);
          spawnRipple(targetX, targetY, '#FFE566');

          const item = document.getElementById('c-item-project');
          if (item) item.classList.add('assembled');

          // Auto-scroll artboard down to reveal progress
          artboard.scrollTo({ top: 320, behavior: 'smooth' });

          updateProgress(82, 'Mencap Sertifikat Resmi HKI DJKI');
        }, 650 / speed);
      }
    },
    // Step 5: AI & Stitch snap the Experience & Magang Card
    {
      time: 12800,
      run: () => {
        const artboard = document.getElementById('st-artboard');
        const abRect = artboard.getBoundingClientRect();
        const wsRect = document.getElementById('st-workspace').getBoundingClientRect();

        moveStitchCursor('ai', wsRect.width * 0.2, 500, true, '🏦 Magang Bankaltimtara 92%');
        moveStitchCursor('stitch', wsRect.width * 0.8, 500);

        setTimeout(() => {
          const targetX = abRect.left - wsRect.left + 420;
          const targetY = abRect.top - wsRect.top + 480;
          moveStitchCursor('ai', targetX, targetY, false);
          spawnRipple(targetX, targetY, '#D4FF4F');

          const item = document.getElementById('c-item-experience');
          if (item) item.classList.add('assembled');

          artboard.scrollTo({ top: 500, behavior: 'smooth' });

          updateProgress(95, 'Menempelkan Pengalaman Magang Bankaltimtara');
        }, 650 / speed);
      }
    },
    // Step 6: Completion Finale
    {
      time: 15500,
      run: () => {
        moveStitchCursor('stitch', 150, 150);
        moveStitchCursor('riki', 450, 80);
        moveStitchCursor('ai', 750, 150);

        updateProgress(100, '✨ Selesai 100%! Desain Siap Produksi');

        const card = document.getElementById('st-complete-card');
        if (card) card.classList.add('show');
      }
    }
  ];

  function updateProgress(pct, statusText) {
    const fill = document.getElementById('st-progress-fill');
    const pctLabel = document.getElementById('st-pct-label');
    const badge = document.getElementById('st-status-badge');
    if (fill) fill.style.width = `${pct}%`;
    if (pctLabel) pctLabel.textContent = `${pct}% Selesai`;
    if (badge && statusText) badge.textContent = `⚡ ${statusText}`;
  }

  // Clear Artboard to Blank State
  function resetArtboard() {
    clearAllTimers();
    const hint = document.getElementById('st-empty-hint');
    if (hint) hint.classList.remove('hidden');

    const card = document.getElementById('st-complete-card');
    if (card) card.classList.remove('show');

    document.querySelectorAll('.canvas-item').forEach(el => {
      el.classList.remove('assembled');
    });

    document.querySelectorAll('.stitch-cursor').forEach(c => {
      c.classList.remove('active', 'dragging');
    });

    const artboard = document.getElementById('st-artboard');
    if (artboard) artboard.scrollTo({ top: 0, behavior: 'instant' });

    updateProgress(0, 'Kanvas Siap...');
  }

  function clearAllTimers() {
    timers.forEach(t => clearTimeout(t));
    timers = [];
  }

  // Run the Motion Graphic Timeline
  function runTimeline() {
    clearAllTimers();
    isRunning = true;
    isPaused = false;

    TIMELINE_STEPS.forEach(step => {
      const t = setTimeout(() => {
        if (!isRunning || isPaused) return;
        step.run();
      }, step.time / speed);
      timers.push(t);
    });
  }

  function restartAnimation() {
    resetArtboard();
    setTimeout(() => {
      runTimeline();
    }, 200 / speed);
  }

  function togglePause() {
    const btn = document.getElementById('st-btn-playpause');
    if (isPaused) {
      isPaused = false;
      if (btn) btn.textContent = '⏸ Pause';
      // resume by restarting from current
      runTimeline();
    } else {
      isPaused = true;
      if (btn) btn.textContent = '▶ Lanjut';
      clearAllTimers();
    }
  }

  function toggleSpeed() {
    const btn = document.getElementById('st-btn-speed');
    if (speed === 1.0) {
      speed = 1.8;
      if (btn) {
        btn.textContent = '2x ⚡';
        btn.classList.add('active-speed');
      }
    } else {
      speed = 1.0;
      if (btn) {
        btn.textContent = '1x';
        btn.classList.remove('active-speed');
      }
    }
    restartAnimation();
  }

  function startStudio() {
    injectStyles();
    buildStudioDOM();

    modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Close mobile menu if open
    const mob = document.getElementById('mobile-menu');
    if (mob && mob.classList.contains('open')) {
      const cls = document.getElementById('close-menu');
      if (cls) cls.click();
    }

    restartAnimation();
  }

  function stopStudio() {
    isRunning = false;
    isPaused = false;
    clearAllTimers();

    if (modalEl) modalEl.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Bind Buttons on Page
  document.addEventListener('DOMContentLoaded', () => {
    injectStyles();

    // 1. Desktop Nav Button
    const navBtn = document.getElementById('btn-design-tour');
    if (navBtn) navBtn.addEventListener('click', (e) => {
      e.preventDefault();
      startStudio();
    });

    // 2. Mobile Menu Button
    const mobBtn = document.getElementById('btn-design-tour-mob');
    if (mobBtn) mobBtn.addEventListener('click', (e) => {
      e.preventDefault();
      startStudio();
    });

    // 3. Floating Action Button
    const fab = document.getElementById('fab-design-tour');
    if (fab) fab.addEventListener('click', (e) => {
      e.preventDefault();
      startStudio();
    });

    // 4. Keyboard Shortcuts: Esc to Exit, Space to Play/Pause
    document.addEventListener('keydown', (e) => {
      if (!modalEl || !modalEl.classList.contains('active')) return;
      if (e.key === 'Escape') {
        stopStudio();
      } else if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        togglePause();
      }
    });
  });

  // Expose global controller
  window.StitchDesignStudio = {
    open: startStudio,
    close: stopStudio,
    restart: restartAnimation
  };

})();

/**
 * i18n.js - Internationalization Engine & Translations (ID & EN)
 * Portofolio Neubrutalist - Riki Rivaldi, A.Md.Ak.
 */

const I18N_DATA = {
  id: {
    // Meta & Document
    pageTitle: "Riki Rivaldi, A.Md.Ak. - Accounting & Financial System Specialist",
    pageDesc: "Portfolio Riki Rivaldi, A.Md.Ak. - Lulusan D3 Akuntansi POLNES, Accounting & Financial System Specialist, Excel VBA Developer, App Developer. Pemegang HKI Program Komputer. Samarinda, Kalimantan Timur.",

    // Navbar & Mobile Menu
    navAbout: "Tentang",
    navSkills: "Keahlian",
    navProjects: "Proyek",
    navExperience: "Pengalaman",
    navCertificates: "Sertifikat",
    navContact: "Kontak",
    navDesignTour: "🎬 Proses Desain",
    fabDesignTour: "🎬 Simulasi Desain",
    navCta: "Hubungi Saya →",
    mobileCta: "Hubungi Saya",

    // Hero Section
    heroBadge: "Terbuka untuk Peluang Karier & Freelance",
    heroGreeting: "Halo, Saya",
    heroRole: "Accounting & Financial System Specialist",
    heroBio: "<strong style=\"color:#0F1E3A;\">Ahli Madya Akuntansi (A.Md.Ak.)</strong> lulusan <strong style=\"color:#0F1E3A;\">Politeknik Negeri Samarinda</strong> yang mengubah proses akuntansi manual menjadi sistem terotomatisasi dengan pengembangan Sistem Informasi Akuntansi.",
    heroContactBtn: "Hubungi Saya",
    heroJobstreetBtn: "Jobstreet Profile",
    heroStatGpaLabel: "IPK",
    heroStatProjectsLabel: "Proyek Selesai",
    heroLocation: "📍 Samarinda, Kalimantan Timur",

    // Stats Banner
    bannerDegreeDesc: "Ahli Madya Akuntansi · D3",
    bannerPolnesDesc: "Politeknik Negeri Samarinda · 2023-2026",
    bannerStatusDesc: "Siap Bekerja · 2026",

    // About Section
    aboutSectionMark: "★ Tentang Saya",
    aboutHeading: "Menjembatani <span class=\"neo-highlight-navy\">Keuangan</span> & <span class=\"neo-highlight\">Teknologi</span>",
    aboutP1: "Lulusan D3 Akuntansi <strong style=\"color:#0F1E3A;\">Politeknik Negeri Samarinda (POLNES)</strong> bergelar Ahli Madya Akuntansi (A.Md.Ak.), dengan spesialisasi pada pengelolaan siklus akuntansi, pengendalian internal persediaan, serta penyusunan laporan keuangan berbasis SAK EMKM.",
    aboutP2: "Unggul dalam merancang Sistem Informasi Akuntansi (SIA) berbasis Excel Macro VBA, mengembangkan aplikasi kasir (Point of Sale), serta memanfaatkan teknologi & AI untuk mengotomatisasi pengolahan data keuangan.",
    aboutCareerGoalTitle: "🎯 Tujuan Karier",
    aboutCareerGoalDesc: "Mengembangkan karier sebagai <strong style=\"color:#0F1E3A;\">Accounting & Financial System Specialist</strong> atau Staf Akuntansi/Keuangan yang menjembatani tata kelola keuangan dan transformasi digital.",
    aboutGpaLabel: "IPK",
    aboutProjectsLabel: "Proyek",
    aboutInterestsTitle: "Bidang Minat",
    aboutTagAccountingStaff: "Staf Akuntansi",

    // Skills Section
    skillsSectionMark: "⚡ Keahlian",
    skillsHeading: "Skills & <span class=\"neo-highlight\">Kompetensi</span>",
    skillAcc1: "Laporan Keuangan (SAK EMKM)",
    skillAcc2: "Siklus Akuntansi Terapan",
    skillAcc3: "Pengendalian Internal Persediaan (FIFO)",
    skillAcc4: "Rekonsiliasi & Verifikasi Transaksi",
    skillAcc5: "Administrasi Kas & Piutang",
    skillExcel1: "Microsoft Excel Advanced (Formula & PivotTable)",
    skillExcel2: "Macro VBA & UserForms",
    skillExcel3: "Dashboarding Dinamis",
    skillExcel4: "Google Apps Script (GAS)",
    skillWeb1: "JavaScript (ES6+)",
    skillWeb2: "HTML5 & Tailwind CSS",
    skillWeb3: "Supabase / REST API",
    skillWeb4: "Git / CLI / Vercel",
    softSkill1: "Analytical Problem Solving",
    softSkill2: "Logika & Perancangan Sistem",
    softSkill3: "Data-Driven Decision Making",
    softSkill4: "Ketelitian & Akurasi Tinggi",
    softSkill5: "Public Speaking",
    softSkill6: "Manajemen Waktu",
    softSkill7: "Kerja Tim",

    // Projects Section
    projectsSectionMark: "📁 Proyek",
    projectsHeading: "Pengembangan Sistem & <span class=\"neo-highlight\">Implementasi</span>",
    projectsSubheading: "Proyek nyata yang menggabungkan keahlian akuntansi dengan pengembangan sistem digital.",
    docGalleryLabel: "📸 Dokumentasi",
    screenshotPending: "Screenshot Menyusul",

    // Project HKI
    projHkiBadge: "HKI · DJKI",
    projHkiYear: "2026 · Program Komputer",
    projHkiTitle: "Aplikasi PO-lne-S Mikro Loa Lepu",
    projHkiDesc: "Program komputer yang resmi tercatat sebagai Ciptaan oleh Direktorat Jenderal Kekayaan Intelektual, Kementerian Hukum RI. Pertama kali diumumkan 6 September 2026 di Kab. Kutai Kartanegara dan dilindungi selama 50 tahun.",
    projHkiTag1: "Program Komputer",
    projHkiTag2: "Usaha Mikro",
    projHkiTag3: "Kutai Kartanegara",
    projHkiViewCert: "Lihat Sertifikat HKI →",
    projHkiDownloadPdf: "Unduh PDF",
    projHkiCoverTitle: "Hak Cipta Terdaftar",
    projHkiCoverSub: "No. Pencatatan 001542654",

    // Project 1 - SIA VBA
    proj1Badge: "Tugas Akhir",
    proj1Title: "SIA Berbasis Excel Macro VBA",
    proj1Subtitle: "Studi Kasus: Toko Agen Sosis Azizah",
    proj1Desc: "Aplikasi akuntansi terotomatisasi pengganti pencatatan manual - modul transaksi penjualan/pembelian, kartu persediaan otomatis, dan laporan keuangan sesuai standar SAK EMKM.",
    proj1Role: "Perancang Sistem Informasi Akuntansi",

    // Project 2 - POS Android
    proj2Badge: "Freelance",
    proj2Title: "Aplikasi POS & Pelaporan Keuangan",
    proj2Subtitle: "Point of Sale Android · Offline-first",
    proj2Desc: "Aplikasi kasir untuk ritel dengan modul Transaksi Kasir, Manajemen Produk & Stok, Buku Kas, Kontrol Utang/Piutang, serta Laporan Laba Rugi, Laporan Transaksi & Laporan Persediaan otomatis berstandar SAK EMKM.",
    proj2Role: "System Developer & Accounting Logic Designer",

    // Project 3 - SIA Yayasan
    proj3Badge: "PKM-PM POLNES",
    proj3Title: "Sistem Informasi Akademik & Website Yayasan",
    proj3Subtitle: "Yayasan At-Tarbiyyah Wijaya Kusuma",
    proj3Desc: "Digitalisasi administrasi akademik yayasan - PPDB Online, Portal Admin, Portal Siswa, serta manajemen halaman Profil, Berita, dan Galeri yang terintegrasi.",
    proj3Role: "Tim Pengembang Sistem - Program PKM-PM",
    proj3LiveDemo: "Kunjungi Website (Live Demo) →",

    // Project 4 - SI Logistik
    proj4Badge: "Freelance",
    proj4Year: "2026 · Aplikasi Offline",
    proj4Title: "Sistem Informasi Logistik",
    proj4Subtitle: "Aplikasi Manajemen Arus Barang & Kas Usaha",
    proj4Desc: "Aplikasi offline user-friendly untuk mengatur alur keluar masuk barang, menghasilkan laporan arus barang dan arus kas di lingkungan usaha, dengan fokus pengelolaan persediaan menggunakan metode rata-rata (Average Method).",
    proj4TagOffline: "Aplikasi Offline",
    proj4TagAverage: "Metode Rata-Rata",
    proj4TagCashFlow: "Arus Kas",
    proj4Role: "Freelance Developer & System Designer",

    // Experience Section
    expSectionMark: "💼 Pengalaman",
    expHeading: "Pendidikan & <span class=\"neo-highlight\">Pengalaman</span>",
    expWorkTitle: "🏦 Pengalaman Kerja",
    expInternRole: "Staf Magang - Financing Recovery & Operasional Syariah",
    expInternCompany: "PT BPD Kaltim Kaltara (Bankaltimtara) · Samarinda",
    expInternPeriod: "1 Jun - 1 Jul 2025",
    expInternB1: "Merancang otomatisasi pengolahan & rekapitulasi data keuangan lintas periode dengan formula lanjutan Excel dan Macro VBA - memangkas waktu pengerjaan laporan <strong style=\"color:#0F1E3A;\">92% (dari 2 jam menjadi 10 menit)</strong>.",
    expInternB2: "Melaksanakan verifikasi & rekonsiliasi harian dokumen bukti transaksi fisik terhadap laporan sistem perbankan untuk memastikan akurasi pencatatan dan kepatuhan pengendalian internal.",
    expInternStat1Label: "Waktu Laporan Dipangkas",
    expInternStat2Label: "Rekap Laporan",
    expInternTagRecon: "Rekonsiliasi",
    expInternTagSyariah: "Perbankan Syariah",
    expInternViewCert: "Lihat Sertifikat Magang →",
    expInternDownloadPdf: "Unduh PDF",
    expInternGalleryTitle: "📸 Dokumentasi Magang",

    // Education Card
    eduTitle: "🎓 Pendidikan",
    eduDegree: "D3 Akuntansi - A.Md.Ak.",
    eduCampus: "Politeknik Negeri Samarinda (POLNES)",
    eduDate: "2023 - 2026 · Yudisium 20 Agustus 2026",
    eduThesis: "<strong style=\"color:#0F1E3A;\">Tugas Akhir:</strong> Sistem Informasi Akuntansi Pencatatan Transaksi, Pengelolaan Persediaan, dan Laporan Keuangan pada Toko Agen Sosis Azizah Berbasis Macro Microsoft Excel.",
    eduTagGpa: "IPK 3.59",
    eduTagLsp: "Kompeten LSP",

    // Freelance Experience Card
    freeTitle: "⚡ Freelance Experience",
    freeRole: "Independent Developer",
    freeCompany: "Freelance Projects",
    freePeriod: "2025 - Sekarang",
    freeB1: "Aplikasi Kasir (POS) & Pelaporan Keuangan Android",
    freeB2: "Sistem Informasi Logistik & Arus Kas (Metode Rata-Rata)",
    freeB3: "Sistem Informasi Akademik & Portal PPDB Yayasan",

    // Certificates Section
    certSectionMark: "🏆 Sertifikat",
    certHeading: "Penghargaan & <span class=\"neo-highlight\">Sertifikasi</span>",
    certSubheading: "Klik gambar untuk memperbesar",
    certTagDegree: "Ijazah",
    certTitleDegree: "Ahli Madya Akuntansi (A.Md.Ak.)",
    certDescDegree: "Politeknik Negeri Samarinda · 17 Okt 2026",
    certTagCompetent: "Kompeten",
    certTitleLsp: "Uji Kompetensi - Teknisi Akuntansi Madya",
    certDescLsp: "LSP Politeknik Negeri Samarinda · 12 Okt 2026",
    certTagHki: "HKI",
    certTitleHki: "Surat Pencatatan Ciptaan - Program Komputer",
    certDescHki: "DJKI Kementerian Hukum RI · 14 Okt 2026",
    certTagIntern: "Magang",
    certTitleIntern: "Sertifikat Magang / PKL - Usaha Syariah",
    certDescIntern: "PT BPD Kaltim Kaltara · 7 Agu 2025",
    certTagToefl: "Skor 410",
    certTitleToefl: "TOEFL Prediction Test",
    certDescToefl: "UPA Bahasa POLNES · 8 Agu 2026",
    certTagMarket: "Pasar Modal",
    certTitleMarket: "Sekolah Pasar Modal",
    certDescMarket: "Bursa Efek Indonesia (IDX) · 2023",
    certTagSeminar: "Seminar",
    certTitleSeminar: "Peserta Seminar - Accounting Days 2023",
    certDescSeminar: "HMJ Akuntansi POLNES · 2023",

    // Contact Section
    contactSectionMark: "✉️ Kontak",
    contactHeading: "Mari <span style=\"background:#D4FF4F; color:#0D0D0D; padding:0 8px; border-radius:8px; border:2px solid #0D0D0D; box-shadow:3px 3px 0 #0D0D0D; display:inline-block; transform:rotate(-1deg);\">Terhubung</span>",
    contactSubheading: "Apakah Anda seorang HRD, klien, atau kolaborator? Kirimkan pesan Anda.",
    contactFormTitle: "Kirim Pesan",
    contactLabelName: "Nama Lengkap",
    contactPlaceholderName: "Nama Anda",
    contactLabelEmail: "Email",
    contactPlaceholderEmail: "email@perusahaan.com",
    contactLabelSubject: "Subjek",
    contactPlaceholderSubject: "Peluang Kerja / Kolaborasi / Pertanyaan",
    contactLabelMessage: "Pesan",
    contactPlaceholderMessage: "Tuliskan pesan Anda di sini...",
    contactSubmitBtn: "Kirim via Email →",
    contactSuccessMsg: "✓ Berhasil! Anda diarahkan ke aplikasi email.",
    contactInfoTitle: "Informasi Kontak",
    contactJobstreetView: "Lihat Profil Lengkap",
    contactOpenTitle: "🟢 Terbuka untuk Peluang",
    contactOpenDesc: "Sedang mencari posisi <strong style=\"color:#D4FF4F;\">Staf Akuntansi / Keuangan</strong> atau Accounting & Financial System Specialist. Fresh graduate A.Md.Ak. siap bekerja!",

    // Footer
    footerCopyright: "© 2026 Riki Rivaldi, A.Md.Ak. · D3 Akuntansi POLNES · Samarinda, Kalimantan Timur",

    // UI Helpers
    photoUnit: "foto",
    addPrefix: "Tambahkan:",
    coverProjectPrefix: "Sampul:"
  },

  en: {
    // Meta & Document
    pageTitle: "Riki Rivaldi, A.Md.Ak. - Accounting & Financial System Specialist",
    pageDesc: "Portfolio of Riki Rivaldi, A.Md.Ak. - D3 Accounting Graduate from POLNES, Accounting & Financial System Specialist, Excel VBA Developer, App Developer. Official Computer Program Copyright Holder. Samarinda, East Kalimantan.",

    // Navbar & Mobile Menu
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navExperience: "Experience",
    navCertificates: "Certificates",
    navContact: "Contact",
    navDesignTour: "🎬 Design Tour",
    fabDesignTour: "🎬 Live Design Tour",
    navCta: "Contact Me →",
    mobileCta: "Contact Me",

    // Hero Section
    heroBadge: "Open to Career Opportunities & Freelance",
    heroGreeting: "Hello, I am",
    heroRole: "Accounting & Financial System Specialist",
    heroBio: "<strong style=\"color:#0F1E3A;\">Associate of Applied Accounting (A.Md.Ak.)</strong> graduate from <strong style=\"color:#0F1E3A;\">State Polytechnic of Samarinda</strong> who transforms manual accounting workflows into automated systems through Accounting Information System development.",
    heroContactBtn: "Get in Touch",
    heroJobstreetBtn: "Jobstreet Profile",
    heroStatGpaLabel: "GPA",
    heroStatProjectsLabel: "Completed Projects",
    heroLocation: "📍 Samarinda, East Kalimantan",

    // Stats Banner
    bannerDegreeDesc: "Associate in Accounting · Diploma III",
    bannerPolnesDesc: "State Polytechnic of Samarinda · 2023-2026",
    bannerStatusDesc: "Ready to Work · Class of 2026",

    // About Section
    aboutSectionMark: "★ About Me",
    aboutHeading: "Bridging <span class=\"neo-highlight-navy\">Finance</span> & <span class=\"neo-highlight\">Technology</span>",
    aboutP1: "Accounting Diploma graduate from <strong style=\"color:#0F1E3A;\">State Polytechnic of Samarinda (POLNES)</strong> with an Associate Degree in Accounting (A.Md.Ak.), specializing in full accounting cycles, inventory internal controls, and SAK EMKM compliant financial reporting.",
    aboutP2: "Proficient in designing Accounting Information Systems (AIS) powered by Excel Macro VBA, engineering Point of Sale (POS) applications, and leveraging modern software tools & AI to automate end-to-end financial workflows.",
    aboutCareerGoalTitle: "🎯 Career Objective",
    aboutCareerGoalDesc: "Aiming to advance as an <strong style=\"color:#0F1E3A;\">Accounting & Financial System Specialist</strong> or Accounting/Finance Staff who bridges rigorous financial governance and digital automation.",
    aboutGpaLabel: "GPA",
    aboutProjectsLabel: "Projects",
    aboutInterestsTitle: "Areas of Interest",
    aboutTagAccountingStaff: "Accounting Staff",

    // Skills Section
    skillsSectionMark: "⚡ Core Skills",
    skillsHeading: "Skills & <span class=\"neo-highlight\">Competencies</span>",
    skillAcc1: "Financial Reporting (SAK EMKM Standard)",
    skillAcc2: "Applied Accounting Cycle",
    skillAcc3: "Internal Inventory Control (FIFO)",
    skillAcc4: "Reconciliation & Transaction Verification",
    skillAcc5: "Cash & Receivables Administration",
    skillExcel1: "Advanced Microsoft Excel (Formulas & PivotTable)",
    skillExcel2: "Macro VBA & UserForms",
    skillExcel3: "Dynamic Dashboarding",
    skillExcel4: "Google Apps Script (GAS)",
    skillWeb1: "JavaScript (ES6+)",
    skillWeb2: "HTML5 & Tailwind CSS",
    skillWeb3: "Supabase / REST API",
    skillWeb4: "Git / CLI / Vercel",
    softSkill1: "Analytical Problem Solving",
    softSkill2: "System Logic & Architecture Design",
    softSkill3: "Data-Driven Decision Making",
    softSkill4: "High Attention to Detail & Accuracy",
    softSkill5: "Public Speaking & Presentation",
    softSkill6: "Time Management",
    softSkill7: "Team Collaboration",

    // Projects Section
    projectsSectionMark: "📁 Projects",
    projectsHeading: "System Engineering & <span class=\"neo-highlight\">Implementation</span>",
    projectsSubheading: "Real-world projects blending solid accounting logic with digital system development.",
    docGalleryLabel: "📸 Documentation",
    screenshotPending: "Screenshot Coming Soon",

    // Project HKI
    projHkiBadge: "Copyright · DJKI",
    projHkiYear: "2026 · Computer Software",
    projHkiTitle: "PO-lne-S Micro Application Loa Lepu",
    projHkiDesc: "Computer software officially registered as an Intellectual Property Creation by the Directorate General of Intellectual Property (DJKI), Indonesian Ministry of Law. First published on September 6, 2026 in Kutai Kartanegara and protected for 50 years.",
    projHkiTag1: "Computer Software",
    projHkiTag2: "Micro Enterprise",
    projHkiTag3: "Kutai Kartanegara",
    projHkiViewCert: "View Copyright Certificate →",
    projHkiDownloadPdf: "Download PDF",
    projHkiCoverTitle: "Registered Copyright",
    projHkiCoverSub: "Registration No. 001542654",

    // Project 1 - SIA VBA
    proj1Badge: "Final Project / Thesis",
    proj1Title: "Excel Macro VBA Accounting System",
    proj1Subtitle: "Case Study: Azizah Sausage Wholesale Store",
    proj1Desc: "Automated accounting application replacing manual books: sales/purchasing transaction modules, automated perpetual stock cards, and SAK EMKM compliant financial statements.",
    proj1Role: "Accounting Information System Designer",

    // Project 2 - POS Android
    proj2Badge: "Freelance",
    proj2Title: "POS & Financial Reporting Application",
    proj2Subtitle: "Android Point of Sale · Offline-first",
    proj2Desc: "Retail cashier application with Cashier Shift Register, Product & Inventory Management, Cash Book, Accounts Receivable/Payable Control, and automated Income Statements, Sales Logs & Inventory Reports.",
    proj2Role: "System Developer & Accounting Logic Designer",

    // Project 3 - SIA Yayasan
    proj3Badge: "PKM-PM POLNES",
    proj3Title: "Academic Information System & Foundation Web",
    proj3Subtitle: "At-Tarbiyyah Wijaya Kusuma Foundation",
    proj3Desc: "Digitalization of academic foundation administration: Online Student Registration (PPDB), Admin Portal, Student Portal, and integrated Profile, News & Gallery management.",
    proj3Role: "System Development Team - PKM-PM Program",
    proj3LiveDemo: "Visit Website (Live Demo) →",

    // Project 4 - SI Logistik
    proj4Badge: "Freelance",
    proj4Year: "2026 · Offline Application",
    proj4Title: "Logistics Information System",
    proj4Subtitle: "Inventory Flow & Business Cash Flow Management",
    proj4Desc: "User-friendly offline software managing incoming and outgoing goods flow, generating inventory turnover and operational cash flow reports, using the Average Inventory Costing Method.",
    proj4TagOffline: "Offline App",
    proj4TagAverage: "Average Cost Method",
    proj4TagCashFlow: "Cash Flow",
    proj4Role: "Freelance Developer & System Designer",

    // Experience Section
    expSectionMark: "💼 Experience",
    expHeading: "Education & <span class=\"neo-highlight\">Experience</span>",
    expWorkTitle: "🏦 Work Experience",
    expInternRole: "Intern Staff - Financing Recovery & Sharia Operations",
    expInternCompany: "PT BPD Kaltim Kaltara (Bankaltimtara) · Samarinda",
    expInternPeriod: "Jun 1 - Jul 1, 2025",
    expInternB1: "Engineered cross-period financial data automation and reporting using advanced Excel formulas and Macro VBA, slashing report processing time by <strong style=\"color:#0F1E3A;\">92% (from 2 hours to 10 minutes)</strong>.",
    expInternB2: "Executed daily physical transaction proof verification and bank core system reconciliations to guarantee audit readiness, data accuracy, and strict internal control compliance.",
    expInternStat1Label: "Report Time Reduced",
    expInternStat2Label: "Report Summary Time",
    expInternTagRecon: "Reconciliation",
    expInternTagSyariah: "Islamic Banking",
    expInternViewCert: "View Internship Certificate →",
    expInternDownloadPdf: "Download PDF",
    expInternGalleryTitle: "📸 Internship Documentation",

    // Education Card
    eduTitle: "🎓 Education",
    eduDegree: "Diploma III in Accounting - A.Md.Ak.",
    eduCampus: "State Polytechnic of Samarinda (POLNES)",
    eduDate: "2023 - 2026 · Judiciary Aug 20, 2026",
    eduThesis: "<strong style=\"color:#0F1E3A;\">Final Project / Thesis:</strong> Accounting Information System for Transaction Recording, Inventory Management, and Financial Statements at Azizah Sausage Agency Store Based on Microsoft Excel Macros.",
    eduTagGpa: "GPA 3.59",
    eduTagLsp: "Certified by LSP",

    // Freelance Experience Card
    freeTitle: "⚡ Freelance Experience",
    freeRole: "Independent Developer",
    freeCompany: "Freelance Projects",
    freePeriod: "2025 - Present",
    freeB1: "Android Cashier (POS) & Financial Reporting Application",
    freeB2: "Logistics & Cash Flow Information System (Average Method)",
    freeB3: "Academic Information System & Student Admission Portal",

    // Certificates Section
    certSectionMark: "🏆 Certifications",
    certHeading: "Honors & <span class=\"neo-highlight\">Certifications</span>",
    certSubheading: "Click on any image to expand",
    certTagDegree: "Diploma",
    certTitleDegree: "Associate Degree in Accounting (A.Md.Ak.)",
    certDescDegree: "State Polytechnic of Samarinda · Oct 17, 2026",
    certTagCompetent: "Certified",
    certTitleLsp: "Competency Assessment - Associate Accounting Technician",
    certDescLsp: "LSP State Polytechnic of Samarinda · Oct 12, 2026",
    certTagHki: "Copyright",
    certTitleHki: "Official Copyright Record - Computer Program",
    certDescHki: "DJKI Ministry of Law, Republic of Indonesia · Oct 14, 2026",
    certTagIntern: "Internship",
    certTitleIntern: "Internship Certificate - Islamic Banking Division",
    certDescIntern: "PT BPD Kaltim Kaltara · Aug 7, 2025",
    certTagToefl: "Score 410",
    certTitleToefl: "TOEFL Prediction Test",
    certDescToefl: "Language Center UPA POLNES · Aug 8, 2026",
    certTagMarket: "Capital Market",
    certTitleMarket: "Capital Market School (SPM)",
    certDescMarket: "Indonesia Stock Exchange (IDX) · 2023",
    certTagSeminar: "Seminar",
    certTitleSeminar: "Participant - Accounting Days National Seminar 2023",
    certDescSeminar: "Accounting Student Association POLNES · 2023",

    // Contact Section
    contactSectionMark: "✉️ Contact",
    contactHeading: "Let's <span style=\"background:#D4FF4F; color:#0D0D0D; padding:0 8px; border-radius:8px; border:2px solid #0D0D0D; box-shadow:3px 3px 0 #0D0D0D; display:inline-block; transform:rotate(-1deg);\">Connect</span>",
    contactSubheading: "Are you a recruiter, client, or collaborator? Send me a message.",
    contactFormTitle: "Send a Message",
    contactLabelName: "Full Name",
    contactPlaceholderName: "Your Name",
    contactLabelEmail: "Email",
    contactPlaceholderEmail: "name@company.com",
    contactLabelSubject: "Subject",
    contactPlaceholderSubject: "Career Opportunity / Project Collaboration / Inquiry",
    contactLabelMessage: "Message",
    contactPlaceholderMessage: "Write your message here...",
    contactSubmitBtn: "Send via Email →",
    contactSuccessMsg: "✓ Success! You are being redirected to your email client.",
    contactInfoTitle: "Contact Information",
    contactJobstreetView: "View Full Profile",
    contactOpenTitle: "🟢 Open to Opportunities",
    contactOpenDesc: "Seeking positions as <strong style=\"color:#D4FF4F;\">Accounting / Finance Staff</strong> or Accounting & Financial System Specialist. Fresh graduate A.Md.Ak. ready to contribute!",

    // Footer
    footerCopyright: "© 2026 Riki Rivaldi, A.Md.Ak. · D3 Accounting POLNES · Samarinda, East Kalimantan",

    // UI Helpers
    photoUnit: "photos",
    addPrefix: "Add:",
    coverProjectPrefix: "Cover:"
  }
};

// Gallery Captions Dictionary per Folder
const GALLERY_CAPTIONS = {
  id: {
    "assets/dokumentasi/proyek-hki-polnes-loa-lepu": [
      "Sosialisasi & Demo Aplikasi PO-lne-S Mikro di Desa Loa Lepu",
      "Foto Bersama Pengabdian Masyarakat POLNES & Pelaku UMKM",
      "Implementasi di Koperasi Merah Putih Desa Loa Lepu"
    ],
    "assets/dokumentasi/proyek-sia-vba-sosis-azizah": [
      "Database Akun & Siklus Akuntansi",
      "Form Transaksi Penjualan (Kasir VBA)",
      "Dashboard Keuangan & Grafik Tren Penjualan"
    ],
    "assets/dokumentasi/proyek-pos-android": [
      "Buka Shift Kasir & Modal Kas Awal di Laci",
      "Operasional Tablet Kasir & Tren Penjualan",
      "Implementasi Sistem POS di Meja Kasir",
      "Uji Coba Lapangan & Kepuasan Pengguna"
    ],
    "assets/dokumentasi/proyek-sia-yayasan-pkm": [
      "Tampilan Beranda Website Resmi Yayasan di Smart TV",
      "Sosialisasi & Pemaparan Sistem oleh Riki Rivaldi",
      "Foto Bersama Tim PKM POLNES & Keluarga Besar Yayasan"
    ],
    "assets/dokumentasi/proyek-sistem-informasi-logistik": [
      "Dashboard Desktop: Input Barang Masuk & Keluar",
      "Modul Pengaturan: Sinkronisasi Multi-Device & Impor CSV",
      "Tampilan Smartphone: Dashboard Mutasi Barang Risgold",
      "Tampilan Smartphone: Pengaturan Sistem & Backup JSON"
    ],
    "assets/dokumentasi/magang-bankaltimtara": [
      "Verifikasi & Rekonsiliasi Dokumen Transaksi Harian",
      "Rapat Koordinasi & Evaluasi di Ruang Meeting",
      "Pelepasan Magang Bersama Pembimbing & Rekan Kerja Unit Syariah",
      "Foto Bersama Jajaran Staf & Karyawan Bankaltimtara Syariah"
    ],
    "assets/dokumentasi/pendidikan-polnes": [
      "Kebersamaan Mahasiswa D3 Akuntansi POLNES",
      "Yudisium Jurusan Akuntansi POLNES (20 Agustus 2026)",
      "Prosesi Wisuda & Penyerahan Ijazah Ahli Madya Akuntansi (A.Md.Ak.)"
    ]
  },
  en: {
    "assets/dokumentasi/proyek-hki-polnes-loa-lepu": [
      "Socialization & Live Demo of PO-lne-S Micro App in Loa Lepu Village",
      "Group Photo: POLNES Community Service Team & MSME Entrepreneurs",
      "Field Implementation at Merah Putih Cooperative, Loa Lepu Village"
    ],
    "assets/dokumentasi/proyek-sia-vba-sosis-azizah": [
      "Chart of Accounts Database & Complete Accounting Cycle",
      "Sales Transaction Entry Form (VBA POS Cashier)",
      "Financial Dashboard & Sales Revenue Trend Charts"
    ],
    "assets/dokumentasi/proyek-pos-android": [
      "Cashier Shift Opening & Drawer Starting Cash Setup",
      "Tablet Cashier Operations & Sales Trend Analytics",
      "On-Site POS System Implementation at Cashier Counter",
      "Live Field Testing & End-User Operational Satisfaction"
    ],
    "assets/dokumentasi/proyek-sia-yayasan-pkm": [
      "Foundation Official Website Homepage Displayed on Smart TV",
      "System Walkthrough & Presentation Delivered by Riki Rivaldi",
      "Commemorative Group Photo: POLNES PKM Team & Foundation Board"
    ],
    "assets/dokumentasi/proyek-sistem-informasi-logistik": [
      "Desktop Dashboard: Real-time Inbound & Outbound Goods Entry",
      "Settings Module: Multi-Device Sync & Bulk CSV Data Import",
      "Smartphone View: Risgold Inventory Movement & Mutasi Dashboard",
      "Smartphone View: System Configurations & JSON Database Backup"
    ],
    "assets/dokumentasi/magang-bankaltimtara": [
      "Daily Physical Transaction Voucher Verification & Reconciliation",
      "Coordination & Performance Evaluation Meeting in Boardroom",
      "Internship Farewell Ceremony with Mentors & Sharia Division Colleagues",
      "Group Commemorative Photo: Bankaltimtara Sharia Officers & Staff"
    ],
    "assets/dokumentasi/pendidikan-polnes": [
      "Classroom Camraderie: POLNES Diploma in Accounting Students",
      "Accounting Department Graduation Judiciary Ceremony (Aug 20, 2026)",
      "Commencement Ceremony & Diploma Conferral (A.Md.Ak. Degree)"
    ]
  }
};

/**
 * Switch and apply selected language across entire DOM
 * @param {'id'|'en'} lang
 */
function setLanguage(lang) {
  if (!I18N_DATA[lang]) lang = 'id';
  const dict = I18N_DATA[lang];

  // 1. Update Document Meta
  document.documentElement.lang = lang;
  if (dict.pageTitle) document.title = dict.pageTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.pageDesc) metaDesc.setAttribute('content', dict.pageDesc);

  // 2. Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // 3. Update placeholders with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // 4. Update titles/aria-labels with data-i18n-title
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key] !== undefined) {
      el.setAttribute('title', dict[key]);
    }
  });

  // 5. Update Gallery Captions in DOM dataset
  const captionsDict = GALLERY_CAPTIONS[lang] || GALLERY_CAPTIONS.id;
  document.querySelectorAll('.doc-gallery').forEach(gal => {
    const folder = gal.dataset.folder;
    if (folder && captionsDict[folder]) {
      gal.dataset.captions = captionsDict[folder].join('|');
      // Update slots if already rendered
      const slots = gal.querySelectorAll('.doc-slot.filled');
      slots.forEach((slot, idx) => {
        const cap = captionsDict[folder][idx];
        if (cap) {
          slot.title = cap;
          const img = slot.querySelector('img');
          if (img) img.alt = cap;
        }
      });
      // Update count badge text
      const head = gal.parentElement?.querySelector('.doc-gallery-head .doc-count');
      if (head) {
        const total = gal.dataset.count || '3';
        const filledCount = gal.querySelectorAll('.doc-slot.filled').length;
        head.textContent = `${filledCount}/${total} ${dict.photoUnit || 'foto'}`;
      }
    }
  });

  // 6. Update Active State of Language Buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  // 7. Save preference to localStorage
  try {
    localStorage.setItem('portfolio_language', lang);
  } catch (e) {
    /* storage quota or private mode fallback */
  }

  // Dispatch custom event for components
  window.dispatchEvent(new CustomEvent('portfolioLanguageChanged', { detail: { lang } }));
}

/**
 * Initialize language switcher on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
  // Determine starting language: stored preference or 'id' default
  let initialLang = 'id';
  try {
    const saved = localStorage.getItem('portfolio_language');
    if (saved && (saved === 'id' || saved === 'en')) {
      initialLang = saved;
    }
  } catch (e) {}

  // Attach click listeners to all .lang-btn
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      setLanguage(targetLang);
    });
  });

  // Apply initial language
  setLanguage(initialLang);
});


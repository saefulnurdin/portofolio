/**
 * PORTFOLIO MAIN JAVASCRIPT
 * Multi-Language (ID / EN), Theme Toggle (Default Dark), 
 * Project Detail Modal, Dynamic Typewriter, Smooth Scroll Spy & Form Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. MULTI-LANGUAGE TRANSLATION DICTIONARY (i18n)
     ========================================================================== */
  const translations = {
    id: {
      nav_home: 'Home',
      nav_project: 'Project',
      nav_about: 'About',
      nav_contact: 'Contact',

      hero_badge: 'Tersedia untuk Pekerjaan & Projek Baru',
      hero_greeting: 'Halo, Saya',
      hero_name: 'Saeful Nurdin',
      hero_role_prefix: 'Saya seorang',
      hero_desc: 'Mahasiswa Teknik Informatika yang senang membangun berbagai hal dengan teknologi. Mengembangkan website, aplikasi desktop, dan perangkat berbasis mikrokontroler untuk menciptakan solusi yang bermanfaat.',
      hero_cta_projects: 'Lihat Projek',
      hero_cta_contact: 'Hubungi Saya',
      hero_scroll_down: 'Scroll ke Tentang Saya',

      about_tag: 'Tentang Saya',
      about_title: 'Membangun, Bereksperimen, dan Terus Berkembang',
      about_desc1: 'Saya merupakan mahasiswa Teknik Informatika yang memiliki ketertarikan dalam pengembangan perangkat lunak dan teknologi berbasis perangkat keras. Saya memiliki pengalaman mengerjakan berbagai Projek, mulai dari pengembangan website, aplikasi desktop, hingga pembuatan alat berbasis mikrokontroler.',
      about_desc2: 'Melalui berbagai Projek tersebut, saya senang mempelajari bagaimana teknologi dapat digunakan untuk membangun solusi yang bermanfaat dan menyelesaikan permasalahan di kehidupan sehari-hari maupun kebutuhan industri. Saya terus mengembangkan kemampuan di bidang Web Development, Desktop Development, serta Embedded System dan Mikrokontroler.',
    
      stat_exp: 'Tahun Pengalaman',
      stat_projects: 'Projek Selesai',
      stat_uptime: 'Kepuasan Klien',
      stat_tech: 'Teknologi Dikuasai',

      skills_title: 'Keahlian & Tech Stack',
      skills_frontend: 'Frontend Development',
      skills_backend: 'Backend & APIs',
      skills_cloud: 'Cloud, DevOps & Database',
      skills_tools: 'Tools & AI Ecosystem',

      projects_tag: 'Portofolio Showcase',
      projects_title: 'Projek & Karya',
      projects_subtitle: 'Kumpulan Projek yang telah saya rancang dan kembangkan, mulai dari aplikasi web dan desktop hingga sistem embedded.',

      filter_all: 'Semua Projek',
      filter_web: 'Web',
      filter_desktop: 'Desktop',
      filter_embedded: 'Embedded',

      btn_view_detail: 'Detail Projek',
      btn_live_demo: 'Live Demo',
      btn_source_code: 'Source Code',
      modal_features_title: 'Fitur Utama & Keunggulan',
      modal_tech_title: 'Teknologi yang Digunakan',

      contact_tag: 'Mari Berkolaborasi',
      contact_title: 'Punya Ide Projek? Hubungi Saya',
      contact_subtitle: 'Saya selalu terbuka untuk mendiskusikan peluang kerja, Projek kolaborasi, atau sekadar bertukar wawasan seputar teknologi.',
      contact_email_title: 'Kirim Email Langsung',
      contact_phone_title: 'WhatsApp / Telegram',
      contact_loc_title: 'Lokasi Kerja',
      contact_loc_val: 'Karawang, Indonesia (Bisa Remote)',

      form_subject: 'Topik / Subjek',
      form_subject_placeholder: 'Diskusi Projek / Penawaran Kerja',
      form_message: 'Pesan Anda',
      form_message_placeholder: 'Tuliskan detail ide atau pertanyaan Anda di sini...',
      form_send: 'Kirim Pesan',
      form_sending: 'Membuka Email...',
      toast_success: 'Aplikasi email dibuka. Silakan tekan Kirim untuk mengirim pesan.',

      footer_copy: '© 2026 Saeful Nurdin. Mengubah ide menjadi pengalaman digital.',
      cert_title: 'Pelatihan & Sertifikasi'
    },
    en: {
      nav_home: 'Home',
      nav_project: 'Project',
      nav_about: 'About',
      nav_contact: 'Contact',

      hero_badge: 'Available for New Projects & Roles',
      hero_greeting: 'Hello, I am',
      hero_name: 'Saeful Nurdin',
      hero_role_prefix: 'I am a',
      hero_desc: 'Informatics Engineering student who loves building various things with technology. Developing websites, desktop applications, and microcontroller-based devices to create impactful solutions.',
      hero_cta_projects: 'View Projects',
      hero_cta_contact: 'Get In Touch',
      hero_scroll_down: 'Scroll to About Me',

      about_tag: 'About Me',
      about_title: 'Build, Experiment, and Keep Growing',
      about_desc1: 'I am an Informatics Engineering student with a strong interest in software development and hardware-based technologies. I have experience working on various projects, ranging from website development and desktop applications to building microcontroller-based devices.',
      about_desc2: 'Through these projects, I enjoy learning how technology can be used to build useful solutions and solve problems in everyday life as well as meet industry needs. I continuously develop my skills in Web Development, Desktop Development, Embedded Systems, and Microcontrollers.',

      stat_exp: 'Years Experience',
      stat_projects: 'Completed Projects',
      stat_uptime: 'Client Satisfaction',
      stat_tech: 'Tech Mastered',

      skills_title: 'Skills & Tech Stack',
      skills_frontend: 'Frontend Development',
      skills_backend: 'Backend & APIs',
      skills_cloud: 'Cloud, DevOps & Database',
      skills_tools: 'Tools & AI Ecosystem',

      projects_tag: 'Portfolio Showcase',
      projects_title: 'Projects & Work',
      projects_subtitle: 'A collection of projects I’ve designed and developed, ranging from web and desktop applications to embedded systems.',

      filter_all: 'All Projects',
      filter_web: 'Web',
      filter_desktop: 'Desktop',
      filter_embedded: 'Embedded',

      btn_view_detail: 'Project Details',
      btn_live_demo: 'Live Demo',
      btn_source_code: 'Source Code',
      modal_features_title: 'Key Highlights & Features',
      modal_tech_title: 'Technologies Used',

      contact_tag: "Let's Connect",
      contact_title: 'Have a Project Idea? Get in Touch',
      contact_subtitle: "I'm always open to discussing new engineering opportunities, freelance projects, or tech collaborations.",
      contact_email_title: 'Direct Email',
      contact_phone_title: 'WhatsApp / Telegram',
      contact_loc_title: 'Work Location',
      contact_loc_val: 'Karawang, Indonesia (Remote Friendly)',

      form_subject: 'Subject',
      form_subject_placeholder: 'Project Discussion / Job Offer',
      form_message: 'Your Message',
      form_message_placeholder: 'Write your project idea or inquiry here...',
      form_send: 'Send Message',
      form_sending: 'Opening Email...',
      toast_success: 'Your email app is open. Press Send to deliver the message.',

      footer_copy: '© 2026 Saeful Nurdin. Turning ideas into digital experiences.',
      cert_title: 'Training & Certifications'
    }
  };

  /* ==========================================================================
     2. PROJECT DATABASE (DETAILED DATA FOR CARDS & MODAL)
     ========================================================================== */
  const projectsData = [
    {
      id: 'library',
      category: 'web',
      image: 'assets/images/project-web.jpg',
      title: {
        id: 'Sistem Perpustakaan Berbasis Web',
        en: 'Web Based Library Management System'
      },
      shortDesc: {
        id: 'Platform perpustakaan berbasis web untuk mengelola data buku, anggota, serta transaksi peminjaman dan pengembalian secara mudah dan terorganisir.',
        en: 'A web based library platform for managing books, members, and borrowing and return transactions easily and efficiently.'
      },
      fullDesc: {
        id: 'Sistem perpustakaan berbasis web yang membantu pengelolaan katalog buku, data anggota, serta proses peminjaman dan pengembalian secara digital. Dirancang dengan antarmuka yang sederhana agar pengelolaan perpustakaan lebih praktis dan efisien.',
        en: 'A web based library system designed to manage book catalogs, member data, and borrowing and return processes digitally. It features a simple interface to make library management more practical and efficient.'
      },
      tags: ['HTML', 'CSS-Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
      features: {
        id: [
          'Pengelolaan data buku dan katalog perpustakaan',
          'Manajemen data anggota perpustakaan',
          'Pencatatan transaksi peminjaman dan pengembalian',
          'Pencarian dan pengelolaan data secara terstruktur'
        ],
        en: [
          'Book and library catalog management',
          'Library member data management',
          'Borrowing and return transaction tracking',
          'Structured data search and management'
        ]
      },
      liveDemo: '#home',
      github: '#home'
    },
    {
      id: 'persurata',
      category: 'desktop',
      image: 'assets/images/project-desktop.jpg',
      title: {
        id: 'Sistem Administrasi Persuratan Berbasis Desktop',
        en: 'Desktop Based Administrative Letter System'
      },
      shortDesc: {
        id: 'Aplikasi administrasi persuratan berbasis desktop untuk mengelola pembuatan dan pencatatan berbagai surat secara lebih praktis dan terorganisir.',
        en: 'A desktop based correspondence administration application for managing and recording various types of letters in a practical and organized way.'
      },

      fullDesc: {
        id: 'Sistem administrasi persuratan berbasis desktop yang digunakan untuk mengelola berbagai surat administrasi seperti SKTM, SKD, surat keterangan usaha, dan surat lainnya. Dibangun menggunakan Visual Studio dengan VB.NET dan Microsoft Access sebagai database.',
        en: 'A desktop based correspondence administration system for managing various administrative letters such as SKTM, SKD, business certificates, and other types of letters. Built using Visual Studio with VB.NET and Microsoft Access as the database.'
      },

      tags: ['VB.NET', 'Visual Studio', 'Microsoft Access'],

      features: {
        id: [
          'Pengelolaan berbagai jenis surat administrasi',
          'Pembuatan surat secara digital',
          'Pencatatan dan pengelolaan data surat',
          'Penyimpanan data menggunakan database Microsoft Access'
        ],
        en: [
          'Management of various types of administrative letters',
          'Digital letter creation',
          'Letter data recording and management',
          'Data storage using Microsoft Access database'
        ]
      },
      liveDemo: '#home',
      github: '#home'
    },
    {
      id: 'filling',
      category: 'embedded',
      image: 'assets/images/project-embedded.jpg',
      title: {
        id: 'Sistem Pengisian Air Otomatis dengan Pengaturan Volume',
        en: 'Automatic Water Filling System with Volume Control'
      },
      shortDesc: {
        id: 'Alat pengisian air otomatis yang memungkinkan pengguna mengatur volume air melalui keypad dan menampilkan proses pengisian secara real-time.',
        en: 'An automatic water filling system that allows users to set the desired water volume using a keypad and monitor the filling process in real time.'
      },

      fullDesc: {
        id: 'Sistem pengisian air otomatis berbasis Arduino Nano yang dirancang untuk mengisi botol sesuai volume yang telah ditentukan. Pengguna dapat mengatur volume melalui keypad, sementara LCD I2C 20x4 menampilkan informasi proses pengisian. Sistem menggunakan flow sensor untuk mengukur aliran air, water pump untuk memompa air, dan solenoid valve untuk mengontrol aliran.',
        en: 'An Arduino Nano-based automatic water filling system designed to fill bottles according to a predefined volume. Users can set the desired volume using a keypad, while the 20x4 I2C LCD displays the filling process. The system uses a flow sensor to measure water flow, a water pump for water delivery, and a solenoid valve to control the water flow.'
      },

      tags: [
        'Arduino Nano',
        'Flow Sensor',
        'Solenoid Valve',
        'Keypad',
        'Water Pump',
        'LCD I2C'
      ],

      features: {
        id: [
          'Pengaturan volume air melalui keypad',
          'Pengukuran volume air menggunakan flow sensor',
          'Kontrol aliran air secara otomatis dengan solenoid valve',
          'Monitoring proses pengisian melalui LCD I2C 20x4'
        ],
        en: [
          'Water volume control using a keypad',
          'Water volume measurement using a flow sensor',
          'Automatic water flow control using a solenoid valve',
          'Filling process monitoring through a 20x4 I2C LCD'
        ]
      },
      liveDemo: '#home',
      github: '#home'
    },
    {
      id: 'pos',
      category: 'desktop',
      image: 'assets/images/project-desktop.jpg',
      title: {
        id: 'Aplikasi Point of Sale (POS) Berbasis Desktop',
        en: 'Desktop Based Point of Sale (POS) Application'
      },
      shortDesc: {
        id: 'Aplikasi POS desktop untuk mengelola produk, stok, transaksi penjualan, pembayaran, dan laporan secara terintegrasi menggunakan VB.NET dan Microsoft Access.',
        en: 'Desktop POS application for managing products, inventory, sales transactions, payments, and reports using VB.NET and Microsoft Access.'
      },

      fullDesc: {
        id: 'Aplikasi Point of Sale (POS) berbasis desktop yang dirancang untuk membantu berbagai jenis usaha dalam mengelola operasional penjualan secara terintegrasi. Dibangun menggunakan VB.NET Windows Forms dengan Microsoft Access sebagai database, aplikasi ini menyediakan pengelolaan produk dan kategori, kontrol stok, transaksi penjualan, perhitungan diskon dan kembalian, pencetakan struk, serta laporan penjualan dan stok. Sistem juga dilengkapi autentikasi pengguna untuk membantu menjaga keamanan akses dan mempermudah pengelolaan kasir.',
        en: 'A desktop-based Point of Sale (POS) application designed to help various types of businesses manage their sales operations in an integrated way. Built with VB.NET Windows Forms and Microsoft Access as the database, the application provides product and category management, inventory control, sales transactions, discount and change calculations, receipt printing, and sales and inventory reports. The system also includes user authentication to improve access security and simplify cashier management.'
      },

      tags: [
        'VB.NET',
        'Windows Forms',
        'Microsoft Access',
        'Point of Sale',
        'Desktop Application'
      ],

      features: {
        id: [
          'Autentikasi pengguna untuk membedakan akses admin dan kasir',
          'Manajemen produk, kategori, harga, dan stok barang',
          'Transaksi penjualan dengan perhitungan total, diskon, pembayaran, dan kembalian',
          'Pencetakan struk transaksi dan laporan penjualan serta stok'
        ],
        en: [
          'User authentication with separate admin and cashier access',
          'Product, category, pricing, and inventory management',
          'Sales transactions with automatic total, discount, payment, and change calculation',
          'Transaction receipt printing with sales and inventory reports'
        ]
      },
      liveDemo: '#home',
      github: '#home'
    },
    {
      id: 'rfid',
      category: 'embedded',
      image: 'assets/images/project-desktop.jpg',
      title: {
        id: 'Sistem Absensi RFID Berbasis VB.NET',
        en: 'RFID Attendance System Based on VB.NET'
      },
      shortDesc: {
        id: 'Aplikasi absensi desktop berbasis RFID untuk mencatat kehadiran secara otomatis dan terintegrasi menggunakan VB.NET Windows Forms serta Microsoft Access.',
        en: 'RFID-based desktop attendance application for automatically recording attendance using VB.NET Windows Forms and Microsoft Access.'
      },

      fullDesc: {
        id: 'Aplikasi Sistem Absensi berbasis RFID yang dirancang untuk mempermudah proses pencatatan kehadiran secara cepat dan terotomatisasi. Dibangun menggunakan VB.NET Windows Forms dengan Microsoft Access sebagai database, sistem ini terintegrasi dengan perangkat RFID untuk membaca kartu atau tag pengguna dan mencatat waktu kehadiran secara langsung. Aplikasi menyediakan pengelolaan data pengguna, pencatatan absensi masuk dan keluar, riwayat kehadiran, serta laporan absensi untuk membantu proses monitoring dan administrasi kehadiran.',
        en: 'A desktop-based RFID Attendance System designed to simplify attendance recording through a fast and automated process. Built using VB.NET Windows Forms with Microsoft Access as the database, the system integrates with an RFID device to read user cards or tags and record attendance timestamps in real time. The application provides user management, check-in and check-out attendance tracking, attendance history, and attendance reports to support monitoring and attendance administration.'
      },

      tags: [
        'VB.NET',
        'Windows Forms',
        'RFID',
        'Arduino UNO',
        'Microsoft Access',
        'Attendance System',
        'Desktop Application'
      ],

      features: {
        id: [
          'Integrasi perangkat RFID untuk membaca kartu atau tag secara otomatis',
          'Pencatatan waktu kehadiran masuk dan keluar secara real-time',
          'Manajemen data pengguna dan identitas kartu RFID',
          'Riwayat serta laporan absensi untuk memantau kehadiran'
        ],
        en: [
          'RFID device integration for automatic card or tag reading',
          'Real-time check-in and check-out attendance recording',
          'User management with RFID card identity mapping',
          'Attendance history and reports for monitoring attendance'
        ]
      },
      liveDemo: '#home',
      github: '#home'
    },
    {
      id: 'library-desktop',
      category: 'desktop',
      image: 'assets/images/project-desktop.jpg',
      title: {
        id: 'Sistem Perpustakaan Berbasis Desktop',
        en: 'Desktop Based Library Management System'
      },

      shortDesc: {
        id: 'Aplikasi perpustakaan berbasis desktop untuk mengelola data buku, anggota, serta transaksi peminjaman dan pengembalian secara terintegrasi menggunakan VB.NET dan Microsoft Access.',
        en: 'A desktop-based library application for managing books, members, and borrowing and return transactions using VB.NET and Microsoft Access.'
      },

      fullDesc: {
        id: 'Sistem perpustakaan berbasis desktop yang dirancang untuk membantu pengelolaan data buku, anggota, serta proses peminjaman dan pengembalian secara terkomputerisasi. Dibangun menggunakan VB.NET Windows Forms dengan Microsoft Access sebagai database, aplikasi ini menyediakan pengelolaan katalog buku, data anggota, pencatatan transaksi peminjaman dan pengembalian, serta pencarian data untuk membantu proses administrasi perpustakaan menjadi lebih praktis dan terorganisir.',
        en: 'A desktop-based library management system designed to simplify the management of books, members, and borrowing and return processes through a computerized system. Built using VB.NET Windows Forms with Microsoft Access as the database, the application provides book catalog management, member data management, borrowing and return transaction tracking, and structured data search to make library administration more practical and organized.'
      },

      tags: [
        'VB.NET',
        'Windows Forms',
        'Microsoft Access',
        'Library Management',
        'Desktop Application'
      ],

      features: {
        id: [
          'Pengelolaan data buku dan katalog perpustakaan',
          'Manajemen data anggota perpustakaan',
          'Pencatatan transaksi peminjaman dan pengembalian buku',
          'Pencarian serta pengelolaan data perpustakaan secara terstruktur'
        ],
        en: [
          'Book and library catalog management',
          'Library member data management',
          'Borrowing and return transaction tracking',
          'Structured library data search and management'
        ]
      },
      liveDemo: '#home',
      github: '#home'
    }
  ];

  /* ==========================================================================
     3. LANGUAGE ENGINE & STATE
     ========================================================================== */
  let currentLang = localStorage.getItem('user_lang') || 'id';

  const applyLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('user_lang', lang);
    document.documentElement.lang = lang;

    // Update Text Elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    // Update Lang button text
    const langBtnText = document.getElementById('current-lang-text');
    if (langBtnText) {
      langBtnText.textContent = lang === 'id' ? '🇮🇩 ID' : '🇬🇧 EN';
    }

    // Re-render project cards with translated text
    renderProjectCards();
  };

  // Language Toggle Button Event
  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'id' ? 'en' : 'id';
      applyLanguage(nextLang);
    });
  }

  /* ==========================================================================
     4. THEME MANAGER (DARK MODE DEFAULT)
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  // Default to dark mode unless user explicitly selected light previously
  const savedTheme = localStorage.getItem('user_theme') || 'dark';

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('user_theme', theme);

    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>`;
      } else {
        themeIcon.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>`;
      }
    }
  };

  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  /* ==========================================================================
     5. HERO TYPEWRITER EFFECT
     ========================================================================== */
  const typewriterElement = document.getElementById('typewriter');
  const rolesID = ['Web Developer', 'Desktop Developer', 'Embedded System Engineer'];
  const rolesEN = ['Web Developer', 'Desktop Developer', 'Embedded System Engineer'];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    const roles = currentLang === 'id' ? rolesID : rolesEN;
    const currentRole = roles[roleIndex % roles.length];

    if (isDeleting) {
      charIndex--;
      typingSpeed = 50;
    } else {
      charIndex++;
      typingSpeed = 110;
    }

    if (typewriterElement) {
      typewriterElement.textContent = currentRole.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 1800; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex++;
      typingSpeed = 400; // Pause before typing next word
    }

    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();

  /* ==========================================================================
     6. PROJECT CARD RENDERING & CATEGORY FILTERING
     ========================================================================== */
  const projectsGrid = document.getElementById('projects-grid');
  let activeFilter = 'all';

  function renderProjectCards() {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    const filtered = projectsData.filter((project) => {
      if (activeFilter === 'all') return true;
      return project.category === activeFilter;
    });

    filtered.forEach((project) => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-category', project.category);

      const title = project.title[currentLang] || project.title['id'];
      const shortDesc = project.shortDesc[currentLang] || project.shortDesc['id'];
      const detailBtnText = translations[currentLang].btn_view_detail;
      const demoBtnText = translations[currentLang].btn_live_demo;

      const techBadges = project.tags
        .map((tag) => `<span class="tech-tag">${tag}</span>`)
        .join('');

      card.innerHTML = `
        <div class="project-image-box">
          <img src="${project.image}" alt="${title}" loading="lazy" />
          <span class="project-category-badge">${project.category.toUpperCase()}</span>
        </div>
        <div class="project-content">
          <h3 class="project-title">${title}</h3>
          <p class="project-desc">${shortDesc}</p>
          <div class="project-actions">
            <button class="btn-detail" data-project-id="${project.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              ${detailBtnText}
            </button>
            <div class="project-links">
              <a href="${project.liveDemo}" ${project.liveDemo.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : 'onclick="event.preventDefault();"'} class="btn btn-sm btn-primary" title="${demoBtnText}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Demo
              </a>
              <a href="${project.github}" ${project.github.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : 'onclick="event.preventDefault();"'} class="btn-icon" title="GitHub Code">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      `;

      projectsGrid.appendChild(card);
    });

    // Attach click listeners to Detail buttons
    document.querySelectorAll('.btn-detail').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const projId = btn.getAttribute('data-project-id');
        openProjectModal(projId);
      });
    });
  }

  // Filter Buttons Handler
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      renderProjectCards();
    });
  });

  /* ==========================================================================
     7. PROJECT DETAIL MODAL CONTROLLER
     ========================================================================== */
  const modalBackdrop = document.getElementById('project-modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openProjectModal(projectId) {
    const project = projectsData.find((p) => p.id === projectId);
    if (!project || !modalBackdrop) return;

    const title = project.title[currentLang] || project.title['id'];
    const fullDesc = project.fullDesc[currentLang] || project.fullDesc['id'];
    const featuresList = project.features[currentLang] || project.features['id'];

    const modalImage = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalBadge = document.getElementById('modal-badge');
    const modalDesc = document.getElementById('modal-desc');
    const modalTech = document.getElementById('modal-tech');
    const modalFeatures = document.getElementById('modal-features');
    const modalLiveBtn = document.getElementById('modal-live-link');
    const modalGithubBtn = document.getElementById('modal-github-link');

    if (modalImage) modalImage.src = project.image;
    if (modalTitle) modalTitle.textContent = title;
    if (modalBadge) modalBadge.textContent = project.category.toUpperCase();
    if (modalDesc) modalDesc.textContent = fullDesc;

    if (modalTech) {
      modalTech.innerHTML = project.tags
        .map((tag) => `<span class="tech-tag">${tag}</span>`)
        .join('');
    }

    if (modalFeatures) {
      modalFeatures.innerHTML = featuresList
        .map((feat) => `<li><span>✓</span> ${feat}</li>`)
        .join('');
    }

    if (modalLiveBtn) {
      modalLiveBtn.href = project.liveDemo;
      modalLiveBtn.textContent = translations[currentLang].btn_live_demo;
      if (!project.liveDemo.startsWith('http')) {
        modalLiveBtn.removeAttribute('target');
        modalLiveBtn.onclick = (e) => { e.preventDefault(); };
      } else {
        modalLiveBtn.setAttribute('target', '_blank');
        modalLiveBtn.onclick = null;
      }
    }

    if (modalGithubBtn) {
      modalGithubBtn.href = project.github;
      modalGithubBtn.textContent = translations[currentLang].btn_source_code;
      if (!project.github.startsWith('http')) {
        modalGithubBtn.removeAttribute('target');
        modalGithubBtn.onclick = (e) => { e.preventDefault(); };
      } else {
        modalGithubBtn.setAttribute('target', '_blank');
        modalGithubBtn.onclick = null;
      }
    }

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock scroll
  }

  function closeProjectModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = ''; // Unlock scroll
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeProjectModal();
    }
  });

  /* ==========================================================================
     8. NAVBAR SCROLL SPY & MOBILE MENU
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-links');

  // Sticky Navbar Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Back to Top button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  // Mobile Menu Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (navMenu.classList.contains('open') &&
        !navMenu.contains(event.target) &&
        !mobileToggle.contains(event.target)) {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
      }
    });
  }

  // Active Section Observer (Home, Project, About, Contact)
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => sectionObserver.observe(section));

  /* ==========================================================================
     9. ANIMATED STATS COUNTER
     ========================================================================== */
  const statsElements = document.querySelectorAll('.stat-number');
  let statsCounted = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !statsCounted) {
        statsCounted = true;
        statsElements.forEach((el) => {
          const target = parseInt(el.getAttribute('data-target'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          let count = 0;
          const duration = 1500;
          const stepTime = Math.abs(Math.floor(duration / target));

          const timer = setInterval(() => {
            count++;
            el.textContent = count + suffix;
            if (count >= target) {
              clearInterval(timer);
              el.textContent = target + suffix;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.4 });

  const statsContainer = document.querySelector('.stats-grid');
  if (statsContainer) {
    statsObserver.observe(statsContainer);
  }

  /* ==========================================================================
     10. CONTACT FORM HANDLER & TOAST NOTIFICATION
     ========================================================================== */

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const subject = document.getElementById("form-subject").value;
  const message = document.getElementById("form-message").value;

  const email = "saefulnurdin20@gmail.com";

  const mailto =
    "mailto:" + email +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(message);

  window.location.href = mailto;
});


  // Back to Top Click
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Initialize Language
  applyLanguage(currentLang);
});
// Menonaktifkan Klik Kanan
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Menonaktifkan Shortcut Inspect Element (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
document.addEventListener('keydown', (e) => {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) ||
    (e.ctrlKey && ['U', 'S'].includes(e.key.toUpperCase()))
  ) {
    e.preventDefault();
  }
});

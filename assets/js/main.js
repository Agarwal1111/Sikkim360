/**
* Template Name: Tour
* Template URL: https://bootstrapmade.com/tour-bootstrap-travel-website-template/
* Updated: Jul 01 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Cultural Calendar Logic
   */
  function initializeCulturalCalendar() {
    const monthEl = document.getElementById('month');
    const yearEl = document.getElementById('year');
    const calendarGrid = document.getElementById('calendar-grid');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');

    if (!monthEl || !yearEl || !calendarGrid || !prevMonthBtn || !nextMonthBtn) {
      return;
    }

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    
    // Specific Sikkimese events for 2025 (Year 2025 for consistency, adjust as needed)
    const events = [
        { date: new Date(2025, 0, 15), name: "Maghe Sankranti" },      // January 15
        { date: new Date(2025, 1, 28), name: "Losar (Tibetan New Year)" }, // February 28
        { date: new Date(2025, 3, 14), name: "Drubchen Festival" },   // April 14 (example, date varies)
        { date: new Date(2025, 4, 1), name: "Labour Day / Buddha Purnima" }, // May 1
        { date: new Date(2025, 5, 12), name: "Saga Dawa" },           // June 12
        { date: new Date(2025, 7, 8), name: "Tendong Lho Rum Faat" }, // August 8
        { date: new Date(2025, 8, 10), name: "Pang Lhabsol" },        // September 10
        { date: new Date(2025, 9, 3), name: "Dasain (Dashain starts)" }, // October 3
        { date: new Date(2025, 9, 21), name: "Tihar (Diwali starts)" }, // October 21
        { date: new Date(2025, 10, 22), name: "Lhabab Duchen" },      // November 22
        { date: new Date(2025, 11, 25), name: "Christmas" },         // December 25
        { date: new Date(2025, 11, 29), name: "Kagyed Dance" }         // December 29
    ];

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function renderCalendar() {
      const firstDay = new Date(currentYear, currentMonth, 1).getDay();
      const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
      
      monthEl.textContent = monthNames[currentMonth];
      yearEl.textContent = currentYear;
      calendarGrid.innerHTML = '';

      // Create a map of events for the current month for quick lookup
      const eventsMap = new Map();
      events.forEach(event => {
        if (event.date.getFullYear() === currentYear && event.date.getMonth() === currentMonth) {
          eventsMap.set(event.date.getDate(), event.name);
        }
      });

      for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('calendar-day', 'empty');
        calendarGrid.appendChild(emptyCell);
      }

      for (let i = 1; i <= lastDate; i++) {
        const dateCell = document.createElement('div');
        dateCell.classList.add('calendar-day');
        dateCell.textContent = i;
        
        const today = new Date();
        if (i === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
          dateCell.classList.add('today');
        }
        
        // Check for event on this day
        if (eventsMap.has(i)) {
          dateCell.classList.add('event');
          dateCell.setAttribute('data-tooltip', eventsMap.get(i));
        }

        calendarGrid.appendChild(dateCell);
      }
    }

    prevMonthBtn.addEventListener('click', () => {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar();
    });

    nextMonthBtn.addEventListener('click', () => {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar();
    });

    renderCalendar();
  }
  
  window.addEventListener('load', initializeCulturalCalendar);

})();
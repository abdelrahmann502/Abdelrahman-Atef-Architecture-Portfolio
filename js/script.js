(function(){
  "use strict";

  /* ---------------------------------------------------------
     NAV — scroll state + mobile toggle
  --------------------------------------------------------- */
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  }, { passive:true });

  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.classList.remove('is-open');
  }));

  /* ---------------------------------------------------------
     HERO — crossfade slideshow from project heroes
  --------------------------------------------------------- */
  const heroSlidesEl = document.getElementById('heroSlides');
  const heroPicks = ['khaznah','dahian','oman','gorange'];
  heroPicks.forEach((id, i) => {
    const p = PROJECTS.find(p => p.id === id);
    if(!p) return;
    const div = document.createElement('div');
    div.className = 'slide' + (i === 0 ? ' is-active' : '');
    div.style.backgroundImage = `url(${p.hero})`;
    heroSlidesEl.appendChild(div);
  });
  const slides = heroSlidesEl.querySelectorAll('.slide');
  if(slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    let cur = 0;
    setInterval(() => {
      slides[cur].classList.remove('is-active');
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add('is-active');
    }, 5200);
  }

  /* ---------------------------------------------------------
     REVEAL ON SCROLL
  --------------------------------------------------------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold:.15, rootMargin:'0px 0px -40px 0px' });

  function observeReveals(root){
    root.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }

  /* ---------------------------------------------------------
     PROJECT GRID
  --------------------------------------------------------- */
  const grid = document.getElementById('projectGrid');

  function cardHTML(p){
    return `
      <article class="pcard reveal" data-cat="${p.category}" data-id="${p.id}">
        <img class="pcard__img" src="${p.hero}" alt="${p.title} — architectural render">
        <div class="pcard__scrim"></div>
        ${p.category === 'technical' ? '<span class="pcard__badge mono">PDF</span>' : ''}
        <span class="pcard__arrow">&#8599;</span>
        <div class="pcard__meta">
          <span class="pcard__num">${p.num}</span>
          <span class="pcard__cat">${CATEGORY_LABELS[p.category]}</span>
          <h3 class="pcard__title">${p.title}</h3>
          <span class="pcard__loc">${p.location}</span>
        </div>
      </article>`;
  }

  PROJECTS.forEach(p => grid.insertAdjacentHTML('beforeend', cardHTML(p)));
  observeReveals(grid);

  grid.querySelectorAll('.pcard').forEach(card => {
    card.addEventListener('click', () => openProject(card.dataset.id));
  });

  /* ---------------------------------------------------------
     FILTERS
  --------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const f = btn.dataset.filter;
      grid.querySelectorAll('.pcard').forEach(card => {
        const match = f === 'all' || card.dataset.cat === f;
        card.classList.toggle('is-hidden', !match);
      });
    });
  });

  /* ---------------------------------------------------------
     SKILLS
  --------------------------------------------------------- */
  function renderSkills(elId, list){
    const el = document.getElementById(elId);
    if(!el) return;
    el.innerHTML = list.map(s => `<span class="tag">${s}</span>`).join('');
  }
  renderSkills('skillsTechnical', SKILLS.technical);
  renderSkills('skillsDesign', SKILLS.design);
  renderSkills('skillsPersonal', SKILLS.personal);

  /* ---------------------------------------------------------
     TITLE BLOCK (credentials)
  --------------------------------------------------------- */
  const tbGrid = document.getElementById('tbGrid');
  CREDENTIALS.forEach(group => {
    const items = group.items.map(it => `
      <div class="tb-item">
        <span class="tb-item__range">${it.range}</span>
        <span class="tb-item__title">${it.title}</span>
        ${it.org ? `<span class="tb-item__org">${it.org}</span>` : ''}
      </div>`).join('');
    tbGrid.insertAdjacentHTML('beforeend', `
      <div class="tb-cell">
        <span class="tb-cell__label">${group.label}</span>
        ${items}
      </div>`);
  });

  observeReveals(document);

  /* ---------------------------------------------------------
     PROJECT MODAL
  --------------------------------------------------------- */
  const modal = document.getElementById('projectModal');
  const modalScroll = document.getElementById('modalScroll');
  const modalScrim = document.getElementById('modalScrim');
  const modalClose = document.getElementById('modalClose');
  let currentGallery = [];

  function modalHTML(p){
    const galleryImgs = [p.hero, ...p.gallery];
    currentGallery = galleryImgs;
    return `
      <div class="mp-hero">
        <img src="${p.hero}" alt="${p.title} — hero render">
        <div class="mp-hero__cap">
          <span class="mp-num mono">${p.num} — ${CATEGORY_LABELS[p.category]}</span>
          <h2 class="mp-title">${p.title}</h2>
        </div>
      </div>
      <div class="mp-body">
        <div class="mp-meta">
          <div><span>Location</span><strong>${p.location}</strong></div>
          <div><span>Firm</span><strong>${p.firm}</strong></div>
          <div><span>Role</span><strong>${p.role}</strong></div>
          ${p.grade ? `<div><span>Grade</span><strong>${p.grade}</strong></div>` : ''}
        </div>
        <p class="mp-summary">${p.summary}</p>
        ${p.philosophy ? `
        <div class="mp-phil">
          <span class="mp-phil__label">${p.philosophyLabel || 'Design Philosophy'}</span>
          <p>${p.philosophy}</p>
        </div>` : ''}
        ${p.pdfs ? `
        <div class="mp-pdfs">
          <span class="mp-pdfs__label mono">Full Drawing Sets — PDF</span>
          <div class="mp-pdfs__list">
            ${p.pdfs.map(pdf => `
              <a class="mp-pdf" href="${pdf.url}" target="_blank" rel="noopener">
                <span class="mp-pdf__icon">PDF</span>
                <span class="mp-pdf__label">${pdf.label}</span>
                <span class="mp-pdf__go">&#8599;</span>
              </a>`).join('')}
          </div>
        </div>` : ''}
        <div class="mp-gallery">
          ${galleryImgs.map((src,i) => `<img src="${src}" alt="${p.title} detail ${i+1}" data-idx="${i}">`).join('')}
        </div>
      </div>`;
  }

  function openProject(id){
    const p = PROJECTS.find(p => p.id === id);
    if(!p) return;
    modalScroll.innerHTML = modalHTML(p);
    modalScroll.scrollTop = 0;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';

    modalScroll.querySelectorAll('.mp-gallery img').forEach(img => {
      img.addEventListener('click', () => openLightbox(parseInt(img.dataset.idx,10)));
    });
    history.replaceState(null, '', `#${id}`);
  }

  function closeProject(){
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
    history.replaceState(null, '', '#work');
  }

  modalClose.addEventListener('click', closeProject);
  modalScrim.addEventListener('click', closeProject);
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape'){
      if(lightbox.classList.contains('is-open')) closeLightbox();
      else if(modal.classList.contains('is-open')) closeProject();
    }
  });

  // Deep link support
  window.addEventListener('DOMContentLoaded', () => {
    const hash = location.hash.replace('#','');
    if(PROJECTS.some(p => p.id === hash)) openProject(hash);
  });

  /* ---------------------------------------------------------
     LIGHTBOX
  --------------------------------------------------------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCount = document.getElementById('lightboxCount');
  let lbIndex = 0;

  function openLightbox(idx){
    lbIndex = idx;
    renderLightbox();
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden','false');
  }
  function closeLightbox(){
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden','true');
  }
  function renderLightbox(){
    lightboxImg.src = currentGallery[lbIndex];
    lightboxCount.textContent = `${lbIndex+1} / ${currentGallery.length}`;
  }
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', () => {
    lbIndex = (lbIndex - 1 + currentGallery.length) % currentGallery.length;
    renderLightbox();
  });
  document.getElementById('lightboxNext').addEventListener('click', () => {
    lbIndex = (lbIndex + 1) % currentGallery.length;
    renderLightbox();
  });
  lightbox.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if(!lightbox.classList.contains('is-open')) return;
    if(e.key === 'ArrowLeft') document.getElementById('lightboxPrev').click();
    if(e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
  });

})();

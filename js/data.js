// ============================================================
// Portfolio content — edit this file to add, remove or update
// projects and credentials. No other file needs to change.
// ============================================================

const CATEGORY_LABELS = {
  urban: "Urban & Exterior Design",
  landscape: "Landscape & Site Integration",
  viz: "Visualization & AI Concepts",
  studies: "Studies & Presentation",
  technical: "Technical Drawings",
  academic: "Academic Projects"
};

const PROJECTS = [
  {
    id: "khaznah",
    num: "01",
    category: "urban",
    title: "Abraj Khaznah",
    location: "Makkah, Saudi Arabia",
    firm: "Dosor Studio",
    role: "Massing — Modeling — Presentation",
    summary: "A high-density, mixed-use development comprising branded residences, a luxury hotel and residential towers, strategically located in proximity to the Holy Kaaba. The development was designed specifically to serve the growing needs of pilgrims (Al-Hujjaj), balancing high-capacity hospitality requirements with a respectful, tranquil environment.",
    philosophy: "The architectural language was deeply rooted in the local vernacular, with massing strategies inspired by the rugged topography and the historic urban fabric of Makkah. We focused on creating a silhouette that responds to the scale of the city while providing a functional layout that optimizes the flow and comfort of pilgrims during peak seasons.",
    hero: "assets/img/khaznah-hero.jpg",
    gallery: [1,2,3,4,5,6,7,8].map(n => `assets/img/khaznah-${n}.jpg`)
  },
  {
    id: "gorange",
    num: "02",
    category: "urban",
    title: "Go Range",
    location: "Riyadh, Saudi Arabia",
    firm: "Dosor Studio",
    role: "Façade Design",
    summary: "An innovative golf training and leisure facility characterized by its adaptive reuse of shipping containers to create a modern, industrial-style athletic environment. The center features a specialized field area with structured hitting bays covered by a sweeping, curved canopy, providing a rhythmic and functional space for golfers.",
    philosophy: "\u201cGo Range\u201d centers on the creative adaptive reuse of shipping containers, transforming utilitarian, industrial modules into a sophisticated and cohesive architectural experience. By layering these containers with a sleek, glass-fronted main clubhouse and a sweeping, rhythmic canopy, the design bridges the gap between rugged materiality and refined athletic performance.",
    hero: "assets/img/gorange-hero.jpg",
    gallery: [1,2,3,4,5,6,7].map(n => `assets/img/gorange-${n}.jpg`)
  },
  {
    id: "airbnb",
    num: "03",
    category: "urban",
    title: "Airbnb Villas",
    location: "Riyadh, Saudi Arabia",
    firm: "Dosor Studio",
    role: "Design — Modeling — Render — Presentation",
    summary: "A residential development comprising a sophisticated complex of five distinct villas, each thoughtfully engineered to house two individual duplex units spanning two floors. Designed to balance density with privacy, the master plan organizes these villas within clearly defined site boundaries, ensuring a structured distribution of space for circulation, access and service.",
    philosophy: "The style of the buildings is modern, eye-catching, and inspired by the Legorreta style. A mix of warm reddish-brown and clean white colors makes the buildings more interesting, while indented windows, open balconies, plants and wooden shades help them sit comfortably within the outdoor landscape.",
    hero: "assets/img/airbnb-hero.jpg",
    gallery: [1,2,3,4,5,6,7,8].map(n => `assets/img/airbnb-${n}.jpg`)
  },
  {
    id: "jabal",
    num: "04",
    category: "urban",
    title: "Jabal Al Kaaba Hotel",
    location: "Makkah, Saudi Arabia",
    firm: "Dosor Studio",
    role: "Façade Design — Modeling — Render",
    summary: "The Jabal Al Kaaba Hotel is a premier hospitality development situated in the sacred Haram area of Makkah, tailored specifically to accommodate pilgrims visiting the Holy Kaaba. Positioned along major urban arteries and transit links, the hotel complex features a sprawling multi-wing massing with a grand arched drop-off entrance, welcoming courtyards integrated with coach parking, ground-level retail frontages, and high-density residential towers designed to host large numbers of visitors.",
    philosophy: "The architectural language balances devotional scale with the practical demands of mass pilgrimage — a grand arched drop-off announces the entrance sequence, while multi-wing massing and welcoming courtyards organize coach parking, retail frontages and high-density guest towers into a single, legible arrival experience.",
    hero: "assets/img/jabal-hero.jpg",
    gallery: [1,2,3,4,5,6,7,8].map(n => `assets/img/jabal-${n}.jpg`)
  },
  {
    id: "jinan",
    num: "05",
    category: "landscape",
    title: "Jinan Residence",
    location: "New Zayed, Egypt",
    firm: "Dosor Studio",
    role: "Landscape Design — Render — Presentation",
    summary: "A modern housing project in New Zayed that focuses on combining simple, clean architecture with beautiful nature. The design blends greenery, water features and shared amenities — a clubhouse, padel courts and bike paths — into the community, with homes ranging from the efficient Noble Villa to the larger Majestic Palace.",
    philosophy: "Full landscape design responsibility, focused on creating a natural flow that connects the villas to the community's shared amenities. Softscape elements and hardscape layouts were carefully selected to complement the modern architecture while providing functional outdoor zones for residents to enjoy the gardens and water features.",
    hero: "assets/img/jinan-hero.jpg",
    gallery: [1,2,3,4,5,6,7,8].map(n => `assets/img/jinan-${n}.jpg`)
  },
  {
    id: "masjid",
    num: "06",
    category: "landscape",
    title: "Masjid Al-Huda",
    location: "Makkah, Saudi Arabia",
    firm: "Dosor Studio",
    role: "Softscape & Hardscape Design",
    summary: "An Islamic urban complex in Makkah — a large-scale development focused on creating a functional and spiritual environment through integrated landscape and architectural elements. It serves as a centralized hub that facilitates visitor movement and provides essential facilities, including prayer halls, through a cohesive network of buildings connected by a riwaq (colonnade).",
    philosophy: "The design provides a welcoming, spiritual environment through a riwaq that connects the building blocks, creating a sense of enclosure for the central courtyard while maintaining a visual and functional connection to the mosque's main entrance — directing pedestrian movement toward the various entrances and prayer facilities.",
    hero: "assets/img/masjid-hero.jpg",
    gallery: [1,2,3,4,5,6,7,8].map(n => `assets/img/masjid-${n}.jpg`)
  },
  {
    id: "oman",
    num: "07",
    category: "viz",
    title: "Oman Tower",
    location: "Muscat, Oman",
    firm: "Dosor Studio",
    role: "Modeling — AI Render",
    summary: "The Oman Towers Complex is a mixed-use development in Muscat that prioritizes community living and a seamless connection to the outdoors — a structured blend of hotel facilities and commercial ground-floor spaces, with shared public areas such as a central plaza and pedestrian-friendly pathways encouraging social interaction.",
    philosophy: "The design centers on creating a distinct \u201csense of place\u201d by carefully balancing built structures with the natural world. Integrated terraces and lush greenery, including strategically placed palm trees, soften the building's edges and foster a tranquil, natural environment — visualized through an AI-augmented rendering workflow.",
    hero: "assets/img/oman-hero.jpg",
    gallery: [1,2,3,4,5,6].map(n => `assets/img/oman-${n}.jpg`)
  },
  {
    id: "dahian",
    num: "08",
    category: "viz",
    title: "Dahian Palace",
    location: "Riyadh, Saudi Arabia",
    firm: "Dosor Studio",
    role: "Massing — Modeling — Presentation",
    summary: "An expansive residential project featuring a sophisticated layout of six private houses and two dedicated guest buildings. Designed as a high-end luxury complex, the site is fully equipped with premium recreational amenities, including a central swimming pool and a professional-grade padel court.",
    philosophy: "The architecture draws deep inspiration from the timeless Parisian design style — refined proportions, classical elegance and high-quality material finishes — extended seamlessly into the landscape design that frames the buildings. This project used AI-generated renders to visualize the complex's layout and spatial potential.",
    hero: "assets/img/dahian-hero.jpg",
    gallery: [1,2,3,4,5,6,7].map(n => `assets/img/dahian-${n}.jpg`)
  },
  {
    id: "aknan",
    num: "09",
    category: "studies",
    title: "Aknan Makka",
    location: "Makkah, Saudi Arabia",
    firm: "Dosor Studio",
    role: "Studies — Presentation",
    summary: "A large-scale hospitality development designed with a focus on durability and urban integration. The project is organized into a functional vertical system, with essential services and public spaces — restaurants and prayer areas — on the lower levels, dedicating 31 total floors to guest accommodation.",
    philosophy: "Research focused on a context-sensitive approach to harmonize the building's massing with the surrounding urban landscape. Prioritizing programmatic needs over standard aesthetics, the design used an asymmetrical layout so the structure naturally complemented its environment, with inner courtyards optimizing natural airflow for guest rooms.",
    hero: "assets/img/aknan-hero.jpg",
    gallery: [1,2,3,4,5,6].map(n => `assets/img/aknan-${n}.jpg`)
  },
  {
    id: "kix",
    num: "10",
    category: "technical",
    title: "Kix Futsal Complex",
    location: "Riyadh, Saudi Arabia",
    firm: "Dosor Studio",
    role: "Technical Drawings",
    summary: "The Kix Futsal Complex is a specialized sports facility project focused on technical construction design. The development integrates a variety of high-performance athletic and administrative spaces, including a main \u201cCrown Pitch,\u201d additional futsal courts, and a dedicated Speed Lab for performance tracking. The complex is supported by comprehensive amenity areas such as a tactical review room, trainer lounges, and separate locker facilities, all organized around a central reception and administrative core.",
    philosophy: "This set documents the complex through compiled general plans, full blow-up elevation call-outs, and construction detail sheets — covering setting-out, cladding build-ups and finishes across the Crown Pitch, satellite courts and support facilities.",
    philosophyLabel: "Documentation Scope",
    hero: "assets/tech/kix-gp-3.jpg",
    gallery: [
      "assets/tech/kix-gp-1.jpg","assets/tech/kix-gp-2.jpg","assets/tech/kix-gp-4.jpg",
      "assets/tech/kix-elev-1.jpg","assets/tech/kix-elev-2.jpg","assets/tech/kix-elev-3.jpg","assets/tech/kix-elev-4.jpg","assets/tech/kix-elev-5.jpg",
      "assets/tech/kix-elev-6.jpg","assets/tech/kix-elev-7.jpg","assets/tech/kix-elev-8.jpg","assets/tech/kix-elev-9.jpg","assets/tech/kix-elev-10.jpg",
      "assets/tech/kix-det-1.jpg","assets/tech/kix-det-2.jpg","assets/tech/kix-det-3.jpg","assets/tech/kix-det-4.jpg","assets/tech/kix-det-5.jpg"
    ],
    pdfs: [
      { label: "General Plans — 4 sheets", url: "assets/pdf/kix-general-plans.pdf" },
      { label: "Blow-Up Elevations — 10 sheets", url: "assets/pdf/kix-blowup-elevations.pdf" },
      { label: "Construction Details — 16 sheets", url: "assets/pdf/kix-details.pdf" }
    ]
  },
  {
    id: "gorange-tech",
    num: "11",
    category: "technical",
    title: "Go Range — Technical Set",
    location: "Riyadh, Saudi Arabia",
    firm: "Dosor Studio",
    role: "Technical Drawings",
    summary: "The Go Range Golf Center is a commercial mini-golf and recreational facility designed to provide an engaging environment for sports enthusiasts. The project focuses on creating a versatile, open-plan venue tailored for mini-golf gameplay and related activities. By prioritizing an efficient layout and a modern spatial flow, the facility is optimized to enhance the visitor experience while maintaining a functional and welcoming atmosphere for all users.",
    philosophy: "The drawing set translates the concept design into buildable, dimensioned construction sheets — documenting the venue's layout, structural grid and finishes across a 23-sheet register.",
    philosophyLabel: "Documentation Scope",
    hero: "assets/tech/gorange-tp-1.jpg",
    gallery: [2,3,4,5,6].map(n => `assets/tech/gorange-tp-${n}.jpg`),
    pdfs: [
      { label: "Technical Drawing Set — 23 sheets", url: "assets/pdf/go-range-technical.pdf" }
    ]
  },
  {
    id: "madison",
    num: "12",
    category: "technical",
    title: "Madison School",
    location: "Sheikh Zayed, Egypt",
    firm: "Dosor Studio",
    role: "Technical Drawings",
    summary: "The Madison School is an educational facility project focused on comprehensive technical documentation and administrative oversight. The project requirements include the development of detailed structural drawing registers, production timelines, and precise schedules for window and door components. The design and documentation process is centered on maintaining institutional standards and ensuring structural accuracy throughout the development of the educational site.",
    philosophy: "The set spans compiled floor plans, building elevations and sections, maintained against structural drawing registers and door/window schedules to keep every discipline aligned to institutional standards.",
    philosophyLabel: "Documentation Scope",
    hero: "assets/tech/madison-1.jpg",
    gallery: [2,3,4,5,6,7].map(n => `assets/tech/madison-${n}.jpg`),
    pdfs: [
      { label: "Technical Drawing Set — 7 sheets", url: "assets/pdf/madison-school-technical.pdf" }
    ]
  },
  {
    id: "airesearch",
    num: "13",
    category: "academic",
    title: "AI Research & Development Center",
    location: "Knowledge City, New Administrative Capital, Egypt",
    firm: "CIC — Canadian International College",
    role: "Graduation Project",
    grade: "Very Good",
    summary: "The AI Research and Development Center is structured into four main functional building complexes to support advanced computational research and public engagement. The Research building houses dedicated research labs, experimental spaces, collaboration areas, infrastructure rooms, and a secure data center. The Administration building includes workspaces, private office spaces, and conference rooms. The Educational Building is equipped with lecture halls, training rooms, and collaborative areas. Finally, the Entertainment Building integrates public exhibition halls and retail areas to showcase technological breakthroughs and innovations.",
    philosophy: "The massing draws a direct analogy between the human brain and the research process it houses — four functional complexes fold around a central circulation spine the way lobes and pathways connect through a neural network, a concept carried from the brain and neuron diagrams straight through to the built form.",
    philosophyLabel: "Concept",
    hero: "assets/img/grad-render-2.jpg",
    gallery: [
      "assets/img/grad-masterplan.jpg",
      "assets/img/grad-concept.jpg",
      "assets/img/grad-render-1.jpg",
      "assets/img/grad-render-3.jpg",
      "assets/img/grad-render-4.jpg"
    ]
  },
  {
    id: "culturecenter",
    num: "14",
    category: "academic",
    title: "Culture Center — Magra El Oyoon",
    location: "Cairo, Egypt",
    firm: "CIC — Canadian International College",
    role: "Academic Project — Urban Design",
    summary: "An academic urban design study for a cultural center sited along Cairo's historic Magra El Oyoon aqueduct, drawing on the arched geometry and materiality of Al-Hamra Palace in Spain to translate Islamic architectural elements — arched gateways, shokhsheikha screens and geometric fountains — into a contemporary civic masterplan.",
    hero: "assets/img/culture-mainshot.jpg",
    gallery: [
      "assets/img/culture-masterplan.jpg",
      "assets/img/culture-render-1.jpg",
      "assets/img/culture-render-2.jpg",
      "assets/img/culture-render-3.jpg",
      "assets/img/culture-render-4.jpg",
      "assets/img/culture-render-5.jpg",
      "assets/img/culture-render-6.jpg"
    ]
  },
  {
    id: "landscapevilla",
    num: "15",
    category: "academic",
    title: "Landscape Design — Private Villa",
    location: "Egypt",
    firm: "CIC — Canadian International College",
    role: "Academic Project — Landscape Design",
    summary: "An academic landscape design study for a private villa garden, developing hardscape and softscape strategies — limestone paving, an infinity pool and a planting palette of fence, shade and fruit trees — resolved through layout, material mapping and section.",
    hero: "assets/img/landscape-villa-layout.jpg",
    gallery: []
  },
  {
    id: "szpark",
    num: "16",
    category: "academic",
    title: "Landscape Design — Sheikh Zayed Central Park",
    location: "Sheikh Zayed, Egypt",
    firm: "CIC — Canadian International College",
    role: "Academic Project — Landscape Design",
    summary: "An academic landscape masterplan for a central park in Sheikh Zayed, organizing star-patterned plazas, water features and shaded seating around a central pavilion through site analysis, accessibility studies, and a coordinated softscape, hardscape and lighting palette.",
    hero: "assets/img/szpark-layout.jpg",
    gallery: [
      "assets/img/szpark-render-1.jpg",
      "assets/img/szpark-render-2.jpg",
      "assets/img/szpark-render-3.jpg",
      "assets/img/szpark-render-4.jpg",
      "assets/img/szpark-render-5.jpg",
      "assets/img/szpark-render-6.jpg",
      "assets/img/szpark-render-7.jpg",
      "assets/img/szpark-render-8.jpg",
      "assets/img/szpark-moodboard-1.jpg",
      "assets/img/szpark-moodboard-2.jpg",
      "assets/img/szpark-moodboard-3.jpg",
      "assets/img/szpark-moodboard-4.jpg",
      "assets/img/szpark-moodboard-5.jpg",
      "assets/img/szpark-moodboard-6.jpg",
      "assets/img/szpark-moodboard-7.jpg",
      "assets/img/szpark-analysis.jpg",
      "assets/img/szpark-networks.jpg"
    ]
  }
];

const SKILLS = {
  technical: [
    "Autodesk Revit", "AutoCAD", "SketchUp", "D5 Render",
    "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Microsoft Excel"
  ],
  design: [
    "Architectural Planning", "Technical Drawing", "Façade Design & Rendering",
    "AI-Augmented Rendering", "BIM Coordination", "Landscape Design"
  ],
  personal: [
    "Works Well Under Pressure", "Fast Learner", "Team Collaboration",
    "Problem Solving", "Time Management", "Attention to Detail"
  ]
};

const CREDENTIALS = [
  {
    label: "Education",
    items: [
      { range: "2019–2024", title: "Bachelor of Architecture", org: "CIC — Canadian International College" },
      { range: "2005–2018", title: "School Education", org: "Royal International Language School" }
    ]
  },
  {
    label: "Experience",
    items: [
      { range: "2025–2026", title: "Architectural Designer", org: "Dosor Studio" },
      { range: "2024–2025", title: "Site Engineer / Technical Office Engineer", org: "DCD — Display Concept Design" }
    ]
  },
  {
    label: "Trainings",
    items: [
      { range: "2022", title: "Site Engineer", org: "Orascom — Zed Towers Zayed" },
      { range: "2023", title: "Site Engineer", org: "SMI Consult" }
    ]
  },
  {
    label: "Voluntary Work",
    items: [
      { range: "2021–2024", title: "Media & Marketing Head", org: "Radix CIC" },
      { range: "2023", title: "Organization", org: "Presidential Elections" }
    ]
  },
  {
    label: "Courses",
    items: [
      { range: "2020", title: "Autodesk AutoCAD", org: "CIC" },
      { range: "2021", title: "Photoshop / Illustrator", org: "Creative Courses" },
      { range: "2022", title: "Autodesk Revit", org: "CIC" },
      { range: "2023", title: "SketchUp", org: "CIC" }
    ]
  },
  {
    label: "Languages",
    items: [
      { range: "Native", title: "Arabic", org: "" },
      { range: "Proficient", title: "English", org: "" }
    ]
  },
  {
    label: "Competitions",
    items: [
      { range: "2022", title: "Logo Design Competition", org: "CIC Architecture Department Logo" }
    ]
  }
];

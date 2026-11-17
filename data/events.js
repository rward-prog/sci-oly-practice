/* Event metadata, built from the 2027 Division B rule book.
   To add or fix an event, edit this file. Topic ids must match the "t" field in questions.js.
   resource.kind: sheet | sheetEach | sheets2 | binder | notes | none */
window.EVENTS = [
  {
    slug: 'anatomy', name: 'Anatomy & Physiology', team: 2, time: '50 min', calc: 'Class II',
    summary: 'How the respiratory, digestive and immune systems work, and what goes wrong in them.',
    resource: { kind: 'sheet', label: 'One 8.5x11 sheet per team', text: 'One sheet, both sides, any form and any source. No affixed labels, and no second sheet. It can be laminated or in a sheet protector.' },
    topics: [
      { id: 'resp', name: 'Respiratory system' },
      { id: 'dig', name: 'Digestive system' },
      { id: 'imm', name: 'Immune system' }
    ],
    links: []
  },
  {
    slug: 'botany', name: 'Botany', team: 2, time: '50 min', calc: 'Class II',
    summary: 'Plant structure, growth, transport, photosynthesis, and how plants fit into the world.',
    resource: { kind: 'sheet', label: 'One 8.5x11 sheet per team', text: 'One sheet, both sides, any form and any source. No affixed labels, and no second sheet.' },
    topics: [
      { id: 'structure', name: 'Cells, roots, stems, leaves and flowers' },
      { id: 'transport', name: 'Growth and transport of water, gases and nutrients' },
      { id: 'groups', name: 'Plant groups (monocot vs dicot, algae, woody vs herbaceous)' },
      { id: 'photo', name: 'Photosynthesis' },
      { id: 'repro', name: 'Plant genetics and reproduction' },
      { id: 'evo', name: 'Paleo-botany and plant evolution' },
      { id: 'eco', name: 'Plants in nutrient cycles, GMOs, foods and plant products' },
      { id: 'disease', name: 'Plant diseases and nutrient deficiencies' }
    ],
    links: [{ label: 'Washington state Botany trial tests (2024 and 2025) - rules differed from 2027', url: 'https://washingtonscienceolympiad.com/resources' }]
  },
  {
    slug: 'circuitlab', name: 'Circuit Lab', team: 2, time: '50 min', calc: 'Class III',
    summary: 'A written test plus hands-on circuit tasks. State runs it as a test-only event.',
    resource: { kind: 'notes', label: 'Notes of any size', text: 'A collection of notes on paper, any size, any form, any source. Binders, tabs and labels are allowed, and pages may be removed for use. Two Class III calculators.' },
    topics: [
      { id: 'static', name: 'Static electricity and Coulomb\'s Law' },
      { id: 'ohm', name: 'Current, voltage, resistance and Ohm\'s Law' },
      { id: 'series', name: 'Series and parallel circuits' },
      { id: 'power', name: 'Power and energy' },
      { id: 'devices', name: 'Switches, fuses, breakers, diodes and LEDs' },
      { id: 'logic', name: 'Logic gates and binary' }
    ],
    links: [{ label: 'Student-written Circuit Lab practice test (Div B, 2021)', url: 'https://0xmmalik.github.io/scioly' }]
  },
  {
    slug: 'codebusters', name: 'Codebusters', team: 3, time: '50 min', calc: 'None',
    summary: 'Crack coded messages. A team of 3 splits up the test and races the clock.',
    special: 'cipher',
    resource: { kind: 'none', label: 'Nothing allowed but pencils', text: 'Teams bring only writing utensils. The supervisor gives you a resource sheet (Morse table, letter frequencies, Porta table, Atbash table, Baconian mappings). The test is printed single-sided so teammates can split pages.' },
    topics: [
      { id: 'caesar', name: 'Caesar (shift) cipher' },
      { id: 'atbash', name: 'Atbash cipher' },
      { id: 'aristocrat', name: 'Aristocrats and Patristocrats' },
      { id: 'baconian', name: 'Baconian cipher' },
      { id: 'xenocrypt', name: 'Xenocrypt (Spanish)' },
      { id: 'morse', name: 'Fractionated Morse' },
      { id: 'porta', name: 'Porta cipher' },
      { id: 'columnar', name: 'Complete columnar transposition' },
      { id: 'nihilist', name: 'Nihilist cipher' },
      { id: 'checker', name: '5x5 Checkerboard' },
      { id: 'homophonic', name: 'Homophonic cipher' },
      { id: 'cryptarithm', name: 'Cryptarithms' }
    ],
    links: [{ label: 'Student-written Codebusters test (Div B, 2023)', url: 'https://0xmmalik.github.io/scioly' }]
  },
  {
    slug: 'crimebusters', name: 'Crime Busters', team: 2, time: '50 min', calc: 'Class II',
    summary: 'Lab tests on evidence (solids, chromatography, fibers, plastics) to solve a crime. Dry lab at some meets.',
    resource: { kind: 'sheetEach', label: 'One sheet per person', text: 'Each participant may bring one 8.5x11 sheet, both sides, any form and any source, no affixed labels. Teams may also bring items from the Div B Chemistry Events Lab Equipment List. Goggles and an apron or lab coat are required.' },
    topics: [
      { id: 'solids', name: 'Powders, metals and liquids (about half the points)' },
      { id: 'hair', name: 'Hair and fibers' },
      { id: 'plastics', name: 'Recyclable plastics' },
      { id: 'chroma', name: 'Paper chromatography' },
      { id: 'scene', name: 'Crime scene evidence (prints, DNA, soil, spatter)' },
      { id: 'analysis', name: 'Writing the analysis (who did it, and who did not)' }
    ],
    links: []
  },
  {
    slug: 'diseasedetectives', name: 'Disease Detectives', team: 2, time: '50 min', calc: 'Class II',
    summary: 'Epidemiology: track outbreaks, read data, and decide how to stop a disease.',
    resource: { kind: 'sheet', label: 'One 8.5x11 sheet per team', text: 'One sheet, both sides, any form and any source. No affixed labels, and no second sheet. Note: matching a pathogen to its disease is not part of this event.' },
    topics: [
      { id: 'background', name: 'Background and surveillance' },
      { id: 'outbreak', name: 'Outbreak investigation and study designs' },
      { id: 'calc', name: 'Data and calculations (rates, risk)' },
      { id: 'prevent', name: 'Disease control and prevention' }
    ],
    links: [{ label: 'Student-written Disease Detectives tests (Div B/C)', url: 'https://0xmmalik.github.io/scioly' }]
  },
  {
    slug: 'dynamicplanet', name: 'Dynamic Planet', team: 2, time: '50 min', calc: 'Class II',
    summary: '2027 topic: Earth\'s fresh waters. Rivers, floods, groundwater, lakes and the rocks they leave behind.',
    resource: { kind: 'binder', label: 'One binder, any size', text: 'A binder of any size with anything in it. Sheet protectors, lamination, tabs and labels are allowed. If there are stations, nothing may be removed from the binder.' },
    topics: [
      { id: 'cycle', name: 'Hydrologic cycle and water budgets' },
      { id: 'climate', name: 'Climate controls on fresh water' },
      { id: 'basin', name: 'Drainage basins and stream networks' },
      { id: 'fluvial', name: 'Stream sediment, channels and landforms' },
      { id: 'flood', name: 'Streamflow and floods' },
      { id: 'ground', name: 'Groundwater and karst' },
      { id: 'lakes', name: 'Lakes and wetlands' },
      { id: 'record', name: 'Geologic record of water' }
    ],
    links: [{ label: 'Study guides for Earth science events (written for older rotations; check the topics)', url: 'https://sciovirtual.super.site/learn-earth-science-events-div-b-1' }]
  },
  {
    slug: 'experimentaldesign', name: 'Experimental Design', team: 3, time: '50 min', calc: 'Class II',
    summary: 'Design, run and write up a real experiment in 50 minutes. Teams of 3.',
    resource: { kind: 'none', label: 'No notes', text: 'Bring goggles and writing utensils. Teams may bring one timepiece, one linear measuring device and one Class II calculator, but cannot use them as part of the experiment. The supervisor provides identical materials to every team.' },
    topics: [
      { id: 'variables', name: 'Variables and controls' },
      { id: 'design', name: 'Designing a fair test' },
      { id: 'data', name: 'Collecting and graphing data' },
      { id: 'report', name: 'Writing the report' }
    ],
    links: []
  },
  {
    slug: 'foodscience', name: 'Food Science', team: 2, time: '50 min', calc: 'Class III',
    summary: '2027 topic: the science of milk products, including the ice cream lab and an experiment notebook.',
    resource: { kind: 'sheetEach', label: 'One sheet per person', text: 'Each participant may bring one 8.5x11 sheet, both sides, any form and any source, no affixed labels. Teams also bring lab equipment from the Div B Chemistry list plus a few specific items (see the rule book, 2.e). Goggles and an apron or lab coat are required.' },
    topics: [
      { id: 'macros', name: 'Fats, carbohydrates and proteins in dairy' },
      { id: 'proteins', name: 'Casein and whey' },
      { id: 'lactose', name: 'Lactose and lactose intolerance' },
      { id: 'processing', name: 'Pasteurization, emulsification and preservation' },
      { id: 'freezing', name: 'Freezing point depression and ice cream' },
      { id: 'labels', name: 'Labels, allergens and nutrition' },
      { id: 'labs', name: 'Lab tasks: ice cream, curds and butter' }
    ],
    links: [{ label: 'Student-written Food Science test (Div B, 2022)', url: 'https://0xmmalik.github.io/scioly' }]
  },
  {
    slug: 'heredity', name: 'Heredity', team: 2, time: '50 min', calc: 'Class II',
    summary: 'Genetics: Punnett squares, pedigrees, cell division, DNA and mutations.',
    resource: { kind: 'sheet', label: 'One 8.5x11 sheet per team', text: 'One sheet, both sides, any form and any source. No affixed labels, and no second sheet.' },
    topics: [
      { id: 'mendel', name: 'Mendelian genetics and Punnett squares' },
      { id: 'pedigree', name: 'Pedigrees' },
      { id: 'cells', name: 'Mitosis, meiosis and karyotypes' },
      { id: 'dna', name: 'DNA structure and replication' },
      { id: 'mutation', name: 'Mutations' },
      { id: 'gene', name: 'From gene to protein' },
      { id: 'pop', name: 'Population genetics (Hardy-Weinberg)' }
    ],
    links: [{ label: 'Student-written Heredity test (Div B, 2021)', url: 'https://0xmmalik.github.io/scioly' }]
  },
  {
    slug: 'meteorology', name: 'Meteorology', team: 2, time: '50 min', calc: 'Class II',
    summary: '2027 topic: severe weather and storms. At least half the questions use weather data and maps.',
    resource: { kind: 'binder', label: 'One three-ring binder', text: 'One three-ring binder of any size, pages on the rings. Sheet protectors, lamination, tabs and labels are allowed. Nothing may be removed during stations. You must have a US map with state names in the binder.' },
    topics: [
      { id: 'tools', name: 'Observation technologies (radar, satellites, balloons)' },
      { id: 'data', name: 'Reading weather data (station models, METAR, Stuve, hodographs)' },
      { id: 'factors', name: 'What causes severe weather' },
      { id: 'clouds', name: 'Clouds and storm types' }
    ],
    links: []
  },
  {
    slug: 'remotesensing', name: 'Remote Sensing', team: 2, time: '50 min', calc: 'Class II',
    summary: '2027 topic: observable Earth. Satellites, sensors and reading images of our planet.',
    resource: { kind: 'binder', label: 'One three-ring binder', text: 'One three-ring binder of any size, pages on the rings. Sheet protectors, lamination, tabs and labels are allowed. Two protractors and two rulers are also allowed.' },
    topics: [
      { id: 'light', name: 'Properties of light' },
      { id: 'sensors', name: 'Passive and active sensors' },
      { id: 'orbits', name: 'Satellite orbits' },
      { id: 'resolution', name: 'Image resolution' },
      { id: 'images', name: 'Interpreting images and maps' }
    ],
    links: []
  },
  {
    slug: 'rocksminerals', name: 'Rocks & Minerals', team: 2, time: '50 min', calc: 'Class II',
    summary: 'Identify and classify rocks and minerals from the 2027 National List.',
    resource: { kind: 'binder', label: 'One binder plus the National List', text: 'One three-ring binder of any size, a field guide, and one copy of the 2027 National Rocks and Minerals List (loose, can be annotated). One magnifying glass and one Class II calculator.' },
    topics: [
      { id: 'minerals', name: 'Mineral properties and identification' },
      { id: 'igneous', name: 'Igneous rocks' },
      { id: 'sedimentary', name: 'Sedimentary rocks' },
      { id: 'metamorphic', name: 'Metamorphic rocks' }
    ],
    links: []
  },
  {
    slug: 'solarsystem', name: 'Solar System', team: 2, time: '50 min', calc: 'None',
    summary: '2027 topic: habitability. Could Europa, Enceladus, Titan or Mars hold life, and how would we know?',
    resource: { kind: 'sheets2', label: 'Two 8.5x11 sheets per team', text: 'Two sheets, both sides, any form and any source, no annotations or labels. No calculators, so practice algebra, estimating and proportions.' },
    topics: [
      { id: 'worlds', name: 'The worlds (Venus, Mars, Ganymede, Europa, Enceladus, Titan, Makemake, Bennu, 67P)' },
      { id: 'hab', name: 'Conditions for habitability' },
      { id: 'bio', name: 'Biology and chemistry of life' },
      { id: 'detect', name: 'Finding exoplanets' },
      { id: 'missions', name: 'Spacecraft and telescopes' },
      { id: 'math', name: 'Math without a calculator' }
    ],
    links: []
  },
  {
    slug: 'thermodynamics', name: 'Thermodynamics', team: 2, time: '50 min', calc: 'Class III',
    summary: 'Build a device that collects heat from a lamp, plus a written test on heat, energy and the laws of thermodynamics. This site covers the test.',
    resource: { kind: 'notes', label: 'Notes of any size', text: 'A collection of notes on paper, any size, any form, any source. Binders, tabs and labels are allowed, and pages may be removed for use. Two Class III calculators. The device must be built before the tournament and impounded.' },
    topics: [
      { id: 'systems', name: 'Systems, temperature, scales and units' },
      { id: 'phases', name: 'Phases, latent heat and the ideal gas law' },
      { id: 'transfer', name: 'Heat transfer, conductivity and specific heat' },
      { id: 'laws', name: 'Processes, engines, efficiency and the laws' },
      { id: 'history', name: 'Historic scientists' }
    ],
    links: []
  },
  {
    slug: 'waterquality', name: 'Water Quality', team: 2, time: '50 min', calc: 'Class II',
    summary: '2027 topic: marine and estuary water, including coral reef animals and ocean pollution.',
    resource: { kind: 'sheet', label: 'One 8.5x11 sheet per team', text: 'One sheet, both sides, any form and any source. No affixed labels, and no second sheet. Category C eye protection is needed for the salinometer part (if your meet runs it).' },
    topics: [
      { id: 'estuary', name: 'Estuaries, salinity and ecology' },
      { id: 'pollution', name: 'Pollution, algal blooms and dissolved oxygen' },
      { id: 'reef', name: 'Coral reefs and reef organisms' },
      { id: 'indicators', name: 'Indicator organisms and data' }
    ],
    links: []
  },
  {
    slug: 'writeitdoit', name: 'Write It Do It', team: 2, time: '50 min', calc: 'None',
    summary: 'One partner writes directions for an object they can see. The other builds it from the words alone.',
    resource: { kind: 'none', label: 'Nothing allowed', text: 'The writer brings a writing utensil. No other materials or resources.' },
    topics: [],
    links: []
  }
];

/* Links shown on the home page and every event page. */
window.GENERAL_LINKS = [
  { label: 'Science Olympiad official event pages (practice problems and lecture links)', url: 'https://www.soinc.org/events/2026-division-b-events', note: 'This is the 2026 list. Look for the 2027 version.' },
  { label: 'Scioly.org wiki and Test Exchange', url: 'https://scioly.org/wiki', note: 'Past tournament and practice tests back to 1994, most with keys.' },
  { label: 'Berkeley Invitational: 2026 tests and keys', url: 'https://scilympiad.com/scioly-at-berkeley', note: 'Division B tests on Scilympiad.' },
  { label: 'Georgia Tech practice tests and keys', url: 'https://www.sciolygatech.org/yji2025/exams', note: 'Mostly Div C. Many topics still apply.' },
  { label: 'UGA invitational exams', url: 'https://scienceolympiad.uga.edu/2026-uga-div-c-invitational/tournament-exams', note: 'Div C, but useful for shared events.' },
  { label: 'UMBC invitational keys', url: 'https://sciolympiad.umbc.edu/home/results', note: 'Answer keys from the 2025 invitational.' },
  { label: 'Duosmium: tournament results and links', url: 'https://duosmium.org/results', note: 'Find invitationals, then look for their posted tests.' },
  { label: 'Student-written test library', url: 'https://0xmmalik.github.io/scioly', note: 'Circuit Lab, Heredity, Food Science, Codebusters and Disease Detectives.' },
  { label: 'Science Olympiad Store', url: 'https://store.soinc.org', note: 'National test packets with keys (paid).' }
];

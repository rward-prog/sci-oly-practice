/* More question banks, written after the first meet. All questions are original.
   They follow the topics the meet tests covered and the 2027 Division B rule book.
   add(slug, questions, pairs) creates a bank or adds to an existing one. */
(function () {
  function add(slug, questions, pairs) {
    var b = window.QBANK[slug] || (window.QBANK[slug] = { questions: [], pairs: [] });
    b.questions = b.questions.concat(questions || []);
    b.pairs = (b.pairs || []).concat(pairs || []);
  }

  /* ---------- Anatomy & Physiology ---------- */
  add('anatomy', [
    { t: 'resp', q: 'Which muscle does most of the work of quiet inhalation?', a: ['Diaphragm', 'Biceps brachii', 'Rectus abdominis', 'Trapezius'], c: 0, e: 'The diaphragm contracts and flattens, which enlarges the chest cavity and pulls air in.' },
      { t: 'resp', q: 'On a spirogram, the volume of air moved in one normal, quiet breath is called what?', a: ['Tidal volume', 'Vital capacity', 'Residual volume', 'Inspiratory reserve volume'], c: 0, e: 'Tidal volume is about 500 mL in a resting adult. Vital capacity is the most air you can move in one breath.' },
      { t: 'resp', q: 'Where does gas exchange between air and blood take place?', a: ['Alveoli', 'Bronchi', 'Trachea', 'Pharynx'], c: 0, e: 'Alveoli are tiny sacs with thin walls surrounded by capillaries, so O2 and CO2 diffuse quickly.' },
      { t: 'resp', q: 'During hard exercise, muscles are warm, acidic and high in CO2. What does this do to hemoglobin\'s grip on oxygen?', a: ['It loosens, so more oxygen is released to the muscles', 'It tightens, so less oxygen is released', 'It has no effect', 'It makes hemoglobin stop carrying oxygen'], c: 0, e: 'This is the Bohr effect. The oxygen dissociation curve shifts right, which gives more O2 to tissues that need it.' },
      { t: 'resp', q: 'Which condition causes airways to become inflamed and narrow, usually reversible with a bronchodilator?', a: ['Asthma', 'Emphysema', 'Pulmonary fibrosis', 'Cystic fibrosis'], c: 0, e: 'In emphysema the alveolar walls are destroyed, which is permanent. Asthma flares up and can be relieved.' },
      { t: 'resp', q: 'What happens to breathing at high altitude, where oxygen pressure is lower?', a: ['Breathing rate rises, and over days the body makes more red blood cells', 'Breathing rate drops', 'Hemoglobin is destroyed', 'The lungs fill with CO2'], c: 0, e: 'Low oxygen triggers faster breathing right away. Over days the kidneys release EPO, which boosts red blood cell production.' },
      { t: 'dig', q: 'Which cells in the stomach lining secrete hydrochloric acid?', a: ['Parietal cells', 'Chief cells', 'Goblet cells', 'Kupffer cells'], c: 0, e: 'Parietal cells make HCl. Chief cells make pepsinogen, and goblet cells make mucus.' },
      { t: 'dig', q: 'What does bile do, and where is it made?', a: ['It emulsifies fats and is made in the liver', 'It digests protein and is made in the stomach', 'It digests starch and is made in the pancreas', 'It absorbs water and is made in the colon'], c: 0, e: 'The liver makes bile and the gallbladder stores it. Bile breaks fat into tiny droplets so lipase can work.' },
      { t: 'dig', q: 'Food moves through the three parts of the small intestine in what order?', a: ['Duodenum, jejunum, ileum', 'Ileum, jejunum, duodenum', 'Jejunum, duodenum, ileum', 'Duodenum, ileum, jejunum'], c: 0, e: 'Remember D-J-I. Most chemical digestion happens in the duodenum, and most absorption in the jejunum and ileum.' },
      { t: 'dig', q: 'Name the four layers of the wall of the alimentary canal, from the inside out.', a: ['Mucosa, submucosa, muscularis externa, serosa', 'Serosa, muscularis externa, submucosa, mucosa', 'Mucosa, serosa, submucosa, muscularis externa', 'Submucosa, mucosa, serosa, muscularis externa'], c: 0, e: 'The mucosa touches the food, and the serosa is the outer covering.' },
      { t: 'dig', q: 'What causes lactose intolerance?', a: ['Too little of the enzyme lactase', 'An allergy to milk protein', 'Too much stomach acid', 'A blocked bile duct'], c: 0, e: 'Without enough lactase, lactose passes to the large intestine where bacteria ferment it, causing gas and bloating. A milk allergy is an immune reaction.' },
      { t: 'imm', q: 'Which cells make antibodies?', a: ['Plasma cells (activated B cells)', 'Cytotoxic T cells', 'Neutrophils', 'Red blood cells'], c: 0, e: 'B cells that meet their antigen turn into plasma cells, which release large numbers of antibodies.' },
      { t: 'imm', q: 'What is the main job of the thymus?', a: ['It is where T cells mature', 'It makes red blood cells', 'It filters blood', 'It stores bile'], c: 0, e: 'The "T" in T cell stands for thymus. B cells mature in bone marrow.' },
      { t: 'imm', q: 'How does the innate immune system differ from the adaptive immune system?', a: ['Innate is fast and general; adaptive is slower, specific and has memory', 'Innate is slow and specific; adaptive is fast and general', 'Innate only works after vaccination', 'There is no difference'], c: 0, e: 'Skin, inflammation and phagocytes are innate. Adaptive responses use T and B cells that remember a pathogen.' },
      { t: 'imm', q: 'A bee sting causes a severe, rapid allergic reaction with swelling and trouble breathing. Which type of hypersensitivity is this?', a: ['Type I (IgE-mediated)', 'Type II', 'Type III', 'Type IV'], c: 0, e: 'Type I reactions, including anaphylaxis, happen within minutes and involve IgE and mast cells.' },
      { t: 'imm', q: 'HIV weakens the immune system by infecting which cells?', a: ['CD4 helper T cells', 'Red blood cells', 'Platelets', 'Neutrophils'], c: 0, e: 'Helper T cells coordinate the adaptive response, so losing them leaves the body open to infections (AIDS).' }
    ],
    [
      { t: 'dig', term: 'Pyloric sphincter', def: 'Valve between the stomach and the duodenum' },
      { t: 'dig', term: 'Pepsin', def: 'Stomach enzyme that begins protein digestion' },
      { t: 'dig', term: 'Salivary amylase', def: 'Starts breaking down starch in the mouth' },
      { t: 'resp', term: 'Alveolus', def: 'Tiny air sac where gases are exchanged' },
      { t: 'resp', term: 'Tidal volume', def: 'Air moved in one quiet breath' },
      { t: 'imm', term: 'Lymph node', def: 'Bean-shaped organ that filters lymph and houses immune cells' }
    ]);

  /* ---------- Botany ---------- */
  add('botany', [
    { t: 'transport', q: 'Which tissue carries sugars made in the leaves to the rest of the plant?', a: ['Phloem', 'Xylem', 'Epidermis', 'Cork'], c: 0, e: 'Phloem moves sugars (mostly sucrose) in many directions. Xylem moves water and minerals upward.' },
      { t: 'transport', q: 'What is the main job of xylem?', a: ['Carry water and dissolved minerals up from the roots', 'Carry sugar down from the leaves', 'Make chlorophyll', 'Store starch'], c: 0, e: 'Xylem cells are dead at maturity, with strong lignin walls that form hollow pipes.' },
      { t: 'transport', q: 'What do stomata do, and which cells control them?', a: ['Let gases and water vapor pass; guard cells open and close them', 'Absorb water from the soil; root hairs control them', 'Store sugar; companion cells control them', 'Make pollen; anthers control them'], c: 0, e: 'Stomata let CO2 in and O2 and water vapor out. Guard cells change shape to open or close the pore.' },
      { t: 'transport', q: 'Which plant hormone is mainly responsible for stems bending toward light?', a: ['Auxin', 'Ethylene', 'Abscisic acid', 'Gibberellin'], c: 0, e: 'Auxin builds up on the shaded side and makes those cells elongate, which bends the stem toward the light.' },
      { t: 'photo', q: 'Which pair are the products of photosynthesis?', a: ['Glucose and oxygen', 'Carbon dioxide and water', 'ATP and nitrogen', 'Starch and carbon dioxide'], c: 0, e: '6CO2 + 6H2O + light energy makes C6H12O6 (glucose) + 6O2.' },
      { t: 'photo', q: 'Where in the chloroplast do the light-dependent reactions occur?', a: ['Thylakoid membranes', 'Stroma', 'Outer membrane', 'Nucleus'], c: 0, e: 'The Calvin cycle (light-independent) takes place in the stroma.' },
      { t: 'structure', q: 'Which feature do plant cells have that animal cells lack?', a: ['A cell wall made of cellulose', 'A nucleus', 'Mitochondria', 'A cell membrane'], c: 0, e: 'Plant cells also have chloroplasts and a large central vacuole that gives turgor pressure.' },
      { t: 'groups', q: 'A plant has leaves with parallel veins and seeds with one cotyledon. What is it?', a: ['A monocot', 'A dicot', 'A fern', 'A moss'], c: 0, e: 'Monocots (such as grasses and lilies) have parallel veins. Dicots have branched, net-like veins and two cotyledons.' },
      { t: 'repro', q: 'What is the difference between pollination and fertilization?', a: ['Pollination moves pollen to a stigma; fertilization is when sperm joins the egg', 'They are the same', 'Pollination makes seeds; fertilization makes pollen', 'Fertilization happens before pollination'], c: 0, e: 'Pollen lands on the stigma and grows a pollen tube. Fertilization happens later inside the ovule.' },
      { t: 'repro', q: 'Which parts make up the stamen?', a: ['Anther and filament', 'Stigma, style and ovary', 'Petal and sepal', 'Ovule and receptacle'], c: 0, e: 'The stamen is the male part. Stigma, style and ovary make up the carpel (pistil).' },
      { t: 'evo', q: 'Which group of plants has seeds but no flowers or fruit?', a: ['Gymnosperms (such as pines)', 'Angiosperms', 'Ferns', 'Mosses'], c: 0, e: 'The big milestones were vascular tissue, then seeds, then flowers and fruit.' },
      { t: 'eco', q: 'How do legumes help with the nitrogen cycle?', a: ['Bacteria in their root nodules turn N2 gas into usable nitrogen', 'They absorb N2 through their leaves', 'They release nitrogen as a gas into the air', 'They remove nitrogen from the soil'], c: 0, e: 'Rhizobium bacteria fix nitrogen into ammonia, which plants can use.' },
      { t: 'eco', q: 'Water hyacinth is called an invasive species because it...', a: ['Spreads fast, blocks sunlight and chokes waterways', 'Has no roots', 'Is poisonous to people only', 'Grows only in deserts'], c: 0, e: 'Dense mats shade out native plants and use up the oxygen in the water below.' },
      { t: 'disease', q: 'The oldest leaves on a plant turn yellow while new leaves stay green. Which nutrient is most likely lacking?', a: ['Nitrogen', 'Calcium', 'Iron', 'Boron'], c: 0, e: 'Nitrogen is mobile, so the plant moves it from old leaves to new growth. Immobile nutrients (like iron and calcium) show up in young leaves first.' }
    ],
    [
      { t: 'transport', term: 'Xylem', def: 'Carries water and minerals up from roots' },
      { t: 'transport', term: 'Phloem', def: 'Carries sugars through the plant' },
      { t: 'transport', term: 'Guard cell', def: 'Opens and closes a stoma' },
      { t: 'photo', term: 'Chlorophyll', def: 'Green pigment that captures light' },
      { t: 'repro', term: 'Stigma', def: 'Sticky tip of the carpel that catches pollen' },
      { t: 'groups', term: 'Gymnosperm', def: 'Seed plant with no flowers or fruit' }
    ]);

  /* ---------- Meteorology ---------- */
  add('meteorology', [
    { t: 'clouds', q: 'Which best describes mammatus clouds?', a: ['Pouch-like lumps hanging from the underside of an anvil', 'Smooth lens-shaped clouds over mountains', 'A rotating funnel from a cloud base', 'A thin line along a cold front'], c: 0, e: 'Mammatus often form beneath anvil clouds on severe thunderstorms, but they are not a tornado.' },
      { t: 'clouds', q: 'A lowered, rotating, localized part of a supercell\'s base is called what?', a: ['A wall cloud', 'A shelf cloud', 'A mammatus cloud', 'A cirrus cloud'], c: 0, e: 'Wall clouds sit below the updraft. A tornado may form from one.' },
      { t: 'tools', q: 'On a Doppler velocity image, a tight pair of strong inbound and outbound winds side by side suggests what?', a: ['Rotation, such as a mesocyclone or tornado', 'Calm weather', 'A stationary front', 'Heavy fog'], c: 0, e: 'A velocity couplet shows opposite wind directions right next to each other. If the winds instead spread apart, it points to divergence, like a downburst.' },
      { t: 'tools', q: 'On a Doppler velocity display, what do the cool colors (green or blue) usually show?', a: ['Winds moving toward the radar', 'Winds moving away from the radar', 'Heavy rain', 'Hail'], c: 0, e: 'Cool colors are inbound and warm colors (red) are outbound.' },
      { t: 'tools', q: 'In infrared satellite imagery, what do very cold cloud tops mean?', a: ['The clouds are tall, with high tops that are often thunderstorms', 'The clouds are very thin and low', 'There are no clouds', 'It is nighttime'], c: 0, e: 'Temperature drops with height, so colder tops mean higher tops.' },
      { t: 'data', q: 'A METAR reports wind as 28012G20KT. What does that mean?', a: ['From 280 degrees at 12 knots, gusting to 20 knots', 'From 28 degrees at 120 knots', 'Toward 280 degrees at 12 mph', 'A temperature of 28 with a dew point of 12'], c: 0, e: 'The first three digits are direction (where the wind comes from), the next two are speed, and G adds the gust.' },
      { t: 'data', q: 'What does a hodograph show?', a: ['How wind speed and direction change with height', 'How temperature changes with time', 'The track of a hurricane', 'The pressure at sea level'], c: 0, e: 'Meteorologists use hodographs to judge wind shear, which matters for supercells.' },
      { t: 'data', q: 'On a Stuve diagram, a rising parcel stays warmer than its surroundings. What happens next?', a: ['It keeps rising because it is positively buoyant', 'It sinks right away', 'It stops immediately', 'It loses all moisture'], c: 0, e: 'Air warmer than its surroundings is less dense, so it keeps accelerating upward.' },
      { t: 'data', q: 'You compare several runs of a computer weather model. What is the smartest way to use them?', a: ['Check them against observations and look for trends across runs', 'Trust the newest run completely', 'Ignore observations', 'Use only the temperature forecast'], c: 0, e: 'Models can be wrong. Forecasters compare them with real data and look for consistency.' },
      { t: 'factors', q: 'Which setup best supports a long-lived supercell?', a: ['Warm, moist surface air, strong instability, a lifting trigger and strong wind shear', 'Cold, dry air with high pressure', 'A stable air mass with weak winds', 'Clear skies and light winds'], c: 0, e: 'Instability and moisture fuel the storm. Shear helps it rotate and keeps the updraft and downdraft apart.' },
      { t: 'factors', q: 'What is a dryline?', a: ['A boundary between moist and dry air, common before Great Plains storms', 'A line of freezing rain', 'A cold front with no clouds', 'The edge of a hurricane eye'], c: 0, e: 'Thunderstorms often fire up along a dryline in spring.' },
      { t: 'factors', q: 'Which conditions produce heavy lake-effect snow?', a: ['Cold air moving over a long stretch of warm, unfrozen lake water', 'Warm air moving over a frozen lake', 'Dry air moving from the land toward the lake', 'Still air over a cold lake'], c: 0, e: 'The air picks up heat and moisture from the lake, then dumps snow when it rises over land downwind.' },
      { t: 'factors', q: 'Thunderstorm electrification depends mostly on collisions between which things?', a: ['Ice crystals, graupel and supercooled water in strong updrafts', 'Raindrops and sunlight', 'Dust and clear air', 'Warm sea spray and fog'], c: 0, e: 'Collisions separate charge, with positive charge carried up and negative charge collecting lower in the cloud.' },
      { t: 'factors', q: 'Which of these is NOT a typical hazard of a landfalling hurricane?', a: ['Volcanic ash fall', 'Storm surge', 'Inland flooding from heavy rain', 'Tornadoes in outer bands'], c: 0, e: 'Surge, flooding, wind and tornadoes all come with hurricanes. Ash comes from volcanoes.' }
    ],
    [
      { t: 'clouds', term: 'Cumulonimbus', def: 'Tall thunderstorm cloud with an anvil top' },
      { t: 'clouds', term: 'Wall cloud', def: 'Lowered, rotating base under a supercell updraft' },
      { t: 'tools', term: 'Radiosonde', def: 'Weather balloon instrument that measures temperature, humidity and wind' },
      { t: 'tools', term: 'ASOS', def: 'Automated Surface Observing System station' },
      { t: 'data', term: 'METAR', def: 'Coded surface weather observation for airports' },
      { t: 'factors', term: 'Wind shear', def: 'A change in wind speed or direction with height' }
    ]);

  /* ---------- Remote Sensing ---------- */
  add('remotesensing', [
    { t: 'light', q: 'Light has a wavelength that doubles while its speed stays the same. What happens to its frequency?', a: ['It is cut in half', 'It doubles', 'It stays the same', 'It quadruples'], c: 0, e: 'The wave equation is c = wavelength x frequency, so with c fixed, a longer wavelength means a lower frequency.' },
      { t: 'light', q: 'Light enters water from air. What does Snell\'s law say happens?', a: ['It bends toward the normal because it slows down', 'It bends away from the normal', 'It does not bend', 'It speeds up'], c: 0, e: 'n1 sin(theta1) = n2 sin(theta2). Light slows in a denser medium, so it bends toward the normal.' },
      { t: 'light', q: 'Healthy vegetation reflects strongly in which part of the spectrum?', a: ['Near infrared', 'Ultraviolet', 'Red', 'Thermal infrared'], c: 0, e: 'Leaf structure reflects near-infrared light, while chlorophyll absorbs red. That contrast is behind vegetation indices like NDVI.' },
      { t: 'sensors', q: 'What is the difference between passive and active sensors?', a: ['Passive sensors measure sunlight or heat that is already there; active sensors send out their own signal', 'Passive sensors are always in space; active sensors are on the ground', 'Passive sensors only see at night', 'There is no difference'], c: 0, e: 'Landsat is passive. Radar and lidar are active.' },
      { t: 'sensors', q: 'In a radar (SAR) image, why does calm water usually look dark?', a: ['It is smooth, so the signal bounces away from the sensor', 'It absorbs all light', 'It is hotter than land', 'It reflects the signal straight back'], c: 0, e: 'Rough surfaces scatter more of the signal back (backscatter), so they look brighter.' },
      { t: 'sensors', q: 'A radar altimeter\'s pulse takes 0.004 seconds for the round trip to the surface and back. The speed of light is 3 x 10^8 m/s. How far away is the surface?', a: ['600 km', '1200 km', '60 km', '1.2 x 10^6 km'], c: 0, e: 'Range = c x t / 2 = (3 x 10^8 x 0.004) / 2 = 6 x 10^5 m = 600 km.' },
      { t: 'orbits', q: 'A geostationary satellite such as GOES orbits at about 35,786 km. What makes it "stationary"?', a: ['Its orbit period matches Earth\'s rotation over the equator', 'It has no motion', 'It is outside the atmosphere', 'It is attached to a ground station'], c: 0, e: 'It orbits once per day above the equator, so it stays over the same spot and can monitor the same weather.' },
      { t: 'orbits', q: 'Why are Landsat satellites in a sun-synchronous polar orbit?', a: ['They cross the equator at the same local time each pass, so lighting is consistent', 'They hover over the poles', 'They stay above one city', 'They avoid the Sun'], c: 0, e: 'Consistent lighting makes it easier to compare images taken at different times.' },
      { t: 'resolution', q: 'What does spatial resolution describe?', a: ['The size of the ground area covered by one pixel', 'How often the satellite returns', 'How many colors the sensor sees', 'How bright the image is'], c: 0, e: 'Landsat\'s is about 30 m. Temporal resolution is the revisit time, and spectral resolution is the number and width of bands.' },
      { t: 'resolution', q: 'A satellite passes over the same place every 16 days. Which kind of resolution is that?', a: ['Temporal', 'Spatial', 'Spectral', 'Radiometric'], c: 0, e: 'Temporal resolution is how often the same location is imaged.' },
      { t: 'images', q: 'In a false-color image where near-infrared is shown as red, what does bright red usually mean?', a: ['Healthy vegetation', 'Deep water', 'Bare rock', 'Snow'], c: 0, e: 'Vegetation reflects a lot of near-infrared, so it shows up bright red. Water is dark.' }
    ],
    [
      { t: 'sensors', term: 'LIDAR', def: 'Active sensor that uses laser pulses' },
      { t: 'sensors', term: 'SAR', def: 'Synthetic aperture radar, an active microwave sensor' },
      { t: 'orbits', term: 'Geostationary', def: 'Orbit that keeps a satellite over one spot on the equator' },
      { t: 'resolution', term: 'Spectral resolution', def: 'Number and width of wavelength bands a sensor records' },
      { t: 'light', term: 'Snell\'s law', def: 'Describes how light bends between materials' },
      { t: 'resolution', term: 'Temporal resolution', def: 'How often an area is imaged' }
    ]);

  /* ---------- Rocks & Minerals ---------- */
  add('rocksminerals', [
    { t: 'minerals', q: 'Which statement defines a mineral?', a: ['A naturally occurring inorganic solid with a definite composition and crystal structure', 'Any hard rock', 'A man-made crystal', 'Any shiny solid'], c: 0, e: 'Ice is a mineral. Glass and coal are not, because they have no crystal structure or are organic.' },
      { t: 'minerals', q: 'Quartz scratches glass but calcite does not. What can you say about their Mohs hardness?', a: ['Quartz (7) is harder than glass; calcite (3) is softer', 'Calcite is harder than quartz', 'They are equal', 'Hardness does not matter here'], c: 0, e: 'Glass is about 5.5 on the Mohs scale. Quartz is 7, and calcite is 3.' },
      { t: 'minerals', q: 'What does a streak test show?', a: ['The color of a mineral\'s powder', 'How hard the mineral is', 'How it breaks', 'Its density'], c: 0, e: 'Hematite can look silver or red but always leaves a reddish-brown streak.' },
      { t: 'minerals', q: 'A mineral breaks along flat, smooth planes. What property is this?', a: ['Cleavage', 'Fracture', 'Luster', 'Streak'], c: 0, e: 'Fracture is when it breaks in irregular ways. Quartz shows conchoidal (curved) fracture.' },
      { t: 'minerals', q: 'Galena looks like shiny metal. What is its luster?', a: ['Metallic', 'Vitreous', 'Pearly', 'Dull'], c: 0, e: 'Metallic luster looks like polished metal. Quartz has vitreous (glassy) luster.' },
      { t: 'minerals', q: 'Which mineral fizzes in weak hydrochloric acid and shows double refraction?', a: ['Calcite', 'Quartz', 'Halite', 'Talc'], c: 0, e: 'Calcite (CaCO3) reacts with acid to release CO2. Double refraction shows up in clear calcite.' },
      { t: 'igneous', q: 'Why does granite have large crystals while basalt has tiny ones?', a: ['Granite cooled slowly underground; basalt cooled quickly at the surface', 'Granite cooled quickly; basalt cooled slowly', 'They are made of different minerals only', 'Granite is metamorphic'], c: 0, e: 'Intrusive rocks cool slowly and grow large crystals. Extrusive rocks cool fast and have small ones.' },
      { t: 'igneous', q: 'In Bowen\'s reaction series, which mineral crystallizes first from cooling magma?', a: ['Olivine', 'Quartz', 'Muscovite', 'Orthoclase'], c: 0, e: 'Olivine crystallizes at the highest temperature. Quartz crystallizes last, which is why olivine and quartz rarely coexist.' },
      { t: 'igneous', q: 'Obsidian is smooth and glassy with no visible crystals. Why?', a: ['Lava cooled so fast that crystals had no time to form', 'It cooled very slowly', 'It is a mineral', 'It contains no silica'], c: 0, e: 'Obsidian is volcanic glass.' },
      { t: 'sedimentary', q: 'Which rock forms when seawater evaporates and leaves minerals behind?', a: ['Rock salt (halite)', 'Sandstone', 'Shale', 'Conglomerate'], c: 0, e: 'Evaporites such as rock salt and gypsum are chemical sedimentary rocks.' },
      { t: 'sedimentary', q: 'Which pair is made of clastic sedimentary rocks?', a: ['Sandstone and shale', 'Limestone and marble', 'Granite and basalt', 'Slate and gneiss'], c: 0, e: 'Clastic rocks are made from pieces of other rocks. Marble, slate and gneiss are metamorphic.' },
      { t: 'metamorphic', q: 'What is the difference between foliated and non-foliated metamorphic rocks?', a: ['Foliated rocks have aligned mineral layers; non-foliated rocks do not', 'Foliated rocks are igneous', 'Non-foliated rocks are layered', 'There is no difference'], c: 0, e: 'Slate, schist and gneiss are foliated. Marble and quartzite are non-foliated.' },
      { t: 'metamorphic', q: 'Limestone is changed by heat and pressure without melting. What does it become?', a: ['Marble', 'Slate', 'Quartzite', 'Gneiss'], c: 0, e: 'Sandstone becomes quartzite, and shale becomes slate, then phyllite, schist and gneiss with more metamorphism.' },
      { t: 'metamorphic', q: 'How do regional and contact metamorphism differ?', a: ['Regional happens over large areas under heat and pressure; contact is near hot magma', 'Regional is near magma; contact covers big areas', 'Both happen only on the surface', 'Neither involves heat'], c: 0, e: 'Contact metamorphism creates a baked zone around an intrusion. Regional metamorphism happens with mountain building.' }
    ],
    [
      { t: 'igneous', term: 'Granite', def: 'Light, coarse-grained intrusive igneous rock' },
      { t: 'igneous', term: 'Basalt', def: 'Dark, fine-grained extrusive igneous rock' },
      { t: 'igneous', term: 'Obsidian', def: 'Volcanic glass with no crystals' },
      { t: 'sedimentary', term: 'Limestone', def: 'Sedimentary rock made mostly of calcite' },
      { t: 'metamorphic', term: 'Slate', def: 'Foliated rock formed from shale' },
      { t: 'metamorphic', term: 'Marble', def: 'Non-foliated rock formed from limestone' },
      { t: 'minerals', term: 'Quartz', def: 'Mohs hardness 7, vitreous luster, conchoidal fracture' },
      { t: 'minerals', term: 'Talc', def: 'Mohs hardness 1, softest mineral' }
    ]);

  /* ---------- Food Science (dairy only, per the 2027 rules) ---------- */
  add('foodscience', [
    { t: 'proteins', q: 'Milk has two main kinds of protein. Which is true?', a: ['Casein forms curds with acid or rennet; whey stays in the liquid', 'Whey forms curds; casein stays in the liquid', 'Both are fats', 'Neither one is affected by acid'], c: 0, e: 'Casein is about 80% of milk protein. When it clumps, you get curds, and the liquid left over is whey.' },
      { t: 'lactose', q: 'Lactose is a sugar made of which two simple sugars?', a: ['Glucose and galactose', 'Glucose and fructose', 'Two glucose', 'Fructose and galactose'], c: 0, e: 'Lactase splits lactose into glucose and galactose. Table sugar (sucrose) is glucose plus fructose.' },
      { t: 'lactose', q: 'How is lactose-free milk made?', a: ['Lactase is added so the lactose is already broken down', 'The sugar is boiled away', 'The fat is removed', 'The milk is frozen'], c: 0, e: 'Because glucose and galactose taste sweeter than lactose, lactose-free milk tastes a bit sweeter.' },
      { t: 'lactose', q: 'Which statement separates a milk allergy from lactose intolerance?', a: ['An allergy is an immune reaction to milk proteins; intolerance is a digestive problem with the sugar', 'They are the same', 'An allergy is about sugar; intolerance is about protein', 'Intolerance involves IgE antibodies'], c: 0, e: 'Allergies can be dangerous. Intolerance is uncomfortable but not an immune reaction.' },
      { t: 'processing', q: 'What is the purpose of pasteurizing milk?', a: ['Heat kills harmful microbes and extends shelf life', 'Add vitamins', 'Make the milk thicker', 'Remove lactose'], c: 0, e: 'High-temperature short-time (HTST) pasteurization uses about 72 degrees C for at least 15 seconds.' },
      { t: 'processing', q: 'What does homogenization do?', a: ['Breaks fat into tiny droplets so cream does not rise', 'Kills bacteria', 'Removes whey', 'Adds air'], c: 0, e: 'Homogenized milk stays evenly mixed because the fat droplets are too small to separate.' },
      { t: 'processing', q: 'Milk is an emulsion. What does that mean?', a: ['Tiny fat droplets are spread through water and kept from joining', 'It is a solid', 'It has no fat', 'It is a gas'], c: 0, e: 'Proteins and phospholipids coat the fat droplets so they stay suspended. Emulsifiers like lecithin do the same job in other foods.' },
      { t: 'freezing', q: 'Why do we add salt to the ice around ice cream mix?', a: ['Salt lowers the freezing point so the ice bath gets colder than 0 C', 'Salt makes the ice melt slower', 'Salt makes the ice cream salty', 'Salt adds air'], c: 0, e: 'This is freezing point depression. The salty ice water can reach about -10 C or colder, which is cold enough to freeze the mix.' },
      { t: 'macros', q: 'Which statement about saturated fat is correct?', a: ['It has no carbon-carbon double bonds in its fatty acid chains', 'It has many double bonds', 'It is always liquid at room temperature', 'It is a protein'], c: 0, e: 'Milk fat is mostly saturated, which is why butter is solid at room temperature.' },
      { t: 'macros', q: 'A triglyceride forms when glycerol joins with what, in a reaction called esterification?', a: ['Three fatty acids', 'Three amino acids', 'Three glucose molecules', 'Three nucleotides'], c: 0, e: 'Each fatty acid joins to glycerol with an ester bond, releasing water.' },
      { t: 'labs', q: 'In the curd task, why do you add acid (like vinegar) to warm milk?', a: ['Acid causes casein to clump into curds that separate from whey', 'Acid makes the milk sweeter', 'Acid kills lactose', 'Acid freezes the milk'], c: 0, e: 'Casein proteins clump when the pH drops. The mass of the curds is part of the score.' },
      { t: 'labs', q: 'When you shake heavy cream until butter forms, what is the liquid left behind?', a: ['Buttermilk', 'Whey', 'Skim milk', 'Yogurt'], c: 0, e: 'Shaking breaks fat droplet membranes so the fat clumps together into butter. What is left is buttermilk.' },
      { t: 'labels', q: 'What are probiotics?', a: ['Live microorganisms that can give health benefits, such as Lactobacillus in yogurt', 'Chemicals that kill germs', 'A kind of fat', 'A preservative'], c: 0, e: 'Yogurt is made by bacteria that ferment lactose into lactic acid, which also thickens the milk.' }
    ],
    [
      { t: 'proteins', term: 'Casein', def: 'Milk protein that forms curds' },
      { t: 'proteins', term: 'Whey', def: 'Milk protein that stays in the liquid after curdling' },
      { t: 'lactose', term: 'Lactase', def: 'Enzyme that digests lactose' },
      { t: 'processing', term: 'Pasteurization', def: 'Heating to kill harmful microbes' },
      { t: 'processing', term: 'Homogenization', def: 'Breaking fat into tiny droplets so it stays mixed' },
      { t: 'freezing', term: 'Freezing point depression', def: 'Why salt makes an ice bath colder than 0 C' }
    ]);

  /* ---------- Crime Busters ---------- */
  add('crimebusters', [
    { t: 'solids', q: 'Which white powder fizzes when you add vinegar?', a: ['Baking soda', 'Cornstarch', 'Sand', 'Powdered gelatin'], c: 0, e: 'Baking soda (sodium bicarbonate) reacts with acid and releases CO2 bubbles.' },
      { t: 'solids', q: 'A drop of iodine turns blue-black on a white powder. What is it most likely?', a: ['Cornstarch', 'Baking soda', 'Sand', 'Powdered gelatin'], c: 0, e: 'Iodine is the classic test for starch.' },
      { t: 'solids', q: 'Which of these metals is attracted to a magnet?', a: ['Iron', 'Aluminum', 'Copper', 'Zinc'], c: 0, e: 'Iron is the only common metal on the 2027 list that is strongly magnetic.' },
      { t: 'hair', q: 'Burning a fiber, it melts into a hard bead. What kind of fiber is it?', a: ['Synthetic', 'Animal (wool)', 'Vegetable (cotton)', 'Hair'], c: 0, e: 'Animal fibers smell like burning hair. Vegetable fibers burn quickly like paper. Synthetic fibers melt.' },
      { t: 'plastics', q: 'Which recyclable plastic is used for soda bottles and has recycling number 1?', a: ['PETE', 'HDPE', 'PVC', 'PP'], c: 0, e: 'HDPE is #2, PVC is #3, LDPE is #4, PP is #5 and polystyrene is #6.' },
      { t: 'chroma', q: 'A spot travels 3 cm while the solvent front travels 6 cm. What is the Rf value?', a: ['0.5', '2', '18', '0.3'], c: 0, e: 'Rf = distance moved by the spot / distance moved by the solvent front = 3 / 6 = 0.5.' },
      { t: 'chroma', q: 'In paper chromatography, why do different dyes in a marker travel different distances?', a: ['They differ in how strongly they stick to the paper compared to how well they dissolve in the solvent', 'They have different temperatures', 'They are different sizes of paper', 'The solvent changes color'], c: 0, e: 'Dyes that dissolve well and cling less travel farther.' },
      { t: 'scene', q: 'Which three basic fingerprint patterns can you be asked to identify?', a: ['Whorls, loops and arches', 'Circles, squares and triangles', 'Dots, lines and curves', 'Peaks, valleys and plains'], c: 0, e: 'Loops are the most common pattern.' },
      { t: 'scene', q: 'A blood drop is elongated with a tail on one side. What does the tail tell you?', a: ['The direction the drop was traveling', 'The drop fell straight down', 'The drop was frozen', 'The drop came from a plant'], c: 0, e: 'A circular spot suggests a drop landing at about 90 degrees. The tail points the way the drop was going.' },
      { t: 'scene', q: 'Two DNA electropherograms have peaks at exactly the same positions. What does that suggest?', a: ['The samples likely came from the same person', 'The samples came from different species', 'The samples are too small to read', 'The DNA is damaged'], c: 0, e: 'Matching peak positions across the compared markers suggest a match.' },
      { t: 'analysis', q: 'In the final analysis, what should you do besides naming the culprit?', a: ['Explain why each other suspect was ruled out', 'Only list the evidence you found', 'Repeat the story', 'Say nothing about other suspects'], c: 0, e: 'The rules say the analysis explains which suspect and why, and why the others were not chosen.' }
    ],
    [
      { t: 'chroma', term: 'Rf value', def: 'Distance of spot divided by distance of solvent front' },
      { t: 'scene', term: 'Whorl', def: 'Fingerprint pattern with circular ridges' },
      { t: 'solids', term: 'Iodine test', def: 'Turns blue-black with starch' },
      { t: 'plastics', term: 'HDPE', def: 'Recycling number 2, used in milk jugs' },
      { t: 'scene', term: 'Spatter tail', def: 'Points in the direction of travel' }
    ]);

  /* ---------- Experimental Design ---------- */
  add('experimentaldesign', [
    { t: 'variables', q: 'You test how the distance from a hinge changes the force needed to turn a book. What is the independent variable?', a: ['The distance from the hinge', 'The force needed', 'The brand of book', 'The temperature of the room'], c: 0, e: 'The independent variable is the one you change on purpose. The dependent variable (force needed) is what you measure.' },
      { t: 'variables', q: 'In the same test, what is the dependent variable?', a: ['The force needed to turn the book', 'The distance from the hinge', 'The color of the rubber bands', 'The time of day'], c: 0, e: 'It depends on what you change. Here you might measure force in rubber band stretches or number of pennies.' },
      { t: 'variables', q: 'Which of these should be a constant in a fair test?', a: ['The same book and the same type of rubber band', 'The independent variable', 'The measurement you are recording', 'The number of trials'], c: 0, e: 'Constants are everything you keep the same so only the independent variable can affect the result.' },
      { t: 'design', q: 'A team changes the hinge distance and the number of pennies at the same time. What is wrong?', a: ['They changed two variables, so they cannot tell which one caused the result', 'They used too few pennies', 'They measured twice', 'Nothing is wrong'], c: 0, e: 'Change one thing at a time.' },
      { t: 'design', q: 'Why do scientists repeat each trial several times?', a: ['To check that results are consistent and reduce the effect of mistakes', 'To use up the materials', 'To make the report longer', 'To change the independent variable'], c: 0, e: 'Three or more trials, then an average, give more reliable data than a single try.' },
      { t: 'data', q: 'On a graph of an experiment, which axis does the independent variable go on?', a: ['The x-axis (horizontal)', 'The y-axis (vertical)', 'Either one', 'Neither'], c: 0, e: 'The independent variable goes on x and the dependent variable on y.' },
      { t: 'report', q: 'Which is the best way to start a hypothesis?', a: ['If the distance from the hinge increases, then less force will be needed, because the lever arm is longer', 'The book will move', 'I think torque is cool', 'Force is measured in newtons'], c: 0, e: 'A good hypothesis says what you will change, what you expect to happen, and why.' },
      { t: 'report', q: 'A conclusion should do which of these?', a: ['Use your data to support or reject the hypothesis and name sources of error', 'Repeat the procedure', 'List the materials again', 'Avoid mentioning mistakes'], c: 0, e: 'Cite your numbers. Honest error sources, like a slipping rubber band, earn credit.' }
    ],
    []);

  /* ---------- Thermodynamics (written test) ---------- */
  add('thermodynamics', [
    { t: 'systems', q: 'What does the zeroth law of thermodynamics say?', a: ['If A and B are each in thermal equilibrium with C, then A and B are in equilibrium with each other', 'Energy cannot be created or destroyed', 'Entropy always increases', 'Heat flows from cold to hot'], c: 0, e: 'The zeroth law is what makes temperature a meaningful, measurable quantity.' },
      { t: 'systems', q: 'Which is an intensive property?', a: ['Temperature', 'Mass', 'Volume', 'Total energy'], c: 0, e: 'Intensive properties do not change with the amount of material. Extensive ones (mass, volume) do.' },
      { t: 'systems', q: 'What is 27 degrees C on the Kelvin scale?', a: ['300 K', '246 K', '27 K', '273 K'], c: 0, e: 'K = C + 273 (or 273.15). 27 + 273 = 300 K.' },
      { t: 'phases', q: 'What is latent heat?', a: ['Energy absorbed or released during a phase change without a change in temperature', 'Heat that changes temperature', 'Heat stored in a battery', 'A kind of friction'], c: 0, e: 'Sensible heat changes temperature. Latent heat changes the phase, such as melting or boiling.' },
      { t: 'phases', q: 'At constant temperature and amount of gas, you halve the volume. What happens to the pressure?', a: ['It doubles', 'It halves', 'It stays the same', 'It quadruples'], c: 0, e: 'PV = nRT. With T and n constant, P and V are inversely proportional (Boyle\'s law).' },
      { t: 'transfer', q: 'How much heat is needed to warm 100 g of water by 10 degrees C? (Specific heat of water is 4.18 J/g/C.)', a: ['4180 J', '418 J', '41.8 J', '41,800 J'], c: 0, e: 'Q = m x c x change in T = 100 x 4.18 x 10 = 4180 J.' },
      { t: 'transfer', q: 'Heat from the Sun travels to Earth mainly by which method?', a: ['Radiation', 'Conduction', 'Convection', 'Evaporation'], c: 0, e: 'Radiation needs no medium, so it crosses empty space.' },
      { t: 'transfer', q: 'A metal bench feels colder than a wooden one at the same temperature. Why?', a: ['Metal has higher thermal conductivity, so it pulls heat from your hand faster', 'Metal is actually colder', 'Wood makes heat', 'Metal has no heat'], c: 0, e: 'Your hand senses the rate of heat loss, not the temperature itself.' },
      { t: 'laws', q: 'In an adiabatic process, what is true?', a: ['No heat is transferred to or from the system', 'Temperature is constant', 'Pressure is constant', 'Volume is constant'], c: 0, e: 'Isothermal means constant temperature, isobaric constant pressure and isochoric constant volume.' },
      { t: 'laws', q: 'A Carnot engine runs between 600 K and 300 K. What is its maximum efficiency?', a: ['50%', '100%', '25%', '75%'], c: 0, e: 'Efficiency = 1 - Tc/Th = 1 - 300/600 = 0.5.' },
      { t: 'laws', q: 'Which statement is the second law of thermodynamics?', a: ['Heat flows spontaneously from hot to cold, and the entropy of an isolated system does not decrease', 'Energy is always conserved', 'Absolute zero cannot be reached', 'Work equals force times distance'], c: 0, e: 'The first law is energy conservation. The third law says you cannot reach absolute zero.' },
      { t: 'history', q: 'Which scientist showed that heat and temperature are different and discovered latent heat?', a: ['Joseph Black', 'Clausius', 'Maxwell', 'Planck'], c: 0, e: 'Joule measured the mechanical equivalent of heat. Carnot analyzed ideal engines.' }
    ],
    [
      { t: 'history', term: 'Joule', def: 'Showed heat and mechanical work are equivalent; unit of energy' },
      { t: 'history', term: 'Carnot', def: 'Analyzed the ideal heat engine and its efficiency' },
      { t: 'history', term: 'Kelvin', def: 'Absolute temperature scale' },
      { t: 'transfer', term: 'Conduction', def: 'Heat transfer through direct contact' },
      { t: 'transfer', term: 'Convection', def: 'Heat transfer by the movement of fluid' },
      { t: 'laws', term: 'Isochoric', def: 'Process with constant volume' }
    ]);

  /* ---------- extra questions for events that already had banks ---------- */
  add('heredity', [
    { t: 'mendel', q: 'A true-breeding purple flower is crossed with a true-breeding white flower. The offspring are lavender. What inheritance pattern is this?', a: ['Incomplete dominance', 'Complete dominance', 'Codominance', 'Sex linkage'], c: 0, e: 'In incomplete dominance, the heterozygote has an intermediate phenotype.' },
    { t: 'mendel', q: 'AaBbCc is crossed with aabbcc (a test cross), and the genes assort independently with complete dominance. What fraction of offspring show all three dominant traits?', a: ['1/8', '1/4', '1/2', '3/8'], c: 0, e: 'Each gene gives 1/2 dominant offspring, so (1/2)^3 = 1/8.' },
    { t: 'gene', q: 'Which statement describes the central dogma?', a: ['DNA is transcribed into RNA, and RNA is translated into protein', 'Protein is converted into DNA', 'RNA copies itself into DNA first', 'DNA makes protein directly'], c: 0, e: 'Transcription happens in the nucleus (eukaryotes) and translation at the ribosome.' },
    { t: 'gene', q: 'Which enzyme builds an mRNA copy of a gene?', a: ['RNA polymerase', 'DNA polymerase', 'Helicase', 'Ligase'], c: 0, e: 'RNA polymerase reads the DNA template strand during transcription.' },
    { t: 'pop', q: 'In Hardy-Weinberg equilibrium, q squared = 0.04. What is the frequency of the heterozygotes (2pq)?', a: ['0.32', '0.16', '0.64', '0.08'], c: 0, e: 'q = 0.2, so p = 0.8, and 2pq = 2 x 0.8 x 0.2 = 0.32.' },
    { t: 'cells', q: 'A newborn has three copies of chromosome 21. Which statement is correct?', a: ['The karyotype shows 47 chromosomes, caused by nondisjunction', 'The karyotype shows 45 chromosomes', 'It is caused by a point mutation', 'It is inherited as a recessive allele'], c: 0, e: 'Nondisjunction means chromosomes fail to separate in meiosis, which produces a gamete with an extra copy.' }
  ], []);

  add('solarsystem', [
    { t: 'worlds', q: 'Scientists find that Venus has a very high ratio of deuterium to hydrogen (D/H). What does that support?', a: ['Venus once had much more water that was lost to space', 'Venus never had water', 'Venus has a thick ice cap', 'Venus has an ocean now'], c: 0, e: 'Light hydrogen escapes more easily than heavy deuterium, so a high D/H suggests lots of water was lost.' },
    { t: 'worlds', q: 'In radar images of Venus, highlands look bright and plains look dark. Why?', a: ['Rough terrain scatters the signal back; smooth plains reflect it away', 'The highlands are white rock', 'The plains are covered in ash', 'The radar cannot see plains'], c: 0, e: 'Radar brightness depends on surface roughness and slope.' },
    { t: 'worlds', q: 'Ganymede has bright and dark terrain. Which is correct?', a: ['Dark terrain is older and heavily cratered; bright terrain is younger and grooved', 'Dark terrain is younger', 'The bright terrain is covered in plants', 'Both are the same age'], c: 0, e: 'Fewer craters mean a younger surface.' },
    { t: 'hab', q: 'A planet without an atmosphere would have an equilibrium temperature of -43 C, but its real temperature is 460 C. What explains the gap?', a: ['A thick greenhouse atmosphere traps heat', 'The planet has a hot core only', 'The Sun is brighter than expected', 'Clouds make heat'], c: 0, e: 'Equilibrium temperature ignores the greenhouse effect.' },
    { t: 'bio', q: 'Why are tardigrades interesting to astrobiologists?', a: ['They show that life can survive extreme conditions like vacuum and radiation', 'They make oxygen', 'They eat radiation', 'They live on Mars'], c: 0, e: 'Tardigrades can enter a dormant state and survive harsh conditions, so they help us think about where life could survive.' }
  ], []);

  add('circuitlab', [
    { t: 'devices', q: 'Which two inventors were on opposite sides of the "war of the currents" over AC and DC?', a: ['Edison and Tesla', 'Volta and Galvani', 'Franklin and Faraday', 'Ohm and Ampere'], c: 0, e: 'Edison backed DC power, while Tesla and Westinghouse backed AC.' },
    { t: 'ohm', q: 'Which symbol shows a battery in a schematic?', a: ['Alternating long and short parallel lines', 'A zigzag line', 'A circle with an X', 'Two lines of equal length'], c: 0, e: 'The long line is positive and the short line is negative. A zigzag is a resistor.' },
    { t: 'series', q: 'Three 12 ohm bulbs are wired in parallel across a 12 V supply. What total current does the supply provide?', a: ['3 A', '1 A', '4 A', '36 A'], c: 0, e: 'Each bulb draws 12 / 12 = 1 A, and parallel currents add, so the total is 3 A.' }
  ], []);

  add('waterquality', [
    { t: 'estuary', q: 'Which describes logistic population growth?', a: ['An S-shaped curve that levels off at the carrying capacity', 'A J-shaped curve that never stops', 'A flat line', 'A straight line that goes down'], c: 0, e: 'Exponential growth is J-shaped and unlimited. Logistic growth slows as resources run out.' },
    { t: 'pollution', q: 'How do microplastics harm marine animals?', a: ['Animals eat them, which can block digestion and carry in toxins', 'They make water saltier', 'They raise oxygen levels', 'They help corals grow'], c: 0, e: 'Plastic does not provide nutrition, and it can absorb chemicals from the water.' },
    { t: 'pollution', q: 'Which is a known ocean garbage patch?', a: ['The North Pacific Garbage Patch', 'The Dead Sea Garbage Patch', 'The Arctic Ocean Garbage Patch', 'The Great Lakes Garbage Patch'], c: 0, e: 'Garbage patches form in the center of rotating gyres in the five subtropical ocean basins.' },
    { t: 'indicators', q: 'What is the usual pH range for natural, healthy surface water?', a: ['About 6.5 to 8.5', 'About 1 to 3', 'About 10 to 12', 'Exactly 7'], c: 0, e: 'Ocean water is a bit higher, around 8.1. Ocean acidification threatens corals.' }
  ], []);

  add('diseasedetectives', [
    { t: 'background', q: 'Which activity is an example of a public health approach?', a: ['Comparing injury patterns across all schools in a district', 'Adjusting one patient\'s treatment', 'Choosing a dose for one patient', 'Examining one patient\'s throat'], c: 0, e: 'Public health works with populations, while clinical medicine works with one patient at a time.' },
    { t: 'background', q: 'What is epidemiology?', a: ['The study of how often diseases occur and what causes them in populations', 'The study of germs under a microscope', 'The study of drug dosing', 'The study of surgery'], c: 0, e: 'Epidemiology covers the distribution and determinants of health problems, including injuries and chronic disease, not only infections.' },
    { t: 'calc', q: 'In a town of 2,000 people, 50 new cases of flu appear in a month. What is the incidence proportion for that month?', a: ['2.5%', '25%', '4%', '0.25%'], c: 0, e: 'Incidence proportion = new cases / population at risk = 50 / 2000 = 0.025 = 2.5%.' }
  ], []);

  /* ---------- re-sort by topic order is not needed; games draw at random ---------- */
})();

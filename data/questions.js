/* Question banks. Add more by following the pattern.
   questions: { t: topicId, q: text, a: [choices], c: index of the right choice, e: explanation }
   pairs:     { t: topicId, term, def }  (used by the matching game)
   An event with no entry here shows "questions coming soon". */
window.QBANK = {

  solarsystem: {
    questions: [
      { t: 'worlds', q: 'What is thought to lie beneath the icy shell of Europa?', a: ['A liquid water ocean', 'A sea of liquid methane', 'A thick layer of molten iron only', 'Nothing but solid rock'], c: 0, e: 'Europa likely has a global subsurface ocean. Tidal flexing from Jupiter heats its interior.' },
      { t: 'worlds', q: 'What did the Cassini spacecraft find coming out of Enceladus\'s south pole?', a: ['Plumes of water vapor and ice grains', 'Lava fountains', 'Clouds of methane snow', 'Bursts of liquid iron'], c: 0, e: 'Enceladus shoots water-rich plumes into space from cracks near its south pole. Cassini flew through them.' },
      { t: 'worlds', q: 'Which object has a thick nitrogen atmosphere and lakes of liquid methane and ethane?', a: ['Titan', 'Europa', 'Makemake', 'Bennu'], c: 0, e: 'Titan is the only moon with a thick atmosphere. Its surface is cold enough for liquid hydrocarbons.' },
      { t: 'worlds', q: 'Why is the surface of Venus hot enough to melt lead?', a: ['A thick CO2 atmosphere causes a runaway greenhouse effect', 'It is closer to the Sun than Mercury', 'Its core is much hotter than Earth\'s', 'It has no atmosphere at all'], c: 0, e: 'Venus is not the closest planet to the Sun, but its dense CO2 atmosphere traps heat and keeps the surface around 460 to 470 degrees C.' },
      { t: 'worlds', q: 'The Perseverance rover explores Jezero crater on Mars because it once held what?', a: ['A lake with a river delta', 'A volcano', 'A glacier of dry ice', 'A forest'], c: 0, e: 'Jezero shows delta deposits, which are strong evidence that liquid water once flowed there.' },
      { t: 'worlds', q: 'What makes Ganymede special?', a: ['It is the largest moon in the Solar System and has its own magnetic field', 'It is the only moon with an atmosphere', 'It orbits Saturn', 'It is the smallest dwarf planet'], c: 0, e: 'Ganymede orbits Jupiter, is bigger than Mercury, and is likely to hide a subsurface ocean between ice layers.' },
      { t: 'worlds', q: 'What did the OSIRIS-REx mission bring back to Earth?', a: ['A sample from asteroid Bennu', 'A sample from comet 67P', 'Dust from Titan', 'Rocks from Mars'], c: 0, e: 'OSIRIS-REx returned a Bennu sample. Bennu is a carbon-rich asteroid, a good example of small bodies that may have delivered water and organics to Earth.' },
      { t: 'hab', q: 'What is tidal heating?', a: ['Interior heat produced when a moon is stretched and squeezed by its planet\'s gravity', 'Heat from ocean tides on Earth', 'Sunlight absorbed by a moon\'s ice', 'Heat from radioactive decay only'], c: 0, e: 'An orbit that is not a perfect circle changes the pull on a moon, so the interior flexes and warms. This can keep water liquid under ice.' },
      { t: 'hab', q: 'A planet has a higher albedo. What happens to its equilibrium temperature, if all else is equal?', a: ['It gets colder', 'It gets hotter', 'It stays the same', 'It doubles'], c: 0, e: 'Higher albedo means more sunlight is reflected, so less is absorbed and the planet is cooler.' },
      { t: 'bio', q: 'What is a chemolithoautotroph?', a: ['An organism that gets energy from inorganic chemicals and carbon from CO2', 'An organism that eats other organisms', 'An organism that needs sunlight and oxygen', 'A mineral that behaves like life'], c: 0, e: 'These extremophiles can live where there is no sunlight, for example near hydrothermal vents, which is why scientists think they matter for ocean worlds.' },
      { t: 'detect', q: 'In the transit method, how do we detect an exoplanet?', a: ['The star dims slightly as the planet crosses in front of it', 'The star changes color permanently', 'We see the planet directly in a normal telescope', 'We hear radio signals from the planet'], c: 0, e: 'A small, regular dip in a star\'s brightness can reveal a planet crossing in front of it.' },
      { t: 'detect', q: 'The radial velocity method finds planets by measuring what?', a: ['The wobble of a star seen as a Doppler shift in its light', 'A dip in the star\'s brightness', 'Gravitational lensing by a background star', 'Infrared glow from the planet'], c: 0, e: 'A planet\'s gravity tugs the star around, shifting its spectral lines toward blue then red.' },
      { t: 'math', q: 'You move a planet to twice as far from its star. By what factor does the starlight flux hitting it change?', a: ['It becomes 1/4 as strong', 'It becomes 1/2 as strong', 'It doubles', 'It stays the same'], c: 0, e: 'Flux follows the inverse-square law: flux is proportional to 1/d^2, so doubling d makes it 1/4.' },
      { t: 'math', q: 'Wien\'s displacement law says a hotter object has a peak wavelength that is...', a: ['Shorter', 'Longer', 'Exactly the same', 'Impossible to measure'], c: 0, e: 'Peak wavelength is proportional to 1/T. The Sun peaks in visible light while cooler planets glow in the infrared.' },
      { t: 'math', q: 'Kepler\'s third law: P^2 is proportional to a^3 (P in years, a in AU). What is the orbital period at a = 4 AU?', a: ['8 years', '4 years', '16 years', '64 years'], c: 0, e: 'a^3 = 64, so P^2 = 64 and P = 8 years. No calculator needed.' },
      { t: 'missions', q: 'Which mission is designed to study Europa up close with many flybys?', a: ['Europa Clipper', 'Dragonfly', 'Rosetta', 'Venus Express'], c: 0, e: 'Europa Clipper is NASA\'s mission to Europa. Dragonfly is the rotorcraft heading for Titan.' }
    ],
    pairs: [
      { t: 'worlds', term: 'Europa', def: 'Icy moon of Jupiter with a likely subsurface ocean' },
      { t: 'worlds', term: 'Enceladus', def: 'Saturn moon that sprays water plumes from its south pole' },
      { t: 'worlds', term: 'Titan', def: 'Moon with methane lakes and a thick nitrogen atmosphere' },
      { t: 'worlds', term: 'Venus', def: 'Runaway greenhouse planet with a surface near 465 C' },
      { t: 'worlds', term: 'Bennu', def: 'Asteroid sampled by OSIRIS-REx' },
      { t: 'worlds', term: '67P/Churyumov-Gerasimenko', def: 'Comet visited by the Rosetta spacecraft' },
      { t: 'detect', term: 'Transit', def: 'Exoplanet method: starlight dips as the planet crosses the star' },
      { t: 'detect', term: 'Radial velocity', def: 'Exoplanet method: the star wobbles, shifting its spectrum' }
    ]
  },

  dynamicplanet: {
    questions: [
      { t: 'cycle', q: 'A lake holds 600 km^3 of water and loses 200 km^3 per year. What is its residence time?', a: ['3 years', '0.33 years', '120,000 years', '800 years'], c: 0, e: 'Residence time = volume / flow rate = 600 / 200 = 3 years.' },
      { t: 'climate', q: 'Air is forced up a mountain and cools, dropping rain on the windward side. What is this called, and what forms on the far side?', a: ['Orographic lift, producing a rain shadow', 'Lake effect, producing a delta', 'Convection, producing a levee', 'Evaporation, producing a playa'], c: 0, e: 'Orographic lift wrings moisture out of the air on the windward side. The leeward side is dry, which is a rain shadow.' },
      { t: 'basin', q: 'Two first-order streams join. What order is the stream below the junction?', a: ['Second order', 'First order', 'Third order', 'Zero order'], c: 0, e: 'Stream order increases only when two streams of the same order meet. Two first-order streams make a second-order stream.' },
      { t: 'fluvial', q: 'A river channel is 3 km long, but the straight-line distance down the valley is 2 km. What is its sinuosity?', a: ['1.5', '0.67', '6', '1'], c: 0, e: 'Sinuosity = channel length / valley length = 3 / 2 = 1.5. Meandering channels are usually above 1.5.' },
      { t: 'fluvial', q: 'Where does a point bar form on a meandering river?', a: ['On the inside of a bend, where the water is slow', 'On the outside of a bend, where the water is fast', 'Only at the river\'s mouth', 'In the middle of a lake'], c: 0, e: 'Slow water on the inside of the bend drops sediment. Fast water on the outside erodes a cut bank.' },
      { t: 'fluvial', q: 'What is bed load?', a: ['Sediment that rolls, slides or bounces along the stream bottom', 'Sediment carried floating in the water', 'Minerals dissolved in the water', 'Mud that has settled in a lake'], c: 0, e: 'Bed load is coarse material moved along the bottom. Suspended load is carried within the flow, and dissolved load is in solution.' },
      { t: 'fluvial', q: 'How does an oxbow lake form?', a: ['A meander neck gets cut off and the loop is abandoned', 'A glacier carves a bowl', 'Groundwater dissolves limestone', 'A volcano blocks a valley'], c: 0, e: 'During a flood a river can cut across a narrow meander neck. The old loop becomes a curved lake.' },
      { t: 'fluvial', q: 'What is a knickpoint?', a: ['An abrupt steepening in a stream\'s profile, such as a waterfall', 'The place where a river meets the sea', 'A type of sand ripple', 'The edge of a drainage divide'], c: 0, e: 'A knickpoint is a sudden change in gradient. They migrate upstream as the river cuts down.' },
      { t: 'flood', q: 'What does a "100-year flood" mean?', a: ['A 1% chance of that flood size or larger in any year', 'It happens exactly once every 100 years', 'It lasts 100 days', 'It cannot happen twice in 100 years'], c: 0, e: 'A recurrence interval of 100 years means a 1 in 100 (1%) chance each year. Two can happen back to back.' },
      { t: 'ground', q: 'What is the difference between porosity and permeability?', a: ['Porosity is the share of empty space; permeability is how easily water moves through', 'They mean the same thing', 'Porosity is how easily water moves; permeability is the empty space', 'Porosity applies only to rock; permeability only to soil'], c: 0, e: 'Clay can have high porosity but low permeability because the pores are tiny and poorly connected.' },
      { t: 'ground', q: 'What landform is produced when slightly acidic water dissolves limestone?', a: ['Sinkholes and caves (karst)', 'Alluvial fans', 'Point bars', 'Moraines'], c: 0, e: 'Karst landscapes include sinkholes, caves, springs and disappearing streams.' },
      { t: 'lakes', q: 'Why does a lake "turn over" in spring and fall in temperate climates?', a: ['Surface water reaches about 4 C, becomes densest, and sinks, mixing the layers', 'Wind blows the lake upside down', 'Fish stir up the bottom', 'The Moon\'s gravity pulls the water'], c: 0, e: 'Water is densest near 4 C. When the surface reaches that temperature it sinks, and the lake mixes top to bottom.' },
      { t: 'record', q: 'Which feature in an ancient rock shows that mud once dried out in the Sun?', a: ['Mud cracks', 'Cross-bedding', 'Graded bedding', 'Foliation'], c: 0, e: 'Mud cracks form when wet sediment dries and shrinks. Cross-bedding records flowing water or wind.' }
    ],
    pairs: [
      { t: 'fluvial', term: 'Point bar', def: 'Sediment deposit on the inside of a meander' },
      { t: 'fluvial', term: 'Cut bank', def: 'Steep eroded outer bank of a meander' },
      { t: 'fluvial', term: 'Oxbow lake', def: 'Abandoned meander loop' },
      { t: 'fluvial', term: 'Natural levee', def: 'Ridge of sediment built beside a channel during floods' },
      { t: 'fluvial', term: 'Delta', def: 'Sediment fan where a river enters a standing body of water' },
      { t: 'fluvial', term: 'Alluvial fan', def: 'Cone of sediment where a mountain stream hits flat land' },
      { t: 'ground', term: 'Water table', def: 'Top of the zone of saturation' },
      { t: 'ground', term: 'Artesian aquifer', def: 'Confined aquifer with water under pressure' }
    ]
  },

  waterquality: {
    questions: [
      { t: 'estuary', q: 'What is an estuary?', a: ['A place where fresh river water mixes with salt water from the sea', 'A deep ocean trench', 'A freshwater lake', 'A coral reef lagoon'], c: 0, e: 'Estuaries are brackish, and they work as nurseries for many fish and shellfish.' },
      { t: 'estuary', q: 'About how salty is typical open-ocean water?', a: ['About 35 parts per thousand', 'About 3.5 parts per thousand', 'About 350 parts per thousand', 'Less than 1 part per thousand'], c: 0, e: 'Ocean salinity is about 35 ppt (3.5%). Estuaries range from nearly fresh to nearly full-strength sea water.' },
      { t: 'pollution', q: 'What often triggers a harmful algal bloom (HAB)?', a: ['Extra nutrients such as nitrogen and phosphorus from runoff, plus warm water', 'Too much dissolved oxygen', 'A sudden drop in temperature', 'Rain with a low pH only'], c: 0, e: 'Fertilizer and sewage runoff feed algae. Some blooms release toxins, and others harm the water when they decay.' },
      { t: 'pollution', q: 'After a large algal bloom dies, why can fish suffocate?', a: ['Bacteria decomposing the algae use up dissolved oxygen', 'The algae release chlorine', 'The water gets too cold', 'The algae block the sun, which fish need to breathe'], c: 0, e: 'Decomposition uses oxygen, creating low-oxygen "dead zones" (hypoxia).' },
      { t: 'pollution', q: 'Which water holds more dissolved oxygen?', a: ['Cold water', 'Warm water', 'They hold the same', 'It depends only on salinity'], c: 0, e: 'Gases dissolve better in cold water, so warming water can stress aquatic animals.' },
      { t: 'pollution', q: 'What are PFAS often called, and why?', a: ['"Forever chemicals" because they break down extremely slowly', '"Sea salts" because they dissolve in the ocean', '"Nutrient bombs" because they feed algae', '"Natural filters" because they clean water'], c: 0, e: 'PFAS are persistent man-made chemicals found in water and wildlife, and they are a main emerging contaminant.' },
      { t: 'pollution', q: 'Why does floating plastic collect in ocean garbage patches?', a: ['Rotating ocean currents (gyres) gather it in the center', 'Plastic sinks to the same depth everywhere', 'Fish herd it together', 'The Moon\'s gravity pulls it'], c: 0, e: 'Large subtropical gyres circulate slowly and trap floating debris.' },
      { t: 'reef', q: 'What is coral bleaching?', a: ['Corals expel their symbiotic algae when stressed, often by heat, and turn white', 'Corals get covered with white sand', 'Coral skeletons dissolve in fresh water', 'Corals lose their tentacles to starfish'], c: 0, e: 'The algae (zooxanthellae) supply most of the coral\'s food. A bleached coral is alive but starving and can die if the stress continues.' },
      { t: 'reef', q: 'Why is the crown-of-thorns starfish a reef problem?', a: ['It eats live coral, and outbreaks can wipe out large areas', 'It poisons the water', 'It builds a shell that smothers coral', 'It eats only algae and starves other fish'], c: 0, e: 'Crown-of-thorns starfish feed on coral polyps. Outbreaks are linked to nutrient runoff and the loss of predators.' },
      { t: 'reef', q: 'What helpful job do parrotfish do on a reef?', a: ['They graze algae, which keeps it from overgrowing coral', 'They eat coral polyps only', 'They clean other fish of parasites', 'They produce the coral skeleton'], c: 0, e: 'Parrotfish and urchins are grazers. Without them, fleshy algae can smother young corals.' },
      { t: 'reef', q: 'What happened after the long-spined black sea urchin (Diadema) died off across the Caribbean in the 1980s?', a: ['Algae overgrew many reefs', 'Coral grew faster everywhere', 'Sharks disappeared', 'Salinity dropped'], c: 0, e: 'With a key grazer gone, algae spread and coral recovery suffered.' },
      { t: 'indicators', q: 'Stoneflies, mayflies and caddisfly larvae are found in a stream. What does this suggest?', a: ['Good water quality, since these insects are pollution-sensitive', 'Severe pollution', 'Very high salinity', 'No oxygen in the water'], c: 0, e: 'Pollution-intolerant macroinvertebrates are used as indicators. Worms and some midge larvae suggest poorer conditions.' }
    ],
    pairs: [
      { t: 'reef', term: 'Parrotfish', def: 'Grazer that scrapes algae from the reef' },
      { t: 'reef', term: 'Crown-of-thorns starfish', def: 'Coral-eating starfish that can cause reef die-offs' },
      { t: 'reef', term: 'Long-spined black sea urchin', def: 'Algae-grazing urchin (Diadema)' },
      { t: 'reef', term: 'Zooxanthellae', def: 'Algae that live inside corals and feed them' },
      { t: 'pollution', term: 'HAB', def: 'Harmful algal bloom' },
      { t: 'pollution', term: 'Hypoxia', def: 'Low dissolved oxygen in water' },
      { t: 'pollution', term: 'PFAS', def: '"Forever chemicals" that persist in the environment' },
      { t: 'estuary', term: 'Brackish', def: 'A mix of fresh and salt water' }
    ]
  },

  heredity: {
    questions: [
      { t: 'mendel', q: 'Two heterozygous parents (Aa x Aa) have a child. What is the chance the child is aa?', a: ['1/4', '1/2', '3/4', '1/8'], c: 0, e: 'The Punnett square gives AA, Aa, aA, aa, so aa is 1 out of 4.' },
      { t: 'mendel', q: 'What phenotypic ratio do you expect from a dihybrid cross AaBb x AaBb with complete dominance?', a: ['9:3:3:1', '3:1', '1:2:1', '1:1:1:1'], c: 0, e: 'Two independent genes each give a 3:1 ratio, so together you get 9:3:3:1.' },
      { t: 'mendel', q: 'You want to find out if a tall pea plant is TT or Tt. Which cross works best?', a: ['Cross it with a short (tt) plant', 'Cross it with another tall plant', 'Self-pollinate it only once', 'Cross it with a TT plant'], c: 0, e: 'A test cross uses the homozygous recessive. Any short offspring show the tall parent is Tt.' },
      { t: 'mendel', q: 'What is the chance of having three boys in a row, if each birth is independent and 50:50?', a: ['1/8', '1/6', '1/4', '3/8'], c: 0, e: 'Independent events multiply: 1/2 x 1/2 x 1/2 = 1/8.' },
      { t: 'mendel', q: 'Mendel\'s law of segregation says what?', a: ['The two alleles for a trait separate when gametes form', 'Genes for different traits always travel together', 'All traits blend in offspring', 'Dominant alleles are always more common'], c: 0, e: 'Each gamete gets one allele from each pair, which is why offspring receive one from each parent.' },
      { t: 'pedigree', q: 'Two unaffected parents have an affected child. What does this suggest about the trait?', a: ['It is recessive, and both parents are carriers', 'It is dominant', 'It is caused by a new mutation only', 'It is always sex-linked'], c: 0, e: 'An affected child from unaffected parents means each parent carried a hidden recessive allele.' },
      { t: 'pedigree', q: 'Why are X-linked recessive traits seen more often in males?', a: ['Males have only one X, so one recessive allele shows', 'Males have two X chromosomes', 'The Y chromosome carries the allele', 'Females cannot carry the allele'], c: 0, e: 'A female needs two copies. A male has one X and no second copy to mask it.' },
      { t: 'cells', q: 'What does meiosis produce?', a: ['Four genetically different haploid cells', 'Two identical diploid cells', 'Two identical haploid cells', 'Four identical diploid cells'], c: 0, e: 'Meiosis has two divisions and crossing over, creating four unique gametes. Mitosis makes two identical diploid cells.' },
      { t: 'cells', q: 'A karyotype shows 47 chromosomes with three copies of chromosome 21. What is this condition?', a: ['Trisomy 21 (Down syndrome)', 'Turner syndrome', 'Monosomy X', 'A normal karyotype'], c: 0, e: 'Humans normally have 46 chromosomes. Three copies of chromosome 21 make 47.' },
      { t: 'dna', q: 'One DNA strand reads 5\'-ATGC-3\'. What is the complementary strand?', a: ['3\'-TACG-5\'', '3\'-ATGC-5\'', '5\'-TACG-3\'', '3\'-UACG-5\''], c: 0, e: 'A pairs with T and G pairs with C, and the strands run antiparallel. DNA has no uracil.' },
      { t: 'dna', q: 'In DNA replication, which enzyme joins new nucleotides to the growing strand?', a: ['DNA polymerase', 'Helicase', 'Ligase only', 'RNA polymerase'], c: 0, e: 'Helicase unwinds the helix. DNA polymerase adds nucleotides and proofreads.' },
      { t: 'mutation', q: 'A substitution changes a codon into a stop codon. What type of mutation is this?', a: ['Nonsense', 'Silent', 'Missense', 'Frameshift'], c: 0, e: 'Nonsense mutations end the protein early. Silent ones do not change the amino acid, and missense ones change it to a different one.' },
      { t: 'mutation', q: 'Why does inserting a single base usually cause a big change in a protein?', a: ['It shifts the reading frame of every codon after it', 'It makes every codon a stop codon', 'It deletes the gene', 'It changes only that one amino acid'], c: 0, e: 'Codons are read in groups of three, so one extra base shifts all codons downstream (a frameshift).' }
    ],
    pairs: [
      { t: 'mendel', term: 'Genotype', def: 'The alleles an organism carries (like Aa)' },
      { t: 'mendel', term: 'Phenotype', def: 'The observable trait' },
      { t: 'mendel', term: 'Homozygous', def: 'Two identical alleles for a gene' },
      { t: 'mendel', term: 'Heterozygous', def: 'Two different alleles for a gene' },
      { t: 'cells', term: 'Karyotype', def: 'A picture of an organism\'s chromosomes arranged in pairs' },
      { t: 'mutation', term: 'Silent mutation', def: 'Changes a base but not the amino acid' }
    ]
  },

  circuitlab: {
    questions: [
      { t: 'ohm', q: 'A 12 V battery is connected across a 4 ohm resistor. What current flows?', a: ['3 A', '48 A', '0.33 A', '8 A'], c: 0, e: 'Ohm\'s law: I = V / R = 12 / 4 = 3 A.' },
      { t: 'series', q: 'A 10 ohm and a 20 ohm resistor are in series. What is the total resistance?', a: ['30 ohms', '6.7 ohms', '15 ohms', '200 ohms'], c: 0, e: 'Series resistances add: 10 + 20 = 30 ohms.' },
      { t: 'series', q: 'Two 10 ohm resistors are in parallel. What is the total resistance?', a: ['5 ohms', '20 ohms', '10 ohms', '2 ohms'], c: 0, e: 'For two equal resistors in parallel, divide by 2. In general 1/R = 1/R1 + 1/R2 = 1/10 + 1/10 = 1/5.' },
      { t: 'series', q: 'In a series circuit with several bulbs, one bulb burns out. What happens to the others?', a: ['They all go out', 'They get brighter', 'They stay the same', 'Only the next one goes out'], c: 0, e: 'In a series circuit there is only one path, so a break stops the current everywhere.' },
      { t: 'power', q: 'A device draws 2 A at 6 V. How much power does it use?', a: ['12 W', '3 W', '8 W', '0.33 W'], c: 0, e: 'P = I x V = 2 x 6 = 12 W.' },
      { t: 'power', q: 'A 100 W bulb runs for 10 seconds. How much energy does it use?', a: ['1000 J', '10 J', '100 J', '10,000 J'], c: 0, e: 'Energy = power x time = 100 x 10 = 1000 joules.' },
      { t: 'devices', q: 'What is the job of a fuse?', a: ['Break the circuit if the current gets too high', 'Store charge', 'Increase voltage', 'Change AC to DC'], c: 0, e: 'A fuse contains a thin wire that melts when current is too high, which stops fires.' },
      { t: 'devices', q: 'What does a diode (or LED) do?', a: ['Lets current flow mostly in one direction', 'Lets current flow in both directions equally', 'Stores energy', 'Blocks all current'], c: 0, e: 'A diode conducts when forward-biased and blocks when reversed.' },
      { t: 'logic', q: 'An AND gate has inputs 1 and 0. What is the output?', a: ['0', '1', 'Both 0 and 1', 'It depends on voltage'], c: 0, e: 'AND outputs 1 only when both inputs are 1.' },
      { t: 'logic', q: 'Which statement of De Morgan\'s Law is correct?', a: ['NOT(A AND B) = (NOT A) OR (NOT B)', 'NOT(A AND B) = (NOT A) AND (NOT B)', 'NOT(A OR B) = (NOT A) OR (NOT B)', 'NOT(A OR B) = A AND B'], c: 0, e: 'Flipping the gate type while negating each input gives an equivalent expression.' },
      { t: 'logic', q: 'What is 101 + 011 in binary?', a: ['1000', '110', '1010', '1100'], c: 0, e: '5 + 3 = 8, and 8 in binary is 1000.' },
      { t: 'static', q: 'In Coulomb\'s law, what happens to the force between two charges if you double the distance?', a: ['It becomes 1/4 as strong', 'It becomes 1/2 as strong', 'It doubles', 'It stays the same'], c: 0, e: 'Force follows an inverse-square law: F is proportional to 1/r^2.' }
    ],
    pairs: []
  },

  diseasedetectives: {
    questions: [
      { t: 'calc', q: '30 of the 120 people who ate at a picnic got sick. What is the attack rate?', a: ['25%', '30%', '4%', '75%'], c: 0, e: 'Attack rate = ill / exposed = 30 / 120 = 25%.' },
      { t: 'calc', q: 'What is the difference between incidence and prevalence?', a: ['Incidence counts new cases in a period; prevalence counts all existing cases at a time', 'They are the same', 'Incidence counts all cases; prevalence counts new cases', 'Incidence is only for deaths'], c: 0, e: 'Prevalence is a snapshot of all current cases. Incidence tells you how fast new cases appear.' },
      { t: 'outbreak', q: 'An epi curve shows a sharp rise and fall of cases within one incubation period. What kind of outbreak is this most likely?', a: ['A point-source outbreak', 'A continuous source outbreak', 'A person-to-person outbreak', 'An endemic disease'], c: 0, e: 'A single exposure event causes cases to cluster in time, like a bell shape.' },
      { t: 'outbreak', q: 'Which study design starts with sick people and healthy controls, then looks back at their exposures?', a: ['Case-control study', 'Cohort study', 'Randomized trial', 'Cross-sectional survey'], c: 0, e: 'Case-control studies are efficient for rare diseases. Cohort studies follow exposed and unexposed groups forward in time.' },
      { t: 'outbreak', q: 'Investigators describe an outbreak by what three things?', a: ['Person, place and time', 'Cause, cure and cost', 'Age, sex and income', 'Bacteria, virus and fungus'], c: 0, e: 'Describing cases by person, place and time helps form and test hypotheses.' },
      { t: 'background', q: 'What is public health surveillance?', a: ['Ongoing, systematic collection and analysis of health data to guide action', 'One-time lab testing of patients', 'Treating every sick person', 'Secret observation of homes'], c: 0, e: 'Surveillance tells public health agencies about trends and outbreaks so they can respond.' },
      { t: 'background', q: 'What makes a disease outbreak a pandemic instead of an epidemic?', a: ['It spreads across multiple countries or continents', 'It kills more than 1,000 people', 'It happens in winter', 'It is caused by a virus'], c: 0, e: 'Epidemic: more than expected in an area. Pandemic: widespread across countries or continents.' },
      { t: 'prevent', q: 'Vaccinating healthy children against measles is which level of prevention?', a: ['Primary prevention', 'Secondary prevention', 'Tertiary prevention', 'Quaternary prevention'], c: 0, e: 'Primary prevention stops disease before it starts. Secondary is early detection (screening). Tertiary reduces harm in people already sick.' }
    ],
    pairs: []
  }
};

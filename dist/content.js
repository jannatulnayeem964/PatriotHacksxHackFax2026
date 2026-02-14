

// ─── 1. PRODUCT ARCHETYPES ───────────────────────────────────
var archetypes = {
  "FM-BEEF-01": { name: "Frozen Beef Lasagna", co2e: 23.27, water: 4547, land: 56.46, keywords: ["lasagna", "meat sauce", "meat and sauce", "bolognese"] },
  "FM-BEEF-02": { name: "Frozen Meatloaf", co2e: 19.85, water: 3980, land: 48.32, keywords: ["meatloaf", "meat loaf"] },
  "FM-BEEF-03": { name: "Frozen Beef Stew", co2e: 18.52, water: 4210, land: 55.32, keywords: ["beef stew", "beef pot roast"] },
  "FM-BEEF-04": { name: "Frozen Beef Stroganoff", co2e: 17.63, water: 3845, land: 42.18, keywords: ["stroganoff", "beef stroganoff"] },
  "FM-BEEF-05": { name: "Frozen Meatballs", co2e: 20.14, water: 4102, land: 50.87, keywords: ["meatball", "meatballs"] },
  "FM-BEEF-06": { name: "Frozen Shepherds Pie", co2e: 15.42, water: 3654, land: 38.92, keywords: ["shepherds pie", "shepherd pie", "cottage pie"] },
  "FM-BEEF-07": { name: "Frozen Shells & Beef", co2e: 16.84, water: 3720, land: 41.55, keywords: ["shells and beef", "shells & beef", "alfredo shells", "pasta shells beef"] },
  "FM-CHKN-01": { name: "Frozen Chicken Pot Pie", co2e: 5.84, water: 2103, land: 12.73, keywords: ["chicken pot pie", "pot pie"] },
  "FM-CHKN-02": { name: "Frozen Chicken Alfredo", co2e: 6.12, water: 2245, land: 14.56, keywords: ["chicken alfredo", "alfredo"] },
  "FM-CHKN-03": { name: "Frozen Chicken Fried Rice", co2e: 4.87, water: 1876, land: 10.45, keywords: ["chicken fried rice", "fried rice", "chicken rice"] },
  "FM-CHKN-04": { name: "Frozen Chicken Parmesan", co2e: 6.45, water: 2312, land: 15.23, keywords: ["chicken parmesan", "chicken parm", "chicken parmigiana"] },
  "FM-CHKN-05": { name: "Frozen Chicken Teriyaki", co2e: 5.23, water: 1954, land: 11.87, keywords: ["teriyaki chicken", "chicken teriyaki", "teriyaki"] },
  "FM-CHKN-06": { name: "Frozen General Tsos Chicken", co2e: 5.56, water: 2034, land: 12.12, keywords: ["general tso", "general tsos", "orange chicken", "sweet and sour chicken", "asian chicken", "asian entree"] },
  "FM-CHKN-07": { name: "Frozen Tikka Masala", co2e: 5.98, water: 2198, land: 13.89, keywords: ["tikka masala", "butter chicken", "indian chicken"] },
  "FM-CHKN-08": { name: "Frozen Chicken Dinner", co2e: 5.92, water: 2087, land: 12.45, keywords: ["chicken and mashed", "chicken mashed", "fried chicken", "chicken dinner", "chicken meal", "roasted chicken", "chicken with"] },
  "FM-SEA-01": { name: "Frozen Fish Dinner", co2e: 7.23, water: 1245, land: 3.87, keywords: ["fish dinner", "fish fillet dinner", "tilapia dinner"] },
  "FM-SEA-02": { name: "Frozen Shrimp Scampi", co2e: 9.87, water: 1567, land: 4.56, keywords: ["shrimp scampi", "shrimp alfredo", "shrimp pasta"] },
  "FM-SEA-03": { name: "Frozen Salmon", co2e: 11.23, water: 1654, land: 4.89, keywords: ["salmon", "salmon fillet"] },
  "FM-PORK-01": { name: "Frozen Pork Meal", co2e: 7.45, water: 2345, land: 15.67, keywords: ["pulled pork", "pork loin", "pork chop", "pork meal"] },
  "FM-PORK-02": { name: "Frozen Pork Lo Mein", co2e: 6.87, water: 2198, land: 14.23, keywords: ["lo mein", "chow mein"] },
  "FM-VEG-01": { name: "Frozen Mac and Cheese", co2e: 8.45, water: 2567, land: 22.34, keywords: ["mac and cheese", "mac & cheese", "macaroni and cheese", "macaroni & cheese"] },
  "FM-VEG-02": { name: "Frozen Veggie Burger", co2e: 2.34, water: 876, land: 5.43, keywords: ["veggie burger", "plant based burger", "impossible burger", "beyond burger"] },
  "FM-VEG-03": { name: "Frozen Ravioli", co2e: 7.23, water: 2123, land: 18.76, keywords: ["ravioli", "tortellini", "pierogies", "pierogi"] },
  "PZ-PEP-01": { name: "Frozen Pepperoni Pizza", co2e: 8.96, water: 2843, land: 25.12, keywords: ["pepperoni pizza", "pepperoni"] },
  "PZ-CHZ-01": { name: "Frozen Cheese Pizza", co2e: 9.58, water: 2987, land: 28.45, keywords: ["cheese pizza", "four cheese", "margherita"] },
  "PZ-MLV-01": { name: "Frozen Meat Lovers Pizza", co2e: 12.34, water: 3456, land: 35.67, keywords: ["meat lovers", "meat pizza", "supreme meat"] },
  "PZ-SUP-01": { name: "Frozen Supreme Pizza", co2e: 9.12, water: 2765, land: 24.56, keywords: ["supreme pizza", "deluxe pizza"] },
  "PZ-VEG-01": { name: "Frozen Vegetable Pizza", co2e: 7.23, water: 2345, land: 20.12, keywords: ["vegetable pizza", "veggie pizza", "garden pizza"] },
  "MX-BEEF-01": { name: "Frozen Beef Burrito", co2e: 18.52, water: 4210, land: 55.32, keywords: ["beef burrito", "burrito", "bean burrito", "chimichanga"] },
  "MX-CHKN-01": { name: "Frozen Chicken Burrito", co2e: 5.67, water: 1987, land: 11.23, keywords: ["chicken burrito", "chicken enchilada", "chicken quesadilla"] },
  "MX-TAQ-01": { name: "Frozen Taquitos", co2e: 7.89, water: 2345, land: 18.76, keywords: ["taquito", "taquitos", "rolled taco"] },
  "AS-DMP-01": { name: "Frozen Dumplings", co2e: 6.78, water: 2123, land: 15.43, keywords: ["dumpling", "dumplings", "potsticker", "potstickers", "gyoza", "wonton"] },
  "AS-EGR-01": { name: "Frozen Egg Rolls", co2e: 5.34, water: 1876, land: 12.34, keywords: ["egg roll", "egg rolls", "spring roll", "spring rolls"] },
  "BR-SAN-01": { name: "Frozen Breakfast Sandwich", co2e: 8.76, water: 2654, land: 22.45, keywords: ["breakfast sandwich", "breakfast biscuit", "sausage egg", "bacon egg"] },
  "BR-WAF-01": { name: "Frozen Waffles", co2e: 2.34, water: 876, land: 4.56, keywords: ["waffle", "waffles", "eggo", "pancake", "pancakes"] },
  "BR-BUR-01": { name: "Frozen Breakfast Burrito", co2e: 9.12, water: 2876, land: 28.34, keywords: ["breakfast burrito"] },
  "BP-CHKN-01": { name: "Frozen Chicken Nuggets", co2e: 8.22, water: 3012, land: 9.87, keywords: ["chicken nuggets", "nuggets", "dino nuggets", "popcorn chicken", "chicken bites"] },
  "BP-CHKN-02": { name: "Frozen Chicken Tenders", co2e: 7.89, water: 2876, land: 9.34, keywords: ["chicken tenders", "chicken strips", "chicken fingers", "crispy chicken"] },
  "BP-CHKN-03": { name: "Frozen Chicken Wings", co2e: 9.45, water: 3234, land: 11.23, keywords: ["chicken wings", "buffalo wings", "hot wings", "wing"] },
  "BP-FISH-01": { name: "Frozen Fish Sticks", co2e: 4.13, water: 687, land: 1.87, keywords: ["fish sticks", "fish fingers", "fish stix", "fish fillets"] },
  "BP-SHMP-01": { name: "Frozen Breaded Shrimp", co2e: 8.76, water: 1234, land: 3.45, keywords: ["breaded shrimp", "popcorn shrimp", "butterfly shrimp", "coconut shrimp"] },
  "SN-MOZ-01": { name: "Frozen Mozzarella Sticks", co2e: 7.65, water: 2456, land: 20.34, keywords: ["mozzarella sticks", "mozzarella stick", "cheese sticks"] },
  "SN-TOTS-01": { name: "Frozen Tater Tots / Fries", co2e: 1.17, water: 322, land: 1.02, keywords: ["tater tots", "french fries", "fries", "hash browns", "ore-ida", "tater"] },
  "SN-PR-01": { name: "Frozen Pizza Rolls", co2e: 6.78, water: 2123, land: 18.45, keywords: ["pizza rolls", "pizza roll", "totinos", "pizza snacks", "pizza bites"] },
  "PP-CHKN-01": { name: "Frozen Chicken Breasts", co2e: 9.87, water: 3456, land: 12.34, keywords: ["chicken breast", "chicken breasts", "grilled chicken", "boneless skinless"] },
  "PP-BEEF-01": { name: "Frozen Beef Patties", co2e: 35.67, water: 6789, land: 82.34, keywords: ["beef patties", "beef patty", "hamburger patties", "burger patties", "ground beef"] },
  "PP-SHMP-01": { name: "Frozen Raw Shrimp", co2e: 12.34, water: 1876, land: 5.67, keywords: ["raw shrimp", "shrimp", "uncooked shrimp", "peeled shrimp"] },
  "FV-MIX-01": { name: "Frozen Mixed Vegetables", co2e: 1.27, water: 537, land: 2.89, keywords: ["mixed vegetables", "mixed veggies", "medley", "vegetable medley", "stir fry vegetables"] },
  "FV-BRC-01": { name: "Frozen Broccoli", co2e: 0.98, water: 456, land: 2.12, keywords: ["broccoli", "broccoli florets"] },
  "FV-CRN-01": { name: "Frozen Corn", co2e: 1.12, water: 512, land: 2.45, keywords: ["frozen corn", "sweet corn", "corn kernels"] },
  "FV-SPN-01": { name: "Frozen Spinach", co2e: 0.87, water: 398, land: 1.89, keywords: ["spinach", "chopped spinach", "leaf spinach"] },
  "FV-PEA-01": { name: "Frozen Peas", co2e: 0.95, water: 423, land: 2.01, keywords: ["frozen peas", "green peas", "sweet peas", "peas"] },
  "FF-BRY-01": { name: "Frozen Mixed Berries", co2e: 1.87, water: 876, land: 3.45, keywords: ["mixed berries", "berry blend", "berries", "frozen fruit", "fruit blend", "strawberries", "blueberries"] },
  "IC-VAN-01": { name: "Ice Cream", co2e: 5.68, water: 1842, land: 18.23, keywords: ["ice cream", "gelato", "frozen yogurt", "breyers", "haagen", "ben and jerry", "ben & jerry"] },
  "IC-NOV-01": { name: "Ice Cream Novelties", co2e: 4.87, water: 1654, land: 15.67, keywords: ["ice cream bar", "ice cream sandwich", "popsicle", "fudge bar", "drumstick", "klondike"] },
  "DS-PIE-01": { name: "Frozen Pie/Cake", co2e: 4.23, water: 1432, land: 12.34, keywords: ["frozen pie", "frozen cake", "cheesecake", "ice cream cake"] },
  "FM-GEN-01": { name: "Frozen Meal (Generic)", co2e: 6.50, water: 2000, land: 15.00, keywords: [] }
};

// ─── 2. BRAND → PARENT COMPANY LOOKUP ───────────────────────
var brandToParent = {
  "stouffer":        "Nestlé",
  "stouffers":       "Nestlé",
  "lean cuisine":    "Nestlé",
  "digiorno":        "Nestlé",
  "di giorno":       "Nestlé",
  "hot pocket":      "Nestlé",
  "hot pockets":     "Nestlé",
  "tombstone":       "Nestlé",
  "sweet earth":     "Nestlé",
  "life cuisine":    "Nestlé",
  "haagen":          "Nestlé",
  "haagen-dazs":     "Nestlé",
  "tyson":           "Tyson Foods",
  "jimmy dean":      "Tyson Foods",
  "hillshire":       "Tyson Foods",
  "ball park":       "Tyson Foods",
  "state fair":      "Tyson Foods",
  "banquet":         "Conagra Brands",
  "birds eye":       "Conagra Brands",
  "bird's eye":      "Conagra Brands",
  "healthy choice":  "Conagra Brands",
  "marie callender": "Conagra Brands",
  "devour":          "Conagra Brands",
  "gardein":         "Conagra Brands",
  "p.f. chang":      "Conagra Brands",
  "pf chang":        "Conagra Brands",
  "ore-ida":         "Kraft Heinz",
  "ore ida":         "Kraft Heinz",
  "smart ones":      "Kraft Heinz",
  "boston market":   "Kraft Heinz",
  "totinos":         "General Mills",
  "totino":          "General Mills",
  "pillsbury":       "General Mills",
  "green giant":     "General Mills",
  "annie":           "General Mills",
  "hormel":          "Hormel Foods",
  "tai pei":         "Ajinomoto",
  "ling ling":       "Ajinomoto",
  "jose ole":        "Ajinomoto",
  "bibigo":          "Ajinomoto",
  "red baron":       "Schwan's",
  "freschetta":      "Schwan's",
  "tony's pizza":    "Schwan's",
  "el monterey":     "Ruiz Foods",
  "delimex":         "Ruiz Foods"
};

// ─── 3. COMPANY JUSTICE & SUSTAINABILITY SCORES ──────────────
// cdp:        0-100  (A=90, B=70, C=50, D=30, no disclosure=20)
// just:       0-100  (JUST Capital 2024 percentile rank)
// violations: 0-100  (inverse of Violation Tracker penalties — higher = cleaner)
// overall:    weighted average  CDP×40% + JUST×40% + Violations×20%
var companyScores = {
  "Nestlé": {
    cdp: 90, just: 65, violations: 72,
    context: "Nestlé leads on climate disclosure (CDP A-list 2024), but has faced criticism over water extraction practices and a 2025 product recall affecting Stouffer's and Lean Cuisine lines.",
    source: "https://violationtracker.goodjobsfirst.org/parent/nestle"
    // CDP A-list 2024 confirmed via public CDP press release
  },
  "Tyson Foods": {
    cdp: 20, just: 9, violations: 8,
    context: "Tyson dropped out of CDP climate reporting in 2024. It faces a $115.5M wage suppression lawsuit, a criminal OSHA conviction for a worker death, and 2024 federal investigations for employing migrant children as young as 13 in overnight shifts.",
    source: "https://violationtracker.goodjobsfirst.org/parent/tyson-foods"
  },
  "Conagra Brands": {
    cdp: 20, just: 25, violations: 28,
    context: "Conagra dropped out of CDP climate reporting in 2024 and carries over $200M in recorded regulatory penalties. Its Violation Tracker record includes significant environmental and labor violations.",
    source: "https://violationtracker.goodjobsfirst.org/parent/conagra-brands"
  },
  "Kraft Heinz": {
    cdp: 30, just: 32, violations: 38,
    context: "Kraft Heinz received a CDP D-rating after its Scope 3 emissions increased 76% year-over-year. It has $124M in recorded regulatory penalties and ranks in the bottom half of JUST Capital's worker treatment index.",
    source: "https://violationtracker.goodjobsfirst.org/parent/kraft-heinz"
  },
  "General Mills": {
    cdp: 65, just: 80, violations: 93,
    context: "General Mills is the strongest performer in the frozen food sector — CDP B-rating, top-quartile JUST Capital worker score, and only $1.5M in total penalties across 34 cases, the lowest of any major brand here.",
    source: "https://justcapital.com/companies/general-mills/"
  },
  "Hormel Foods": {
    cdp: 50, just: 55, violations: 75,
    context: "Hormel holds a steady CDP C-rating with average worker scores and a relatively low penalty record. A solid mid-tier performer overall.",
    source: "https://violationtracker.goodjobsfirst.org/parent/hormel-foods"
  },
  "Ajinomoto": {
    cdp: 90, just: 72, violations: 68,
    context: "Ajinomoto (Tai Pei, Ling Ling) achieved CDP A-list status for four consecutive years and earned Great Place to Work certification in 2025. Modest deduction for a 2021 PETA controversy over animal testing practices.",
    source: null
    // Ajinomoto is a Japanese company — no US Violation Tracker page; no reliable public English source link
  },
  "Schwan's": {
    cdp: 35, just: 40, violations: 55,
    context: "Schwan's (Red Baron, Freschetta) is privately held, limiting public ESG data. No CDP climate disclosure was found in public records. Score reflects available regulatory and proxy data only.",
    source: null
    // Private company — no public Violation Tracker or JUST Capital page available
  },
  "Ruiz Foods": {
    cdp: 30, just: 38, violations: 50,
    context: "Ruiz Foods (El Monterey, Delimex) is a privately held company with limited public ESG disclosure. No CDP climate reporting found. Score reflects available OSHA and labor records.",
    source: null
    // Private company — no public Violation Tracker or JUST Capital page available
  }
};

// ─── 4. SCORING FUNCTIONS ────────────────────────────────────
var CARBON_RATE = 0.185;
var WATER_RATE  = 0.0015;
var LAND_RATE   = 1.00;
var MAX_CO2E    = 36;
var MAX_WATER   = 7000;
var MAX_LAND    = 85;

// Product-level eco score (already existed)
function getSustainabilityScore(archetype) {
  var carbonScore = Math.max(0, 1 - archetype.co2e / MAX_CO2E);
  var waterScore  = Math.max(0, 1 - archetype.water / MAX_WATER);
  var landScore   = Math.max(0, 1 - archetype.land / MAX_LAND);
  return Math.round((carbonScore * 0.50 + waterScore * 0.25 + landScore * 0.25) * 100);
}

// Company-level overall score: CDP 40% + JUST 40% + Violations 20%
function calcOverallScore(companyName) {
  var s = companyScores[companyName];
  if (!s) return null;
  return Math.round(s.cdp * 0.40 + s.just * 0.40 + s.violations * 0.20);
}

// Look up parent company from product name
function getCompanyFromProduct(productName) {
  var lower = productName.toLowerCase();
  for (var brand in brandToParent) {
    if (lower.indexOf(brand) !== -1) {
      return brandToParent[brand];
    }
  }
  return null;
}

function getScoreLabel(score) {
  if (score >= 75) return { label: "Strong",   color: "#16A34A", bg: "#DCFCE7", bar: "#16A34A" };
  if (score >= 55) return { label: "Moderate", color: "#65A30D", bg: "#ECFCCB", bar: "#84CC16" };
  if (score >= 35) return { label: "Weak",     color: "#CA8A04", bg: "#FEF9C3", bar: "#EAB308" };
  if (score >= 20) return { label: "Poor",     color: "#EA580C", bg: "#FED7AA", bar: "#F97316" };
  return               { label: "Very Poor",   color: "#DC2626", bg: "#FECACA", bar: "#EF4444" };
}

function getEcoLabel(score) {
  if (score >= 80) return { label: "Excellent", color: "#16A34A", bg: "#DCFCE7" };
  if (score >= 60) return { label: "Good",      color: "#65A30D", bg: "#ECFCCB" };
  if (score >= 40) return { label: "Moderate",  color: "#CA8A04", bg: "#FEF9C3" };
  if (score >= 20) return { label: "Poor",      color: "#EA580C", bg: "#FED7AA" };
  return               { label: "Very Poor",    color: "#DC2626", bg: "#FECACA" };
}

function getTips(archetype) {
  var id = archetype ? archetype.id || '' : '';
  if (id.startsWith('PP-BEEF') || id.startsWith('FM-BEEF') || id.startsWith('MX-BEEF'))
    return "Beef has the highest environmental footprint of common proteins. Swapping even one beef meal per week for chicken or plant-based options can reduce your food carbon footprint by up to 15%.";
  if (id.startsWith('FM-CHKN') || id.startsWith('BP-CHKN') || id.startsWith('PP-CHKN') || id.startsWith('MX-CHKN'))
    return "Chicken produces ~4x less CO2e than beef. Pairing with vegetables further reduces overall impact.";
  if (id.startsWith('FV-') || id.startsWith('FM-VEG'))
    return "Plant-based and vegetable items have among the lowest environmental footprints. Frozen vegetables retain nutrients well and reduce food waste.";
  if (id.startsWith('PZ-'))
    return "Cheese is a significant driver of pizza's carbon footprint. Veggie-topped pizzas have ~20% lower impact than meat-topped ones.";
  if (id.startsWith('FM-SEA') || id.startsWith('BP-FISH') || id.startsWith('PP-SHMP') || id.startsWith('BP-SHMP'))
    return "Seafood impact varies widely. Wild-caught fish tends to be lower impact than farmed shrimp. Look for MSC-certified sustainable seafood labels.";
  return "Choosing more plant-forward meals and reducing red meat are the highest-impact changes you can make for a sustainable diet.";
}

// ─── 5. LEARN MORE MODAL ─────────────────────────────────────
function showLearnMoreModal(match, weightKg, qty, productName) {
  var existing = document.getElementById('ecocart-learn-modal');
  if (existing) existing.remove();

  // Inject animation styles once
  if (!document.getElementById('ecocart-modal-styles')) {
    var style = document.createElement('style');
    style.id = 'ecocart-modal-styles';
    style.textContent = '@keyframes ecoFadeIn{from{opacity:0}to{opacity:1}}@keyframes ecoSlideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}';
    document.head.appendChild(style);
  }

  var ecoScore     = getSustainabilityScore(match);
  var ecoInfo      = getEcoLabel(ecoScore);
  var tip          = getTips(match);
  var companyName  = getCompanyFromProduct(productName || match.name);
  var companyData  = companyName ? companyScores[companyName] : null;
  var overallScore = companyData ? calcOverallScore(companyName) : null;
  var justInfo     = overallScore !== null ? getScoreLabel(overallScore) : null;

  // ── Overlay ──
  var overlay = document.createElement('div');
  overlay.id = 'ecocart-learn-modal';
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(15,23,42,0.65);z-index:2147483647;display:flex;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;backdrop-filter:blur(4px);animation:ecoFadeIn 0.2s ease;';

  // ── Card ──
  var card = document.createElement('div');
  card.style.cssText = 'background:#fff;border-radius:18px;width:92%;max-width:440px;max-height:88vh;overflow-y:auto;box-shadow:0 28px 72px rgba(0,0,0,0.28);animation:ecoSlideUp 0.25s ease;';

  // ── Header ──
  var header = document.createElement('div');
  header.style.cssText = 'background:linear-gradient(135deg,#1F3864,#2D5A9E);padding:18px 20px;color:white;border-radius:18px 18px 0 0;position:sticky;top:0;z-index:1;';
  header.innerHTML = '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;">'
    + '<div><div style="font-size:10px;letter-spacing:0.1em;text-transform:uppercase;opacity:0.65;margin-bottom:4px;">EcoCart Decoder</div>'
    + '<div style="font-size:15px;font-weight:700;line-height:1.3;">' + match.name + '</div>'
    + (companyName ? '<div style="font-size:11px;opacity:0.7;margin-top:3px;">Made by ' + companyName + '</div>' : '')
    + '</div>'
    + '<button id="ecocart-modal-close" style="background:rgba(255,255,255,0.15);border:none;color:white;width:32px;height:32px;min-width:32px;border-radius:50%;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center;">✕</button>'
    + '</div>';

  // ── Body ──
  var body = document.createElement('div');
  body.style.cssText = 'padding:18px 20px 20px;';

  // ── SECTION A: Product Eco Score ──
  var ecoSection = document.createElement('div');
  ecoSection.style.cssText = 'margin-bottom:18px;';
  ecoSection.innerHTML = '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#94A3B8;margin-bottom:10px;">🌱 Product Environmental Score</div>';

  var ecoRow = document.createElement('div');
  ecoRow.style.cssText = 'display:flex;align-items:center;gap:14px;background:' + ecoInfo.bg + ';border-radius:12px;padding:14px;';
  ecoRow.innerHTML = '<div style="width:56px;height:56px;border-radius:50%;background:' + ecoInfo.color + ';display:flex;flex-direction:column;align-items:center;justify-content:center;color:white;flex-shrink:0;box-shadow:0 3px 10px rgba(0,0,0,0.15);">'
    + '<span style="font-size:20px;font-weight:800;line-height:1;">' + ecoScore + '</span>'
    + '<span style="font-size:9px;opacity:0.8;">/ 100</span>'
    + '</div>'
    + '<div style="flex:1;">'
    + '<div style="font-size:13px;font-weight:700;color:' + ecoInfo.color + ';">' + ecoInfo.label + ' — ' + ecoScore + '/100</div>'
    + '<div style="margin-top:6px;height:6px;background:rgba(0,0,0,0.08);border-radius:99px;overflow:hidden;">'
    + '<div style="height:6px;border-radius:99px;background:' + ecoInfo.color + ';width:' + ecoScore + '%;transition:width 0.8s ease;"></div>'
    + '</div>'
    + '<div style="font-size:10px;color:#64748B;margin-top:5px;">Based on carbon, water & land use per kg</div>'
    + '</div>';
  ecoSection.appendChild(ecoRow);

  // Impact breakdown rows
  var impactDiv = document.createElement('div');
  impactDiv.style.cssText = 'margin-top:10px;';
  var metrics = [
    { icon: '🌫️', label: 'Carbon', value: (match.co2e * weightKg * qty).toFixed(1) + ' kg CO2e', sub: '≈ driving ' + Math.round(match.co2e * weightKg * qty * 4) + ' km', color: '#DC2626' },
    { icon: '💧', label: 'Water',  value: (match.water * weightKg * qty).toFixed(0) + ' L',        sub: '≈ ' + Math.round(match.water * weightKg * qty / 2) + ' min shower', color: '#2563EB' },
    { icon: '🌱', label: 'Land',   value: (match.land * weightKg * qty).toFixed(1) + ' m²',        sub: 'farmland used', color: '#16A34A' }
  ];
  metrics.forEach(function(m) {
    var row = document.createElement('div');
    row.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid #F1F5F9;';
    row.innerHTML = '<div><div style="font-size:12px;font-weight:600;color:#334155;">' + m.icon + '  ' + m.label + '</div>'
      + '<div style="font-size:10px;color:#94A3B8;margin-top:1px;">' + m.sub + '</div></div>'
      + '<div style="font-size:12px;font-weight:700;color:' + m.color + ';">' + m.value + '</div>';
    impactDiv.appendChild(row);
  });
  ecoSection.appendChild(impactDiv);
  body.appendChild(ecoSection);

  // ── SECTION B: Company Justice Score ──
  if (companyData && overallScore !== null) {
    var divider = document.createElement('div');
    divider.style.cssText = 'border-top:2px solid #F1F5F9;margin-bottom:18px;';
    body.appendChild(divider);

    var justSection = document.createElement('div');
    justSection.style.cssText = 'margin-bottom:18px;';
    justSection.innerHTML = '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#94A3B8;margin-bottom:10px;">⚖️ Manufacturer Justice Score — ' + companyName + '</div>';

    // Overall score hero
    var justHero = document.createElement('div');
    justHero.style.cssText = 'display:flex;align-items:center;gap:14px;background:' + justInfo.bg + ';border-radius:12px;padding:14px;margin-bottom:12px;';
    justHero.innerHTML = '<div style="width:56px;height:56px;border-radius:50%;background:' + justInfo.color + ';display:flex;flex-direction:column;align-items:center;justify-content:center;color:white;flex-shrink:0;box-shadow:0 3px 10px rgba(0,0,0,0.15);">'
      + '<span style="font-size:20px;font-weight:800;line-height:1;">' + overallScore + '</span>'
      + '<span style="font-size:9px;opacity:0.8;">/ 100</span>'
      + '</div>'
      + '<div style="flex:1;">'
      + '<div style="font-size:13px;font-weight:700;color:' + justInfo.color + ';">Overall: ' + justInfo.label + ' (' + overallScore + '/100)</div>'
      + '<div style="margin-top:6px;height:6px;background:rgba(0,0,0,0.08);border-radius:99px;overflow:hidden;">'
      + '<div style="height:6px;border-radius:99px;background:' + justInfo.bar + ';width:' + overallScore + '%;transition:width 0.8s ease;"></div>'
      + '</div>'
      + '<div style="font-size:10px;color:#64748B;margin-top:5px;">CDP 40% + JUST Capital 40% + Violations 20%</div>'
      + '</div>';
    justSection.appendChild(justHero);

    // Three sub-scores
    var subScores = [
      { label: 'CDP Climate Score',    value: companyData.cdp,        desc: 'Carbon disclosure & reduction targets', icon: '🌍' },
      { label: 'JUST Capital (Labor)', value: companyData.just,       desc: 'Worker pay, safety & benefits',          icon: '👷' },
      { label: 'Violations Record',    value: companyData.violations, desc: 'Regulatory & labor penalty history',     icon: '⚠️' }
    ];
    subScores.forEach(function(s) {
      var si = getScoreLabel(s.value);
      var subRow = document.createElement('div');
      subRow.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #F1F5F9;';
      subRow.innerHTML = '<div>'
        + '<div style="font-size:12px;font-weight:600;color:#334155;">' + s.icon + '  ' + s.label + '</div>'
        + '<div style="font-size:10px;color:#94A3B8;margin-top:1px;">' + s.desc + '</div>'
        + '</div>'
        + '<div style="text-align:right;">'
        + '<div style="font-size:13px;font-weight:800;color:' + si.color + ';">' + s.value + '</div>'
        + '<div style="font-size:9px;color:' + si.color + ';">' + si.label + '</div>'
        + '</div>';
      justSection.appendChild(subRow);
    });

    // Context blurb
    var contextBox = document.createElement('div');
    contextBox.style.cssText = 'margin-top:10px;background:#F8FAFC;border-left:3px solid ' + justInfo.color + ';border-radius:0 8px 8px 0;padding:10px 12px;';
    contextBox.innerHTML = '<div style="font-size:11px;color:#334155;line-height:1.55;">' + companyData.context + '</div>';
    justSection.appendChild(contextBox);
    body.appendChild(justSection);

    var divider2 = document.createElement('div');
    divider2.style.cssText = 'border-top:2px solid #F1F5F9;margin-bottom:18px;';
    body.appendChild(divider2);
  }

  // ── SECTION C: Eco Tip ──
  var tipBox = document.createElement('div');
  tipBox.style.cssText = 'background:#F0FDF4;border-left:3px solid #16A34A;border-radius:0 8px 8px 0;padding:10px 12px;margin-bottom:16px;';
  tipBox.innerHTML = '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:#16A34A;margin-bottom:4px;">💡 Eco Tip</div>'
    + '<div style="font-size:11px;color:#374151;line-height:1.55;">' + tip + '</div>';
  body.appendChild(tipBox);

  // ── Learn More Link — only show if a verified public URL exists ──
  var linkUrl = (companyData && companyData.source) ? companyData.source : null;
  var learnLink = document.createElement('a');
  learnLink.href = linkUrl || 'https://ourworldindata.org/food-choice-vs-eating-local';
  learnLink.target = '_blank';
  learnLink.rel = 'noopener noreferrer';
  learnLink.style.cssText = 'display:flex;align-items:center;justify-content:center;gap:8px;padding:11px;background:linear-gradient(135deg,#1F3864,#2D5A9E);color:white;text-decoration:none;border-radius:10px;font-size:12px;font-weight:600;transition:opacity 0.2s;';
  learnLink.textContent = linkUrl ? '🌍 View full company violation data →' : '🌍 Learn about food & the environment →';
  learnLink.addEventListener('mouseover', function() { learnLink.style.opacity = '0.85'; });
  learnLink.addEventListener('mouseout',  function() { learnLink.style.opacity = '1'; });
  body.appendChild(learnLink);

  // Footer
  var footer = document.createElement('div');
  footer.style.cssText = 'margin-top:10px;text-align:center;font-size:10px;color:#94A3B8;';
  footer.textContent = 'Sources: CDP 2024 · JUST Capital 2024 · Violation Tracker (goodjobsfirst.org) · Poore & Nemecek 2018';
  body.appendChild(footer);

  card.appendChild(header);
  card.appendChild(body);
  overlay.appendChild(card);
  document.body.appendChild(overlay);

  // Close handlers
  document.getElementById('ecocart-modal-close').addEventListener('click', function(e) { e.stopPropagation(); overlay.remove(); });
  overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
  document.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', esc); } });
}

// ─── 6. CART SCANNING HELPERS ────────────────────────────────
function parseWeight(text) {
  text = text.toLowerCase();
  var lbMatch = text.match(/([\d.]+)\s*lb/);
  var ozMatch = text.match(/([\d.]+)\s*oz/);
  var ctMatch = text.match(/(\d+)\s*ct/);
  if (lbMatch) return parseFloat(lbMatch[1]) * 0.4536;
  if (ozMatch) return parseFloat(ozMatch[1]) * 0.02835;
  if (ctMatch) return parseFloat(ctMatch[1]) * 0.085;
  return 0.35;
}

function matchProduct(name) {
  var lower = name.toLowerCase();
  var bestMatch = null;
  var bestScore = 0;
  for (var id in archetypes) {
    var arch = archetypes[id];
    var score = 0;
    for (var k = 0; k < arch.keywords.length; k++) {
      if (lower.indexOf(arch.keywords[k]) !== -1) score += arch.keywords[k].length;
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = { id: id, name: arch.name, co2e: arch.co2e, water: arch.water, land: arch.land };
    }
  }
  if (!bestMatch) {
    var frozenBrands = ["stouffer","digiorno","totino","hot pocket","lean cuisine","marie callender","banquet","hungry-man","hungry man","birds eye","green giant","ore-ida","tyson","gorton","el monterey","delimex","jose ole","jimmy dean","eggo","tai pei","innovasian","bibigo","ling ling","devour","boston market","smart ones","healthy choice","amy's","saffron road"];
    var frozenSignals = ["frozen","ice cream","popsicle"];
    var isFrozen = false;
    for (var b = 0; b < frozenBrands.length; b++) { if (lower.indexOf(frozenBrands[b]) !== -1) { isFrozen = true; break; } }
    if (!isFrozen) { for (var s = 0; s < frozenSignals.length; s++) { if (lower.indexOf(frozenSignals[s]) !== -1) { isFrozen = true; break; } } }
    if (isFrozen) {
      var gen = archetypes["FM-GEN-01"];
      bestMatch = { id: "FM-GEN-01", name: gen.name, co2e: gen.co2e, water: gen.water, land: gen.land };
    }
  }
  return bestMatch;
}

function calcHiddenCost(archetype, weightKg) {
  var carbon = archetype.co2e * weightKg * CARBON_RATE;
  var water  = archetype.water * weightKg * WATER_RATE;
  var land   = archetype.land * weightKg * LAND_RATE;
  return { carbon: carbon, water: water, land: land, total: carbon + water + land };
}

function getGrade(total) {
  if (total < 1)  return { letter: "A", color: "#16A34A", bg: "#DCFCE7" };
  if (total < 3)  return { letter: "B", color: "#65A30D", bg: "#ECFCCB" };
  if (total < 8)  return { letter: "C", color: "#CA8A04", bg: "#FEF9C3" };
  if (total < 15) return { letter: "D", color: "#EA580C", bg: "#FED7AA" };
  return               { letter: "F", color: "#DC2626", bg: "#FECACA" };
}

function findQuantity(el) {
  var node = el.parentElement;
  while (node && node !== document.body) {
    var stepper = node.querySelector('[data-testid="quantity-stepper"]');
    if (stepper) {
      var spans = stepper.querySelectorAll('span, div');
      for (var i = 0; i < spans.length; i++) {
        var txt = spans[i].textContent.trim();
        if (/^\d+$/.test(txt) && spans[i].children.length === 0) return parseInt(txt);
      }
    }
    node = node.parentElement;
  }
  return 1;
}

function buildDetailHTML(match, weightKg, qty, costs) {
  return '<div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span>Carbon (' + (match.co2e * weightKg * qty).toFixed(1) + ' kg CO2e)</span><span style="color:#DC2626;font-weight:600;">$' + (costs.carbon * qty).toFixed(2) + '</span></div>'
    + '<div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span>Water (' + (match.water * weightKg * qty).toFixed(0) + ' L)</span><span style="color:#2563EB;font-weight:600;">$' + (costs.water * qty).toFixed(2) + '</span></div>'
    + '<div style="display:flex;justify-content:space-between;"><span>Land (' + (match.land * weightKg * qty).toFixed(1) + ' m2)</span><span style="color:#16A34A;font-weight:600;">$' + (costs.land * qty).toFixed(2) + '</span></div>'
    + '<div style="margin-top:6px;padding-top:6px;border-top:1px solid #E5E7EB;font-size:10px;color:#999;">Weight: ' + (weightKg * 1000).toFixed(0) + 'g x' + qty + ' | Source: Poore & Nemecek 2018</div>';
}

function attachLearnMoreButton(detailEl, match, weightKg, qty, productName) {
  var old = detailEl.querySelector('[data-ecocart-learn-btn]');
  if (old) old.remove();
  var btn = document.createElement('button');
  btn.setAttribute('data-ecocart-learn-btn', 'true');
  btn.style.cssText = 'margin-top:8px;width:100%;padding:7px 10px;background:linear-gradient(135deg,#1F3864,#2D5A9E);color:white;border:none;border-radius:7px;font-size:11px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:5px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;transition:opacity 0.15s;';
  btn.innerHTML = '⚖️ Sustainability & Justice Score <span style="font-size:12px;">→</span>';
  btn.addEventListener('mouseover', function() { btn.style.opacity = '0.85'; });
  btn.addEventListener('mouseout',  function() { btn.style.opacity = '1'; });
  btn.addEventListener('click', function(e) {
    e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
    showLearnMoreModal(match, weightKg, qty, productName);
  });
  detailEl.appendChild(btn);
}

// ─── 7. MAIN SCAN FUNCTION ───────────────────────────────────
var isUpdating = false;

function scanCart() {
  if (isUpdating) return;
  isUpdating = true;

  var productElements = document.querySelectorAll('[data-testid="productName"]');
  if (productElements.length === 0) {
    isUpdating = false;
    setTimeout(scanCart, 2000);
    return;
  }

  var totalHidden = 0;
  var itemCount   = 0;

  productElements.forEach(function(el) {
    var link = el.querySelector('a') || el.closest('a');
    var productName = '';
    if (link) productName = link.getAttribute('aria-label') || link.textContent || '';
    if (!productName) productName = el.textContent || '';

    var match = matchProduct(productName);
    if (!match) return;

    var weightKg  = parseWeight(productName);
    var qty       = findQuantity(el);
    var costs     = calcHiddenCost(match, weightKg);
    var itemTotal = costs.total * qty;
    var grade     = getGrade(itemTotal);
    totalHidden  += itemTotal;
    itemCount++;

    // Update existing badge
    var existingWrapper = el.parentElement.querySelector('[data-ecocart-badge]');
    if (existingWrapper) {
      var costText    = existingWrapper.querySelector('[data-ecocart-cost]');
      var gradeCircle = existingWrapper.querySelector('[data-ecocart-grade]');
      var detailDiv   = existingWrapper.querySelector('[data-ecocart-detail]');
      if (costText)    costText.textContent = '+$' + itemTotal.toFixed(2) + ' hidden cost' + (qty > 1 ? ' (x' + qty + ')' : '');
      if (gradeCircle) { gradeCircle.textContent = grade.letter; gradeCircle.style.background = grade.bg; gradeCircle.style.color = grade.color; }
      if (detailDiv)   { detailDiv.innerHTML = buildDetailHTML(match, weightKg, qty, costs); attachLearnMoreButton(detailDiv, match, weightKg, qty, productName); }
      return;
    }

    // Build new badge
    var wrapper = document.createElement('div');
    wrapper.setAttribute('data-ecocart-badge', 'true');
    wrapper.style.cssText = 'margin-top:8px;position:relative;z-index:10;';

    var badge = document.createElement('div');
    badge.style.cssText = 'padding:8px 12px;background:linear-gradient(135deg,#FEF2F2,#FFF5F5);border:1px solid #FECACA;border-radius:10px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;display:flex;align-items:center;gap:8px;cursor:pointer;transition:all 0.2s;user-select:none;';

    var gradeEl = document.createElement('div');
    gradeEl.setAttribute('data-ecocart-grade', 'true');
    gradeEl.style.cssText = 'background:' + grade.bg + ';color:' + grade.color + ';font-weight:800;font-size:13px;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;';
    gradeEl.textContent = grade.letter;

    var infoDiv  = document.createElement('div');
    infoDiv.style.cssText = 'flex:1;';

    var costSpan = document.createElement('div');
    costSpan.setAttribute('data-ecocart-cost', 'true');
    costSpan.style.cssText = 'font-size:12px;color:#DC2626;font-weight:700;';
    costSpan.textContent = '+$' + itemTotal.toFixed(2) + ' hidden cost' + (qty > 1 ? ' (x' + qty + ')' : '');

    var nameSpan = document.createElement('div');
    nameSpan.style.cssText = 'font-size:10px;color:#888;margin-top:1px;';
    nameSpan.textContent = match.name;

    infoDiv.appendChild(costSpan);
    infoDiv.appendChild(nameSpan);

    var arrow = document.createElement('div');
    arrow.style.cssText = 'font-size:10px;color:#aaa;';
    arrow.textContent = '\u25BC';

    badge.appendChild(gradeEl);
    badge.appendChild(infoDiv);
    badge.appendChild(arrow);

    var detail = document.createElement('div');
    detail.setAttribute('data-ecocart-detail', 'true');
    detail.style.cssText = 'display:none;margin-top:6px;padding:8px 12px;background:#F9FAFB;border:1px solid #E5E7EB;border-radius:8px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:11px;color:#555;';
    detail.innerHTML = buildDetailHTML(match, weightKg, qty, costs);
    attachLearnMoreButton(detail, match, weightKg, qty, productName);

    badge.addEventListener('click', function(e) {
      e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
      if (detail.style.display === 'none') { detail.style.display = 'block'; arrow.textContent = '\u25B2'; }
      else { detail.style.display = 'none'; arrow.textContent = '\u25BC'; }
    });
    detail.addEventListener('click', function(e) { e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation(); });
    wrapper.addEventListener('click', function(e) { e.stopPropagation(); e.stopImmediatePropagation(); });

    wrapper.appendChild(badge);
    wrapper.appendChild(detail);
    el.parentElement.appendChild(wrapper);
  });

  // ── Banner ──
  if (itemCount > 0) {
    var banner = document.getElementById('ecocart-total');
    if (banner) {
      var bc = banner.querySelector('[data-ecocart-banner-cost]');
      var bn = banner.querySelector('[data-ecocart-banner-count]');
      if (bc) bc.textContent = '+$' + totalHidden.toFixed(2);
      if (bn) bn.textContent = itemCount + ' items analyzed';
    } else {
      var cartHeader = document.querySelector('[class*="Cart"]') || document.querySelector('h1');
      if (cartHeader) {
        banner = document.createElement('div');
        banner.id = 'ecocart-total';
        banner.style.cssText = 'margin:12px 0;padding:14px 18px;background:linear-gradient(135deg,#1F3864,#2D5A9E);border-radius:12px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;display:flex;align-items:center;justify-content:space-between;color:white;box-shadow:0 2px 8px rgba(31,56,100,0.3);';
        banner.innerHTML = '<div><div style="font-size:13px;font-weight:700;">EcoCart Decoder</div><div style="font-size:11px;opacity:0.8;margin-top:2px;">Hidden environmental costs in your cart</div></div>'
          + '<div style="text-align:right;"><div data-ecocart-banner-cost style="font-size:20px;font-weight:800;color:#FCA5A5;">+$' + totalHidden.toFixed(2) + '</div><div data-ecocart-banner-count style="font-size:10px;opacity:0.7;">' + itemCount + ' items analyzed</div></div>';
        cartHeader.parentElement.insertBefore(banner, cartHeader.nextSibling);
      }
    }
  }

  // ── Sidebar totals ──
  var estimatedRow = document.querySelector('[class*="Estimated"]');
  if (!estimatedRow) {
    var allSpans = document.querySelectorAll('span');
    for (var z = 0; z < allSpans.length; z++) {
      if (allSpans[z].textContent.trim() === 'Estimated total') { estimatedRow = allSpans[z].closest('div'); break; }
    }
  }
  if (estimatedRow && !document.getElementById('ecocart-sidebar-cost')) {
    var hiddenRow = document.createElement('div');
    hiddenRow.id = 'ecocart-sidebar-cost';
    hiddenRow.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:8px 0;margin-top:4px;border-top:1px dashed #FECACA;font-family:-apple-system,BlinkMacSystemFont,sans-serif;';
    hiddenRow.innerHTML = '<span style="font-size:13px;color:#DC2626;font-weight:600;">Hidden env. cost</span><span data-ecocart-sidebar-total style="font-size:13px;color:#DC2626;font-weight:700;">+$' + totalHidden.toFixed(2) + '</span>';
    estimatedRow.parentElement.insertBefore(hiddenRow, estimatedRow.nextSibling);
    var trueRow = document.createElement('div');
    trueRow.id = 'ecocart-true-cost';
    trueRow.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:8px 0;font-family:-apple-system,BlinkMacSystemFont,sans-serif;';
    var retailTotal = 0;
    var retailSpan = estimatedRow.querySelector('span:last-child') || estimatedRow.querySelector('[class*="bold"]');
    if (retailSpan) retailTotal = parseFloat(retailSpan.textContent.replace(/[^0-9.]/g, '')) || 0;
    trueRow.innerHTML = '<span style="font-size:14px;color:#1F3864;font-weight:700;">True cost</span><span data-ecocart-true-total style="font-size:14px;color:#1F3864;font-weight:800;">$' + (retailTotal + totalHidden).toFixed(2) + '</span>';
    hiddenRow.parentElement.insertBefore(trueRow, hiddenRow.nextSibling);
  } else if (document.getElementById('ecocart-sidebar-cost')) {
    var st = document.querySelector('[data-ecocart-sidebar-total]');
    if (st) st.textContent = '+$' + totalHidden.toFixed(2);
    var retailSpan2 = estimatedRow ? estimatedRow.querySelector('span:last-child') : null;
    var retail2 = retailSpan2 ? parseFloat(retailSpan2.textContent.replace(/[^0-9.]/g, '')) || 0 : 0;
    var tt = document.querySelector('[data-ecocart-true-total]');
    if (tt) tt.textContent = '$' + (retail2 + totalHidden).toFixed(2);
  }

  if (itemCount > 0) {
    var grandTotalRow = document.querySelector('[data-testid="grand-total-label"]');
    if (grandTotalRow) {
      var container = grandTotalRow.closest('div');
      if (container && !document.getElementById('ecocart-sidebar-cost')) {
        var grandValue = document.querySelector('[data-testid="grand-total-value"]');
        var retailTotal2 = grandValue ? parseFloat(grandValue.textContent.replace(/[^0-9.]/g, '')) || 0 : 0;
        var hiddenRow2 = document.createElement('div');
        hiddenRow2.id = 'ecocart-sidebar-cost';
        hiddenRow2.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:8px 0;margin-top:8px;border-top:2px dashed #FECACA;';
        hiddenRow2.innerHTML = '<span style="font-size:13px;color:#DC2626;font-weight:600;">Hidden env. cost</span><span data-ecocart-sidebar-total style="font-size:13px;color:#DC2626;font-weight:700;">+$' + totalHidden.toFixed(2) + '</span>';
        var trueRow2 = document.createElement('div');
        trueRow2.id = 'ecocart-true-cost';
        trueRow2.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:8px 0;margin-top:4px;border-top:2px solid #1F3864;';
        trueRow2.innerHTML = '<span style="font-size:14px;color:#1F3864;font-weight:700;">TRUE COST</span><span data-ecocart-true-total style="font-size:14px;color:#1F3864;font-weight:800;">$' + (retailTotal2 + totalHidden).toFixed(2) + '</span>';
        container.parentElement.insertBefore(hiddenRow2, container.nextSibling);
        hiddenRow2.parentElement.insertBefore(trueRow2, hiddenRow2.nextSibling);
      } else if (document.getElementById('ecocart-sidebar-cost')) {
        var st2 = document.querySelector('[data-ecocart-sidebar-total]');
        if (st2) st2.textContent = '+$' + totalHidden.toFixed(2);
        var gv2 = document.querySelector('[data-testid="grand-total-value"]');
        var rt2 = gv2 ? parseFloat(gv2.textContent.replace(/[^0-9.]/g, '')) || 0 : 0;
        var tt2 = document.querySelector('[data-ecocart-true-total]');
        if (tt2) tt2.textContent = '$' + (rt2 + totalHidden).toFixed(2);
      }
    }
  }

  isUpdating = false;
}

// ─── 8. INIT & OBSERVER ──────────────────────────────────────
console.log('EcoCart Decoder: scanning Walmart cart...');
scanCart();

var debounceTimer = null;
var observer = new MutationObserver(function(mutations) {
  for (var i = 0; i < mutations.length; i++) {
    var t = mutations[i].target;
    if (t && t.closest && t.closest('[data-ecocart-badge]')) return;
    if (t && t.closest && t.closest('#ecocart-total')) return;
    if (t && t.id === 'ecocart-total') return;
    if (t && t.getAttribute && t.getAttribute('data-ecocart-badge')) return;
    if (t && t.getAttribute && t.getAttribute('data-ecocart-detail')) return;
  }
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(scanCart, 800);
});
observer.observe(document.body, { childList: true, subtree: true, characterData: true });
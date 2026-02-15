var tips = [
  "Swapping beef for chicken in one meal saves ~14 kg of CO2 — equal to driving 35 miles.",
  "Frozen vegetables often have a lower carbon footprint than fresh ones flown in from overseas.",
  "Choosing plant-based meals just once a week can reduce your food carbon footprint by 15%.",
  "A single beef burger uses 2,500 liters of water to produce — enough to fill 30 bathtubs.",
  "Buying seasonal produce cuts transportation emissions by up to 80% compared to out-of-season imports.",
  "Food waste accounts for 8-10% of global greenhouse gas emissions — buy only what you'll eat.",
  "Replacing beef with beans in one meal saves enough CO2 to charge your phone for 3 years.",
  "Dairy alternatives like oat milk produce 80% less emissions than cow's milk.",
  "Eating lower on the food chain is the single biggest way to reduce your environmental impact.",
  "Chicken produces 10x less CO2 than beef per kilogram of protein.",
  "Locally grown doesn't always mean lower footprint — what you eat matters more than where it's from.",
  "One kg of beef requires 326 m2 of land — enough to grow 160 kg of potatoes.",
  "The average American's food footprint is 2.5 tons of CO2 per year — more than many countries' total.",
  "Frozen food actually reduces food waste by extending shelf life — choose wisely and it's a net positive.",
  "Cutting meat consumption in half would free up an area of land the size of North America.",
  "Plant-based proteins use 6-17x less land than animal-based proteins per gram of protein.",
  "Cheese has a higher carbon footprint than chicken — mozzarella produces ~23 kg CO2e per kg.",
  "Growing all the feed for U.S. livestock requires 167 million acres of cropland annually.",
  "Shrimp farming destroys mangrove forests — one of the best natural carbon sinks on Earth.",
  "If food waste were a country, it would be the third largest emitter of greenhouse gases.",
  "Rice paddies produce significant methane — consider swapping rice for pasta or potatoes occasionally.",
  "One serving of lentils produces 43x less CO2 than one serving of beef.",
  "The water footprint of a single egg is 196 liters — about 2 full bathtubs.",
  "Buying whole chickens instead of processed nuggets reduces packaging waste and processing emissions.",
  "Mushrooms are one of the most sustainable protein sources — requiring minimal water, land, and energy.",
  "The fishing industry burns 1.2% of global oil consumption — more than some nations' entire aviation sector.",
  "Tofu produces 3.5 kg CO2 per kg — compared to 99.5 kg for beef. That's a 96% reduction.",
  "Composting food scraps instead of landfill reduces methane emissions by up to 95%.",
  "A vegetarian diet uses 2.5x less land than a meat-based diet on average.",
  "Pork has half the carbon footprint of beef — making it a meaningful swap if you eat red meat.",
  "Eating one less steak per week for a year saves the equivalent CO2 of not driving for 3 months.",
  "The average grocery cart contains 4-6x more hidden environmental cost than the price tag shows.",
  "Grass-fed beef still produces more emissions than chicken, pork, or plant-based alternatives.",
  "Cooking at home typically has a 30% lower carbon footprint than eating the equivalent meal at a restaurant.",
  "Frozen fruits and vegetables retain more nutrients than fresh produce that's been sitting on shelves for days.",
  "Choosing wild-caught fish over farmed shrimp can reduce your seafood carbon footprint by up to 50%.",
  "The UN estimates the global food system's hidden costs at $12.7 trillion annually.",
  "Beef production is responsible for 41% of tropical deforestation worldwide.",
  "Switching from beef to poultry just twice a week cuts your food emissions by nearly 30%.",
  "An acre of land can produce 20,000 lbs of potatoes but only 165 lbs of beef."
];

var tipIcons = ["🌱", "💧", "🌍", "🐄", "🌿", "♻️", "🌾", "🐟", "🥦", "🌳", "🍃", "🐝", "🌊", "🏔️"];

var currentTip = -1;

function showRandomTip() {
  var tipText = document.getElementById('tipText');
  var tipBar = document.getElementById('tipBar');
  var tipIcon = document.getElementById('tipIcon');

  tipBar.style.opacity = '0';

  setTimeout(function() {
    var newTip;
    do {
      newTip = Math.floor(Math.random() * tips.length);
    } while (newTip === currentTip && tips.length > 1);
    currentTip = newTip;

    tipText.textContent = tips[currentTip];
    tipIcon.textContent = tipIcons[Math.floor(Math.random() * tipIcons.length)];
    tipBar.style.opacity = '1';
  }, 500);
}

showRandomTip();
setInterval(showRandomTip, 15000);
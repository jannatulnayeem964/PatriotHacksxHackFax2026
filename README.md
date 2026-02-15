<img width="1090" height="308" alt="transparent" src="https://github.com/user-attachments/assets/166cd825-0c1a-4cce-b06c-82f607428c74" />

# 🌍 CO2PID — Making the Hidden Cost of Food Visible

> A Chrome extension that reveals the environmental cost of frozen foods directly inside your cart.

CO2PID helps consumers understand the **true cost** of their food — not just the price tag, but the hidden environmental impact measured in carbon and water.

---

## Inspiration

Our team wanted to build something that tackles a real-world issue while remaining feasible within a hackathon timeframe.

Recent policy shifts reducing federal oversight of greenhouse gas emissions highlight an uncomfortable reality: **consumer action matters more than ever**. If large systems won’t regulate environmental harm, individuals must be empowered with information.

Food production — especially meat consumption — is a major contributor to:

- greenhouse gas emissions  
- biodiversity loss  
- water overuse  
- ecosystem destruction  

We focused on frozen foods because they are:

- highly processed  
- heavily consumed  
- rarely evaluated for sustainability  

CO2PID educates consumers by surfacing the *hidden environmental price* of everyday foods.

---

## What It Does

CO2PID calculates and displays the environmental cost of frozen food products in real time.

When you open your Walmart cart, the extension:

✅ Scrapes product names from your cart  
✅ Matches them to a sustainability archetype  
✅ Estimates carbon and water impact  
✅ Converts impact into a dollar value  
✅ Injects the hidden cost directly into the page  

The result is a powerful visual shock: cheap food often has an expensive environmental footprint.

⚡ All processing is client-side  
⚡ Under 50 milliseconds  
⚡ Zero API calls  
⚡ No data collection  

---

## How We Built It

### 1. Emissions-to-Dollar Algorithm

We built a three-layer algorithm from scratch:

**Layer 1 — Ingredient Composition**

- Constructed 57 frozen food archetypes
- Pulled real Walmart ingredient lists
- Used FDA labeling law (21 CFR §101.4) to estimate ingredient percentages
- Validated against USDA FoodData Central

**Layer 2 — Environmental Impact**

Each ingredient was multiplied by emission rates from:

> Poore & Nemecek (2018), *Science*  
> 38,700 farms across 119 countries

We modeled:

- carbon emissions
- water footprint
- land use

**Layer 3 — Monetization**

Environmental impact is converted to dollars using:

- EPA Social Cost of Carbon ($185 / ton)
- Water Footprint Network scarcity pricing
- TEEB ecosystem service valuations

---

### 2. Chrome Extension Architecture

The extension is built with **JavaScript**:

- Content script injects into Walmart cart page
- DOM scraping extracts product names
- Regex parsing estimates product weights
- Longest-match keyword scoring matches archetypes
- Hidden cost badges are rendered inline

The full database ships as a static JSON object.

✅ No backend  
✅ No API calls  
✅ No tracking  
✅ Works offline  

---

## Tech Stack

- JavaScript
- Chrome Extensions API (Manifest v3)
- DOM scraping + content injection
- Static JSON sustainability database
- Regex parsing & keyword matching
- Environmental impact modeling

---

## Installation

1. Clone this repository:

```bash
git clone https://github.com/your-username/co2pid.git
```

2. Open Chrome → Extensions → Manage Extensions
3. Enable **Developer Mode**  
4. Click **Load unpacked**  
5. Select the project folder  

Then open your Walmart cart and watch the hidden costs appear.

---

## Example Output



https://github.com/user-attachments/assets/4d686c9b-1b3d-4d36-b41b-3b819220aa82


Consumers instantly see how everyday purchases affect the planet.

---

## Why It Matters

The food system’s hidden environmental cost is estimated at:

> **$12.7 trillion globally per year**

Most people never see this number — until now.

CO2PID makes invisible costs visible.

Informed consumers drive better markets.

Better markets protect the planet.

---

## Future Improvements

- Support for more grocery websites
- Barcode scanning
- Personalized sustainability dashboards
- Alternative product recommendations
- Diet impact tracking
- Mobile companion app

---

## Research Sources

- Poore & Nemecek (2018), *Science*
- EPA Social Cost of Carbon
- USDA FoodData Central
- Water Footprint Network
- TEEB ecosystem valuation data

---

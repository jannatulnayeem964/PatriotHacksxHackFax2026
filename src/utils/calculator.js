const CARBON_RATE = 0.185
const WATER_RATE = 0.0015
const LAND_RATE = 1.00

export function calculateHiddenCost(archetype, weightKg, companyMultiplier = 1.0) {
  const carbon = archetype.co2e_per_kg * weightKg * CARBON_RATE
  const water = archetype.water_per_kg * weightKg * WATER_RATE
  const land = archetype.land_per_kg * weightKg * LAND_RATE
  const subtotal = carbon + water + land
  const total = subtotal * companyMultiplier
  return { carbon, water, land, subtotal, total }
}

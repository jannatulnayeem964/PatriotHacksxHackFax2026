import archetypes from '../data/archetypes.json'

export function matchProduct(productName) {
  const name = productName.toLowerCase()
  let bestMatch = null
  let bestScore = 0

  for (const [id, arch] of Object.entries(archetypes)) {
    let score = 0
    for (const keyword of arch.keywords) {
      if (name.includes(keyword.toLowerCase())) {
        score += keyword.length
      }
    }
    if (score > bestScore) {
      bestScore = score
      bestMatch = { id, ...arch }
    }
  }
  return bestMatch
}

import React from 'react'

const testCart = [
  { name: "Stouffer's Lasagna with Meat Sauce 10.5oz", price: 4.99, hiddenCost: 18.13, grade: "D" },
  { name: "DiGiorno Pepperoni Pizza 24.7oz", price: 7.49, hiddenCost: 8.42, grade: "C" },
  { name: "Birds Eye Mixed Vegetables 12oz", price: 2.29, hiddenCost: 0.87, grade: "A" },
]

const gradeColor = { A: "bg-green-100 text-green-700", B: "bg-lime-100 text-lime-700", C: "bg-yellow-100 text-yellow-700", D: "bg-orange-100 text-orange-700", F: "bg-red-100 text-red-700" }

export default function App() {
  const totalHidden = testCart.reduce((s, i) => s + i.hiddenCost, 0)
  const totalRetail = testCart.reduce((s, i) => s + i.price, 0)

  return (
    <div className="p-4 w-80 bg-white min-h-screen font-sans">
      <h1 className="text-lg font-bold mb-1">EcoCart Decoder</h1>
      <p className="text-xs text-gray-400 mb-4">Hidden environmental costs of your cart</p>
      <div className="mb-4 p-3 bg-red-50 rounded-xl border border-red-200">
        <div className="text-xs text-gray-500">Your carts hidden cost</div>
        <div className="text-2xl font-bold text-red-600">+${totalHidden.toFixed(2)}</div>
        <div className="text-xs text-gray-400 mt-1">Retail: ${totalRetail.toFixed(2)} | True cost: ${(totalRetail + totalHidden).toFixed(2)}</div>
      </div>
      {testCart.map((item, i) => (
        <div key={i} className="mb-3 p-3 border border-gray-200 rounded-xl">
          <div className="flex justify-between items-start">
            <div className="text-sm font-medium leading-tight flex-1 mr-2">{item.name}</div>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${gradeColor[item.grade]}`}>{item.grade}</span>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className="text-gray-400">${item.price.toFixed(2)}</span>
            <span className="text-red-600 font-semibold">+${item.hiddenCost.toFixed(2)} hidden</span>
          </div>
        </div>
      ))}
    </div>
  )
}

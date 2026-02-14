var testCart = [
  { name: "Stouffers Lasagna with Meat Sauce 10.5oz", price: 4.99, hiddenCost: 18.13, grade: "D" },
  { name: "DiGiorno Pepperoni Pizza 24.7oz", price: 7.49, hiddenCost: 8.42, grade: "C" },
  { name: "Birds Eye Mixed Vegetables 12oz", price: 2.29, hiddenCost: 0.87, grade: "A" },
  { name: "Tyson Chicken Nuggets 32oz", price: 8.97, hiddenCost: 6.54, grade: "C" },
  { name: "El Monterey Beef Burritos 8ct", price: 5.47, hiddenCost: 12.38, grade: "D" }
];

var totalHidden = 0;
var totalRetail = 0;
for (var i = 0; i < testCart.length; i++) {
  totalHidden += testCart[i].hiddenCost;
  totalRetail += testCart[i].price;
}

var html = '<div class="total-box">' +
  '<div class="total-label">Your carts hidden cost</div>' +
  '<div class="total-amount">+$' + totalHidden.toFixed(2) + '</div>' +
  '<div class="total-detail">Retail: $' + totalRetail.toFixed(2) + ' → True cost: $' + (totalRetail + totalHidden).toFixed(2) + '</div>' +
  '</div>';

for (var j = 0; j < testCart.length; j++) {
  var item = testCart[j];
  html += '<div class="item">' +
    '<div class="item-header">' +
    '<div class="item-name">' + item.name + '</div>' +
    '<span class="grade grade-' + item.grade + '">' + item.grade + '</span>' +
    '</div>' +
    '<div class="item-prices">' +
    '<span class="retail">$' + item.price.toFixed(2) + '</span>' +
    '<span class="hidden-cost">+$' + item.hiddenCost.toFixed(2) + ' hidden</span>' +
    '</div></div>';
}

document.getElementById('app').innerHTML = html;

function calculateTotalSales(products, taxRate) {
  return products.reduce(
    (acc, { price, quantity }) => acc + price * quantity * (1 + taxRate * 0.01),
    0
  );
}

console.log(
  calculateTotalSales(
    [
      { name: 'Apple', price: 0.5, quantity: 10 },
      { name: 'Banana', price: 0.3, quantity: 20 },
      { name: 'Orange', price: 0.6, quantity: 15 },
    ],
    8
  )
);

module.exports = calculateTotalSales;

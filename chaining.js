const items = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];

const total = items
  .map(item => item.price) // Extract the prices
  .reduce((sum, price) => sum + price, 0); // Sum up the prices

console.log(total); // Output: 46.97

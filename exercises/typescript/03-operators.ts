// Operators: arithmetic, comparison, and logical operators combine
// and evaluate values.

// Command to run this exercise: npm run typescript:operators

const price = 19.99;
const quantity = 2;
const total = price * quantity;

console.log(`Total for ${quantity} items: $${total.toFixed(2)}`); // .toFixed(2) simply fixes the decimal to 2 digits, becaue this is currency.

const hasDiscount = total > 50;
console.log('Total is over $50:', hasDiscount);

const isInStock = true;
const canCheckout = hasDiscount && isInStock;
console.log('Can checkout with discount applied:', canCheckout);

// TODO: change `quantity` above so `hasDiscount` becomes true, then re-run
// this file and watch both `hasDiscount` and `canCheckout` update.

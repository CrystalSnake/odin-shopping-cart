/**
 * Calculates the sum of the quantities of items in a shopping cart.
 *
 * @param {Array} cart - An array of objects representing items in a shopping cart. Each object has a `quantity` property indicating the quantity of the item.
 * @returns {number} - The sum of the quantities of all items in the shopping cart.
 */
const sumOfProducts = (cart) => {
  const sum = cart.reduce(function (currentSum, currentItem) {
    const curNumber = Number(currentItem.quantity);
    return currentSum + curNumber;
  }, 0);
  return sum;
};

/**
 * Calculates the subtotal of products in a shopping cart.
 *
 * @param {Array} cart - An array of objects representing the products in the shopping cart. Each object should have properties `quantity` and `price`.
 * @returns {number} - The total cost of all products in the shopping cart.
 *
 * @example
 * const cart = [
 *   { name: 'Product 1', quantity: 2, price: 10 },
 *   { name: 'Product 2', quantity: 1, price: 5 },
 *   { name: 'Product 3', quantity: 3, price: 8 }
 * ];
 *
 * const subtotal = subtotalOfProducts(cart);
 * console.log(subtotal); // Output: 49
 */
const subtotalOfProducts = (cart) => {
  const subtotal = cart.reduce(function (currentSub, currentItem) {
    const curPrice = Number(currentItem.quantity) * Number(currentItem.price);
    return currentSub + curPrice;
  }, 0);
  return subtotal;
};

export { sumOfProducts, subtotalOfProducts };

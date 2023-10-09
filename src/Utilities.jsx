const sumOfProducts = (cart) => {
  const sum = cart.reduce(function (currentSum, currentItem) {
    const curNumber = Number(currentItem.quantity);
    return currentSum + curNumber;
  }, 0);
  return sum;
};

const subtotalOfProducts = (cart) => {
  const subtotal = cart.reduce(function (currentSub, currentItem) {
    const curPrice = Number(currentItem.quantity) * Number(currentItem.price);
    return currentSub + curPrice;
  }, 0);
  return subtotal;
};

export { sumOfProducts, subtotalOfProducts };

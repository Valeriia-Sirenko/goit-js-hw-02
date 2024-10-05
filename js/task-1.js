function makeTransaction(quantity, pricePerDroid, customerCredits) {
  // Оголошуємо змінну для загальної суми замовлення
  const totalPrice = quantity * pricePerDroid;

  // Перевіряємо, чи достатньо коштів на рахунку клієнта
  if (totalPrice > customerCredits) {
    return "Insufficient funds!";
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}

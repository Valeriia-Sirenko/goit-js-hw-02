function getShippingCost(country) {
  let price;

  // Використовуємо switch для перевірки країни
  switch (country) {
    case "China":
      price = 100;
      break;
    case "Chile":
      price = 250;
      break;
    case "Australia":
      price = 170;
      break;
    case "Jamaica":
      price = 120;
      break;
    default:
      return "Sorry, there is no delivery to your country";
  }

  // Повертаємо рядок з країною і ціною доставки
  return `Shipping to ${country} will cost ${price} credits`;
}

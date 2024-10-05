function checkForSpam(message) {
  // Перетворюємо рядок на нижній регістр для порівняння
  const lowerCaseMessage = message.toLowerCase();

  // Перевіряємо наявність заборонених слів "spam" або "sale"
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

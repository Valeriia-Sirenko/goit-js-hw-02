function formatMessage(message, maxLength) {
  // Перевіряємо, чи довжина рядка більша за maxLength
  if (message.length > maxLength) {
    // Якщо так, обрізаємо рядок і додаємо "..."
    return message.slice(0, maxLength) + "...";
  }
  // Якщо рядок менший або дорівнює maxLength, повертаємо його без змін
  return message;
}

const generateRandomPrice = (min, max) => {
  const num = (Math.floor(Math.random() * (max - min)) + min).toString();
  return Number(num + "990");
};

const currencyFormat = (integer) => {
  return '$ ' + (integer).toLocaleString().replace(/,/, '.').trim()
}

const generateId = () => {
  return Math.random().toString(36).substring(2, 15)
}

export { generateRandomPrice, currencyFormat, generateId };

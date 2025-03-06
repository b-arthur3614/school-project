const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const generateNumbers = (n) => {
  const numbersList = [];
  for (let i = 0; i < n; i++) {
    numbersList.push(getRandomNumber());
  }
  return numbersList;
};

generateNumbers(10);

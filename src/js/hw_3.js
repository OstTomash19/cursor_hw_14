export function getRandomArray(length, min, max) {
    const randomNumbersArr = [];
    for (let i = 0; i < length; i++) {
      randomNumbersArr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
  
    return randomNumbersArr;
  };
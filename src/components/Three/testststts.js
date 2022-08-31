const resultErr = (errorCounter) => {
  if (errorCounter == 0) {
    return 0;
  }
  if (3 >= errorCounter > 0) {
    return 1;
  }
  if (errorCounter > 3) {
    if (errorCounter > 5) {
      return 3;
    }
    return 2;
  }
};

console.log(resultErr(0));
console.log(resultErr(1));
console.log(resultErr(2));
console.log(resultErr(3));
console.log(resultErr(4));
console.log(resultErr(5));
console.log(resultErr(6));

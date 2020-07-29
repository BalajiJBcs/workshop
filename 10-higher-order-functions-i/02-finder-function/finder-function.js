// YOUR CODE BELOW
const finderFunction = (number, isEven) => {
  let index = 0;
  for(let i = 0; i < number.length;i++) {
    let val = isEven(number[i]);
    if(val) {
      index = i;
      return index;
    }
  }
  return -1;
}

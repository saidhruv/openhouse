const convertToNumber = (numberString) => {
  let convertedNumber = 0, l = numberString.length, convertToNegative = false;
  for (let i = 0; i < l; i++) {
    const temp = numberString.charCodeAt(i);
    if (48 <= temp && temp <=57) {
      convertedNumber = convertedNumber * 10 + (temp - 48);
    } else if (temp === 45 && i === 0) { 
      convertToNegative = true;
    } else {
      break;
    }
  }

  if (convertToNegative) {
    convertedNumber = convertedNumber - 2 * convertedNumber;
  }
  
  return convertedNumber;
}

console.log(convertToNumber("42"));
console.log(convertToNumber("0"));
console.log(convertToNumber("42a"));
console.log(convertToNumber("42a35"));
console.log(convertToNumber("abc42"));
console.log(convertToNumber("-42"));

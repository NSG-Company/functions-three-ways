function doSquareCalculation(number1, number2) {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
}
console.log(doSquareCalculation(2, 2));

const squareCalculation = function (number1, number2) {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
};
console.log(squareCalculation(3, 3))

const calculation = (number1, number2) => {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
};
console.log(calculation(4, 4))
// take two numbers
// each number will be squared (multiplied with itself)
// the squared numbers will be added together
// this sum will be squared again
// the resulting value is returned

















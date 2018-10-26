let number, serialNumber = 1;
let resultNumber;
number = +prompt("Enter number for multiplication table:");
for (serialNumber; serialNumber < 11; serialNumber++) {
    resultNumber = serialNumber * number;
    console.log(`${serialNumber} * ${number} = ${resultNumber}\n`);
}

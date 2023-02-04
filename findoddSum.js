// function getSumofAnArray(numbers) {
//     // let sum = 0;
//     for (let i = 0; i < numbers.length; i++){
//         let sum = 0;
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         console.log(index, element, sum);
//     }
// }

// const mygetNumber = [12, 23, 45, 56, 76, 43];
// getSumofAnArray(mygetNumber);


function getSumofAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}
function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if (element % 2 === 1) {
            console.log(index, element);
            oddNumbers.push(element);
       }
    }
    return oddNumbers;
}


const mygetNumber = [34, 23, 24, 53, 12, 33, 21];
const oddNumbers = getOddNumbersOfAnArray(mygetNumber)
console.log(oddNumbers);
const oddNumberSum = getSumofAnArray(mygetNumber);
console.log('odd number sum', oddNumberSum);

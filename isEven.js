// console.log(4 / 2);
// console.log(98 /2);
// console.log(1244 /2);
// console.log(1344 /2);

// console.log(7 / 2);
// console.log(97 /2);
// console.log(133 /2);
// console.log(1347 /2);

// console.log(7 % 2);
// console.log(97 %2);
// console.log(133 %2);
// console.log(1347 %2);

// console.log(4 % 2);
// console.log(98 %2);
// console.log(1244 %2);
// console.log(1344 %2);

function isEven(number){
    const remainder = number % 2;
    if (remainder === 0) {
        return true;
    }

    else {
        return false;
    }
}

isEven(333);
isEven(3434);

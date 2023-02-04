function milsTokilometers(miles) {
    const number = miles *1.60934;
    return number;
}

const milskm = 2;
const fullMeters = milsTokilometers(milskm);
console.log(fullMeters);
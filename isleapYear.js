// function isLeapYear(year) {
//     const remainder = year % 4;
//     if (remainder === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    return false;
}
const leapYear1 = isLeapYear(1933);
console.log('my year', leapYear1);

const isHerYearLeapYear = isLeapYear(1960);
console.log('Her year', isHerYearLeapYear);

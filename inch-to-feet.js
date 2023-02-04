// const myInches = 12;
// const myFeet = myInches /12;
// console.log(myFeet);

// const dataInches = 144;
// const dataFeet = dataInches / 12;
// console.log(dataFeet);

// const dadiInches = 60;
// const dadiFeet = dadiInches / 12;
// console.log('dadi feet', dadiFeet);



function inchToFeet(inche) {
    const feet = inche / 12;
    return feet;
}

const dataInches = 144;
const dataFeet = inchToFeet(dataInches);
// console.log('datafeet', dataFeet);


function nanaToFeet (inch){
    const feet = inch / 12;
    return feet;
}

const nanaInch = 168;
const nanafeet = nanaToFeet(nanaInch);
console.log(nanafeet);
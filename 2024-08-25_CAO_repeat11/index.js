function alertName(text){
    alert(text);
}

function consoleName(text){
    console.log(text);
}

function coreFunction(name, callback){
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    callback(capitalizedName);
}
// coreFunction('john', alertName); 
coreFunction('john', consoleName);


const cars = ["BMW", "VW", "Audi"];
cars.forEach((car, i) => {console.log(i+(1) + " " + car)});


const strangeNames = ["JoHn", "DoE", "JaNER", "DYRe"];
const normalNames = strangeNames.map((name) => {
    return name.charAt(0).toLocaleUpperCase() + name.slice(1).toLowerCase();
})
console.log(normalNames);


const ages = [1, 20, 5, 10, 22, 50, 40, 39];
const adults = ages.filter((age) => {
    return age >= 18;
})
console.log(adults);


const cities = ["Berlin", "Paris", "London", "New York", "tokyo"];
const city = cities.find((city) => {
    return city.charAt(0) === "L";
})
console.log(city);

const isCityFromLowerCase = cities.some((city) => {
    return city.charAt(0) === city.charAt(0).toLowerCase();
})
console.log(isCityFromLowerCase);

const isEveryCityFromUpperCase = cities.every((city) => {
    return city.charAt(0) === city.charAt(0).toUpperCase();
})
console.log(isEveryCityFromUpperCase);
    


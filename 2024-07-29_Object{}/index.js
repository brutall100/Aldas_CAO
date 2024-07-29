let companyA = new Object()
console.log(companyA)

// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
companyA['company name'] = 'Black & Red'
console.log(companyA)
console.log(companyA['company name'])

// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
companyA.opened = 1958
console.log(companyA)
console.log(companyA.opened)

// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
companyA.companyCode = '123456789'
console.log(companyA)
console.log(companyA.companyCode)

// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
companyA.employees = 765
console.log(companyA)
console.log(companyA.employees)

// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
companyA.ceo = 'John Doe'
console.log(companyA)
console.log(companyA.ceo)

// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
companyA.nvo = false
console.log(companyA)   
console.log(companyA.nvo)

// 2.7. Property „workingLocations" ir priskirti įmonės veiklos šalių value (turi būti bent dvi veiklos šalys).
companyA.workingLocations = ['Lithuania', 'Latvia', 'Estonia',]
console.log(companyA)
console.log(companyA.workingLocations)  
console.log(companyA.workingLocations[1])

// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
companyA.activityAreas = ['IT', 'Finance', 'Marketing']
console.log(companyA)
console.log(companyA.activityAreas)
console.log(companyA.activityAreas[2])

// 2.9. Property „contacts", kuris turės:
//       2.9.1. „phone"
//       2.9.2. „email"
//       2.9.3. „address", kuris turės:
//           2.9.3.1. „country"
//           2.9.3.2. „city"
//           2.9.3.3. „street"
//           2.9.3.4. „apartment"
companyA.contacts = {
    phone: '+370 600 12345',
    email: 'pamparam@pam.ram',
    address: {
    },
}
console.log(companyA)
console.log(companyA.contacts)
console.log(companyA.contacts.phone)    
console.log(companyA.contacts.email)

companyA.contacts.address.country = 'Lithuania'
companyA.contacts.address.city = 'Vilnius'
companyA.contacts.address.street = 'Vilniaus st. 15'
companyA.contacts.address.apartment = '15'
console.log(companyA)
console.log(companyA.contacts.address)
console.log(companyA.contacts.address.country)
console.log(companyA.contacts.address.city)

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
function companyAddress(){
    return `${companyA.contacts.address.street}, ${companyA.contacts.address.city}, ${companyA.contacts.address.country}.`
}
console.log(companyAddress())

// 6. Sukurti funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
function changeNVOStatusTrue(){
    console.log(companyA.nvo)
    return companyA.nvo = true
}
console.log(changeNVOStatusTrue())

//        6.2. Pakeičia NVO statusą į false.
function changeNVOStatusFalse(){
    console.log(companyA.nvo)
    return companyA.nvo = false
}
console.log(changeNVOStatusFalse())

//        6.3. Keičia NVO statusą iš true į false ir iš false į true.
function changeNVOStatus(){
    console.log(companyA.nvo)
    return companyA.nvo = !companyA.nvo
}
console.log(changeNVOStatus())


// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
function workingLocations(){
    return companyA.workingLocations.join(',:>> ')
}
console.log(workingLocations())

//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
function activityAreas(){
    return companyA.activityAreas.join(' <> ')
}
console.log(activityAreas())

// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
function addNewWorkingLocation(location){
    return companyA.workingLocations.push(location)
}
console.log(addNewWorkingLocation('Germany'))
console.log(companyA.workingLocations)

//        8.2. Naują veiklos rūšį prie veiklų masyvo.
function addNewActivityArea(area){
    return companyA.activityAreas.unshift(area)
}
console.log(addNewActivityArea('Sales'))
console.log(companyA.activityAreas)

// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
function removeWorkingLocation(location){
    return companyA.workingLocations.splice(companyA.workingLocations.indexOf(location), 1)
}
console.log(removeWorkingLocation('Latvia'))
console.log(companyA.workingLocations)

//        9.2. Veiklos rūšį iš veiklų masyvo.
function removeActivityArea(area){
    return companyA.activityAreas.splice(companyA.activityAreas.indexOf(area), 2)
}
console.log(removeActivityArea('Sales'))
console.log(companyA.activityAreas)











let companyB = {
   'company name': 'White & Blue',
   opened: 1369,
   companyCode: '987654321',
   employees: 123,
   ceo: 'Jane Doe',
   nvo: true,
   workingLocations: ['Lithuania', 'Latvia', 'Estonia'],
   activityAreas: ['IT', 'Finance', 'Marketing'],
   contacts: {
      phone: '+370 600 54321',
      email: 'that@email.isthis',
      address: {
         country: 'Lithuania',
         city: 'Kaunas',
         street: 'Kauno st. 15',
      },
   },
}
console.log(companyB)
console.log(`Company name: ${companyB['company name']}`)
console.log(`Opened: ${companyB.opened}`)
console.log(`Company code: ${companyB.companyCode}`)
console.log(`Employees: ${companyB.employees}`)
console.log(`CEO: ${companyB.ceo}`)
console.log(`NVO: ${companyB.nvo}`)
console.log(`Working locations: ${companyB.workingLocations}`)
console.log(`Activity areas: ${companyB.activityAreas}`)
console.log(`Phone: ${companyB.contacts.phone}`)
console.log(`Email: ${companyB.contacts.email}`)
console.log(`Address: ${companyB.contacts.address.street}, ${companyB.contacts.address.city}, ${companyB.contacts.address.country}`)

let apartment = companyB.contacts.address.apartment = 5555
console.log(companyB.contacts.address.apartment)

console.log(companyB)

// Done with CO pilot and Aldas







// UŽDUOTIS:
// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
// 2.7. Property „workingLocations" ir priskirti įmonės veiklos šalių value (turi būti bent dvi veiklos šalys).
// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
// 2.9. Property „contacts", kuris turės:
//       2.9.1. „phone"
//       2.9.2. „email"
//       2.9.3. „address", kuris turės:
//           2.9.3.1. „country"
//           2.9.3.2. „city"
//           2.9.3.3. „street"
//           2.9.3.4. „apartment"

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
// 6. Sukurti funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
//        6.2. Pakeičia NVO statusą į false.
//        6.3. Keičia NVO statusą iš true į false ir iš false į true.
// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
//        8.2. Naują veiklos rūšį prie veiklų masyvo.
// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
//        9.2. Veiklos rūšį iš veiklų masyvo.
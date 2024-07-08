// SLAPTAŽODIS:
let password = '12ggwwwwwdddddddddd#wwe456'
let protection = '#'

if (password.length <= 16) {
   console.log('Slaptažodis yra per trumpas')
} else if (password.length > 20) {
   console.log('Slaptažodis ok')
   if (password.includes(protection)) {
      console.log('Slaptažodis turi #')
   } else {
      console.log('Slaptažodis neturi #')
   }
} else if (password.length > 15) {
   console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
} else {
   console.log('Slaptažodis lievas')
}

// AMŽIUS
const schoolHumanAge = prompt('Įveskite vaiko amžių:');
const numericAge = Math.floor(Number(schoolHumanAge));

console.log(numericAge);


if (numericAge <= 0 || numericAge > 120) {
   console.log('Klaida. Netinkamas amžius.')
} else if (numericAge === 6) {
   console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
} else if (numericAge === 10) {
   console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.')
} else if (numericAge === 14) {
   console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.')
} else if (numericAge === 18) {
   console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.')
} else {
   if (numericAge < 7) {
      console.log('Jūsų vaikas dar neįstojęs į mokyklą')
   } else if (numericAge >= 7 && numericAge <= 10) {
      console.log('Eina į pradinę klasę.')
   } else if (numericAge >= 11 && numericAge <= 14) {
      console.log('Eina į pagrindinę.')
   } else if (numericAge >= 15 && numericAge <= 18) {
      console.log('Eina į gimnaziją.')
   } else {
      console.log('Jūsų vaikas jau baigė mokyklą')
   }
}

// GALVOSŪKIS
// const gameFirstLvl = 1
// const gameSecondLvl = 2
// const gameThirdLvl = 3

// let userAnswer1, userAnswer2, userAnswer3

// //// 1 lygis
// if (gameFirstLvl == 1) {
//    userAnswer1 = +prompt('Kiek yra 1 + 1?')
//    console.log(userAnswer1)

//    userAnswer2 = +prompt('Kiek yra 1 + 2?')
//    console.log(userAnswer2)

//    if (userAnswer1 === 2 && userAnswer2 === 3) {
//       console.log('Teisingai! Atsakei į abu klausimus!')
//       console.log('Patekai i kita lygi!')
//    } else if (userAnswer1 === 2 && userAnswer2 !== 3) {
//       console.log('Patekai i kita lygi: pirmas atsakymas buvo teisingas, o antras buvo neteisingas.')
//    } else if (userAnswer1 !== 2 && userAnswer2 === 3) {
//       console.log('Patekai i kita lygi: antras atsakymas buvo teisingas, o pirmas buvo neteisingas.')
//    } else {
//       console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
//    }
// } else {
//    console.log('Klaida. Nepavyko patekti i kita lygi.')
// }

// //// 2 lygis
// if (gameSecondLvl == 2) {
//    userAnswer2 = +prompt('Kiek yra 2 + 2?')
//    console.log(userAnswer2)

//    userAnswer3 = +prompt('Kiek yra 2 + 3?')
//    console.log(userAnswer3)

//    if (userAnswer2 === 4 && userAnswer3 === 5) {
//       console.log('Teisingai! Atsakei į abu klausimus!')
//       console.log('Patekai i kita lygi!')
//    } else if (userAnswer2 !== 4 && userAnswer3 === 5) {
//       console.log('Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
//    } else if (userAnswer2 === 4 && userAnswer3 !== 5) {
//       console.log('Nepatekai i kita lygi: pirmas atsakymas buvo teisingas, o antras buvo neteisingas.')
//    } else {
//       console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
//    }
// } else {
//    console.log('Klaida. Nepavyko patekti i kita lygi.')
// }

// //// 3 lygis
// if (gameThirdLvl == 3) {
//    userAnswer1 = +prompt('Kiek yra 3 + 3?')
//    console.log(userAnswer1)

//    userAnswer2 = +prompt('Kiek yra 3 + 4?')
//    console.log(userAnswer2)

//    userAnswer3 = +prompt('Kiek yra 3 + 5?')
//    console.log(userAnswer3)

//    if (userAnswer1 === 6 && userAnswer2 === 7 && userAnswer3 === 8) {
//       console.log('Teisingai! Atsakei į visus klausimus!')
//       console.log('Laimejote!')
//    } else if (userAnswer1 === 6 && userAnswer2 === 7 && userAnswer3 !== 8) {
//       console.log('Patekai i kita lygi: pirmas ir antras atsakymai buvo teisingi, o trecias buvo neteisingas.')
//    } else if (userAnswer1 === 6 && userAnswer2 !== 7 && userAnswer3 === 8) {
//       console.log('Patekai i kita lygi: pirmas ir trecias atsakymai buvo teisingi, o antras buvo neteisingas.')
//    } else if (userAnswer1 !== 6 && userAnswer2 === 7 && userAnswer3 === 8) {
//       console.log('Patekai i kita lygi: antras ir trecias atsakymai buvo teisingi, o pirmas buvo neteisingas.')
//    } else if (userAnswer1 === 6 && userAnswer2 !== 7 && userAnswer3 !== 8) {
//       console.log('Nepatekai i kita lygi: pirmas atsakymas buvo teisingas, o kiti buvo neteisingi.')
//    } else if (userAnswer1 !== 6 && userAnswer2 === 7 && userAnswer3 !== 8) {
//       console.log('Nepatekai i kita lygi: antras atsakymas buvo teisingas, o kiti buvo neteisingi.')
//    } else if (userAnswer1 !== 6 && userAnswer2 !== 7 && userAnswer3 === 8) {
//       console.log('Nepatekai i kita lygi: trecias atsakymas buvo teisingas, o kiti buvo neteisingi.')
//    } else {
//       console.log('Nepatekai i kita lygi: visi atsakymai buvo neteisingi.')
//    }
// } else {
//    console.log('Klaida. Nepavyko patekti i kita lygi.')
// }

// PASISVEIKINIMAS:
// let isLoggedIn = true
// let userName = 'Aldas'
// let time = new Date().getHours()
// console.log(time)
// let isBirthday = true

// if (isLoggedIn === true) {
//    console.log(`Sveiki atvykę,! ${userName}`)
//    if (time >= 5 && time <= 12) {
//       console.log(`Labas rytas, šiuo metu yra ${time} h.`)
//    } else if (time >= 13 && time <= 18) {
//       console.log(`Labas diena, šiuo metu yra ${time} h.`)
//    } else {
//       console.log(`Labas vakaras, šiuo metu yra ${time} h.`)
//    }
// } else {
//    console.log(`Sveiki sveiki sveiki`)
// }
// if (isLoggedIn === true && isBirthday === true) {
//    console.log(`${userName} Sveikiname su gimtadieniu!`)
// }

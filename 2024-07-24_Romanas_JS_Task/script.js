let mainArray = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751]
console.log(mainArray)

// 1.1. Pašalinti pirmą masyvo narį.
mainArray.shift()
console.log(mainArray)

// 1.2. Pašalinti paskutinį masyvo narį.
mainArray.pop()
console.log(mainArray)

// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
let middleIndex = Math.floor(mainArray.length / 2)
mainArray.splice(middleIndex, 1)
console.log(mainArray)

// 1.4. Pašalinti priešpaskutinį masyvo narį.
mainArray.splice(mainArray.length - 2, 1)
console.log(mainArray)

// 1.5. Pašalinti antrą masyvo narį.
mainArray.splice(1, 1)
console.log(mainArray)

// 1.6. Pašalinti 7 ir 8 masyvo narius.
mainArray.splice(6, 2)
console.log(mainArray)

// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
mainArray.splice(-6, 3)
console.log(mainArray)

// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
mainArray.splice(2, 1, 888)
console.log(mainArray)

// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
mainArray.splice(9, 1, 33, 789, 6543)
console.log(mainArray)

// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
mainArray.splice(mainArray.length - 1, 1, 321, 654, 987)
console.log(mainArray)

// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
mainArray.splice(1, 0, 11)
console.log(mainArray)

// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
mainArray.splice(13, 0, 1)
console.log(mainArray)

// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
mainArray.splice(mainArray.length - 1, 0, -1)
console.log(mainArray)

// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
mainArray.unshift(1, 2, 3)
console.log(mainArray)

// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
mainArray.push(-333, -321, -312)

// 1.16. Į masyvo vidurį pridėti skaičių 0.
let middleIndex2 = Math.floor(mainArray.length / 2)
console.log(middleIndex2)
mainArray.splice(middleIndex2, 0, 0)
console.log(mainArray)

// 1.17. Pašalinti pirmą masyvo narį.
mainArray.shift()
console.log(mainArray)

// 1.18. Pašalinti paskutinį masyvo narį.
mainArray.pop()
console.log(mainArray)

// 1.19. Į masyvo pradžią pridėti žodį "start".
mainArray.unshift('start')
console.log(mainArray)

// 1.20. Į masyvo pabaigą pridėti žodį "end".
mainArray.push('end')
console.log(mainArray)

function compareArray() {
   let goodArray = [
      'start',
      2,
      3,
      5,
      11,
      155,
      888,
      '15x',
      6789,
      -5564,
      'obuolys',
      -51,
      55,
      0,
      33,
      789,
      6543,
      1,
      'trylika',
      444,
      321,
      654,
      -1,
      987,
      -333,
      -321,
      'end',
   ]
   if (goodArray.length !== mainArray.length) {
      return 'Not good'
   }
   for (let i = 0; i < goodArray.length; i++) {
      if (goodArray[i] !== mainArray[i]) {
         return 'Not good'
      }
   }
   return 'All good'
}

console.log(compareArray())

// 2 Task
console.log(mainArray)

// 2.1. Gauti pirmą masyvo narį.
let firstElement = mainArray.slice(0, 1)
console.log(firstElement)

// 2.2. Gauti paskutinį masyvo narį.
let lastElement = mainArray.slice(-1)
console.log(lastElement)

// 2.3. Gauti antrą masyvo narį.
let secondElement = mainArray.slice(1, 2)
console.log(secondElement)

// 2.4. Gauti priešpaskutinį masyvo narį.
let beforeLastElement = mainArray.slice(-2, -1)
console.log(beforeLastElement)

// 2.5. Gauti aštuntą masyvo narį.
let eightElement = mainArray.slice(7, 8)
console.log(eightElement)

// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
let ninthElementFromBack = mainArray.slice(-9, -8)
console.log(ninthElementFromBack)

// 2.7. Gauti vidurinį masyvo narį.
let middleElement = mainArray.slice(Math.floor(mainArray.length / 2), Math.floor(mainArray.length / 2) + 1)
console.log(middleElement)

// 2.8. Gauti pirmus tris masyvo narius.
let firstThreeElements = mainArray.slice(0, 3)
console.log(firstThreeElements)

// 2.9. Gauti paskutinius tris masyvo narius.
let lastThreeElements = mainArray.slice(-3)
console.log(lastThreeElements)

// 2.10. Gauti pirmus 10 masyvo narius.
let firstTenElements = mainArray.slice(0, 10)
console.log(firstTenElements)

// 2.11. Gauti paskutinius 10 masyvo narius.
let lastTenElements = mainArray.slice(-10)
console.log(lastTenElements)

// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
let from3to8 = mainArray.slice(2, 8)
console.log(from3to8)

// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
let from5to9FromBack = mainArray.slice(-9, -4)
console.log(from5to9FromBack)

// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
let from11to19 = mainArray.slice(10, 19)
console.log(from11to19)

// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
let from9to17FromBack = mainArray.slice(-17, -8)
console.log(from9to17FromBack)

// 2.16. Gauti visus masyvo narius išskyrus pirmą.
let allExceptFirst = mainArray.slice(1)
console.log(allExceptFirst)

// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
let allExceptLast = mainArray.slice(0, -1)
console.log(allExceptLast)

// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
let allExceptFirstFive = mainArray.slice(5)
console.log(allExceptFirstFive)

// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
let allExceptLastFive = mainArray.slice(0, -5)
console.log(allExceptLastFive)

// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
let allUntilMiddle = mainArray.slice(0, mainArray.length / 2)
console.log(allUntilMiddle)

// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
let allFromMiddle = mainArray.slice(mainArray.length / 2 + 1)
console.log(allFromMiddle)

// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
let allExceptFirstAndLast = mainArray.slice(1, -1)
console.log(allExceptFirstAndLast)

// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
let allExceptFirstFiveAndLastThree = mainArray.slice(5, -3)
console.log(allExceptFirstFiveAndLastThree)

// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
let allExceptFirstAndLastEight = mainArray.slice(1, -8)
console.log(allExceptFirstAndLastEight)

// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
let allExceptFirstSevenAndLast = mainArray.slice(7, -1)
console.log(allExceptFirstSevenAndLast)

// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
let allExceptFirstNineAndLastTwelve = mainArray.slice(9, -12)
console.log(allExceptFirstNineAndLastTwelve)

// 2.27. Gauti 9 narius skaičiuojant nuo 11.
let nineFromEleven = mainArray.slice(11, 20)
console.log(nineFromEleven)

// 2.28. Gauti 12 narių skaičiuojant nuo 8.
let twelveFromEight = mainArray.slice(8, 20)
console.log(twelveFromEight)

// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let firstFiveAndLastSix = mainArray.slice(0, 5).concat(mainArray.slice(-6))
console.log(firstFiveAndLastSix)

// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let from3to5And15to17 = mainArray.slice(2, 5).concat(mainArray.slice(14, 17))
console.log(from3to5And15to17)

// 3 Task
// 3.1. Gauti tik teigiamus skaičius.
let positiveNumbers = mainArray.filter((number) => number > 0)
console.log(positiveNumbers)

// 3.2. Gauti tik neigiamus skaičius.
let negativeNumbers = mainArray.filter((number) => number < 0)
console.log(negativeNumbers)

// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
let dividedByTwo = mainArray.filter((number) => number % 2 === 0)
console.log(dividedByTwo)

// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
let dividedByThree = mainArray.filter((number) => number % 3 === 0)
console.log(dividedByThree)

// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
let dividedByFive = mainArray.filter((number) => number % 5 === 0)
console.log(dividedByFive)

// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
let dividedByEleven = mainArray.filter((number) => number % 11 === 0)
console.log(dividedByEleven)

// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.
let dividedByThirtyOne = mainArray.filter((number) => number % 31 === 0)
console.log(dividedByThirtyOne)

// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
let dividedByTwoAndThree = mainArray.filter((number) => number % 2 === 0 && number % 3 === 0)
console.log(dividedByTwoAndThree)

// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
let dividedByThreeAndSeven = mainArray.filter((number) => number % 3 === 0 && number % 7 === 0)
console.log(dividedByThreeAndSeven)

// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
let dividedByFiveAndNine = mainArray.filter((number) => number % 5 === 0 && number % 9 === 0)
console.log(dividedByFiveAndNine)

// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
let dividedByFiveAndEleven = mainArray.filter((number) => number % 5 === 0 && number % 11 === 0)
console.log(dividedByFiveAndEleven)

// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
let dividedByTwoEightAndTwelve = mainArray.filter((number) => number % 2 === 0 && number % 8 === 0 && number % 12 === 0)
console.log(dividedByTwoEightAndTwelve)

// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
let dividedByTwoOrThree = mainArray.filter((number) => number % 2 === 0 || number % 3 === 0)
console.log(dividedByTwoOrThree)

// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
let dividedByThreeOrFive = mainArray.filter((number) => number % 3 === 0 || number % 5 === 0)
console.log(dividedByThreeOrFive)

// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
let dividedByFiveOrSix = mainArray.filter((number) => number % 5 === 0 || number % 6 === 0)
console.log(dividedByFiveOrSix)

// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
let dividedBySevenOrEight = mainArray.filter((number) => number % 7 === 0 || number % 8 === 0)
console.log(dividedBySevenOrEight)

// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
let dividedByNineOrThirteen = mainArray.filter((number) => number % 9 === 0 || number % 13 === 0)
console.log(dividedByNineOrThirteen)

// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
let dividedByTwoThreeOrFive = mainArray.filter((number) => number % 2 === 0 || number % 3 === 0 || number % 5 === 0)
console.log(dividedByTwoThreeOrFive)

// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
let dividedByFiveSevenOrNine = mainArray.filter((number) => number % 5 === 0 || number % 7 === 0 || number % 9 === 0)
console.log(dividedByFiveSevenOrNine)

// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
let dividedBySevenEightOrEleven = mainArray.filter((number) => number % 7 === 0 || number % 8 === 0 || number % 11 === 0)
console.log(dividedBySevenEightOrEleven)

// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
let dividedByNineTwelveOrThirteen = mainArray.filter((number) => number % 9 === 0 || number % 12 === 0 || number % 13 === 0)
console.log(dividedByNineTwelveOrThirteen)

// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
let greaterThan100 = mainArray.filter((number) => number > 100)
console.log(greaterThan100)

// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
let greaterThan555 = mainArray.filter((number) => number > 555)
console.log(greaterThan555)

// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
let greaterOrEqual888 = mainArray.filter((number) => number >= 888)

// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
let greaterOrEqual6789 = mainArray.filter((number) => number >= 6789)
console.log(greaterOrEqual6789)

// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
let lessThan50 = mainArray.filter((number) => number < 50)
console.log(lessThan50)

// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
let lessThan1000 = mainArray.filter((number) => number < 1000)
console.log(lessThan1000)

// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
let lessOrEqualMinusOne = mainArray.filter((number) => number <= -1)
console.log(lessOrEqualMinusOne)

// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
let lessOrEqualMinus5564 = mainArray.filter((number) => number <= -5564)
console.log(lessOrEqualMinus5564)

// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
let lessThan1000AndGreaterThan500 = mainArray.filter((number) => number < 1000 && number > 500)
console.log(lessThan1000AndGreaterThan500)

// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
let lessThan100AndGreaterThan0 = mainArray.filter((number) => number < 100 && number > 0)
console.log(lessThan100AndGreaterThan0)

// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
let lessThan0AndGreaterThanMinus50 = mainArray.filter((number) => number < 0 && number > -50)
console.log(lessThan0AndGreaterThanMinus50)

// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
let lessOrEqual0AndGreaterThanMinus100 = mainArray.filter((number) => number <= 0 && number > -100)
console.log(lessOrEqual0AndGreaterThanMinus100)

// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
let greaterOrEqual0AndLessThan55 = mainArray.filter((number) => number >= 0 && number < 55)
console.log(greaterOrEqual0AndLessThan55)

// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
let greaterOrEqual444AndLessOrEqual654 = mainArray.filter((number) => number >= 444 && number <= 654)
console.log(greaterOrEqual444AndLessOrEqual654)

// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
let positiveDividedByTwo = mainArray.filter((number) => number > 0 && number % 2 === 0)
console.log(positiveDividedByTwo)

// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
let positiveDividedByThree = mainArray.filter((number) => number > 0 && number % 3 === 0)
console.log(positiveDividedByThree)

// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
let negativeDividedByFour = mainArray.filter((number) => number < 0 && number % 4 === 0)
console.log(negativeDividedByFour)

// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
let negativeDividedBy111 = mainArray.filter((number) => number < 0 && number % 111 === 0)
console.log(negativeDividedBy111)

// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
let greaterThan500DividedByTwo = mainArray.filter((number) => number > 500 && number % 2 === 0)
console.log(greaterThan500DividedByTwo)

// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
let greaterThan1000DividedByThree = mainArray.filter((number) => number > 1000 && number % 3 === 0)
console.log(greaterThan1000DividedByThree)

// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
let lessThan1000DividedByNine = mainArray.filter((number) => number < 1000 && number % 9 === 0)
console.log(lessThan1000DividedByNine)

// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
let lessThan500DividedByTwo = mainArray.filter((number) => number < 500 && number % 2 === 0)
console.log(lessThan500DividedByTwo)

// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
let greaterOrEqual33DividedByThree = mainArray.filter((number) => number >= 33 && number % 3 === 0)
console.log(greaterOrEqual33DividedByThree)

// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
let greaterOrEqual444DividedByTwelve = mainArray.filter((number) => number >= 444 && number % 12 === 0)
console.log(greaterOrEqual444DividedByTwelve)

// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
let lessOrEqual155DividedByFive = mainArray.filter((number) => number <= 155 && number % 5 === 0)
console.log(lessOrEqual155DividedByFive)

// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
let lessOrEqualMinus333DividedByNine = mainArray.filter((number) => number <= -333 && number % 9 === 0)
console.log(lessOrEqualMinus333DividedByNine)

// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
let greaterThan100LessThan500DividedByFive = mainArray.filter((number) => number > 100 && number < 500 && number % 5 === 0)
console.log(greaterThan100LessThan500DividedByFive)

// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
let lessOrEqual888GreaterThanMinus333DividedByThree = mainArray.filter(
   (number) => number <= 888 && number >= -333 && number % 3 === 0 && number !== 0,
)
console.log(lessOrEqual888GreaterThanMinus333DividedByThree)

// 3.51. Gauti tik skaičius.
let onlyNumbers = mainArray.filter((number) => typeof number === 'number')
console.log(onlyNumbers)

// 3.52. Gauti tik tekstus (string).
let onlyStrings = mainArray.filter((string) => typeof string === 'string')
console.log(onlyStrings)

// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
let moreThan5Symbols = mainArray.filter((string) => typeof string === 'string' && string.length > 5)
console.log(moreThan5Symbols)

// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
let lessOrEqual5Symbols = mainArray.filter((string) => typeof string === 'string' && string.length <= 5)
console.log(lessOrEqual5Symbols)

// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.
let lessThan7Symbols = mainArray.filter((string) => typeof string === 'string' && string.length < 7)
console.log(lessThan7Symbols)

// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
let stringWithT = mainArray.filter((string) => typeof string === 'string' && string.includes('t'))
console.log(stringWithT)

// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
let stringWithY = mainArray.filter((string) => typeof string === 'string' && string.includes('y'))
console.log(stringWithY)

// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
let stringWithEorA = mainArray.filter((string) => typeof string === 'string' && (string.includes('e') || string.includes('a')))
console.log(stringWithEorA)

// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
let stringWithTandI = mainArray.filter((string) => typeof string === 'string' && string.includes('t') && string.includes('i'))
console.log(stringWithTandI)

// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
let stringWithTButNotK = mainArray.filter((string) => typeof string === 'string' && string.includes('t') && !string.includes('k'))
console.log(stringWithTButNotK)

// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
let stringWithAButNotS = mainArray.filter((string) => typeof string === 'string' && string.includes('a') && !string.includes('s'))
console.log(stringWithAButNotS)

// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
let stringWithMoreThanOneT = mainArray.filter((string) => typeof string === 'string' && (string.match(/t/g) || []).length > 1)
console.log(stringWithMoreThanOneT)

// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
let stringWithST = mainArray.filter((string) => typeof string === 'string' && string.includes('st'))
console.log(stringWithST)

// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
let stringWithND = mainArray.filter((string) => typeof string === 'string' && string.includes('nd'))
console.log(stringWithND)

// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
let stringWithoutS = mainArray.filter((string) => typeof string === 'string' && !string.includes('s'))
console.log(stringWithoutS)

// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
let stringWithoutT = mainArray.filter((string) => typeof string === 'string' && !string.includes('t'))
console.log(stringWithoutT)

// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
let stringWithoutRandL = mainArray.filter((string) => typeof string === 'string' && !string.includes('r') && !string.includes('l'))
console.log(stringWithoutRandL)

// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
let startsWithNumber = mainArray.filter((string) => typeof string === 'string' && !isNaN(string[0]))
console.log(startsWithNumber)

// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
let startsWithS = mainArray.filter((string) => typeof string === 'string' && string[0] === 's')
console.log(startsWithS)

// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
let startsWithO = mainArray.filter((string) => typeof string === 'string' && string[0] === 'o')
console.log(startsWithO)

// 3.70. Gauti tik tekstus (string), kurie baigiasi raide d.
let endsWithD = mainArray.filter((string) => typeof string === 'string' && string[string.length - 1] === 'd')
console.log(endsWithD)

// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
let endsWithS = mainArray.filter((string) => typeof string === 'string' && string[string.length - 1] === 's')
console.log(endsWithS)

// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
let moreThan4SymbolsWithO = mainArray.filter((string) => typeof string === 'string' && string.length > 4 && string.includes('o'))
console.log(moreThan4SymbolsWithO)

// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
let moreOrEqual5SymbolsWithA = mainArray.filter((string) => typeof string === 'string' && string.length >= 5 && string.includes('a'))
console.log(moreOrEqual5SymbolsWithA)

// 3.74. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
let evenNumberOfSymbols = mainArray.filter((string) => typeof string === 'string' && string.length % 2 === 0)
console.log(evenNumberOfSymbols)

// 3.75. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
let oddNumberOfSymbolsWithS = mainArray.filter((string) => typeof string === 'string' && string.length % 2 !== 0 && string.includes('s'))
console.log(oddNumberOfSymbolsWithS)

// 3.76. Gauti tik tekstus (string), kurių trečias simbolis yra a.
let thirdSymbolIsA = mainArray.filter((string) => typeof string === 'string' && string[2] === 'a')
console.log(thirdSymbolIsA)

// 3.77. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
let fourthSymbolIsL = mainArray.filter((string) => typeof string === 'string' && string[3] === 'l')
console.log(fourthSymbolIsL)

// 3.78. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
let fifthSymbolIsNotT = mainArray.filter((string) => typeof string === 'string' && string[4] !== 't' && string.length > 4)
console.log(fifthSymbolIsNotT)

// 3.79. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.
let firstSymbolIsNotE = mainArray.filter((string) => typeof string === 'string' && string[0] !== 'e' && string.length < 6 && isNaN(string[0]))
console.log(firstSymbolIsNotE)

// 4 Task
// 4.1. Tik skaičius (number tipo duomenis).
for (let i = 0; i < mainArray.length; i++) {
   if (typeof mainArray[i] === 'number') {
      console.log(mainArray[i])
   }
}

mainArray.forEach((element) => {
   if (typeof element === 'number') {
      console.log(`loged with forEach: ${element}`)
   }
})

mainArray.map((elm) => {
   if (typeof elm === 'number') {
      console.log(`loged with MAP: ${elm}`)
   }
})

// 4.2. Tik tekstą (string tipo duomenis).
for (let i = 0; i < mainArray.length; i++) {
   if (typeof mainArray[i] === 'string') {
      console.log(mainArray[i])
   }
}

mainArray.forEach((element) => {
   if (typeof element === 'string') {
      console.log(`loged with forEach: ${element}`)
   }
})

mainArray.map((elm) => {
   if (typeof elm === 'string') {
      console.log(`loged with MAP: ${elm}`)
   }
})

// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
for (let i = 0; i < mainArray.length; i++) {
   if (typeof mainArray[i] === 'number') {
      console.log(mainArray[i])
      console.log(Math.pow(mainArray[i], 4).toFixed(0))
   }
}

mainArray.forEach((element) => {
   if (typeof element === 'number') {
      console.log(`loged with forEach: ${element}`)
      console.log(Math.pow(element, 4).toFixed(0))
   }
})

mainArray.map((elm) => {
   if (typeof elm === 'number') {
      console.log(`loged with MAP: ${elm}`)
      console.log(Math.pow(elm, 4).toFixed(0))
   }
})

// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
for (let i = 0; i < mainArray.length; i++) {
   if (typeof mainArray[i] === 'number') {
      console.log(mainArray[i] + ` Original`)
      console.log(mainArray[i] + 55 + ` Added 55`)
   }
}

mainArray.forEach((element) => {
   if (typeof element === 'number') {
      console.log(`loged with forEach: ${element} Original`)
      console.log(element + 55 + ` Added 55`)
   }
})

mainArray.map((elm) => {
   if (typeof elm === 'number') {
      console.log(`loged with MAP: ${elm} Original`)
      console.log(elm + 55 + ` Added 55`)
   }
})

// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
for (let i = 0; i < mainArray.length; i++) {
   if (typeof mainArray[i] === 'number') {
      console.log(mainArray[i] + ` Original`)
      console.log(mainArray[i] / 2 + ` Divided by 2`)
   }
}

mainArray.forEach((element) => {
   if (typeof element === 'number') {
      console.log(`loged with forEach: ${element} Original`)
      console.log(element / 2 + ` Divided by 2`)
   }
})

mainArray.map((elm) => {
   if (typeof elm === 'number') {
      console.log(`loged with MAP: ${elm} Original`)
      console.log(elm / 2 + ` Divided by 2`)
   }
})

// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
for (let i = 0; i < mainArray.length; i++) {
   if (typeof mainArray[i] === 'number') {
      console.log(`Number: ${mainArray[i]}`)
   }
}

mainArray.forEach((element) => {
   if (typeof element === 'number') {
      console.log(`loged with forEach: Number: ${element}`)
   }
})

mainArray.map((elm) => {
   if (typeof elm === 'number') {
      console.log(`loged with MAP: Number: ${elm}`)
   }
})

// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"

for (let i = 0; i < mainArray.length; i++) {
   if (typeof mainArray[i] === 'number') {
      console.log(`Index: ${i}, Number: ${mainArray[i]}`)
   }
}

mainArray.forEach((element, index) => {
   if (typeof element === 'number') {
      console.log(`loged with forEach: Index: ${index}, Number: ${element}`)
   }
})

mainArray.map((elm, index) => {
   if (typeof elm === 'number') {
      console.log(`loged with MAP: Index: ${index}, Number: ${elm}`)
   }
})

// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
for (let i = 0; i < mainArray.length; i++) {
   if (typeof mainArray[i] === 'number') {
      console.log(`For loop - Original: ${mainArray[i]} at index ${i}`)
      console.log(`For loop - Multiplied by index: ${mainArray[i] * i}`)
   }
}

mainArray.forEach((element, index) => {
   if (typeof element === 'number') {
      console.log(`ForEach - Original: ${element} at index ${index}`)
      console.log(`ForEach - Multiplied by index: ${element * index}`)
   }
})

mainArray.map((element, index) => {
   if (typeof element === 'number') {
      console.log(`Map - Original: ${element} at index ${index}`)
      console.log(`Map - Multiplied by index: ${element * index}`)
   }
})

// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.

for (let i = 1; i < mainArray.length; i++) {
   if (typeof mainArray[i] === 'number') {
      console.log(`For loop - Original: ${mainArray[i]} at index ${i}`)
      console.log(`For loop - Multiplied by previous: ${mainArray[i] * mainArray[i - 1]}`)
   }
}

mainArray.forEach((element, index) => {
   if (typeof element === 'number' && index !== 0) {
      console.log(`ForEach - Original: ${element} at index ${index}`)
      console.log(`ForEach - Multiplied by previous: ${element * mainArray[index - 1]}`)
   }
})

mainArray.map((element, index) => {
   if (typeof element === 'number' && index !== 0) {
      console.log(`Map - Original: ${element} at index ${index}`)
      console.log(`Map - Multiplied by previous: ${element * mainArray[index - 1]}`)
   }
})

// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
for (let i = 0; i < mainArray.length; i++) {
   if (typeof mainArray[i] === 'number' && mainArray[i] * 5 > 350) {
      console.log(`For loop - Original: ${mainArray[i]} at index ${i}`)
      console.log(`For loop - Multiplied by 5: ${mainArray[i] * 5}`)
   }
}

mainArray.forEach((element, index) => {
   if (typeof element === 'number' && element * 5 > 350) {
      console.log(`ForEach - Original: ${element} at index ${index}`)
      console.log(`ForEach - Multiplied by 5: ${element * 5}`)
   }
})

mainArray.map((element, index) => {
   if (typeof element === 'number' && element * 5 > 350) {
      console.log(`Map - Original: ${element} at index ${index}`)
      console.log(`Map - Multiplied by 5: ${element * 5}`)
   }
})

// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
for (let i = 0; i < mainArray.length; i++) {
   if (typeof mainArray[i] === 'string') {
      console.log(`For loop - Original: ${mainArray[i]} at index ${i}`)
      console.log(`For loop - Length: ${mainArray[i].length}`)
   }
}

mainArray.forEach((element, index) => {
   if (typeof element === 'string') {
      console.log(`ForEach - Original: ${element} at index ${index}`)
      console.log(`ForEach - Length: ${element.length}`)
   }
})

mainArray.map((element, index) => {
   if (typeof element === 'string') {
      console.log(`Map - Original: ${element} at index ${index}`)
      console.log(`Map - Length: ${element.length}`)
   }
})

// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".
for (let i = 0; i < mainArray.length; i++) {
   if (typeof mainArray[i] === 'string') {
      console.log(`For loop - Original: ${mainArray[i]} at index ${i}`)
      console.log(`For loop - Split: ${mainArray[i].split('').join('-').toUpperCase()}`)
   }
}

mainArray.forEach((element, index) => {
   if (typeof element === 'string') {
      console.log(`ForEach - Original: ${element} at index ${index}`)
      console.log(`ForEach - Split: ${element.split('').join('-').toUpperCase()}`)
   }
})

mainArray.map((element, index) => {
   if (typeof element === 'string') {
      console.log(`Map - Original: ${element} at index ${index}`)
      console.log(`Map - Split: ${element.split('').join('-').toUpperCase()}`)
   }
})

// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
for (let i = 0; i < mainArray.length; i++) {
   if (typeof mainArray[i] === 'string') {
      console.log(`For loop - Original: ${mainArray[i]} at index ${i}`)
      console.log(
         `For loop - Split: ${mainArray[i]
            .split('')
            .map((letter, index) => (index === 0 || index === 2 ? '_' : letter))
            .join('')}`,
      )
   }
}

mainArray.forEach((element, index) => {
   if (typeof element === 'string') {
      console.log(`ForEach - Original: ${element} at index ${index}`)
      console.log(
         `ForEach - Split: ${element
            .split('')
            .map((letter, index) => (index === 0 || index === 2 ? '_' : letter))
            .join('')}`,
      )
   }
})

mainArray.map((element, index) => {
   if (typeof element === 'string') {
      console.log(`Map - Original: ${element} at index ${index}`)
      console.log(
         `Map - Split: ${element
            .split('')
            .map((letter, index) => (index === 0 || index === 2 ? '_' : letter))
            .join('')}`,
      )
   }
})

// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
for (let i = 0; i < mainArray.length; i++) {
   if (typeof mainArray[i] === 'string') {
      console.log(`For loop - Original: ${mainArray[i]} at index ${i}`)
      console.log(`For loop - Reverse: ${mainArray[i].split('').reverse().join('')}`)
   }
}

mainArray.forEach((element, index) => {
   if (typeof element === 'string') {
      console.log(`ForEach - Original: ${element} at index ${index}`)
      console.log(`ForEach - Reverse: ${element.split('').reverse().join('')}`)
   }
})

mainArray.map((element, index) => {
   if (typeof element === 'string') {
      console.log(`Map - Original: ${element} at index ${index}`)
      console.log(`Map - Reverse: ${element.split('').reverse().join('')}`)
   }
})

// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".
for (let i = 0; i < mainArray.length; i++) {
   if (typeof mainArray[i] === 'string') {
      console.log(`For loop - Original: ${mainArray[i]} at index ${i}`)
      console.log(`For loop - Between: ${mainArray[i]} is between ${mainArray[i - 1] || 'start'} and ${mainArray[i + 1] || 'end'} in the array`)
   }
}

mainArray.forEach((element, index) => {
   if (typeof element === 'string') {
      console.log(`ForEach - Original: ${element} at index ${index}`)
      console.log(`ForEach - Between: ${element} is between ${mainArray[index - 1] || 'start'} and ${mainArray[index + 1] || 'end'} in the array`)
   }
})

mainArray.map((element, index) => {
   if (typeof element === 'string') {
      console.log(`Map - Original: ${element} at index ${index}`)
      console.log(`Map - Between: ${element} is between ${mainArray[index - 1] || 'start'} and ${mainArray[index + 1] || 'end'} in the array`)
   }
})




// 7 Task
const posts = [
   {
     id: 1,
     title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
   },
   {
     id: 2,
     title: "qui est esse",
     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
   },
   {
     id: 3,
     title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
     body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
   },
   {
     id: 4,
     title: "eum et est occaecati",
     body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
   },
   {
     id: 5,
     title: "nesciunt quas odio",
     body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
   },
   {
     id: 6,
     title: "dolorem eum magni eos aperiam quia",
     body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
   },
   {
     id: 7,
     title: "magnam facilis autem",
     body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
   },
   {
     id: 8,
     title: "dolorem dolore est ipsam",
     body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
   },
   {
     id: 9,
     title: "nesciunt iure omnis dolorem tempora et accusantium",
     body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
   },
   {
     id: 10,
     title: "optio molestias id quia eum",
     body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
   },
   {
     id: 11,
     title: "et ea vero quia laudantium autem",
     body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
   },
   {
     id: 12,
     title: "in quibusdam tempore odit est dolorem",
     body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
   },
   {
     id: 13,
     title: "dolorum ut in voluptas mollitia et saepe quo animi",
     body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
   },
   {
     id: 14,
     title: "voluptatem eligendi optio",
     body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
   },
   {
     id: 15,
     title: "eveniet quod temporibus",
     body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
   },
   {
     id: 16,
     title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
     body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
   },
   {
     id: 17,
     title: "fugit voluptas sed molestias voluptatem provident",
     body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
   },
   {
     id: 18,
     title: "voluptate et itaque vero tempora molestiae",
     body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
   },
   {
     id: 19,
     title: "adipisci placeat illum aut reiciendis qui",
     body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
   },
   {
     id: 20,
     title: "doloribus ad provident suscipit at",
     body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
   },
   {
     id: 21,
     title: "asperiores ea ipsam voluptatibus modi minima quia sint",
     body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
   },
   {
     id: 22,
     title: "dolor sint quo a velit explicabo quia nam",
     body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
   },
   {
     id: 23,
     title: "maxime id vitae nihil numquam",
     body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
   },
   {
     id: 24,
     title: "autem hic labore sunt dolores incidunt",
     body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
   },
   {
     id: 25,
     title: "rem alias distinctio quo quis",
     body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
   }
 ]

 //  7. Naudojant posts masyvą, atlikti žemiau nurodytas užduotis ir atsakymus išvesti į konsolę. Visoms užduotis kurti funkciją ir jai, kaip parametrą, paduoti nurodytą masyvą.
// 7.1. Gauti pirmo masyvo nario reikšmę.
function getFirstElement(array) {
   return array[0]
}
console.log(getFirstElement(posts))

// 7.2. Gauti paskutinio masyvo nario reikšmę.
function getLastElement(array) {
   return array[array.length - 1]
}
console.log(getLastElement(posts))

// 7.3. Gauti 15 masyvo nario reikšmę.
function get15thElement(array) {
   return array[14]
}
console.log(get15thElement(posts))

// 7.4. Gauti 13 masyvo nario reikšmę skaičiuojant nuo galo.
function get13thElementFromEnd(array) {
   return array[array.length - 13]
}
console.log(get13thElementFromEnd(posts))

// 7.5. Gauti vidurinio masyvo nario reikšmę.
function getMiddleElement(array) {
   return array[Math.floor(array.length / 2)]
}
console.log(getMiddleElement(posts))

// 7.6. Gauti pirmų keturių masyvo narių reikšmes.
function getFirstFourElements(array) {
   return array.slice(0, 4)
}
console.log(getFirstFourElements(posts))

// 7.7. Gauti paskutinių penkių masyvo narių reikšmes.
function getLastFiveElements(array) {
   return array.slice(-5)
}
console.log(getLastFiveElements(posts))

// 7.8. Gauti nuo penkto iki penkiolikto masyvo narių reikšmes.
function getFrom5to15Elements(array) {
   return array.slice(4, 15)
}
console.log(getFrom5to15Elements(posts))

// 7.9. Gauti kas antro masyvo nario reikšmes.
function getEverySecondElement(array) {
   return array.filter((element, index) => index % 2 !== 0)
}
console.log(getEverySecondElement(posts))

// 7.10. Gauti pirmo ir paskutinio masyvo narių reikšmes.
function getFirstAndLastElement(array) {
   return [array[0], array[array.length - 1]]
}
console.log(getFirstAndLastElement(posts))

// 7.11. Gauti pirmą masyvo narį ir į konsolę išvesti jo property "title" reikšmę.
function getFirstElementTitle(array) {
   return array[0].title
}
console.log(getFirstElementTitle(posts))  

// 7.12. Gauti antrą masyvo narį ir į konsolę išvesti jo property "body" reikšmę.
function getSecondElementBody(array) {
   return array[1].body
}
console.log(getSecondElementBody(posts))

// 7.13. Gauti trečią masyvo narį ir į konsolę išvesti jo property "title" ir "body" reikšmes tokiu formatu: Post title is: 'post title' and the content is: 'post content'.
function getThirdElementTitleAndBody(array) {
   return `Post title is: '${array[2].title}' and the content is: '${array[2].body}'`
}
console.log(getThirdElementTitleAndBody(posts))

// 7.14. Išvesti visus masyvo narius į konsolę.
function getAllElements(array) {
   array.forEach((element) => console.log(element))
}
getAllElements(posts)

// 7.15. Išvesti visų masyvo narių property "title" į konsolę.
function getAllElementsTitle(array) {
   array.forEach((element) => console.log(element.title))
}
getAllElementsTitle(posts)

// 7.16. Išvesti visų masyvo narių property "body" į konsolę.
function getAllElementsBody(array) {
   array.forEach((element) => console.log(element.body))
}
getAllElementsBody(posts)

// 7.17. Išvesti visų masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
function getAllElementsTitleAndBody(array) {
   array.forEach((element) => console.log(`Title: "${element.title}". Content: "${element.body}"`))
}
getAllElementsTitleAndBody(posts)

// 7.18. Išvesti pirmų keturių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
function getFirstFourElementsTitleAndBody(array) {
   array.slice(0, 4).forEach((element) => console.log(`Title: "${element.title}". Content: "${element.body}"`))
}
getFirstFourElementsTitleAndBody(posts)

// 7.19. Išvesti paskutinių septynių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
function getLastSevenElementsTitleAndBody(array) {
   array.slice(-7).forEach((element) => console.log(`Title: "${element.title}". Content: "${element.body}"`))
}
getLastSevenElementsTitleAndBody(posts)

// 7.20. Sukurti naują masyvą, kurio nariai bus posts masyvo narių property "title" reikšmė, pvz.: ['Pirmo posts masyvo nario title', 'Antro posts masyvo nario title', 'Trečio posts masyvo nario title'...]
function createTitlesArray(arr) {
   const titles = arr.map(post => post.title);
   console.log(titles);
}
createTitlesArray(posts);

// 7.21. Sukurti naują masyvą, kurio nariai bus posts masyvo narių property "title" ir "body" tokiu formatu: Title: "post title". Content: "post content".
function createTitleAndBodyArray(arr) {
   const titlesAndBodies = arr.map(post => `Title: "${post.title}". Content: "${post.body}"`);
   console.log(titlesAndBodies);
}
createTitleAndBodyArray(posts);

// 7.22. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas prasideda raide "s".
function createTitleAndBodyArrayStartingWithS(arr) {
   const titlesAndBodies = arr.filter(post => post.title[0].toLowerCase() === 's').map(post => `Title: "${post.title}". Content: "${post.body}"`);
   console.log(titlesAndBodies);
}
createTitleAndBodyArrayStartingWithS(posts);

// 7.23. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas baigiasi "t" arba "m".
function createTitleAndBodyArrayEndingWithTOrM(arr) {
   const titlesAndBodies = arr.filter(post => post.title.slice(-1).toLowerCase() === 't' || post.title.slice(-1).toLowerCase() === 'm').map(post => `Title: "${post.title}". Content: "${post.body}"`);
   console.log(titlesAndBodies);
}
createTitleAndBodyArrayEndingWithTOrM(posts);

// 7.24. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas turi daugiau simbolių nei 15.
function createTitleAndBodyArrayWithMoreThan15Characters(arr) {
   const titlesAndBodies = arr.filter(post => post.title.length > 15).map(post => `Title: "${post.title}". Content: "${post.body}"`);  
   console.log(titlesAndBodies);
}
createTitleAndBodyArrayWithMoreThan15Characters(posts);

// 7.25. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas turi mažiau simbolių nei 20 ir kurių "body" turi daugiau simbolių nei 50.
function createTitleAndBodyArrayWithLessThan20CharactersAndMoreThan50BodyCharacters(arr) {
   const titlesAndBodies = arr.filter(post => post.title.length < 20 && post.body.length > 50).map(post => `Title: "${post.title}". Content: "${post.body}"`);
   console.log(titlesAndBodies);
}
createTitleAndBodyArrayWithLessThan20CharactersAndMoreThan50BodyCharacters(posts);

// 7.26. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas turi tarp 20 ir 30 simbolių ir kurių "body" turi tarp 70 ir 130 simbolių.
function createTitleAndBodyArrayWithBetween20And30CharactersAndBetween70And130BodyCharacters(arr) {
   const titlesAndBodies = arr.filter(post => post.title.length > 20 && post.title.length < 30 && post.body.length > 70 && post.body.length < 130).map(post => `Title: "${post.title}". Content: "${post.body}"`);
   console.log(titlesAndBodies);
}
createTitleAndBodyArrayWithBetween20And30CharactersAndBetween70And130BodyCharacters(posts);

// 7.27. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas turi simbolių junginį "it", o "body" turi simbolių junginį "quo".
function createTitleAndBodyArrayWithItInTitleAndQuoInBody(arr) {
   const titlesAndBodies = arr.filter(post => post.title.toLowerCase().includes('it') && post.body.toLowerCase().includes('quo')).map(post => `Title: "${post.title}". Content: "${post.body}"`);
   console.log(titlesAndBodies);
}
createTitleAndBodyArrayWithItInTitleAndQuoInBody(posts);

// 7.28. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių "body" turi žodį "sit". Jeigu žodis turi šį simbolių junginį, tačiau tai nėra pilna jo reikšmė (pvz. žodžiai "sitto" ar "quasit"), jie neturėtų būti atvaizduojami.
function createTitleAndBodyArrayWithSitInBody(arr) {
   const titlesAndBodies = arr.filter(post => post.body.toLowerCase().includes('sit') && !post.body.toLowerCase().includes('sitto') && !post.body.toLowerCase().includes('quasit')).map(post => `Title: "${post.title}". Content: "${post.body}"`);
   console.log(titlesAndBodies);
}
createTitleAndBodyArrayWithSitInBody(posts);

// 7.29. Tokiu pačiu formatu, kaip ankstesnėje užduotyje, sukurti naują masyvą tik iš tų posts masyvo narių kurių pavadinimas turi daugiau nei 3 "a" raides, o "body" turi mažiau nei 7 "o" raides.
function createTitleAndBodyArrayWithMoreThan3AInTitleAndLessThan7OInBody(arr) {
   const titlesAndBodies = arr.filter(post => post.title.toLowerCase().split('a').length - 1 > 3 && post.body.toLowerCase().split('o').length - 1 < 7).map(post => `Title: "${post.title}". Content: "${post.body}"`);  
   console.log(titlesAndBodies);
}
createTitleAndBodyArrayWithMoreThan3AInTitleAndLessThan7OInBody(posts);

// 7.30. Sukurti naują masyvą, kurio nariai bus posts masyvo narių property "title" reikšmė, tačiau surūšiuoti nuo mažiausiai iki daugiausiai raidžių "body" property turinčių narių. Papildomai, prie išvesto teksto pridėti ir "body" raidžių skaičių.
function createTitlesArraySortedByBodyLength(arr) {
   const titles = arr.map(post => ({ title: post.title, bodyLength: post.body.length })).sort((a, b) => a.bodyLength - b.bodyLength).map(post => `${post.title}. Body length: ${post.bodyLength}`);
   console.log(titles);
}
createTitlesArraySortedByBodyLength(posts);

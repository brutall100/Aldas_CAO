// class Company {
//     constructor(title, ceo, opened) {
//         this.title = title
//         this.ceo = ceo
//         this.opened = opened
//     }

//     getInfo() {
//         let { title, ceo, opened } = this
//         return `${title} - ${ceo} (${opened}).`
//     }
// }

// let company1 = new Company('Company ABC', 'John Doe', 2020)
// let company2 = new Company('Company XYZ', 'Doe John', 2021)
// let company3 = new Company('Company TTT', 'Doe John', 2024)

// console.log(company1.getInfo())
// console.log(company2.getInfo())
// console.log(company3.getInfo())


class Carr {
   constructor(brand, model, engine, price) {
      this.brand = brand
      this.model = model
      this.engine = engine
      this.basePrice = price
   }

   tornOn() {
      return `${this.brand} ${this.model} is vrooom`
   }

   fast() {
      return `${this.brand} ${this.model} is fast`
   }

   getPrice() {
      let aditionalprice = 0
      switch (this.model) {
         case 'A4':
            aditionalprice += 1000
            break
         case 'M3':
            aditionalprice += 2000
            break
         case 'C63':
            aditionalprice += 3000
            break
      }
      return this.basePrice + aditionalprice
   }
}

let CarrAudi = new Carr('Audi', 'A4', 2.5, 100)
let CarrBmw = new Carr('BMW', 'M3', '1.8D', 200)
let CarrMercedes = new Carr('Mercedes', 'C63', 'AMG', 300)

console.log(CarrAudi.tornOn())
console.log(CarrBmw.fast())
console.log(CarrAudi.engine)
console.log(CarrMercedes.getPrice())
console.log(CarrBmw.getPrice())



class BankAccount {
   constructor(ownerName, balance = 0) {
      this.ownerName = ownerName
      this.balance = balance
   }

   deposit(amount) {
      this.balance += amount
      return this.balance
   }

   withdraw(amount) {
      this.balance -= amount
      return this.balance
   }

   yourBalance() {
      return `Your balance is ${this.balance}`
   }
}

const account = new BankAccount('Aldas')

account.deposit(100)
account.withdraw(70)

console.log(account.ownerName)
console.log(account.balance)
console.log(account.yourBalance())



class Vechile {
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }
    
    getInfo() {
        return `${this.brand} ${this.model} ${this.year}`
    }
}

class Car extends Vechile {
    constructor(brand, model, year, engineType) {
        super(brand, model, year)
        this.engineType = engineType
    }

    getInfo() {
        return `${super.getInfo()} Engine Type: ${this.engineType}`
    }
}

class Bicycle extends Vechile {
    constructor(brand, model, year, hasEngine = false) {
        super(brand, model, year)
        this.hasEngine = hasEngine
    }

    getInfo() {
        return `${super.getInfo()} Has Engine: ${this.hasEngine}`
    }
}

const car = new Car("Toyota", "Corolla", 2005, "Petrol");
console.log(car.getInfo()); // "Brand: Toyota, Model: Corolla, Engine Type: Petrol"

const bicycle = new Bicycle("Trek", "Marlin", 2020, true);
console.log(bicycle.getInfo()); // "Brand: Trek, Model: Marlin, Has Engine: true"
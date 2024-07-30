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


console.group('Books library')
class Book {
    constructor(tittle, author, year) {
        this.tittle = tittle
        this.author = author
        this.year = year
    }

    getSummary() {
        return `${this.tittle} was written by ${this.author} in ${this.year}`
    }
}

const bookA = new Book('Book A', 'Author A', 2020)
const bookB = new Book('Book B', 'Author B', 2021)

console.log(bookA.getSummary())
console.log(bookB.getSummary())


class Library {
    constructor() {
        this.books = [];
        this.lentBooks = new Map();
    }

    addBook(book) {
        this.books.push(book);
    }

    lendBook(bookTitle, userName) {
        const book = this.books.find(book => book.title === bookTitle);
        if (book) {
            this.books = this.books.filter(b => b !== book);
            this.lentBooks.set(book, userName);
        } else {
            console.log("Book not available");
        }
    }

    returnBook(bookTitle) {
        const book = [...this.lentBooks.keys()].find(book => book.title === bookTitle);
        if (book) {
            this.books.push(book);
            this.lentBooks.delete(book);
        }
    }

    listAvailableBooks() {
        console.log("Available Books:");
        this.books.forEach(book => console.log(book.getSummary()));
    }
}

const library = new Library();
library.addBook(new Book("Book1", "Author1", "2050"));
library.addBook(new Book("Book2", "Author2", "2060"));
library.lendBook("Book1", "User1");
library.listAvailableBooks(); // "Book2 by Author2 published in 2021"
library.returnBook("Book1");
library.listAvailableBooks(); // "Book2 by Author2 published in 2021", "Book1 by Author1 published in 2020"
// ! nelabai supratau, nes nesuprantu kaip veikia, bet veikia

console.groupEnd()


class MusicStudent {
   constructor(name, instrument, level = 'beginner') {
      this.name = name;
      this.instrument = instrument;
      this.levelMapping = ['beginner', 'Intermediate', 'Advanced', 'Master'];
      this.level = this.levelMapping.indexOf(level);
   }

   practice() {
      if (this.level < this.levelMapping.length - 1) {
        this.level++;
      }
   }

   getLevel() {
     return this.levelMapping[this.level];
   }
}

const studentA = new MusicStudent('John', 'Guitar', 'Intermediate');
studentA.practice();

const studentB = new MusicStudent('Anna', 'piano');
studentB.practice();

console.log(studentA.getLevel()); // Outputs: "Advanced"
console.log(studentB.getLevel()); // Outputs: "Intermediate"




class ShoppingCart {
    constructor() {
        this.items = []
    }

    addItem(item) {
        this.items.push(item)
    }

    removeItem(item) {
        this.items = this.items.filter(i => i.name !== item)
    }

    calculateTotal() {
        return this.items.reduce((acc, item) => acc + item.price, 0)
    }

}

const cart = new ShoppingCart();
cart.addItem({ name: "Apple", price: 0.99 });
cart.addItem({ name: "Bread", price: 1.29 });
console.log(cart.calculateTotal().toFixed(2)); // 2.28
cart.removeItem("Apple");
console.log(cart.calculateTotal().toFixed(2)); // 1.29



class MovieTheater {
    constructor(rows, seatsPerRow){
        this.rows = rows;
        this.seatsPerRow = seatsPerRow;
        this.bookedSeats = {};
    }

    bookSeat(row, seat) {
        if (!this.bookedSeats[row]) {
            this.bookedSeats[row] = {};
        }
        this.bookedSeats[row][seat] = true;
    }

    cancelBooking(row, seat) {
        if (this.bookedSeats[row]) {
            delete this.bookedSeats[row][seat];
        }
    }

    checkAvailability(row, seat) {
        return !(this.bookedSeats[row] && this.bookedSeats[row][seat]);
    }
}

const theater = new MovieTheater(5, 5);
theater.bookSeat(2, 3);
console.log(theater.checkAvailability(2, 3)); // Outputs: false
theater.cancelBooking(2, 3);
console.log(theater.checkAvailability(2, 3)); // Outputs: true
// ! nelabai supratau, nes nesuprantu kaip veikia, bet veikia




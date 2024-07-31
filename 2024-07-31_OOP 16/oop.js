class Book {
   constructor({ title, author = 'Autorius nenurodytas', year = 'Metai nenurodyti' }) {
      this.title = title
      this.author = author
      this.year = year
   }

   getSummary() {
      return `${this.title} was written by ${this.author} in ${this.year}`
   }
}

let bookParams = {
    author: 'Aldas Jonis',
    year: 2021,
    title: 'TAMSOS ŠIRDIS'
}

let bookA = new Book(bookParams)

console.log(bookA.getSummary()) 



class MusicStudent {
    constructor(name, instrument, level = 'beginner') {
        this.name = name
        this.instrument = instrument
        this.level = level 
    }

    practice() {
        if(this.level === 'beginner'){
            this.level = 'intermediate'
        } else if(this.level === 'intermediate'){
            this.level = 'advanced'
        } else {
            this.level = 'master' 
    }
}}

const student = new MusicStudent("Anna", "piano", 'intermediate');
student.practice();
console.log(`${student.name}, ${student.instrument}, ${student.level}`);


class ShoppingCart{
    constructor(){
        this.cart = []
    }

    addItem(item){
        this.cart.push(item)
    }

    removeItem(itemName){
        this.cart = this.cart.filter(cartItem => cartItem.name !== itemName)
    }

    calculateTotal(){
        return this.cart.reduce((total, item) => total + item.price, 0)
    }
}

const cart = new ShoppingCart();
cart.addItem({ name: "Apple", price: 0.99 });
cart.addItem({ name: "Bread", price: 1.29 });
console.log(cart.calculateTotal()); // 2.28
cart.removeItem("Apple");
console.log(cart.calculateTotal()); // 1.29



class MovieTheater{
    constructor(rows, seatsPerRow){
        this.rows = rows
        this.seatsPerRow = seatsPerRow
        this.seats = this.generateSeats()
    }

    generateSeats(){
        const seats = []
        for(let i = 0; i < this.rows; i++){
            const row = []
            for(let j = 0; j < this.seatsPerRow; j++){
                row.push({
                    booked: false
                })
            }
            seats.push(row)
        }
        return seats
    }

    bookSeat(row, seat){
        if(this.seats[row][seat].booked){
            return 'Seat already booked'
        }
        this.seats[row][seat].booked = true
    }

    cancelBooking(row, seat){
        this.seats[row][seat].booked = false
    }

    checkAvailability(row, seat){
        return !this.seats[row][seat].booked
    }
}

const theater = new MovieTheater(5, 5);
theater.bookSeat(2, 3);
console.log(theater.checkAvailability(2, 3)); // false
theater.cancelBooking(2, 3);
console.log(theater.checkAvailability(2, 3)); // true




class Library {
    constructor(){
        this.books = []
        this.index = {}
    }

    addBook(book){
        this.books.push(book)
        // Update the index every time a book is added
        this.index[book.title] = book;
    }

    lendBook(title, user){
        const book = this.index[title];
        if (book) {
            book.lentTo = user
        }
    }

    returnBook(title){
        const book = this.index[title];
        if (book) {
            book.lentTo = null
        }
    }

    listAvailableBooks(){
        this.books.forEach(book => {
            if(!book.lentTo){
                console.log(`${book.title} by ${book.author} published in ${book.year}`)
            }
        })
    }
}

// Book class needs to be defined for the Library class to work
class BBook {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.lentTo = null;
    }
}

const library = new Library();
library.addBook(new BBook("Book1", "Author1", "2020"));
library.addBook(new BBook("Book2", "Author2", "2021"));
library.lendBook("Book1", "User1");
library.listAvailableBooks(); // "Book2 by Author2 published in 2021"
library.returnBook("Book1");
library.listAvailableBooks(); // "Book2 by Author2 published in 2021", "Book1 by Author1 published in 2020"
// ! Paskutiniai  2 su genie Padaryti
import { BookDAO } from './BookDAO';
import { BorrowRecordDAO } from './BorrowRecordDAO';


const bookDAO = new BookDAO();
const borrowDAO = new BorrowRecordDAO();

console.log("--- Initializing Library System ---");


bookDAO.addBook("ISBN-101", "Clean Code", "Robert C. Martin");
bookDAO.addBook("ISBN-102", "Design Patterns", "Erich Gamma");


console.log("\n[All Books in Database]");
const allBooks = bookDAO.findAll();
allBooks.forEach(book => console.log(book.getInfo()));


const targetIsbn = "ISBN-101";
const bookToBorrow = bookDAO.findBookByIsbn(targetIsbn);

if (bookToBorrow && bookToBorrow.getIsAvailable()) {
    console.log(`\n>>> Sorawit is borrowing: ${bookToBorrow.getTitle()}...`);
    
  
    borrowDAO.borrowBook("Sorawit", targetIsbn);

    bookDAO.updateAvailability(targetIsbn, false);
    
    console.log(">>> Borrow successful!");
} else {
    console.log(`\n>>> Book with ISBN ${targetIsbn} is not available.`);
}


console.log("\n[Books After Borrowing]");
const booksAfter = bookDAO.findAll();
booksAfter.forEach(b => console.log(b.getInfo()));
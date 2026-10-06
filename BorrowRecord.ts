export class BorrowRecord {
    private id: number;
    private borrowerName: string;
    private bookIsbn: string;
    private borrowDate: string;

    constructor(id: number, borrowerName: string, bookIsbn: string, borrowDate: string) {
        this.id = id;
        this.borrowerName = borrowerName;
        this.bookIsbn = bookIsbn;
        this.borrowDate = borrowDate;
    }

    public getId(): number { return this.id; }
    public setId(id: number): void { this.id = id; }

    public getBorrowerName(): string { return this.borrowerName; }
    public setBorrowerName(borrowerName: string): void { this.borrowerName = borrowerName; }

    public getBookIsbn(): string { return this.bookIsbn; }
    public setBookIsbn(bookIsbn: string): void { this.bookIsbn = bookIsbn; }

    public getBorrowDate(): string { return this.borrowDate; }
    public setBorrowDate(borrowDate: string): void { this.borrowDate = borrowDate; }
}
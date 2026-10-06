export class Book {
    private id: number;
    private isbn: string;
    private title: string;
    private author: string;
    private isAvailable: boolean;

    constructor(id: number, isbn: string, title: string, author: string, isAvailable: boolean = true) {
        this.id = id;
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }

    public getId(): number { return this.id; }
    public setId(id: number): void { this.id = id; }

    public getIsbn(): string { return this.isbn; }
    public setIsbn(isbn: string): void { this.isbn = isbn; }

    public getTitle(): string { return this.title; }
    public setTitle(title: string): void { this.title = title; }

    public getAuthor(): string { return this.author; }
    public setAuthor(author: string): void { this.author = author; }

    public getIsAvailable(): boolean { return this.isAvailable; }
    public setIsAvailable(isAvailable: boolean): void { this.isAvailable = isAvailable; }

    public getInfo(): string {
        const status = this.isAvailable ? "Available" : "Borrowed";
        return `[${this.isbn}] ${this.title} by ${this.author} - Status: ${status}`;
    }
}
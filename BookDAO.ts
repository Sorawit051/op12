import { BaseDAO } from './BaseDAO';
import { Book } from './Book';

export class BookDAO extends BaseDAO {
    constructor() {
        super();
        this.initTable();
    }

    initTable(): void {
        const sql = `
            CREATE TABLE IF NOT EXISTS books (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                isbn TEXT NOT NULL UNIQUE,
                title TEXT NOT NULL,
                author TEXT NOT NULL,
                isAvailable INTEGER DEFAULT 1
            )
        `;
        this.db.exec(sql);
    }

    public addBook(isbn: string, title: string, author: string): boolean {
        try {
            const stmt = this.db.prepare('INSERT INTO books (isbn, title, author, isAvailable) VALUES (?, ?, ?, 1)');
            const info = stmt.run(isbn, title, author);
            return info.changes > 0;
        } catch (error) {
            return false; // กรณี ISBN ซ้ำ หรือเกิดข้อผิดพลาด
        }
    }

    public findBookByIsbn(isbn: string): Book | null {
        const stmt = this.db.prepare('SELECT * FROM books WHERE isbn = ?');
        const row = stmt.get(isbn) as any;
        
        if (row) {
            const isAvailable = row.isAvailable === 1;
            return new Book(row.id, row.isbn, row.title, row.author, isAvailable);
        }
        return null;
    }

    public updateAvailability(isbn: string, isAvailable: boolean): boolean {
        const stmt = this.db.prepare('UPDATE books SET isAvailable = ? WHERE isbn = ?');
        const isAvailInt = isAvailable ? 1 : 0;
        const info = stmt.run(isAvailInt, isbn);
        return info.changes > 0;
    }

    public findAll(): Book[] {
        const stmt = this.db.prepare('SELECT * FROM books');
        const rows = stmt.all() as any[];
        
        return rows.map(row => {
            const isAvailable = row.isAvailable === 1;
            return new Book(row.id, row.isbn, row.title, row.author, isAvailable);
        });
    }
}
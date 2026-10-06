import { BaseDAO } from './BaseDAO';

export class BorrowRecordDAO extends BaseDAO {
    constructor() {
        super();
        this.initTable();
    }

    initTable(): void {
        const sql = `
            CREATE TABLE IF NOT EXISTS borrow_records (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                borrowerName TEXT NOT NULL,
                bookIsbn TEXT NOT NULL,
                borrowDate TEXT NOT NULL
            )
        `;
        this.db.exec(sql);
    }

    public borrowBook(borrowerName: string, isbn: string): boolean {
        try {
            const borrowDate = new Date().toISOString().split('T')[0];
            const stmt = this.db.prepare('INSERT INTO borrow_records (borrowerName, bookIsbn, borrowDate) VALUES (?, ?, ?)');
            const info = stmt.run(borrowerName, isbn, borrowDate);
            return info.changes > 0;
        } catch (error) {
            return false;
        }
    }
}
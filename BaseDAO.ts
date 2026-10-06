import Database from 'better-sqlite3';

export abstract class BaseDAO {
    protected db: Database.Database;

    constructor() {
        this.db = new Database('library.db');
    }

    abstract initTable(): void;
}
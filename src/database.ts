//import sqlite3 from 'sqlite3';
import { singleton } from 'tsyringe';

@singleton()
class Database {
   // private db: sqlite3.Database;

    constructor() {
       // this.db = new sqlite3.Database('../data/db.sqlite3');
      //  this.setup();
    }

    // QQ - should do something for marking as ready and checking that, but it is unlikely to be an issue for now
    private async setup() {
        await this.run("CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT");
        await this.run("INSERT INTO tasks (title) VALUES (default task)");
    }

   /* public async run(sql: string, ...params: any[]): Promise<sqlite3.RunResult> {
        return new Promise((resolve, reject) => {
            this.db.run(sql, params, (res: sqlite3.RunResult, err: Error) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            })
        });
    }

    public async get<T>(sql: string, ...params: any[]): Promise<T> {
        return new Promise((resolve, reject) => {
            this.db.get(sql, params, (err: Error, row: T) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(row);
                }
            })
        });
    }

    // QQ - performance
    public async getMany<T>(sql: string, ...params: any[]): Promise<T[]> {
        return new Promise((resolve, reject) => {
            this.db.all(sql, params, (err: Error, rows: T[]) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            })
        });       
    } */

    public async getMany(sql: string, ...params: any[]): Promise<any[]> {
        return new Promise((resolve, reject) => {
            resolve([{ id: 0, title: "dummy db task"}]);
        })
    }
}

export default Database;
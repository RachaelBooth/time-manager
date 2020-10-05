import lowdb from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import { nanoid } from 'nanoid/async';
import { singleton } from 'tsyringe';

@singleton()
class Database {
    // QQ types
    private db: lowdb.LowdbAsync<any>;

    constructor() {
        const adapter = new FileAsync('db.json');
        this.setup(adapter);
    }

    // QQ - should do something for marking as ready and checking that, but it is unlikely to be an issue for now
    private async setup(adapter: lowdb.AdapterAsync): Promise<void> {
        this.db = await lowdb(adapter);
        await this.db.defaults({ tasks: [] }).write();
    }

    public async insertTask(title: string): Promise<string> {
        const id = await nanoid();
        // qq - types
        await (this.db.get('tasks') as any).push({ id, title }).write();
        return id;
    }

    public async getTasks() {
        return await this.db.get('tasks').value();
    }
}

export default Database;
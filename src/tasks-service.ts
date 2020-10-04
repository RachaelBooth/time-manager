import { autoInjectable } from 'tsyringe';
import Database from './database';
import { Task } from './task';

@autoInjectable()
class TasksService {
    constructor(private db?: Database) {}

    public async getTasks(): Promise<Task[]> {
        return await this.db.getMany("SELECT * FROM tasks");
    }
}

export default TasksService;
import { autoInjectable } from 'tsyringe';
import Database from './database';
import { Task } from './task';

// qq - reconsider if this service will be necessary
@autoInjectable()
class TasksService {
    constructor(private db?: Database) {}

    public async getTasks(): Promise<Task[]> {
        return await this.db.getTasks();
    }

    public async createTask(title: string): Promise<string> {
        return await this.db.insertTask(title);
    }
}

export default TasksService;
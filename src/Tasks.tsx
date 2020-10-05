import { Box, Button, List, ListItem, ListItemText, TextField } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { Task } from './task';

// QQ types
class Tasks extends React.Component<any, { new: string, tasks: Task[], ready: boolean }> {
    private api: any; // qq type
    
    constructor(props: any) {
        super(props)
        // qq types
        console.log(window);
        this.api = (window as any).api;
        this.state = {
            new: "",
            tasks: [],
            ready: false
        };
        this.fetchTasks();
    }

    // QQ handle errors
    private async fetchTasks(): Promise<void> {
        let tasks = await this.api.invoke('get-tasks');
        this.setState({
            new: "",
            tasks: tasks,
            ready: true
        });
    }

    // qq
    handleChange(event: any) {
        this.setState({
            new: event.target.value,
            tasks: this.state.tasks
        });
    }

    async saveNewTask() {
        // qq appropriate display while waiting
        let title = this.state.new;
        let id = await this.api.invoke('create-task', title);
        let newTask = { id: id, title: title };
        this.setState({
            new: "",
            tasks: [...this.state.tasks, newTask]
        });
    }

    // QQ Fetch tasks

    // QQ separate task element
    // QQ separate new task element - just want to handle saving to a db first
    render(): ReactElement {
        return (
            <Box>
            <List>
                {this.state.tasks.map((task => {
                    return (
                        <ListItem key={task.id}>
                            <ListItemText primary={task.title}></ListItemText>
                        </ListItem>
                    )
                }))}
            </List>
            <TextField id="new-task" label="Add Task" value={this.state.new} onChange={(event) => this.handleChange(event)} />
            <Button variant="contained" color="primary" onClick={async () => this.saveNewTask()}>Save</Button>
            </Box>
        )
    }
}

export default Tasks;
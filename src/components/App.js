import React from "react";
import logo from '../logo.svg';
import './App.css';
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends React.Component {
    state = {
        tasks: [
            {
                id: 0,
                text: 'zagrać w wiedźmina',
                date: '2021-10-15',
                important: true,
                active: true,
                finishDate: null,
            },
            {
                id: 1,
                text: 'zrobić dobry uczynek',
                date: '2021-10-21',
                important: false,
                active: true,
                finishDate: null,
            },
            {
                id: 2,
                text: 'pomalować dom',
                date: '2021-10-23',
                important: false,
                active: true,
                finishDate: null,
            },
            {
                id: 3,
                text: 'fryzjer',
                date: '2021-10-29',
                important: true,
                active: true,
                finishDate: null,
            },
        ]
    }

    deleteTask = (id) => {
        // const tasks = [...this.state.tasks];
        // const index = tasks.findIndex(task => task.id === id);
        // tasks.splice(index, 1);
        //
        // this.setState({
        //     tasks: tasks,
        // })

        let tasks = [...this.state.tasks];
        tasks = tasks.filter(task => task.id !== id);

        this.setState({
            tasks: tasks,
        })
    }

    changeTaskStatus = (id) => {
        const tasks = Array.from(this.state.tasks);
        tasks.forEach(task => {
            if (task.id === id) {
                task.active = false;
                task.finishDate = new Date().getTime();
            }
        })
        this.setState({
            tasks: tasks,
        })
    }

    render() {
        return (
            <div className="App">
                todo app
                <AddTask/>
                <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
            </div>
        );
    }
}

export default App;

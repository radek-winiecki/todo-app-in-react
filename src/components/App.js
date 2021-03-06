import React from "react";
import './App.css';
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends React.Component {
    counter = 9;

    state = {
        tasks: [
            {
                id: 0,
                text: 'learn programming',
                date: '2021-10-15',
                important: true,
                active: true,
                finishDate: null,
            },
            {
                id: 1,
                text: 'go to the gym',
                date: '2021-10-21',
                important: false,
                active: true,
                finishDate: null,
            },
            {
                id: 2,
                text: 'cook lunch',
                date: '2021-10-23',
                important: false,
                active: true,
                finishDate: null,
            },
            {
                id: 3,
                text: 'clean room',
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

    addTask = (text, date, important) => {
        const task = {
            id: this.counter,
            text: text,
            date: date,
            important: important,
            active: true,
            finalDate: null,
        }
        this.counter++;

        this.setState(prevState => ({
            tasks: [...prevState.tasks, task],
        }))

        return true;
    }

    render() {
        return (
            <div className="App">
                <h1>TO-DO APP</h1>
                <AddTask add={this.addTask}/>
                <TaskList
                    tasks={this.state.tasks}
                    delete={this.deleteTask}
                    change={this.changeTaskStatus}
                />
            </div>
        );
    }
}

export default App;

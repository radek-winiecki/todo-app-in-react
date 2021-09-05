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

    render() {
        return (
            <div className="App">
                todo app
                <AddTask/>
                <TaskList tasks={this.state.tasks} />
            </div>
        );
    }
}

export default App;

import React from "react";
import Task from "./Task";

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    // done.sort((a, b) => b.finishDate - a.finishDate);

    if (done.length >= 2) {
        done.sort((a, b) => {
            if (a.finishDate > b.finishDate) {
                return -1;
            } else if (a.finishDate < b.finishDate) {
                return 1;
            } else {
                return 0;
            }
        })
    }

    if (active.length >= 2) {
        active.sort((a, b) => {

            a = a.text.toLowerCase();
            b = b.text.toLowerCase();

            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        })
    }

    const activeTasks = active.map(task =>
        <Task
            key={task.id}
            task={task}
            delete={props.delete}
            change={props.change}
        />)

    const doneTasks = done.map(task =>
        <Task
            key={task.id}
            task={task}
            delete={props.delete}
            change={props.change}
        />)

    return (
        <>
            <div className="active">
                <h1>Tasks to be done</h1>
                {activeTasks.length > 0 ? activeTasks : <p>No tasks.</p>}
            </div>

            <hr/>

            <div className="done">
                <h3>Done tasks <em>({done.length})</em></h3>
                {done.length > 5 && <span style={{fontSize: 12, color: 'red'}}
                >only the last five tasks are displayed.</span>}
                {doneTasks.slice(0, 5)}
            </div>
        </>
    );
}

export default TaskList;
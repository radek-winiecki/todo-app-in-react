import React from "react";

const Task = (props) => {

    const {text, date} = props.task;

    return (
        <div>
            <p>
                <strong>{text}</strong> - do <span>{date} </span>
                <button>Zostało zrobione</button>
                <button>X</button>
            </p>
        </div>
    );
}

export default Task;
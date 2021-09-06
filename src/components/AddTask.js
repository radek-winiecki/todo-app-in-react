import React from "react";
import {Component} from "react";
import './AddTask.css';

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0, 10);

    state = {
        text: '',
        checked: false,
        date: this.minDate,
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value,
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked,
        })
    }

    handleClick = () => {
        const {text, checked, date} = this.state;

        if (text.length > 3) {
            const add = this.props.add(text, checked, date);

            if (add) {
                this.setState({
                    text: '',
                    checked: false,
                    date: this.minDate,
                })
            }
        } else {
            alert("The name is too short!");
        }
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value,
        })
    }

    render() {

        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + "-12-31";

        return (
            <div className="form">
                <input
                    type="text"
                    placeholder="Add Task"
                    value={this.state.text}
                    onChange={this.handleText}
                />
                <input
                    type="checkbox"
                    checked={this.state.checked}
                    id="important"
                    onChange={this.handleCheckbox}
                />
                <label htmlFor="important">Priority</label> <br/>
                <label htmlFor="date">By when to do:</label>
                <input
                    type="date"
                    value={this.state.date}
                    min={this.minDate}
                    max={maxDate}
                    onChange={this.handleDate}
                />
                <br/>
                <button className="add_task" onClick={this.handleClick}>Add Task!</button>
            </div>
        );
    }
}

export default AddTask;
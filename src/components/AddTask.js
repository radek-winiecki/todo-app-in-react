import React from "react";
import {Component} from "react";

class AddTask extends Component {
    state = {
        text: '',
        checked: false,
    }
    render() {
        return(
            <div className="form">
                <input type="text" placeholder="dodaj zadanie" value={this.state.text} />
                <input type="checkbox" checked={this.state.checked} id="important"/>
                <label htmlFor="important">Priorytet</label>
                <label htmlFor="date">Do kiedy zrobić: </label>
                <input type="date" value="2021-09-21" min="2021-01-01" max="2022-12-31" />
                <button>Dodaj</button>
            </div>
        );
    }
}

export default AddTask;
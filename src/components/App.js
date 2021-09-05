import logo from '../logo.svg';
import './App.css';
import AddTask from "./AddTask";
import TaskList from "./TaskList";

function App() {
  return (
    <div className="App">
      todo app
        <AddTask />
        <TaskList />
    </div>
  );
}

export default App;

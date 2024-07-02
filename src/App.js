import './App.css';
import Header from '../src/components/Header';
import Card from '../src/components/card';
import Input from "../src/components/input";
import { useEffect, useState } from 'react';

function App() {

  const initialTasks = [
    {
      id: 1,
      taskName: "This is the first task"
    },
    {
      id: 2,
      taskName: "This is task 2"
    },
    {
      id: 3,
      taskName: "This is task 3"
    },
  ]

  const [tasks, setTasks] = useState(initialTasks);

  const addTaskHandler = (taskName) => {
    fetch("https://training-6jya.onrender.com/task", {
      method: "POST",
      body: JSON.stringify({
        taskId: Math.random(),
        title: taskName
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then((res) => {
      fetch("https://training-6jya.onrender.com/task")
        .then((res) => res.json())
        .then((res) => setTasks(res));
    });
  }

  const completeTaskHandler = (id) => {
    setTasks(previousTasks => previousTasks.filter(item => item.id !== id));
  }

  useEffect(() => {
    fetch("https://training-6jya.onrender.com/task")
      .then((res) => res.json())
      .then((res) => setTasks(res));
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <Input addTaskHandler={addTaskHandler} />
        {tasks.map(task => <Card
          taskName={task.title}
          id={task.id}
          completeTaskHandler={completeTaskHandler} />)}
      </main>

    </div>
  );
}

export default App;

import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITask } from '../types/task';
import style from "./app.module.scss"

function App() {
  const [tasks, setTask] = useState<ITask[]>([]);
  const [selectedItem, setSelected] = useState<ITask>();

  function selectTask(selectedItem: ITask) {
    setSelected(selectedItem);
    setTask((oldTasks) => 
      oldTasks.map(task => ({
        ...task,
        selected:task.id === selectedItem.id
      }))
    );
  }

  return (
    <div className={style.AppStyle} >
      <Form setTask={setTask} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer />
    </div>
  );
}

export default App;

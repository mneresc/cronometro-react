import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITask } from '../components/types/task';
import style from "./app.module.scss"

function App() {
  const [tasks, setTask] = useState<ITask[]>([]);

  return (
    <div className={style.AppStyle} >
      <Form setTask={setTask}/>
      <List tasks={tasks} />
      <Timer />
    </div>
  );
}

export default App;

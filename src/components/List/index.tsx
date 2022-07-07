import { ITask } from '../types/task';
import Item from './Item/item';
import style from './list.module.scss'

type Props = {
    tasks: ITask[] | [],
    selectTask: (selectedItem: ITask) => void
};

function List(props: Props) {

    return (
        <aside className={style.tasks}>
            <h2>Day's studies</h2>
            <ul>
                {props.tasks.map((task, index) =>
                (
                    <Item key={index}
                        taskName={task.taskName}
                        time={task.time}
                        selected={task.selected}
                        id={task.id}
                        done={task.done} 
                        selectTask={props.selectTask}

                        />
                )
                )}
            </ul>
        </aside>
    )
}

export default List;
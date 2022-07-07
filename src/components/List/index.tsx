import { ITask } from '../types/task';
import Item from './Item/item';
import style from './list.module.scss'

type Props = {
    tasks: ITask[] | []
};

function List(props: Props) {

    return (
        <aside className={style.tasks}>
            <h2>Day's studies</h2>
            <ul>
                {props.tasks.map((task, index) =>
                (
                    <Item key={index} taskName={task.taskName} time={task.time} />
                )
                )}
            </ul>
        </aside>
    )
}

export default List;
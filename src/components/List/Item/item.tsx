import { ITask } from '../../types/task'
import style from '../list.module.scss'

interface Props extends ITask {
    selectTask: (selectedItem: ITask) => void
};

export default function Item({ taskName, time, selected, done, id, selectTask }: Props) {

    return (
        <li
            className={`${style.item} ${ selected ? style.selectedItem : ''}`}
            onClick={() => selectTask(
                {
                    taskName: taskName,
                    time: time,
                    selected: true,
                    done: done,
                    id: id
                }
            )} >
            <h3>{taskName.toUpperCase()}</h3>
            <span>{time}</span>
        </li>
    )
}


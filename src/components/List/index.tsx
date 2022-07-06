import Item from './Item/item';
import style from './list.module.scss'

function List() {
    const tasks = [{
        taskName: 'react',
        time: '01:00:00'
    }];
    return (
        <aside className={style.tasks}>
            <h2>Day's studies</h2>
            <ul>
                {tasks.map((task, index) =>
                (
                    <Item key={index} taskName={task.taskName}  time={task.time} />
                )
                )}
            </ul>
        </aside>
    )
}

export default List;
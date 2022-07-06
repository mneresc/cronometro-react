import style from '../list.module.scss'



export default function Item({ taskName, time }: {
    taskName: string,
    time: string
}) {

    return (
        <li className={style.item}>
            <h3>{taskName.toUpperCase()}</h3>
            <span>{time}</span>
        </li>
    )
}


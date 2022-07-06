import Button from '../Button'
import Clock from './Clock'
import style from './timer.module.scss'

export default function Timer() {
    return (
        <div className={style.timer}>
            <p className={style.title}>Choose a task and start the timer</p>
            <div className={style.timerWrapper}>
                <Clock />
            </div>
            <Button>Start</Button>
        </div>
    )
}

import { useEffect, useState } from 'react'
import { timeToSeconds } from '../../common/util/date'
import { ITask } from '../../types/task'
import Button from '../Button'
import Clock from './Clock'
import style from './timer.module.scss'

type Props = {
    selectedItem: ITask | undefined
}
export default function Timer({ selectedItem }: Props) {
    const [timeSelected, setTimeSelected] = useState<number>();

    useEffect(() => {
        if (selectedItem?.time) {
            setTimeSelected(timeToSeconds(selectedItem.time));
        }
    },[selectedItem]);
  



    return (
        <div className={style.timer}>
            <p className={style.title}>Choose a task and start the timer</p>
            <div className={style.timerWrapper}>
                <Clock time={timeSelected}/>
            </div>
            <Button>Start</Button>
        </div>
    )
}

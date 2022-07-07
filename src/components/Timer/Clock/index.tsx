import React from 'react'
import style from './clock.module.scss'

type Props = {
    time?: number
}

export default function Clock({ time = 0 }: Props) {

    
    return (
        <React.Fragment>
            <span className={style.timerNumber}>0</span>
            <span className={style.timerNumber}>0</span>
            <span className={style.timerDivision}>:</span>
            <span className={style.timerNumber}>0</span>
            <span className={style.timerNumber}>0</span>
        </React.Fragment>
    )
}

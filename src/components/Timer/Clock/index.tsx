import React from 'react'
import { timeToSeconds } from '../../../common/util/date'
import style from './clock.module.scss'

export default function Clock() {
    // timeToSeconds()
    return (
        <React.Fragment>
            <span className={style.timerNumber}>0</span>
            <span className={style.timerNumber}>0</span>
            <span  className={style.timerDivision}>:</span>
            <span className={style.timerNumber}>0</span>
            <span className={style.timerNumber}>0</span>
        </React.Fragment>
    )
}

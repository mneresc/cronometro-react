import React from 'react'
import style from './clock.module.scss'

export default function Time() {
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

import React from "react";
import Button from "../Button";
import style from './form.module.scss'

class Form extends React.Component {
    render() {
        return (
            <form className={style.newTask}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">Task</label>
                    <input type="text" name="task" id="task" placeholder="What you want study." required={true} />
                </div>
                <div className={style.inputContainer} >
                    <label htmlFor="time">Time</label>
                    <input type="time" id="time" name="time" min="00:00:00" max="01:00:00" required={true} />
                </div>
                <Button >Add</Button>
            </form>
        )
    }
}

export default Form;
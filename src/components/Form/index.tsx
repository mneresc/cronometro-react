import React from "react";
import Button from "../Button";
import { ITask } from "../types/task";
import style from './form.module.scss'

type Props = {
    setTask: React.Dispatch<React.SetStateAction<ITask[]>>
};


class Form extends React.Component<Props> {
    state = {
        taskName: '',
        time: '00:00'
    }
    adicionarTarefa(event: React.FormEvent) {
        event.preventDefault();
        console.log('acessou')
        
        this.props.setTask((oldTasks) => 
            [
              ...oldTasks,
              {
                ...this.state,
                selected: false,
                done: false,
                id:''
              }
            ]
          )

          this.setState({
            taskName: "",
            time: "00:00"
          })
    }
    render() {
        return (
            <form className={style.newTask} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">Task</label>
                    <input type="text"
                        name="task"
                        id="task"
                        value={this.state.taskName}
                        onChange={(event) => { this.setState({ ...this.state, taskName: event.target.value }) }}
                        placeholder="What you want study."
                        required={true} />
                </div>
                <div className={style.inputContainer} >
                    <label htmlFor="time">Time</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        min="00:00:00"
                        max="01:00:00"
                        onChange={(event) => { this.setState({ ...this.state, time: event.target.value }) }}
                        value={this.state.time}
                        required={true} />
                </div>
                <Button type="submit">Add</Button>
            </form>
        )
    }
}

export default Form;
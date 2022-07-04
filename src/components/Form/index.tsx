import React from "react";
import Button from "../Button";

class Form extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="task">Task</label>
                    <input type="text" name="task" id="task" placeholder="What you want study." required={true}/>
                </div>
                <div>
                <label htmlFor="time">Time</label>
                    <input type="time"  id="time" name="time" min="00:00:00" max="01:00:00"  required={true}/>
                </div>
                <Button />
            </form>
        )
    }
}

export default Form;
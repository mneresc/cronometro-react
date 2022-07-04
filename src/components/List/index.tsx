import React from "react";

function List() {
    const tasks = [{
        taskName: 'react',
        time: '01:00:00'
    }];
    return (
        <aside>
            <h2>Day's studies</h2>
            <ul>
                {tasks.map((task, index) => 
                    (
                    <li key={index}>
                        <h3>{task.taskName.toUpperCase()}</h3>
                        <span>{task.time}</span>
                    </li>
                    )
                )}
            </ul>
        </aside>
    )
}

export default List;
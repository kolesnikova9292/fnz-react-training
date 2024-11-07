import React, {useContext} from "react";
import {Task} from "./Task.ts";
import {MyContext} from "../../App.tsx";

const Tasks: React.FC = ({showOnlyToday, selectedToDo}: any) => {

    const myData = useContext(MyContext);

    const handleChange = (event: any) => {
        const item = myData.data.items.find(x => x.listName === selectedToDo)?.taskArray.find(x => x.id === event.target.id);
        const val = !item?.finished;
        item.finished = val;
    }


    return (
        <div>
            <h1>Tasks</h1>
            {showOnlyToday ? (
                <div style={{margin: "80px"}}>
                    <h2>For Today</h2>
                    <ul>
                        {myData.data.items.find(x => x.listName === selectedToDo)?.taskArray.filter(x => x.status === 'today').map((todo: Task) => (
                            <li key={todo.id}>
                                <input
                                    type="checkbox"
                                    defaultChecked={todo.finished}
                                    onChange={() => {
                                        handleChange({
                                            target: {
                                                id: todo.id,
                                            },
                                        });
                                    }}
                                />
                                {todo.title}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>
                    <div style={{margin: "80px"}}>
                        <h2>For Today</h2>
                        <ul>
                            {myData.data.items.find(x => x.listName === selectedToDo)?.taskArray.filter(x => x.status === 'today').map((todo) => (
                                <li key={todo.id}>
                                    <input
                                        type="checkbox"
                                        defaultChecked={todo.finished}
                                        onChange={() => {
                                            handleChange({
                                                target: {
                                                    id: todo.id,
                                                },
                                            });
                                        }}
                                    />
                                    {todo.title}</li>
                            ))}
                        </ul>
                    </div>
                    <div style={{margin: "80px"}}>
                        <h2>In progress</h2>
                        <ul>
                            {myData.data.items.find(x => x.listName === selectedToDo)?.taskArray.filter(x => x.status === 'in-progress').map((todo) => (
                                <li key={todo.id}>
                                    <input
                                        type="checkbox"
                                        defaultChecked={todo.finished}
                                        onChange={() => {
                                            handleChange({
                                                target: {
                                                    id: todo.id,
                                                },
                                            });
                                        }}
                                    />
                                    {todo.title}</li>
                            ))}
                        </ul>
                    </div>
                    <div style={{margin: "80px"}}>
                        <h2>Backlog</h2>
                        <ul>
                            {myData.data.items.find(x => x.listName === selectedToDo)?.taskArray.filter(x => x.status === 'backlog').map((todo) => (
                                <li key={todo.id}>
                                    <input
                                        type="checkbox"
                                        defaultChecked={todo.finished}
                                        onChange={() => {
                                            handleChange({
                                                target: {
                                                    id: todo.id,
                                                },
                                            });
                                        }}
                                    />
                                    {todo.title}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Tasks

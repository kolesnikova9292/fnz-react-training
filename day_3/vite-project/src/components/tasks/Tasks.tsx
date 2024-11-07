import React, {useState} from "react";
import {useOutletContext} from "react-router-dom";
import {Task} from "./Task.ts";
import {toDoList} from "./toDoList.ts";

const Tasks: React.FC = (props: any) => {

    //const [showOnlyToday, setShowOnlyToday] = useOutletContext();

    const [  {showOnlyToday, selectedToDo}, setStateFields] = useOutletContext();

    console.log(showOnlyToday);

    const handleChange = (event: any) => {
       /* console.log(event);
        const item = tasksList.find(x => x.id === event.target.id);

        const val = !item?.finished;

        item.finished = val;

        console.log( tasksList.find(x => x.id === event.target.id))*/

    }


    return (
        <div>
            <h1>Tasks</h1>


            {showOnlyToday ? (
                <div style={{margin: "80px"}}>
                    <ul>
                        {toDoList.items[0].taskArray.filter(x => x.status === 'today').map((todo: Task) => (
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
                        <ul>
                            {toDoList.items[0].taskArray.filter(x => x.status === 'today').map((todo) => (
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
                        <ul>
                            {toDoList.items[0].taskArray.filter(x => x.status === 'in-progress').map((todo) => (
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
                        <ul>
                            {toDoList.items[0].taskArray.filter(x => x.status === 'backlog').map((todo) => (
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

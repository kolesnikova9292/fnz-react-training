import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {MyContext} from "../../App.tsx";


const SideBar: React.FC = (props: any) => {

    const myData = useContext(MyContext);

    const selectToDo = (event) => {
        props.selectedToDoClick(event.target.listName);
    }

    return (
        <>
            <div className="left-links">

                <button
                    onClick={props.setShowOnlyTodayFilterClick}>{props.showOnlyToday ? 'Show all' : 'Only today'}</button>

                <ul>
                    {myData.data.items.map((todo) =>
                        <li key={todo.listName}>
                            <Link to="/" onClick={() => {
                                selectToDo({
                                    target: {
                                        listName: todo.listName,
                                    },
                                });
                            }}>{todo.listName}</Link>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default SideBar;

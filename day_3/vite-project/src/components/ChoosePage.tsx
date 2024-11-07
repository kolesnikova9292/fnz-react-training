import React, {useContext, useState} from "react";
import SideBar from "./header/SideBar.tsx";
import Tasks from "./tasks/Tasks.tsx";
import {MyContext} from "../App.tsx";


const ChoosePage: React.FC = (props: any) => {

    const myData = useContext(MyContext);

    const [{showOnlyToday, selectedToDo}, setStateFields] =
        useState({showOnlyToday: false, selectedToDo: myData.data.items[0].listName});

    const setShowOnlyTodayFilterClick = () => {
        const value = showOnlyToday;
        setStateFields({showOnlyToday: !value, selectedToDo: selectedToDo});
    }

    const selectedToDoClick = (event) => {
        setStateFields({showOnlyToday: showOnlyToday, selectedToDo: event});
    }

    return (
        <>

            <SideBar showOnlyToday={showOnlyToday} setShowOnlyTodayFilterClick={setShowOnlyTodayFilterClick}
                     selectedToDo={selectedToDo}
                     selectedToDoClick={selectedToDoClick}
            />

            <Tasks showOnlyToday={showOnlyToday} selectedToDo={selectedToDo}></Tasks>

        </>
    )
};

export default ChoosePage

import {render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom"; // Provides custom matchers for Jest
import {describe, it, expect, beforeAll} from "vitest"; // Test framework

import SideBar from "./SideBar";
import {ToDoList} from "../tasks/Task.ts";
import React from "react";
import {MemoryRouter} from "react-router-dom"; // Import the component to be tested

describe("SideBar", () => {

    beforeAll(() => {
        const toDoListMocked: ToDoList =
            {
                items: [{
                    listName: 'Test listname',
                    taskArray: [
                        {
                            id: 1,
                            title: 'Test item 1',
                            status: 'today',
                            finished: false
                        },
                        {
                            id: 2,
                            title: 'Test item 2',
                            status: 'in-progress',
                            finished: false
                        }
                    ]
                }
                ]
            }
    })

    // Test to check if the headline is rendered
    it("renders ul list", () => {
        render(<MemoryRouter><SideBar showOnlyToday={false} setShowOnlyTodayFilterClick={() => {
        }}
                                      selectedToDo='Websire redesign'
                                      selectedToDoClick={() => {
                                      }}
        /></MemoryRouter>); // Render the SideBar component
        screen.debug(); // Output the current state of the DOM for debugging

        // Check if an element with the test ID "headline" is present
        screen.getAllByText("Websire redesign");
        // Check if the text "Vite + React" is present in the document
        screen.getAllByText("Walk with a dog");
    });
});

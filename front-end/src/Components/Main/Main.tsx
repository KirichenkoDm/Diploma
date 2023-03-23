import React from "react";
import { Controls } from "./Controlls";
import { CourseList } from "./CourseList";

export function Main() {

    return (
        <main>
            <CourseList></CourseList>
            <Controls></Controls>
        </main>
    )
}
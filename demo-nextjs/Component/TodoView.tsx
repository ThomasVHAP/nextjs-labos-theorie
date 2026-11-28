"use client"

import { Todos } from "@/app/types/todos";
import { useState } from "react";

interface TodoViewProps {
    todo: Todos
}

const TodoView = ({todo} : TodoViewProps) => {

    const [selected, setSelected] = useState<boolean>(false);

    return (
        <div onClick={() => setSelected(prev => !prev)}>
            <h2>Todo Item</h2>
            <p><strong>ID:</strong> {todo.id}</p>
            <p><strong>Title:</strong> {todo.title}</p>
        </div>
    )
};

export default TodoView;
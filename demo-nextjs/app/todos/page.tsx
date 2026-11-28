import Todo, { TodoSkeleton } from "@/Component/Todo";
import { Todos } from "../types/todos";
import { Suspense } from "react";



const TodoPage = () => {
    return (
        <div>
            <Suspense fallback={TodoSkeleton()}>
                <Todo id={1}/>               
            </Suspense>
            <Suspense fallback={TodoSkeleton()}>
                <Todo id={2}/>
            </Suspense>
            <Suspense fallback={TodoSkeleton()}>
                <Todo id={3}/>
            </Suspense>           
        </div>
    )
}

export default TodoPage;
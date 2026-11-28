import { type Todos } from "@/app/types/todos";
import TodoView from "./TodoView";

const fetchTodo = async (id: number): Promise<Todos> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (!response.ok) {
    throw new Error("Failed to fetch todo");
  }
  const data: Todos = await response.json();
  return data;
};

interface TodoProps {
  id: number;
}

export const TodoSkeleton = () => {
  return (
    <div>
      <h2>AAAAAA</h2>
      <p><strong>AAA</strong>AAAAAAAA</p>
    </div>
  );
};

const Todo = async ({ id }: TodoProps) => {
  const todo = await fetchTodo(id);

  return (
    <div>
        <TodoView todo={todo}/>
    </div>
  );
};

export default Todo;
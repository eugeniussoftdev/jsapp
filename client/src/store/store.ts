import { create } from "zustand";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoStore = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo?: (id: number) => void;
  removeTodo?: (id: number) => void;
};

export const useTodosStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text: string) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }],
    })),
}));

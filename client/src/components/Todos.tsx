import React from "react";

import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../queries/queries";

import { useTodosStore } from "../store/store";

export const Todos = () => {
  const todos = useTodosStore(({ todos }) => todos);
  const addTodod = useTodosStore(({ addTodo }) => addTodo);
  const { loading, error, data } = useQuery(GET_TODOS);
  console.log("*** TODODS", todos, error, data, loading);
  return (
    <div>
      Todos
      <div>
        <input
          type="text"
          onKeyDown={(event) => {
            if (event.key === "Enter" && event.currentTarget.value.trim()) {
              addTodod(event.currentTarget.value.trim());
              event.currentTarget.value = "";
            }
          }}
        />
      </div>
      <div>
        {data.todos.map((todo: any) => {
          return (
            <div key={todo.id}>
              <span>{todo.text}</span>
              <span>{JSON.stringify(todo.completed)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

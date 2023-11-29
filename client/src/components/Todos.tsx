import React from "react";

import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../queries/queries";

import { useTodosStore } from "../store/store";

export const Todos = () => {
  const todos = useTodosStore(({ todos }) => todos);
  const { loading, error, data } = useQuery(GET_TODOS);
  console.log("*** TODODS", todos, error, data, loading);
  return <div>Todos</div>;
};

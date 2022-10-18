import { useEffect, useState } from "react";
import { getHeader } from "../headers/requestHeaders";

export const useFetchCustomHook = (url, header) => {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState("");
  const [error, setError] = useState("");
  const [reloadData, setReloadData] = useState(true);
  useEffect(() => {
    fetch(url || "http://localhost:3001/todo", header || getHeader())
      .then((response) => response.json())
      .then((todo) => {
        setTodoList(todo);
        setLoading(true);
      })
      .catch((err) => setError(err));
  }, [url, header, reloadData]);

  return [todoList, loading, error, setReloadData];
};

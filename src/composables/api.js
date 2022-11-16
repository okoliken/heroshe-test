import { useQuery } from "vue-query";

export function useTodoQuery( { enabled }) {
    return useQuery(
        "todos",
        () => fetch(`https://jsonplaceholder.typicode.com/todos/`)
            .then(response => response.json()),
        {
            enabled,
            select: (todo) => todo,
            staleTime: 1000,
        }
    );
}
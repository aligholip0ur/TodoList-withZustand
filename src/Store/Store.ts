import { create } from "zustand";

type Todo = {
    id: number;
    title: string;
    completed: boolean;
};

type TodoStore = {
    todos: Todo[];
    filter: string;
    setFilter: (filter: string) => void;
    getFilteredTodos: () => Todo[];
    addTodo: (title: string) => void;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
};

export const useTodoStore = create<TodoStore>(
    (set, get) => ({
        todos: [],
        filter: "all",
        setFilter: (filter: string) => {
            set({ filter });
        },

        getFilteredTodos: () => {
            const { todos, filter } = get();
            switch (filter) {
                case "completed":
                    return todos.filter((todo) => todo.completed);
                case "pending":
                    return todos.filter((todo) => !todo.completed);
                default:
                    return todos;
            }
        },
        addTodo: (title: string) =>
            set((state) => ({
                todos: [...state.todos, { id: Date.now(), title, completed: false }],
            })),
        removeTodo: (id: number) =>
            set((state) => ({
                todos: state.todos.filter((todo) => todo.id !== id),
            })),
        toggleTodo: (id: number) =>
            set((state) => ({
                todos: state.todos.map((todo) =>
                    todo.id === id ? { ...todo, completed: !todo.completed } : todo
                ),
            })),
    }));
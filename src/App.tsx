import { useState } from "react";
import { useTodoStore } from "./Store/Store";

export default function App() {
  const { todos, addTodo, removeTodo, toggleTodo, setFilter, getFilteredTodos } = useTodoStore();
  const [inputValue, setInputValue] = useState('');
  const [activeFilter, setActiveFilter] = useState("all");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  const handleRemoveTodo = (id: number) => {
    removeTodo(id);
  };

  const handleToggleTodo = (id: number) => {
    toggleTodo(id);
  };

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
    setActiveFilter(filter);
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-800 text-center mb-8">Todo App</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="font-bold text-xl text-blue-800 mb-4">Add Todo</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter todo..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                disabled={!inputValue.trim()}
              >
                Add Todo
              </button>
            </form>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="font-bold text-xl text-blue-800 mb-4">All Todos ({todos.length})</h2>
            {todos.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No todos yet. Add one!</p>
            ) : (
              <div className="space-y-3">
                {todos.map((item) => (
                  <div key={item.id} className={`p-4 rounded-lg border ${item.completed ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'}`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`font-medium ${item.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                          {item.title}
                        </h3>
                        <span className={`text-sm ${item.completed ? 'text-green-600' : 'text-yellow-600'}`}>
                          {item.completed ? "Completed" : "Pending"}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleToggleTodo(item.id)}
                          className={`p-2 rounded-lg ${item.completed ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
                        >
                          {item.completed ? "Undo" : "Complete"}
                        </button>
                        <button 
                          onClick={() => handleRemoveTodo(item.id)}
                          className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="font-bold text-xl text-blue-800 mb-4">Filtered Todos</h2>
            <div className="flex space-x-2 mb-4">
              {["all", "completed", "pending"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  className={`flex-1 py-2 px-4 rounded-lg capitalize ${activeFilter === filter ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
            {filteredTodos.length === 0 ? (
              <p className="text-gray-500 text-center py-4">
                {activeFilter === "all" 
                  ? "No todos yet" 
                  : `No ${activeFilter} todos`}
              </p>
            ) : (
              <div className="space-y-3">
                {filteredTodos.map((item) => (
                  <div key={item.id} className={`p-4 rounded-lg border ${item.completed ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'}`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`font-medium ${item.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                          {item.title}
                        </h3>
                        <span className={`text-sm ${item.completed ? 'text-green-600' : 'text-yellow-600'}`}>
                          {item.completed ? "Completed" : "Pending"}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleToggleTodo(item.id)}
                          className={`p-2 rounded-lg ${item.completed ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
                        >
                          {item.completed ? "Undo" : "Complete"}
                        </button>
                        <button 
                          onClick={() => handleRemoveTodo(item.id)}
                          className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
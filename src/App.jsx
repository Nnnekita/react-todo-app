import { useState, useEffect } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Filter from './components/Filter'
import './App.css'

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    if (!text.trim()) return
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    }
    setTodos([newTodo, ...todos])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <div className="app">
      <header className="header">
        <h1>Список задач</h1>
        <p className="subtitle">Организуй свои дела эффективно</p>
      </header>

      <main className="container">
        <AddTodo onAdd={addTodo} />
        <Filter filter={filter} onFilter={setFilter} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
        {todos.some(t => t.completed) && (
          <button className="clear-btn" onClick={clearCompleted}>
            Очистить выполненные
          </button>
        )}
      </main>

      <footer className="footer">
        <p>© 2026 <a href="https://github.com/Nnnekita" target="_blank" rel="noopener noreferrer">Nnnekita</a></p>
      </footer>
    </div>
  )
}

export default App

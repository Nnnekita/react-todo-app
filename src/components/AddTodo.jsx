import { useState } from 'react'

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd(text)
    setText('')
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-input"
        placeholder="Что нужно сделать?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="add-btn">
        Добавить
      </button>
    </form>
  )
}

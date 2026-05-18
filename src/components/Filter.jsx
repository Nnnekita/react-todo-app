export default function Filter({ filter, onFilter }) {
  const filters = [
    { value: 'all', label: 'Все' },
    { value: 'active', label: 'Активные' },
    { value: 'completed', label: 'Выполненные' },
  ]

  return (
    <div className="filter-bar">
      {filters.map(f => (
        <button
          key={f.value}
          className={`filter-btn ${filter === f.value ? 'active' : ''}`}
          onClick={() => onFilter(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}

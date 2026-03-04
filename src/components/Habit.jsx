import Checkbox from './Checkbox'

function Habit({ id, text, completed, toggleHabit }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox id={id} completed={completed} toggleHabit={toggleHabit} />
      <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</p>
    </div>
  )
}

export default Habit

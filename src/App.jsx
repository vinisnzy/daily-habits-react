import { useState } from 'react'
import ListHabits from './components/ListHabits'
import './styles/App.css'
import AddHabit from './components/AddHabit'

function App() {
  const [habits, setHabits] = useState([])

  const [habitId, setHabitId] = useState(1)

  function toggleHabit(id) {
    const newHabits = habits.map((habit) =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit,
    )

    setHabits(newHabits)
  }

  function addHabit(e) {
    e.preventDefault()
    const habit = {
      id: habitId,
      text: e.target.habit.value,
      completed: false,
    }

    setHabits((prev) => [...prev, habit])
    setHabitId((prev) => prev + 1)

    e.target.habit.value = ''
  }

  return (
    <div className="container">
      <h1 className="main-title">Daily Habits</h1>
      <AddHabit addHabit={addHabit} />
      <ListHabits habits={habits} toggleHabit={toggleHabit} />
    </div>
  )
}

export default App

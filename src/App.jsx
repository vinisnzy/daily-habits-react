import { useState } from 'react'
import ListHabits from './components/ListHabits'
import './styles/App.css'

function App() {
  const [habits, setHabits] = useState([
    {
      id: 1,
      text: 'Tomar 3L de Água',
      completed: false,
    },
    {
      id: 2,
      text: 'Ir à academia',
      completed: true,
    },
  ])

  function toggleHabit(id) {
    const newHabits = habits.map((habit) =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit,
    )

    setHabits(newHabits)
  }

  return (
    <div className="container">
      <h1 className="main-title">Daily Habits</h1>
      <ListHabits habits={habits} toggleHabit={toggleHabit} />
    </div>
  )
}

export default App

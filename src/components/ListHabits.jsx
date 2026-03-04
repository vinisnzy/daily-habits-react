import Habit from './Habit'

function ListHabits({ habits, toggleHabit }) {
  return (
    <div>
      {habits.map((habit) => (
        <div key={habit.id}>
          <Habit
            id={habit.id}
            text={habit.text}
            completed={habit.completed}
            toggleHabit={toggleHabit}
          />
        </div>
      ))}
    </div>
  )
}

export default ListHabits

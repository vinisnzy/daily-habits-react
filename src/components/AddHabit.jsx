import '../styles/AddHabit.css'

function AddHabit({ addHabit }) {
  return (
    <form onSubmit={addHabit}>
      <input name="habit" type="text" placeholder="Add a habit" />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddHabit

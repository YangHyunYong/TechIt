const App = () => {
  const fruits = ["Apple", "Banana", "Kiwi", "Orange"];
  return (
    <div className="bg-red-100">
      <ul>
        {fruits.map((v, i) => {
          let temp = `맛있는 ${v}`

          return <li key={i}>{temp}</li>
        })}
      </ul>
    </div>
  )
}
export default App;
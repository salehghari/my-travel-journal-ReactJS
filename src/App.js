import Navbar from "./components/Navbar"
import Journal from "./components/Journal"
import data from "./data"

export default function App() {
  const journals = data.map(journal => {
    return (
      <Journal 
        key={journal.id}
        {...journal}
      />
    )
  })
  return (
      <div>
        <Navbar />
        {journals}
      </div>
  )
}
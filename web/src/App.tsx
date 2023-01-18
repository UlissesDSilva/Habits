import './App.css'
import { HabitsComponent } from './components/habits'

function App() {

  return (
    <div className="App">
      <HabitsComponent completed={3}/>
      <HabitsComponent completed={3}/>
      <HabitsComponent completed={3}/>
      <HabitsComponent completed={3}/>
    </div>
  )
}

export default App

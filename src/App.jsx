import './App.css'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>NOBE Workshop Tutorial Dashboard</h1>
        <p>GitHub & Code Review Demo</p>
      </header>
      <main className="app-main">
        <Dashboard />
      </main>
    </div>
  )
}

export default App

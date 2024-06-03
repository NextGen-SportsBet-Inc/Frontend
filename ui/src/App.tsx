import './App.css'
import { useKeycloak } from '@react-keycloak/web'
function App() {
  const { keycloak, initialized } = useKeycloak()
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>React App</h1>
        </header>
        <button onClick={() => keycloak.login()}>Login</button>
      </div>
    </>
  )
}
export default App
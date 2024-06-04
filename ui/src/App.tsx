import { useKeycloak } from '@react-keycloak/web'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import MyBets from './pages/MyBets'
import Cash from './pages/Cash'
import Help from './pages/Help'

function App() {
  const { keycloak, initialized } = useKeycloak()
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/bets' element={<MyBets />} />
          <Route path='/cash' element={<Cash />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      </BrowserRouter>
      <button className='btn btn-primary' onClick={() => keycloak.login()}>Login</button>
    </div>
  )
}
export default App
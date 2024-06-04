import { useKeycloak } from '@react-keycloak/web';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import MyBets from './pages/MyBets';
import Cash from './pages/Cash';
import Help from './pages/Help';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center h-screen'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/bets' element={<MyBets />} />
            <Route path='/cash' element={<Cash />} />
            <Route path='/help' element={<Help />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

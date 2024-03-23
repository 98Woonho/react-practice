import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserRouter from './components/user/UserRouter';
import BoardRouter from './components/board/BoardRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user/*' element={<UserRouter/>}/>
          <Route path='/board/*' element={<BoardRouter/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Profile from './components/Profile.js';
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}
export default App;
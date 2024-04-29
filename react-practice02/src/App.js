import {Component} from 'react';
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SearchTab from './components/Header';
import Home from './components/Home';
import Search from './components/Search';
import DailyBoxOffice from './components/DailyBoxOffice';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
    }
  }
  render(){
    return(
      <div id='App'>
          <BrowserRouter>
              <SearchTab/>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/search' element={<Search/>}/>
                  <Route path='/dailyBoxOffice' element={<DailyBoxOffice/>}/>
              </Routes>
          </BrowserRouter>
      </div>
    )
  }
}
export default App;

import {Component} from 'react';
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SearchTab from './components/SearchTab';
import Home from './components/Home';
import SearchResult from './components/SearchResult';

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
                  <Route path='/search' element={<SearchResult/>}/>
              </Routes>
          </BrowserRouter>
      </div>
    )
  }
}
export default App;

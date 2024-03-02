// css import
import './App.css';

// js import
import Header from './components/Header.js';
import Slide from './components/Slide.js';
import Contents from './components/Contents.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div id="wrap">
      <Header/>
      <Slide/>
      <Contents/>
      <Footer/>
    </div>
  );
}

export default App;
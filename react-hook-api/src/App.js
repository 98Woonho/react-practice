import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
function App() {
  //componentDidMount (ready,DOMContentLoaded)
  useEffect(()=>{
    getMovies()
  },[])

  const getMovies=async()=>{
    await axios.get(`https://yts.mx/api/v2/list_movies.json`)
    .then(response=>{
      console.log(response)
    })//성공시
    .catch(error=>{
      console.log(error)
    })//오류시
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

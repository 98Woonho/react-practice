import {Component} from 'react';
import Movie from './components/Movie.js';
import MovieInput from './components/MovieInput.js';
import './App.css';
import imgA from './images/movie1.jpg';
import imgB from './images/movie2.jpg';
import imgC from './images/movie3.jpg';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieList:[
        {cover_img:imgA, id:1, title:'반지의제왕', running:130, rating:9.5},
        {cover_img:imgB, id:2, title:'아바타', running:120, rating:9.4},
        {cover_img:imgC, id:3, title:'명량', running:125, rating:9.1}
      ]
    }
  }

  addMovieInfo=(id, title, running, rating) => {
    const movieObj = {id:id, title:title, running:running, rating:rating}
    const concatedList = this.state.movieList.concat(movieObj)
    this.setState({
      movieList:concatedList
    })
  }

  render() {
    const result = this.state.movieList.map(
      (data) => (<Movie cover_img={data.cover_img} id={data.id} title={data.title} running={data.running} rating={data.rating}/>)
    )

    return(
      <div id='App'>
        <h1>
          <img src={'/movie-logo.png'}/>영화 소개
        </h1>
        <MovieInput/>
        {result}
      </div>
    )
  }
}

export default App;

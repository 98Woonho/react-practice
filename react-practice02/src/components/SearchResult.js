import {Component} from 'react';
import '../css/SearchResult.css'
import queryString from 'query-string'
import axios from 'axios'
import Movie from './Movie.js';

class SearchResult extends Component{
  constructor(props){
    super(props)
    this.state={
      movieList:[],
      moviePoster:[]
    }
  }

  componentDidMount(){
    const queryObj=queryString.parse(window.location.search)
    this.searchMovie(queryObj.word)
  }

  searchMovie=async(searchWord)=>{
    await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=e4c80909ed58cd90bfaa85912c33d371&movieNm=${searchWord}`)
    .then(response=>{
      const movieList = response.data.movieListResult.movieList
      const moviePoster = [];

      movieList.forEach(movie => {
        axios.get(`http://www.omdbapi.com/?apikey=2053ca7f&t=${movie.movieNmEn}`)
        .then(response => {
          moviePoster.push(response.data.Poster)
          console.log(moviePoster)
        })
        .catch(err => {
          console.log(err)
        })
      })

      this.setState({
        movieList:movieList,
        moviePoster:moviePoster
      })
    })
    .catch(error=>{
      console.log(error)
    })
  }


  render(){
    const {movieList, moviePoster}=this.state
    const movieMap=movieList.map(
      (data, index)=>(<Movie movieNm={data.movieNm} moviePoster={moviePoster[index]}/>)
    )

    return(
      <div id='search-result'>
          {movieMap}
      </div>
    )
  }
}
export default SearchResult;

import {Component} from 'react';
import '../css/SearchResult.css'
import queryString from 'query-string'
import axios from 'axios'
import Movie from './Movie.js';

class SearchResult extends Component{
  constructor(props){
    super(props)
    this.state={
      movieList:[]
    }
  }

  componentDidMount(){
    //jquery랑 ready비슷
    console.log("window.location : " + window.location)
    console.log("window.location.href : " + window.location.href)
    console.log("window.location.search : " + window.location.search)
    // ?ie=utf-8&word=avatar 이 쿼리트스링을
    // {ie:'utf-8',word:'avatar'} 로 변환했다.
    // npm install query-string
    // 지금은 query-string모듈의 parse메서드로 변환했다.
    // 이걸 안썼으면 javascript String객체 내장메서드 split쓰고, 반복문쓰고~
    // queryString을 파싱해야한다.
    const queryObj=queryString.parse(window.location.search)
    console.log(queryObj)//{ie:'utf-8',word:'avatar'}
    console.log(queryObj.word)//avatar
    this.searchMovie(queryObj.word)
  }

  searchMovie=async(searchWord)=>{
    await axios.get(`https://yts.mx/api/v2/list_movies.json?query_term=${searchWord}`) // yts.mx api에 영화 이름으로 데이터 요청
    .then(response=>{
      console.log(response)//response-data-data-movies(결과값에 따른 영화 Array)
      console.log(response.data.data.movies)// avatar 검색 시, avatar 제목 6개 영화 Array
      this.setState({
        movieList:response.data.data.movies
      })
    })//성공시
    .catch(error=>{
      console.log(error)
    })//오류시
    //순수JS-XMLHttpRequest객체,Jquery-$.get,$.ajax,React-axios
  }


  render(){
    const {movieList}=this.state
    console.log(movieList)
    const movieMap=movieList.map(
      (data)=>(<Movie cover_image={data.medium_cover_image} title={data.title}/>)
    )

    return(
      <div id='search-result'>
          {movieMap}
      </div>
    )
  }
}
export default SearchResult;

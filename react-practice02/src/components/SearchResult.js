import { Component } from 'react';
import '../css/SearchResult.css'
import queryString from 'query-string'
import axios from 'axios'
import Movie from './Movie.js';

class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieList: []
    }
  }

  componentDidMount() {
    const queryObj = queryString.parse(window.location.search)
    this.searchMovie(queryObj.word)
  }

  searchMovie = async (searchWord) => {
    await axios.get(`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&ServiceKey=FPWJ81L14L7X38342790&title=${searchWord}`)
      .then(response => {
        console.log(response.data.Data[0].Result)
        this.setState({
          movieList: response.data.Data[0].Result
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    const { movieList } = this.state
    movieList.forEach(movie => {
      // 영화 제목에 !HS, !HE가 포함되어 있어서 제거
      const originalTitle = movie.title;
      movie.title = originalTitle.replace(/!HS/g, '') // !HS 제거
        .replace(/!HE/g, '') // !HE 제거


      // 영화 포스터 url 가져오기
      const urls = movie.posters.split('|');
      movie.posters = urls[0];
    });
    const movieMap = movieList.map(
      (data) => (<Movie title={data.title} posters={data.posters} />)
    )

    return (
      <div id='search-result'>
        {movieMap}
      </div>
    )
  }
}
export default SearchResult;

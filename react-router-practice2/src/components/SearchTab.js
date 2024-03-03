import {Component} from 'react';
import '../css/SearchTab.css'

class SearchTab extends Component{
  constructor(props){
    super(props)
    this.state={
      word:''
    }
  }

  searchMovie=()=>{
    alert('검색!')
    const {word}=this.state
    window.location.href=`/search?ie=utf-8&word=${word}`
    // /search?ie=값&word=값
    // ?뒤에 붙은 정보 (쿼리스트링)
    //http://www.cine21.com/search/?q=듄 (씨네21)
    //https://search.daum.net/search?sugo=&sq=&o=&q=셔츠 (다음)
    //https://browse.gmarket.co.kr/search?keyword=셔츠  (G마켓)
  }

  wordChange=(e)=>{
    console.log(e.target.value)
    this.setState({
      word:e.target.value
    })
  }

  render(){
    return(
      <div id='search-tab'>
         <input type='text' placeholder='검색어입력' onChange={this.wordChange}/>
         <button onClick={this.searchMovie}>검색</button>
      </div>
    )
  }
}
export default SearchTab;

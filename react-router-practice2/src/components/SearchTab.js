import {Component} from 'react'
import '../css/Home.css'


class SearchTab extends Component {
  constructor(props) {
    super(props)
    this.state={

    }
  }

  searchMovie = () => {
    alert('검색')
    window.location.href=`/search?word=${this.state.word}`
  }

  searchTextChange = (e) => {
    console.log(e.target.value)
    this.setState({
        word: e.target.value
    })
  }
  
  render() {
    return (
      <div id='search-tab'>
        <input type='text' placeholder='검색어 입력' onChange={this.searchTextChange}/>
        <button onClick={this.searchMovie}>검색</button>
      </div>
    )
  }
}

export default SearchTab;
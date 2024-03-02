import {Component} from 'react';
import './App.css';
import BoardList from './components/BoardList.js';
import Pagination from './components/Pagination.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      boardList:[
        {no:10, title:'제목-10', writer:'김철수', write_date:'2023-12-01', attach:'y', hits:0},
        {no:9, title:'제목-9', writer:'이민호', write_date:'2023-11-01', attach:'y', hits:0},
        {no:8, title:'제목-8', writer:'정채연', write_date:'2023-10-01', attach:'y', hits:0},
        {no:7, title:'제목-7', writer:'송중기', write_date:'2023-09-01', attach:'y', hits:0},
        {no:6, title:'제목-6', writer:'신동엽', write_date:'2023-08-01', attach:'y', hits:0},
        {no:5, title:'제목-5', writer:'김민희', write_date:'2023-07-01', attach:'y', hits:0},
        {no:4, title:'제목-4', writer:'김태희', write_date:'2023-06-01', attach:'y', hits:0},
        {no:3, title:'제목-3', writer:'정지훈', write_date:'2023-05-01', attach:'y', hits:0},
        {no:2, title:'제목-2', writer:'김사랑', write_date:'2023-04-01', attach:'y', hits:0},
        {no:1, title:'제목-1', writer:'박지성', write_date:'2023-03-01', attach:'y', hits:0}
      ],
      boardPerPage:3,
      currentPage:1
    }
  }

  setCurrentPage = (page) => {
    this.setState ({
      currentPage:page
    })
  }

  getCurrentList = (boardList) => {
    // 배열.slice(시작 인덱스, 끝 인덱스)
    // 배열.slice(0, 3) - 0, 1, 2 추출해서 반환 - 1페이지
    // 배열.slice(3, 6) - 3, 4, 5 추출해서 반환 - 2페이지
    // 배열.slice(6, 9) - 6, 7, 8 추출해서 반환 - 3페이지
    // 배열.slice(9, 12) - 9, 10, 11 추출해서 반환 - 4페이지
    const {boardPerPage, currentPage} = this.state
    const startIndex = (currentPage-1) * boardPerPage;
    const endIndex = startIndex + boardPerPage;
    const slicedList = boardList.slice(startIndex, endIndex)

    return slicedList
  }

  render() {
    const {boardList, boardPerPage, currentPage} = this.state

    return(
      <div id='App'>
        <BoardList boardList={this.getCurrentList(boardList)}/>
        <Pagination total={boardList.length} boardPerPage={boardPerPage} currentPage={currentPage} setCurrentPage={this.setCurrentPage}/>
      </div>
    )
  }
}

export default App;

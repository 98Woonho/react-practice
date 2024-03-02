import '../css/BoardList.css';
import Board from './Board.js';
import {Component} from 'react';

class BoardList extends Component {
    constructor(props) {
        super(props)
        this.state={

        }
    }

    render() {
        const result = this.props.boardList.map(
            (data) => (<Board no={data.no} title={data.title} writer={data.writer} write_date={data.write_date} attach={data.attach} hits={data.hits} />)
        )
        return(
            <div id="board-list">
                <div id='board-header'>
                    <span>번호</span>
                    <span>제목</span>
                    <span>글쓴이</span>
                    <span>글쓴날짜</span>
                    <span>첨부</span>
                    <span>조회수</span>
                </div>
                {result}
            </div>
        )
    }
}

export default BoardList;
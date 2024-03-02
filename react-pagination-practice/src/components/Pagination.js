import '../css/Pagination.css';
import {Component} from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state={

        }
    }

    pageClick = (page) => {
        this.props.setCurrentPage(page)
    }

    prevPage = () => {
        const {currentPage} = this.props
        const prevPage = currentPage - 1
        if(prevPage < 1) {
            return
        }
        this.props.setCurrentPage(prevPage)
    }

    nextPage = () => {
        const {currentPage, total, boardPerPage} = this.props
        const nextPage = currentPage + 1
        const endPage = Math.ceil(total/boardPerPage)
        if(nextPage > endPage) {
            return
        }
        this.props.setCurrentPage(nextPage)
    }

    render() {
        const {total, boardPerPage, currentPage} = this.props
        const endPage = Math.ceil(total / boardPerPage)

        let pageNumbers=[]
        for(var i=1; i<=endPage; i++) {
            pageNumbers.push(i)
        }
        
        const pageMap = pageNumbers.map(
            // (page) => (<span id='page' onClick={this.pageClick(page)}>{page}</span>) 이렇게 하면 클릭을 안 해도 함수가 실행이 됨.
            (page) => (<span id='page' className={currentPage === page ? 'active' : ''} onClick={() => this.pageClick(page)}>{page}</span>) // 이렇게 함수를 정의해주면 클릭 했을 때 정상적으로 함수가 실행이 됨.
        )
        
        return(
            <div id="pagination">
                <div id='info'>
                    <span>게시글 총 개수 : {total}</span>
                    <span>페이지당 개수 : {boardPerPage}</span>
                </div>
                <div id='display-area'>
                    <div id='display-area-inner'>
                        <span id='page' onClick={this.prevPage}>&lt;</span>
                            {pageMap}
                        <span id='page' onClick={this.nextPage}>&gt;</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pagination;

import '../../css/board/BoardRouter.css';
import {Routes, Route} from 'react-router-dom';
import BoardMain from './BoardMain';
import BoardView from './BoardView';

function BoardRouter() {
    return(
        <div id='board-router'>
            <Routes>
                <Route path='/' element={<BoardMain/>}/>
                <Route path='/view' element={<BoardView/>}/>
            </Routes>
        </div>
    )
}

export default BoardRouter;
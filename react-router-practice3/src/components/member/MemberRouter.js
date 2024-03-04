import '../../css/member/MemberRouter.css';
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';

function MemberRouter() {
    return(
        <div id='member-router'>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </div>
    )
}

export default MemberRouter;
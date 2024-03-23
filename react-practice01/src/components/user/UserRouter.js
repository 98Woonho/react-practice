import {Routes, Route} from 'react-router-dom';
import '../../css/user/UserRouter.css';
import Login from './Login';
import Join from './Join';

function UserRouter() {
    return(
        <div id='user-router'>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/join' element={<Join/>}/>
            </Routes>
        </div>
    )
}

export default UserRouter;
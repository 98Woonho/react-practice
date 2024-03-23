import '../css/Home.css';
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const moveLogin = () => {
        navigate("/user/login");
    }

    const moveJoin = () => {
        navigate("/user/join");
    }

    return(
        <div id='home'>
            <button onClick={moveLogin}>로그인</button>
            <button onClick={moveJoin}>회원가입</button>
        </div>
    )
}

export default Home;
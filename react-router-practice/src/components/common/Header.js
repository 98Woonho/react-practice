import '../../css/common/Header.css';

function Header(){

    const moveHome=()=>{
        window.location.href='/'
    }

    const moveProfile=()=>{
        window.location.href='/profile'
    }

    return(
        <div id='header'>
            <button onClick={moveHome}>홈</button>
            <button onClick={moveProfile}>프로필</button>
            <a href='/'>홈</a>
            <a href='/profile'>프로필</a>
        </div>
    )
}

export default Header;
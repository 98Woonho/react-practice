import '../css/Contents.css';
import {useState} from 'react';

function Contents() {
    const [menu, setMenu] = useState(1)
    return (
        <div id="contents">
            <div id="cont1">
                <div id="tab">
                    <div id="tab-btn">
                        <button onClick={() => setMenu(1)}>공지사항</button>
                        <button onClick={() => setMenu(2)}>갤러리</button>
                    </div>
                    <div id="tab-contents">
                        {
                            menu === 1 ?
                            <div id="notice">
                            공지사항
                            </div>:''
                        }
                        {
                            menu === 2?
                            <div id="gallery">
                            갤러리
                            </div>:''
                        }
                    </div>
                </div>
            </div>
            <div id="cont2">
                
            </div>
            <div id="cont3">
                
            </div>
        </div>
    )
}

export default Contents;
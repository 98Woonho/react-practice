import {useState} from 'react';

// Counter1과 동일함.
function Counter2 () {
    const [num, setNum] = useState(0)

    return (
        <div id='counter2'>
                <h1>{num}</h1>
                <button onClick={() => setNum(num + 1)}>+</button>
                <button onClick={() => setNum(num - 1)}>-</button>
            </div>
    )
}

export default Counter2;
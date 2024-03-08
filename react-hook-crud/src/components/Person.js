import '../css/Person.css';
import {useState} from 'react';
function Person(props){
    const [edit,setEdit]=useState(false)
    const [age,setAge]=useState(props.age)

    const deletePersonInfo=()=>{
        alert('삭제(Person)')
        props.deletePersonInfo(props.id)
    }
    const updatePersonInfo=()=>{
        alert('수정(Person)')
        if(edit===true){
            props.updatePersonInfo(props.id,age)
        }
        setEdit(!edit)
    }
    const ageChange=(e)=>{
        setAge(e.target.value)
    }

    if(edit===false){
        return(
            <div id='person'>
                <div>이름:{props.name}</div>
                <div>나이:{props.age}</div>
                <div>키:{props.height}</div>
                <div>
                    <button onClick={deletePersonInfo}>삭제</button>
                    <button onClick={updatePersonInfo}>수정</button>
                </div>
            </div>
        )
    }else if(edit===true){
        return(
            <div id='person'>
                <div>이름:{props.name}</div>
                <div>나이:<input type='text' defaultValue={props.age} onChange={ageChange}/></div>
                <div>키:{props.height}</div>
                <div>
                    <button onClick={deletePersonInfo}>삭제</button>
                    <button onClick={updatePersonInfo}>수정</button>
                </div>
            </div>
        )
    }
    
}

export default Person;
import '../css/PersonInput.css';
import {useState} from 'react';

function PersonInput(props){
    const [id,setId]=useState('')
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [height,setHeight]=useState('')
    
    const idChange=(e)=>{
        setId(e.target.value)
    }
    const nameChange=(e)=>{
        setName(e.target.value)    
    }
    const ageChange=(e)=>{
        setAge(e.target.value)    
    }
    const heightChange=(e)=>{
        setHeight(e.target.value)    
    }
    const addPersonInfo=()=>{
        alert('추가(PersonInput)')
        const t_id = parseInt(id)
        const t_age = parseInt(age)
        const t_height = parseFloat(height)
        const personObj={id:t_id,name:name,age:t_age,height:t_height}
        props.addPersonInfo(personObj)
    }
    return(
        <div id='person-input'>
            <input type='text' onChange={idChange}/>
            <input type='text' onChange={nameChange}/>
            <input type='text' onChange={ageChange}/>
            <input type='text' onChange={heightChange}/>
            <button onClick={addPersonInfo}>추가</button>
        </div>
    )
}

export default PersonInput;
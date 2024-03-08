import {useState} from 'react';
import './App.css';
import PersonInput from './components/PersonInput'
import Person from './components/Person';
function App() {
  const [personList,setPersonList]=useState(
    [{id:1,name:'이민호',age:20,height:176.6},
    {id:2,name:'정채연',age:21,height:162.4},
    {id:3,name:'송중기',age:22,height:178.2}])

  const addPersonInfo=(personObj)=>{
      alert('추가(App)')
      console.log(personObj)
      const concatedList=personList.concat(personObj)
      setPersonList(concatedList)
  }  
  const deletePersonInfo=(id)=>{
    alert('삭제(App)')
    alert(id)//2
    const filteredList = personList.filter(
      (data)=>(data.id !== id)
    )
    setPersonList(filteredList)
  }
  const updatePersonInfo=(id,age)=>{
    alert('수정(App)')
    alert(id)//2
    alert(age)//33
    //map, 삼항, 삼점
    const updatedList = personList.map(
      (data)=>(data.id===id? ({...data,age:age}):data)
    )
    setPersonList(updatedList)
  }

  const personMap=personList.map(
    (data)=>(<Person id={data.id} name={data.name} 
            age={data.age} height={data.height}
            deletePersonInfo={deletePersonInfo}
            updatePersonInfo={updatePersonInfo}/>
  ))
  
  return (
    <div className="App">
        <PersonInput addPersonInfo={addPersonInfo}/>
        {personMap}
    </div>
  );
}
export default App;

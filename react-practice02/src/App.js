import './App.css'
import axios from 'axios';
function App() {
  const selectAll = () => {
    axios.get('/person')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const selectWhere = () => {
    axios.get('/person/이운호')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const insertInfo = () => {
    const personObj = {num:4, name:'김철수', age:30, height:177.8}
    axios.post('/person', personObj) // body로 object 전송
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
  }

  const updateInfo = () => {
    const personObj = {name:'김철수', age:35}
    axios.put('/person', personObj)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  const deleteInfo = () => {
    axios.delete('/person/김철수')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
  }

  const search = () => {
    axios.get('/search?word=운호')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div id='wrap'>
      <h1>React-Express-MySQL</h1>
      <button class='button' onClick={selectAll}>모두조회</button>
      <button class='button' onClick={selectWhere}>선택조회</button>
      <button class='button' onClick={insertInfo}>추가</button>
      <button class='button' onClick={updateInfo}>수정</button>
      <button class='button' onClick={deleteInfo}>삭제</button>
      <button class='button' onClick={search}>검색</button>
    </div>
  )
}

export default App;
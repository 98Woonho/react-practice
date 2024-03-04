import {useState} from 'react';
import Person from './components/Person'
import './App.css';

function App() {
const [personList, setPersonList] = useState([
  {id:1, name:'이민호', age:20, height:176.6},
  {id:2, name:'정채연', age:21, height:162.4},
  {id:3, name:'송중기', age:22, height:178.2}
])

const personMap = personList.map(
  (data) => (<Person id={data.id} name={data.name} age={data.age} height={data.height}/>)
)

  return (
    <div className="App">
      {personMap}
    </div>
  );
}

export default App;
